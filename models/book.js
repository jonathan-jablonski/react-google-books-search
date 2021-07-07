const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  author: Array,
  description: String,
  link: String,
  image: String
});

const Book = mongoose.model("googlebooks", bookSchema);

module.exports = Book;
