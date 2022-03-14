FROM node:alpine

WORKDIR /usr/src/app
ENV NODE_OPTIONS=--openssl-legacy-provider
COPY . .
RUN yarn && yarn run prepare

EXPOSE 4000
CMD [ "node", "app.js" ]
