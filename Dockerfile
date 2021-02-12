FROM node:15.8.0-alpine3.12

WORKDIR /bot

COPY . .

RUN npm install

CMD node index.js
