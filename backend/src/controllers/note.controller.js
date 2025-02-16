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

const getNoteByFilter = async (req, res) => {
  try {
    const {id, author, title, notes} = req.query;
    const conditions = [];

    if(id) conditions.push({_id: id});
    if(author) conditions.push({author: {$regex: new RegExp(author, 'i')}});
    if(title) conditions.push({title: {$regex: new RegExp(title, 'i')}});
    if(notes) conditions.push({notes: {$regex: new RegExp(notes, 'i')}});

    const query = conditions.length > 0 ? {$or: conditions} : {};
    const note = await Note.find(query);

    if (note.length === 0) return res.statis(404).send(Enum.notFound.message());

    return res.status(200).send(note);
  } catch (err) {
    return res.status(500).send(Enum.internal.message());
  }
}

// updateNote
const updateNote = async (req, res) => {
  try {
    const id = req.params.id;
    const {title, notes} = req.body;

    if (!id) return res.status(404).send(Enum.noIdPassed.message());
    
    if (!title || !notes) return res.status(400).send(Enum.noValuesUpdate.message());

    const note = await Note.findByIdAndUpdate(req.params.id, {
      title: title,
      notes: notes
    }, {
      new: true
    })

    return res.status(200).send(Enum.updateSuccess.message());
  } catch (err) {
    return res.status(500).send(Enum.internal.message());
  }
}

// deleteNote

module.exports = {
  createNotes,
  getNotes,
  getNoteByFilter,
  updateNote
}