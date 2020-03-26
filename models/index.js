const mongoose = require("mongoose");

let bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  authors: {
    type: [String],
    required: true
  },
  shelf: {
    type: String,
    required: true
  }
});

let Books = mongoose.model("Book", bookSchema);

module.exports = Books;
