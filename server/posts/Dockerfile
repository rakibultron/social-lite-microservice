FROM node:alpine


WORKDIR /usr/social-lite/posts


COPY ./package.json ./

RUN npm install
COPY ./ ./


CMD [ "npm","run","start" ]

