const Note = require('../model/note.model.js');
const Enum = require('../enum/Enum.js');

const createNotes = async (req, res) => {
  try {
    const newNote = new Note(req.body)
    if (newNote.validateSync()) return res.status(400).send(Enum.missingInfo.message());
    await newNote.save();
    return res.status(201).send(Enum.created.message());
  } catch (err) {
    return res.status(500).send(Enum.internal.message());
  }
}

const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    return res.status(200).send(notes);
  } catch (err) {
    return res.status(500).send(Enum.internal.message());
  }
}

module.exports = {
  createNotes,
  getNotes
}