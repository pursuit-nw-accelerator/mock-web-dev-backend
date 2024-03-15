const db = require('../db');

const getAllMovies = async () => {
  const movies = await db.any('SELECT * FROM movies;');
  return movies;
};

const getMovieById = async (id) => {
  const movie = await db.oneOrNone('SELECT * FROM movies WHERE id = $1', id);
  return movie;
};

module.exports = {
  getAllMovies,
  getMovieById,
};
