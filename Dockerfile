FROM node:20-alpine

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install

RUN npm install -g serve

COPY . .

RUN yarn build

# expose port 3000. This is default port for Vite
EXPOSE 5173

CMD ["serve", "-s", "dist"]

# CMD ["yarn", "dev"]
