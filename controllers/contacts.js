

async function getAllContacts(req, res, next) {
  try {
    const contacts = await Contact.find().lean();
    return res.json(contacts);
  } catch (err) {
    return next(err);
  }
}

module.exports = { getAllContacts };
