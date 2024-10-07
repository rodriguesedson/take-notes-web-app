const express = require('express');
const router = express.Router();
const {createNotes, getNotes, getNoteByFilter} = require('../controllers/note.controller.js');

router.post('/create', createNotes);
router.get('/', getNotes);
router.get('/filter', getNoteByFilter);

module.exports = router;