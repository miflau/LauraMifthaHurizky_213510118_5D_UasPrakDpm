// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getAllUsers, addUser } = require('./users');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Endpoint to get all users
app.get('/api/users', (req, res) => {
  const users = getAllUsers();
  res.json(users);
});

// Endpoint to add a new user
app.post('/api/users', (req, res) => {
  const newUser = req.body;
  const addedUser = addUser(newUser);
  res.json(addedUser);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
