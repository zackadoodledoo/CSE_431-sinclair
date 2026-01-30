const router = require('express').Router();
const contacts = require('../controllers/contacts');

router.get('/', contacts.getAllContacts);

module.exports = router;
