// user.model.js
const mongoose = require('./db');

const userSchema = new mongoose.Schema({
  name: String,
  npm: String,
  phoneNumber: String,
  email: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
