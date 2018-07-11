FROM node:10 AS dependencies
WORKDIR /opt/app/
COPY package.json yarn.lock ./
RUN yarn --silent

FROM dependencies AS files
COPY . ./

FROM files AS codestyle
RUN yarn run lint

FROM files AS tests
RUN CI=true yarn run test

FROM files AS build
RUN yarn run build

FROM nginx:1.13.9-alpine
COPY --from=build /opt/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]