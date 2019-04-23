FROM node:11-alpine
RUN mkdir -p /src/design-system
WORKDIR /src/design-system
COPY . ./
RUN pwd
RUN chown -R 1000 .
USER 1000
RUN npm install && npm install gulp-imagemin --save-dev
EXPOSE 3000
CMD npm start