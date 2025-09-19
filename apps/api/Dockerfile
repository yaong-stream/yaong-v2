FROM node:22-alpine@sha256:10962e8568729b0cfd506170c5a2d1918a2c10ac08c0e6900180b4bac061adc9 AS node

FROM node AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@10.7.1 --activate

FROM base AS deps

WORKDIR /usr/src/app
COPY ./package.json ./pnpm-*.yaml ./
COPY ./apps/api/package.json ./apps/api/package.json
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

FROM deps AS build
COPY ./apps/api ./apps/api
RUN pnpm run -r build
RUN pnpm deploy --filter=api --prod /app

FROM node AS runner

LABEL maintainer="narumir@narumir.io"

WORKDIR /app

EXPOSE 4000

ENV TZ=UTC \
  PORT=4000 \
  HOSTNAME=0.0.0.0 \
  NODE_ENV=production

RUN addgroup -S nodejs -g 10001 && \
  adduser -S nestjs -u 10001 -G nodejs -h /app && \
  chown nestjs:nodejs /app

USER nestjs

COPY --from=build --chown=nestjs:nodejs /app/dist ./dist
COPY --from=build --chown=nestjs:nodejs /app/node_modules ./node_modules

CMD [ "node", "dist/main.js" ]
