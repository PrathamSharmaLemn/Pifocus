FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

ARG MONGO_URL
ARG NEXT_PUBLIC_PHONENO
ENV MONGO_URL=$MONGO_URL
ENV NEXT_PUBLIC_PHONENO=$NEXT_PUBLIC_PHONENO

CMD ["npm", "run", "start"]
