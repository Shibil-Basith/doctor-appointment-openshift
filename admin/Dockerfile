# admin/Dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

# 🔑 OpenShift-friendly permissions
RUN mkdir -p /var/cache/nginx/client_temp \
    && chmod -R 777 /var/cache/nginx

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
