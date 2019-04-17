FROM node:11-alpine
RUN adduser -D -u 1001 nodeUser
RUN mkdir -p /src/design-system
WORKDIR /src/design-system
COPY . ./
RUN pwd
RUN chown -R nodeUser .
USER nodeUser
RUN npm install && npm install gulp-imagemin --save-dev
EXPOSE 3000
CMD npm start