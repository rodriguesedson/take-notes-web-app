const mongoose = require('mongoose');

const pickSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  html: {
    type: String,
    required: true
  },
  css: {
    type: String,
    required: true
  },
  image_url: {
    type: String,
    required: true
  }
});

const Pick = mongoose.model("Pick", pickSchema);

modules.export = Pick;