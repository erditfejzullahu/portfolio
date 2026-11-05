import { isIP } from "node:net";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import sanitizeHtml from "sanitize-html";
import { contactFormSchema } from "@/lib/validations";

const MAX_BODY_BYTES = 12 * 1024;
const SENDER_EMAIL = "murrizisolutions@gmail.com";
const redisUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

const rateLimiter =
  process.env.NODE_ENV === "production" &&
  redisUrl &&
  redisToken
    ? new Ratelimit({
        redis: new Redis({ url: redisUrl, token: redisToken }),
        limiter: Ratelimit.slidingWindow(5, "10 m"),
        analytics: false,
        prefix: "portfolio:contact",
      })
    : null;

class RequestBodyError extends Error {
  constructor(
    message: string,
    readonly status: 400 | 413,
  ) {
    super(message);
  }
}

async function readJsonBody(request: NextRequest): Promise<unknown> {
  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    throw new RequestBodyError("Request body is too large.", 413);
  }

  const reader = request.body?.getReader();
  if (!reader) {
    throw new RequestBodyError("A JSON request body is required.", 400);
  }

  const chunks: Uint8Array[] = [];
  let totalBytes = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      totalBytes += value.byteLength;
      if (totalBytes > MAX_BODY_BYTES) {
        await reader.cancel();
        throw new RequestBodyError("Request body is too large.", 413);
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  const body = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }

  try {
    return JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(body));
  } catch {
    throw new RequestBodyError("Request body must contain valid JSON.", 400);
  }
}

function sanitizeText(value: string): string {
  return sanitizeHtml(value, {
    allowedTags: [],
    allowedAttributes: {},
  });
}

export async function POST(request: NextRequest) {
  if (request.headers.get("content-type")?.split(";")[0].trim() !== "application/json") {
    return NextResponse.json({ message: "Content-Type must be application/json." }, { status: 415 });
  }

  if (process.env.NODE_ENV === "production" && !rateLimiter) {
    return NextResponse.json({ message: "Contact form is temporarily unavailable." }, { status: 503 });
  }

  if (rateLimiter) {
    const forwardedIp =
      request.headers.get("x-real-ip")?.trim() ||
      request.headers.get("x-forwarded-for")?.split(",")[0].trim();
    const clientIp = forwardedIp && isIP(forwardedIp) ? forwardedIp : "unknown";

    try {
      const result = await rateLimiter.limit(clientIp);
      if (result.reason === "timeout") {
        return NextResponse.json({ message: "Contact form is temporarily unavailable." }, { status: 503 });
      }
      if (!result.success) {
        return NextResponse.json(
          { message: "Too many submissions. Please try again later." },
          {
            status: 429,
            headers: { "Retry-After": String(Math.max(1, Math.ceil((result.reset - Date.now()) / 1000))) },
          },
        );
      }
    } catch (error) {
      console.error("Contact form rate limit check failed", error);
      return NextResponse.json({ message: "Contact form is temporarily unavailable." }, { status: 503 });
    }
  }

  let payload: unknown;
  try {
    payload = await readJsonBody(request);
  } catch (error) {
    if (error instanceof RequestBodyError) {
      return NextResponse.json({ message: error.message }, { status: error.status });
    }
    console.error("Failed to read contact form request", error);
    return NextResponse.json({ message: "Unable to read request body." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Please correct the highlighted fields.", errors: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  if (!process.env.BREVO_SECRET_KEY) {
    console.error("BREVO_SECRET_KEY is not configured");
    return NextResponse.json({ message: "Contact form is temporarily unavailable." }, { status: 503 });
  }

  const { fullName, email, subject, phoneNumber, message, contactReason } = parsed.data;
  const safeFullName = sanitizeText(fullName);
  const safePhoneNumber = sanitizeText(phoneNumber);
  const safeContactReason = sanitizeText(contactReason);
  const htmlMessage = sanitizeText(message).replace(/\r\n?/g, "\n").replace(/\n/g, "<br />");

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: SENDER_EMAIL,
        pass: process.env.BREVO_SECRET_KEY,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio contact" <${SENDER_EMAIL}>`,
      replyTo: email,
      to: "erditfejzullahu45@gmail.com",
      subject: `Portfolio contact: ${subject}`,
      text: [
        `Sender: ${fullName}`,
        `Contact reason: ${contactReason}`,
        `Phone number: ${phoneNumber}`,
        "",
        message,
      ].join("\n"),
      html: `<h1>Sender: ${safeFullName}</h1>
        <h2>Contact reason: ${safeContactReason}</h2>
        <h2>Phone number: ${safePhoneNumber}</h2>
        <p><strong>Message:</strong><br />${htmlMessage}</p>`,
    });

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Contact email delivery failed", error);
    return NextResponse.json({ message: "Error in sending email." }, { status: 500 });
  }
}
