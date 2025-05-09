require("dotenv").config();

module.exports = {
    mongo_url: process.env.URL,
    port: process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET
  };