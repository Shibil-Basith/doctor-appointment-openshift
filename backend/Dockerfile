# backend/Dockerfile
FROM node:18-alpine AS deps
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy source
COPY . .

# Runtime image
FROM node:18-alpine
WORKDIR /app

COPY --from=deps /app /app

ENV NODE_ENV=production
ENV PORT=4000

EXPOSE 4000

# Adjust server file if needed (server.js / index.js)
CMD ["node", "server.js"]
