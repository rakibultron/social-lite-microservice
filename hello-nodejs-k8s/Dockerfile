FROM node:alpine


WORKDIR /usr/hello-nodejs


COPY ./package.json ./

RUN npm install
COPY ./ ./


CMD [ "npm","run","start" ]

