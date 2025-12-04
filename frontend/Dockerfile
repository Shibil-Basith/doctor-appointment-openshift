# frontend/Dockerfile
FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Use unprivileged nginx (runs as non-root, listens on 8080)
FROM nginxinc/nginx-unprivileged:stable-alpine

# Copy built assets
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
