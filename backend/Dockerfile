## Stage 1 (production base)

FROM node:18.16.0-alpine as base

ENV NODE_ENV=production

WORKDIR /app/backend

COPY package*.json ./

RUN npm install --only=production\
  && npm cache clean --force

## Stage 2 (development)

FROM base as dev

ENV NODE_ENV=development

WORKDIR /app/backend

RUN npm install --only=development\
  && npm cache clean --force

CMD [ "npm", "run", "dev" ]
