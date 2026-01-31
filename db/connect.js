const { MongoClient } = require('mongodb');


let db = null;

async function initDb(callback) {
  if (db) {
    console.warn('Database is already initialized!');
    return callback(null, db);
  }

  const client = new MongoClient(process.env.MONGO_URI);

  try {
    await client.connect();
    db = client.db(); // Uses DB from connection string
    console.log('MongoDB connected');
    callback(null, db);
  } catch (err) {
    console.error('MongoDB connection error:', err);
    callback(err);
  }
}

function getDb() {
  if (!db) {
    throw new Error('Database not initialized');
  }
  return db;
}

module.exports = { initDb, getDb };
