// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./user.model');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Endpoint to get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to add a new user
app.post('/api/users', async (req, res) => {
  const newUser = req.body;

  try {
    const user = new User(newUser);
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
