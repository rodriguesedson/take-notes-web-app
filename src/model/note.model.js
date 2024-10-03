const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  author: {
    type: String,
    required: [true, 'author is required']
  },
  title: {
    type: String,
    required: [true, 'title is required']
  },
  notes: {
    type: String,
    required: [true, 'notes is required']
  }
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;