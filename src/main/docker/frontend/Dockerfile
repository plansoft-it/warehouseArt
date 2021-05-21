FROM node:14.17.0

EXPOSE 3000

RUN mkdir webapp

COPY src/main/webapp webapp

WORKDIR /webapp

RUN npm install

RUN npm build

RUN npm install -g serve

ENTRYPOINT exec serve -S build -l 3000

