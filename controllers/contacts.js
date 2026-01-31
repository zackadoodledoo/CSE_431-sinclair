const { getDb } = require('../db');
const { ObjectId } = require('mongodb');


// Get all contacts

async function getAllContacts(req, res) {
    try {
        const db = getDb();
        const contacts = await db.collection('contacts').find().toArray();
        res.json(contacts);
    } catch (err) {
        console.error('Error fetching contacts:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
// Get a single contact by ID
async function getContactById(req, res) {
    try {
        const db = getDb();
        const id = req.params.id; // Get ID from route parameter
        const contact = await db.collection('contacts').findOne({ _id: new ObjectId(id) });

        if (!contact) {
            return res.status(404).json({ error: 'Contact not found' });
        }

        res.json(contact);
    } catch (err) {
        console.error('Error fetching contact by ID:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = { getAllContacts, getContactById };