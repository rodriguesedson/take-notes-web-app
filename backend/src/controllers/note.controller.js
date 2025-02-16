const Note = require('../model/note.model.js');
const Enum = require('../enum/Enum.js');

const getNotes = async (req, res) => {
  const notes = await Note.find();
  return res.status(200).send(notes);
}

module.exports = {
  getNotes
}