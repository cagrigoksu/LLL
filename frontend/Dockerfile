FROM node:18-alpine

WORKDIR /app

RUN npm install -g @angular/cli

COPY lll_angular/package*.json ./lll_angular/
WORKDIR /app/lll_angular
RUN npm install

COPY lll_angular/ ./ 

EXPOSE 4200

CMD ["npm", "start"]
