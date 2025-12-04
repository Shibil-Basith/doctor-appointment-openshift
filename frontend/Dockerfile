# frontend/Dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:stable-alpine

# Copy built static files
COPY --from=build /app/dist /usr/share/nginx/html

# 🔑 OpenShift-friendly: allow random UID to write to nginx dirs
RUN mkdir -p /var/cache/nginx/client_temp \
    && mkdir -p /var/cache/nginx/proxy_temp \
    && mkdir -p /var/cache/nginx/fastcgi_temp \
    && mkdir -p /var/cache/nginx/uwsgi_temp \
    && mkdir -p /var/cache/nginx/scgi_temp \
    && chmod -R 777 /var/cache/nginx

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
