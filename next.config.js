const dotenv = require('dotenv').config()

module.exports = {
  publicRuntimeConfig: { // Will be available on both server and client
    baseUrl: process.env.BASE_URL,
  }
};
