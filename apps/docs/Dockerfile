FROM node:14-alpine

RUN apk add --no-cache ca-certificates \
 && apk upgrade --no-cache \
 && addgroup -S app \
 && adduser -S app -G app -u 31337 -h /app/ \
 && chown -R app:app /app/

USER app
WORKDIR /app
ENV NODE_ENV production
ENV MODE server

COPY package.json /app/
COPY dist/ /app/dist/

USER 31337
ENV LISTEN_HOST="0.0.0.0" \
    LISTEN_PORT="8080" \
    SSR_ONLY="false" \
    SESSIONS_SECRET="changeme" \
    AUTH_METHOD="none" \
    ENVIRONMENT="dev"
CMD ["node", "."]
