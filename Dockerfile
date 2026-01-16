FROM node:18-alpine

WORKDIR /app

COPY package*.json ./


RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

# This Dockerfile sets up a Node.js application using the official Node.js 18 Alpine image.
# It copies the application files, installs dependencies, and starts the application on port 3000.
