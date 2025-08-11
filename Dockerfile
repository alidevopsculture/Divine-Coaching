FROM nginx:latest
RUN rm -rf /var/www/html/*
COPY . /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]