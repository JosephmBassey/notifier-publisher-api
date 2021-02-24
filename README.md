# Notification API Publisher

A publisher server that publish message/data to a  topic and all subscribers to that topic receives the message/data.

## Technologies Used

- [NodeJS](https://nodejs.org/en/download/) - A cross-platform JavaScript runtime
- [ExpressJS](https://expressjs.com/) - NodeJS application framework
- [MongoDB](https://docs.mongodb.com/manual/installation/) - A relational database management system
- [Mongoose ORM](https://sequelize.org/) - Elegant MongoDB object modeling for Node.js

## Installing/Running locally

- Clone or fork repo

  ```bash
    - git clone https://github.com/josephmbassey/notifier-publisher-api.git
    - cd notifier-publisher-api
  ```
- Create/configure `.env` environment with your credentials. A sample `.env.example` file has been provided. Make a duplicate of `.env.example` and rename to `.env`, then configure your credentials (ensure to provide the correct details). After configuring your database:

  ```
      - npm install
  ```
- Run `npm run dev` to start the server and watch for changes
