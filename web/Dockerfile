FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install styled-components
RUN npm install react-icons

COPY . .

CMD ["npm", "start"]