FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/
COPY . .

ARG MONGO_URL
ARG NEXT_PUBLIC_PHONENO

RUN npm ci

RUN npm run build

EXPOSE 3000

RUN npm run start
