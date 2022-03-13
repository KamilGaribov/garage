FROM node:alpine
RUN mkdir -p /usr/src
WORKDIR /usr/src
COPY . /usr/src
RUN npm install -g --save npm@latest
RUN npm i -g react-scripts
EXPOSE 3001