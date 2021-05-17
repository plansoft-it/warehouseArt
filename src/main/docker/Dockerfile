FROM node:14.17.0

EXPOSE 3000

RUN mkdir webapp

COPY src/main/webapp webapp

WORKDIR webapp

RUN npm install

ENTRYPOINT exec npm start
