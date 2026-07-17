# Astra Tech Security & IT Solutions

A Next.js website for Astra Tech Security & IT Solutions, featuring an AI chat assistant, contact form, and company information.

## Tech Stack

- **Framework:** Next.js 16 (React 19)
- **Styling:** Tailwind CSS v4 with shadcn/ui components
- **Database:** SQLite via Prisma ORM
- **Language:** TypeScript
- **Runtime:** Bun (production) / Node.js (development)
- **Containerization:** Docker + Docker Compose

## Prerequisites

- [Node.js](https://nodejs.org/) v18+ or [Bun](https://bun.sh/)
- [Docker](https://www.docker.com/) (optional, for containerized deployment)

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment

```bash
cp .env.example .env
```

### 3. Initialize the database

```bash
npx prisma generate
npx prisma db push
```

### 4. Start development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

### Standalone (Node.js/Bun)

```bash
npm run build
npm run start
```

### Docker

```bash
docker compose up -d --build
```

The app will be available at `http://localhost:3000`.

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | SQLite connection string | `file:./dev.db` |

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server on port 3000 |
| `npm run build` | Build for production |
| `npm run start` | Start production server (Bun) |
| `npm run lint` | Run ESLint |
| `npm run db:push` | Push Prisma schema to database |
| `npm run db:generate` | Generate Prisma client |
| `npm run db:migrate` | Run Prisma migrations |
| `npm run db:reset` | Reset database |

## Project Structure

```
├── src/
│   ├── app/              # Next.js App Router (pages, API routes, error boundaries)
│   ├── components/
│   │   ├── site/         # Custom site components (hero, services, contact, etc.)
│   │   └── ui/           # shadcn/ui components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utilities, DB client, site data
│   └── middleware.ts     # Security headers, CSP
├── prisma/               # Prisma schema
├── public/               # Static assets (favicon, logo, robots.txt)
├── Dockerfile            # Multi-stage Docker build
├── docker-compose.yml    # Docker Compose config
└── Caddyfile.txt         # Caddy reverse proxy config
```

## API Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api` | Health check |
| `POST` | `/api/contact` | Submit a contact inquiry |
| `GET` | `/api/contact` | List recent inquiries |
| `POST` | `/api/chat` | Chat with AI assistant |

## Security

- Security headers via middleware (HSTS, X-Frame-Options, CSP, etc.)
- Content Security Policy enabled in production
- Zod validation on all API inputs
- Prisma parameterized queries (SQL injection protection)

## Deployment

### Vercel

Push to GitHub and import in Vercel. The project uses `output: "standalone"` in `next.config.ts`.

### Docker (any VPS/cloud)

```bash
docker compose up -d --build
```

### With Caddy reverse proxy

The included `Caddyfile.txt` configures Caddy on port 81 to proxy to the Next.js app on port 3000.
