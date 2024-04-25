FROM node:alpine


WORKDIR /usr/social-lite/comments


COPY ./package.json ./

RUN npm install
COPY ./ ./


CMD [ "npm","run","start" ]

