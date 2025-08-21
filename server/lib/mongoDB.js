const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const MONGOURI = process.env.MONGOURI;

mongoose.connect(MONGOURI)
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log("Connection failed!", err);
  });