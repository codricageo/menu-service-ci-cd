FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# If you have a build step, this will run it (otherwise it will fail)
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
