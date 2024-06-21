# Base image
FROM registry.access.redhat.com/ubi8/ubi:latest as base

RUN curl -fsSL https://rpm.nodesource.com/setup_20.x | bash - && \
    yum install -y nodejs && \
    yum clean all

FROM base as build-stage

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

RUN npm run build

FROM base as production-stage

RUN yum install -y nginx && \
    yum clean all && \
    mkdir -p /usr/share/nginx/html /var/log/nginx /var/cache/nginx /var/run/nginx && \
    chmod -R 777 /var/log/nginx /var/cache/nginx /var/run/nginx

WORKDIR /usr/share/nginx/html

COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

RUN chown -R nginx:nginx /usr/share/nginx/html /var/log/nginx /var/cache/nginx /var/run/nginx

USER nginx

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
