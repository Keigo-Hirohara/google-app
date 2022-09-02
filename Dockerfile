FROM node:18-alpine
RUN mkdir -p /google-app
COPY . /google-app
WORKDIR /google-app
RUN npm install && npm run build
ENV HOST 0.0.0.0
EXPOSE 3000
CMD ["npm", "run", "start"]