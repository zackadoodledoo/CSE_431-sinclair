const { MongoClient } = require('mongodb');
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// Render injects variables directly into process.env
const dbUrl = process.env.MONGODB_URI;

let db;

const initDb = (callback) => {
  if (db) {
    console.log('Db is already initialized!');
    return callback(null, db);
  }
  MongoClient.connect(dbUrl)
    .then((client) => {
      db = client.db();
      callback(null, db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!db) {
    throw Error('Db not initialized');
  }
  return db;
};

module.exports = {
  initDb,
  getDb,
};