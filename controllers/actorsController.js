const { Router } = require('express');
const { getAllActors } = require('../queries/actorsQueries');

const actorsController = Router();

actorsController.get('/', async (request, response) => {
  try {
    const actors = await getAllActors();
    response.status(200).json({ data: actors });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

module.exports = actorsController;
