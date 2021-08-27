FROM cypress/included:8.3.1

WORKDIR /

COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json
COPY ./package.json ./package.json

RUN npm install
RUN npm run test:chrome