require('dotenv').config();
const pgp = require('pg-promise')();

const connectionString = process.env['DB_URL'];
if (!connectionString) {
  throw new Error('No connection string; did you set process.env.DB_URL?');
}
const cn = {
  connectionString,
  allowExitOnIdle: true,
  max: 30,
};

const db = pgp(cn);

module.exports = db;
