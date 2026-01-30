const router = require('express').Router();
const controllers = require('../controllers');

router.get('/', controllers.getAllContacts);

module.exports = router;
