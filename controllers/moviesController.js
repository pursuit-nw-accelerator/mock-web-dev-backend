const { Router } = require('express');
const { getAllMovies } = require('../queries/moviesQueries');

const moviesController = Router();

moviesController.get('/', async (request, response) => {
  try {
    const movies = await getAllMovies();
    response.status(200).json({ data: movies });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

module.exports = moviesController;
