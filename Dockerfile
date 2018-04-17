FROM node:9

WORKDIR /usr/src/app/

COPY . .
RUN cd ./client && npm install --silent
RUN cd ./client && npm run build
RUN npm install --silent

EXPOSE 3000
CMD npm run start