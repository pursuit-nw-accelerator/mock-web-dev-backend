const express = require('express');
const cors = require('cors');
const actorsController = require('./controllers/actorsController');
const moviesController = require('./controllers/moviesController');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Controllers
app.use('/actors', actorsController);
app.use('/movies', moviesController);

// Health check
app.get('/', (request, response) => {
  response.status(200).json({ data: 'Server is running!' });
});

module.exports = app;
