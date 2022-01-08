# Install dependencies only when needed
FROM node:16.13.0-alpine3.12 AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

# Rebuild the source code only when needed
FROM node:16.13.0-alpine3.12 AS builder
ENV NODE_ENV production
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build && npm ci

# Production image, copy all the files and run next
FROM node:16.13.0-alpine3.12 AS runner
WORKDIR /app

RUN addgroup -g 1001 -S nodejs
RUN adduser -S remixrun -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder /app/build ./build
COPY --from=builder /app/remix.env.d.ts ./remix.env.d.ts
COPY --from=builder /app/remix.config.js ./remix.config.js
# COPY --from=builder --chown=remixrun:nodejs /app/.cache ./.cache
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER remixrun

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]