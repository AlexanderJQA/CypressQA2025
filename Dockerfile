FROM cypress/browsers:node-18.16.0-chrome-113.0.5672.92-1-ff-113.0-edge-113.0.1774.35-1

WORKDIR /app
COPY . .
RUN npm install
CMD ["npx", "cypress", "run"]

