const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const notesRouter = require('./src/routers/note.router.js')

app.use(express.json());

app.use('/api/notes', notesRouter);

app.listen(port, () => {
  console.log(`Connected at port ${port}`);
  mongoose.connect('mongodb://localhost:27017')
    .then(() => console.log('DB connected'))
    .catch(() => console.error('DB connection failed'));
})