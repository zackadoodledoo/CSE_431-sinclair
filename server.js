
const express = require('express');
const app = express();
const mongodb = require('./db/connect');
const PORT = process.env.PORT || 3000;

require('dotenv').config();

// Import database connection
const { initDb } = require('./db');   // CommonJS style
const routes = require('./routes'); 

// Middleware
app.use(express.json());
app.use('/', routes);


// Connect to MongoDB before starting the server
initDb((err) => {
  if (err) {
    console.log('MongoDB connection error:', err);
  } else {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
      console.log('Connected to MongoDB');
    });
  }
});

