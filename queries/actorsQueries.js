const db = require('../db');

const getAllActors = async () => {
  const actors = await db.any('SELECT * FROM actors;');
  return actors;
};

const getActorById = async (id) => {
  const actor = await db.oneOrNone('SELECT * FROM actors WHERE id = $1', id);
  return actor;
};

module.exports = {
  getAllActors,
  getActorById,
};
