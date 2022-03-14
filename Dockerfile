FROM nginx:stable-alpine

LABEL maintainer="Jia Jia <angersax@sina.com>"

COPY dist /usr/share/nginx/html
COPY nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
