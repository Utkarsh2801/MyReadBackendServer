const express = require("express");
const {
  getAllbooks,
  getBookById,
  updateBook,
  searchBooks
} = require("../routeHandlers/books");
const router = express.Router();

router.route("/books").get(getAllbooks);

router
  .route("/books/:bookId")
  .get(getBookById)
  .put(updateBook);

router.route("/search").post(searchBooks);

module.exports = router;
