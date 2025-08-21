import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGOURI = process.env.MONGOURI;

mongoose.connect(MONGOURI)
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log("Connection failed!", err);
  });