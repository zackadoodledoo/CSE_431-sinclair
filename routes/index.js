const routes = require('express').Router();

routes.use('/api/contacts', require('./contacts'));


module.exports = routes;