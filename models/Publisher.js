const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  book_id: Number,
  title: String
});

const publisherSchema = new mongoose.Schema({
  id: Number,
  publisher: String,
  country: String,
  founded: Number,
  genre: String,
  books: [bookSchema]
});

module.exports = mongoose.model('Publisher', publisherSchema);
