require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const { connect } = require('./db');

app.use(express.json());
app.use('/', require('./routes'));

connect();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});