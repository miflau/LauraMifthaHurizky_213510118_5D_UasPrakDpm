// db.js
const mongoose = require('mongoose');

const dbUri = 'mongodb+srv://lau:12345@cluster1.ecvvh0u.mongodb.net/?retryWrites=true&w=majority';
// Gantilah <username>, <password>, dan <database> sesuai dengan informasi dari MongoDB Atlas

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

module.exports = mongoose;
