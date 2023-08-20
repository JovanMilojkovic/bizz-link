FROM node:18.14.0

COPY package-lock.json .
COPY package.json .

RUN npm install

COPY . .

RUN npm run build


CMD ["npm", "run", "dev"]
