# AI-IA Website (Frontend)

Info for DevOps Engineer

Overview
- Next.js 16 (App Router) production build, containerized with Docker.
- Dockerfile at repo root, Docker Compose in docker-compose.yml.
- Host Nginx typically proxies the public domain to this service.

Prerequisites
- Docker and Docker Compose installed
- Optional: .env files under env/ (use .env.production for prod)

Environment
- Place environment files under env/ (recommended):
  - env/.env.production
  - env/.env.example (template)
- Ensure NEXT_PUBLIC_API_URL, NEXT_PUBLIC_SITE_URL, etc. are set for your environment.

Build image
```bash
# from repo root
docker build -t aiia-website:latest .
```

Run with Docker Compose (production)
```bash
# from repo root
# docker-compose.yml maps host 3002 -> container 3000 by default
# adjust the port if needed for your host

# bring up
docker compose up -d

# view logs
docker compose logs -f

# health check (direct)
curl -i http://127.0.0.1:3002/
```

Nginx (host) example
- Upstream to frontend container (adjust port if changed):
```
upstream aiia_frontend {
    server 127.0.0.1:3002;
    keepalive 32;
}
server {
    listen 80;
    server_name your-domain.com;
    location / { proxy_pass http://aiia_frontend; }
}
```

Zero-downtime hint
- Stand up new port (e.g., 3002), point Nginx to it, validate, then retire old instance.

Troubleshooting
- If container won’t start due to port conflicts, adjust ports: in docker-compose.yml, set "HOST_PORT:3000" (e.g., "3002:3000").
- Ensure env variables are present at build time if you rely on them to bake-in values.

Local development
```bash
npm run dev
# open http://localhost:3000
```
