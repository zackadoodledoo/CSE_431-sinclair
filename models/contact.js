const { Schema, model } = require('mongoose');

const contactSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String },
  favoriteColor: { type: String },
  birthday: { type: Date }
}, { timestamps: true });

module.exports = model('Contact', contactSchema);
