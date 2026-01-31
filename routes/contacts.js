const router = require('express').Router();
const contactsController = require('../controllers/contacts'); // import your controller

// GET /contacts
router.get('/', contactsController.getAllContacts);

module.exports = router;
