# ── Stage 1: Build React client ──────────────────────────────────────────────
FROM node:20-alpine AS client-build
WORKDIR /app/client

COPY client/package*.json ./
# Keep install failures visible in remote build logs. Auditing belongs in CI,
# not in the image build, where an advisory-service failure breaks deployment.
RUN npm ci --no-audit --no-fund

COPY client/ ./
RUN npm run build

# ── Stage 2: Production server ────────────────────────────────────────────────
FROM node:20-alpine AS production
WORKDIR /app

# Security: run as non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Install only server dependencies
COPY server/package*.json ./server/
RUN cd server && npm ci --omit=dev --no-audit --no-fund

COPY server/ ./server/

# Copy built client into server's static directory
COPY --from=client-build /app/client/dist ./client/dist

# Set ownership
RUN chown -R appuser:appgroup /app
USER appuser

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:3000/api/health || exit 1

CMD ["node", "server/index.js"]
