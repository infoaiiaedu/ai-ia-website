# Multi-stage Next.js Frontend Dockerfile
# Optimized for low-memory servers

# =====================================
# Stage 1: Base Node.js Image
# =====================================
FROM node:20-alpine AS base

# Set memory limits for Node.js
ENV NODE_OPTIONS="--max-old-space-size=512 --gc-interval=100"
ENV NODE_ENV=production

# Install essential system dependencies
RUN apk add --no-cache \
    libc6-compat \
    dumb-init \
    && rm -rf /var/cache/apk/*

# Create non-root user
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

WORKDIR /app

# =====================================
# Stage 2: Dependencies Installer
# =====================================
FROM base AS deps

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies with memory optimizations
RUN npm ci --only=production \
    --no-audit \
    --no-fund \
    --prefer-offline \
    --progress=false \
    --loglevel=error \
    && npm cache clean --force \
    && rm -rf ~/.npm

# =====================================
# Stage 3: Application Builder
# =====================================
FROM base AS builder

WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy source code
COPY . .

# Set build environment
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_OPTIONS="--max-old-space-size=768"

# Build the application with memory optimizations
RUN npm run build \
    && rm -rf node_modules \
    && npm ci --only=production --omit=dev --no-audit --no-fund \
    && npm cache clean --force

# =====================================
# Stage 4: Production Runner
# =====================================
FROM base AS runner

WORKDIR /app

# Set production environment
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_OPTIONS="--max-old-space-size=256"

# Copy built application with proper ownership
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Set runtime environment
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

# Start the application
CMD ["dumb-init", "node", "server.js"]