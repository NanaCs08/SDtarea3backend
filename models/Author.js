const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  book_id: Number,
  title: String
});

const authorSchema = new mongoose.Schema({
  id: Number,
  author: String,
  nationality: String,
  birth_year: Number,
  fields: String,
  books: [bookSchema]
});

module.exports = mongoose.model('Author', authorSchema);
