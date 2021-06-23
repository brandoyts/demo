# step 1
FROM node:16-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# step 2
FROM nginx:alpine
COPY --from=build /app/build/ /var/www/html/demo
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80


