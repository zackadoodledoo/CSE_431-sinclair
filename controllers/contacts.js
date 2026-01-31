const { getDb } = require('../db');

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

module.exports = { getAllContacts };
