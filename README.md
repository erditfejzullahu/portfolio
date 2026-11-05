# Portfolio

A personal portfolio built with Next.js App Router, React, and Tailwind CSS.

## Requirements

- Node.js 20.9.0 or newer
- npm

## Development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form configuration

The email endpoint uses Brevo SMTP and a Redis-backed Upstash rate limit. Configure these variables in `.env.local` for local development and in the production environment:

```env
BREVO_SECRET_KEY=your-brevo-smtp-key
UPSTASH_REDIS_REST_URL=https://your-database.upstash.io
UPSTASH_REDIS_REST_TOKEN=your-upstash-token
```

The contact endpoint allows five submissions per IP address every ten minutes. In production, it fails closed if the Upstash credentials are missing or the rate-limit service is unavailable. The production reverse proxy must overwrite `x-real-ip` or `x-forwarded-for` with the visitor's actual IP address.

## Checks and production

```bash
npm run lint
npm run build
npm run start
```

The production server listens on port 3001.
