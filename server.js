const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

app.use(express.json());

app.get('/', async (req, res) => {
  res.status(200).send('Success');
})

app.listen(port, () => {
  console.log(`Connected at port ${port}`);
  mongoose.connect('mongodb://localhost:27017')
    .then(() => console.log('DB connected'))
    .catch(() => console.error('DB connection failed'));
})