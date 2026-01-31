const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();

// Import routes and DB connection
const { initDb } = require('./db');   // Database
const routes = require('./routes');   // Only one declaration!

// Middleware
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Contacts API!');
});

// Use all routes
app.use('/', routes);

// Connect to MongoDB before starting the server
initDb((err) => {
  if (err) {
    console.error('MongoDB connection error:', err);
  } else {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
      console.log('Connected to MongoDB');
    });
  }
});
