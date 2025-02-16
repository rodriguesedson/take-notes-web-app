const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    required: true
  }
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;