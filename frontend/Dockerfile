# frontend/Dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Use unprivileged nginx image (runs as non-root, listens on 8080)
FROM nginxinc/nginx-unprivileged:stable-alpine

# Copy built static files
COPY --from=build /app/dist /usr/share/nginx/html

# This image already listens on 8080 as non-root
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
