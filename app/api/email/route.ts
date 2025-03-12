import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
    try {
        const {fullName, email, subject, phoneNumber, message, contactReason} = await req.json()

        if(!fullName || !email || !subject || !phoneNumber || !message || !contactReason){
            return NextResponse.json({message: "All fields are required"}, {status: 400})
        }

        const transporter = nodemailer.createTransport({
            host: "smtp-relay.brevo.com",
            port: 587,
            secure: false,
            auth: {
                user: "murrizisolutions@gmail.com",
                pass: process.env.BREVO_SECRET_KEY
            }
        })

        const mailOptions = {
            from: `"${fullName}" <${email}>`,
            to: "erditfejzullahu45@gmail.com",
            subject: subject,
            html: `
            <h1 style="font-size:24px; font-weight:300">Sender: <span style="font-weight:700">${fullName}</span></h1><br />
            <h1 style="font-size:24px; font-weight:300">Contact Reason: <span style="font-weight:700">${contactReason}</span></h1><br /> <br />
            <h1 style="font-size:24px; font-weight:300">Phone number: <span style="font-weight:700">${phoneNumber}</span></h1><br /> <br />
            <p style="font-weight:300; font-size:16px">${message}</p>
            `
        }

        await transporter.sendMail(mailOptions);
        return NextResponse.json({message: "Email sent successfully!"}, {status: 200})
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: "Error in sending email"}, {status: 500})
    }
}