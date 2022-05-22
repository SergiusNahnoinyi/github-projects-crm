FROM node:17.4.0
WORKDIR /server
COPY package.json .
RUN npm install
COPY . .
CMD npm start