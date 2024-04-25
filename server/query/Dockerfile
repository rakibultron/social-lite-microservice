FROM node:alpine


WORKDIR /usr/social-lite/query


COPY ./package.json ./

RUN npm install
COPY ./ ./


CMD [ "npm","run","start" ]

