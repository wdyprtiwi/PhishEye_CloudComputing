FROM node:16.20.2

WORKDIR /app

COPY package*.json .
ENV PORT 5000
COPY . .
RUN npm install
EXPOSE 5000
CMD [ "npm", "start" ]
