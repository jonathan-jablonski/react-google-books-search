const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String, required: true,
  link: { type: String, required: true, unique: true },
  image: { type: String, required: true, unique: true }
});

const Book = mongoose.model("googlebooks", bookSchema);

module.exports = Book;
