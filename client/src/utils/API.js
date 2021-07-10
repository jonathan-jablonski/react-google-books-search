import axios from "axios";

export default {
  // Fetch books from Google Books API
  fetchGoogle: function(query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10`);
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/saved/" + id);
  },
  // Removes the book based on id
  removeBook: function(id) {
    return axios.delete("/api/saved/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/saved/", bookData);
  }
};
