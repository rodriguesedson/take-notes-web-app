const express = require('express');
const router = express.Router();
const {createNotes, getNotes} = require('../controllers/note.controller.js');

router.post('/create', createNotes);
router.get('/', getNotes);

module.exports = router;