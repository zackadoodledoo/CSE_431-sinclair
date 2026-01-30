const routes = require('express').Router();

routes.use('/api/contacts', require('./contacts'));

const usersController = require('../controllers');

routes.get('/api/users', usersController.getAllUsers);

routes.get('/', (req, res) => res.json({ message: 'API root. Use GET /api/users and GET /api/contacts' }));

module.exports = routes;