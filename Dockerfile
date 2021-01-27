# build
#FROM node:12 as npm
#COPY . /data
#WORKDIR /data
#RUN npm install -g cnpm && cnpm install && cnpm run build

# image
FROM nginx:alpine
COPY ./docs/.vuepress/public/images/mofang.png /usr/share/nginx/html/logo.png
COPY ./docs/.vuepress/dist /usr/share/nginx/html
