const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  id: Number,
  title: String,
  edition: String,
  copyright: Number,
  language: String,
  pages: Number,
  author: String,
  author_id: Number,
  publisher: String,
  publisher_id: Number
});

module.exports = mongoose.model('Book', bookSchema);
