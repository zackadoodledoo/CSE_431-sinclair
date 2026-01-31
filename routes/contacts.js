const router = require('express').Router();
const contactsController = require('../controllers/contacts'); // import your controller

// GET /contacts
router.get('/', async (req, res) => {
  try {
    await contactsController.getAllContacts(req, res);
  } catch (err) {
    console.error('Error in GET /contacts:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET /contacts → all contacts
router.get('/', contactsController.getAllContacts);

// GET /contacts/:id → single contact by ID
router.get('/:id', contactsController.getContactById);

module.exports = router;
