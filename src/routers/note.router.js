const express = require('express');
const router = express.Router();
const {getNotes} = require('../controllers/note.controller.js');

router.get('/', getNotes);

module.exports = router;