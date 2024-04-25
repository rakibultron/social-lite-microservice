FROM node:alpine


WORKDIR /usr/social-lite/event-bus


COPY ./package.json ./

RUN npm install
COPY ./ ./


CMD [ "npm","run","start" ]

