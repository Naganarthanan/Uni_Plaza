const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

dotenv.config();

// Import MongoDB connection
require('./lib/mongoDB.js');

const app = express();

const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Import routes
const studentRoutes = require('./routes/students/studentRoutes');
const clubEventRoutes = require('./routes/clubs/clubEventRoutes');
const clubProductRoutes = require('./routes/clubs/clubProductRoutes');
const clubOtherRoutes = require('./routes/clubs/clubOtherRoutes');
const privateEventRoutes = require('./routes/privates/privateEventRoutes');
const privateOtherRoutes = require('./routes/privates/privateOtherRoutes');

// Mount routes
app.use('/api/students', studentRoutes);
app.use('/api/clubs/events', clubEventRoutes);
app.use('/api/clubs/products', clubProductRoutes);
app.use('/api/clubs/others', clubOtherRoutes);
app.use('/api/privates/events', privateEventRoutes);
app.use('/api/privates/others', privateOtherRoutes);

app.get('/', (_, res) => {
  res.send('Welcome to Uni-Plaza API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});