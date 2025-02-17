const express = require('express');
const router = express.Router();
const {createNotes, getNotes, getNoteByFilter, updateNote} = require('../controllers/note.controller.js');

router.post('/create', createNotes);
router.get('/', getNotes);
router.get('/filter', getNoteByFilter);
router.get('/update/:id?', updateNote);

module.exports = router;