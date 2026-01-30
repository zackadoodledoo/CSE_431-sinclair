require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/cse341_sinclair';

async function main() {
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  const contactSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String },
    favoriteColor: { type: String },
    birthday: { type: Date }
  });

  const Contact = mongoose.model('Contact', contactSchema, 'contacts');

  const docs = [
    { firstName: 'Alice', lastName: 'Johnson', email: 'alice.johnson@example.com', favoriteColor: 'blue', birthday: new Date('1995-04-12') },
    { firstName: 'Briana', lastName: 'Sinclair', email: 'briana.sinclair@example.com', favoriteColor: 'green', birthday: new Date('1998-07-22') },
    { firstName: 'Charlie', lastName: 'Brown', email: 'charlie.brown@example.com', favoriteColor: 'red', birthday: new Date('1990-11-03') }
  ];

  const inserted = await Contact.insertMany(docs, { ordered: false });
  console.log('Inserted contacts:', inserted.length);

  await mongoose.disconnect();
}

main().catch(err => {
  console.error('Seed error:', err);
  process.exit(1);
});
