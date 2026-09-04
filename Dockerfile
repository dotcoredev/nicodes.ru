# -------------------------
# Base
# -------------------------
FROM node:24-bookworm-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app

# -------------------------
# Builder
# -------------------------
FROM base AS builder
COPY . .
RUN pnpm install --frozen-lockfile

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

RUN pnpm build

# -------------------------
# Runner
# -------------------------
FROM node:24-bookworm-slim AS runner
ENV NODE_ENV=production
ENV HOSTNAME="0.0.0.0"
ENV PORT=3005
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app

RUN groupadd --system --gid 1001 nodejs \
    && useradd --system --uid 1001 --gid nodejs nextjs

# Next standalone server
COPY --from=builder --chown=nextjs:nodejs \
    /app/.next/standalone ./

# Next static
COPY --from=builder --chown=nextjs:nodejs \
    /app/.next/static ./.next/static

# Public
COPY --from=builder --chown=nextjs:nodejs \
    /app/public ./public

USER nextjs
EXPOSE 3006
CMD ["node", "server.js"]