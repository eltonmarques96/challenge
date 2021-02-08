FROM node:10

RUN mkdir -p /usr/src/app/

WORKDIR /usr/src/app/

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]

#WORKDIR /usr/src/app/app/orderrequestapp/

#CMD ["npm", "/app/orderrequestapp/start"]

EXPOSE 3000