import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

// Import MongoDB connection
import './lib/mongoDB.js';

const app = express();

const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (_, res) => {
  res.send('Welcome to Uni-Plaza API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});