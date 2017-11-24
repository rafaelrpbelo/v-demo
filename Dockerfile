FROM node:6.11

RUN apt-get update

RUN npm install -g vue-cli

WORKDIR /app
