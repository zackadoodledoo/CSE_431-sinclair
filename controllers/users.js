const User = require('../models/user');

async function getAllUsers(req, res, next) {
  try {
    const users = await User.find().lean();
    return res.json(users);
  } catch (err) {
    return next(err);
  }
}

module.exports = { getAllUsers };
