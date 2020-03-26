const asyncHandler = require("../middlewares/async");
const Books = require("../models/");

exports.getAllbooks = asyncHandler(async (req, res, next) => {
  let data = await Books.find({});
  res.status(200).json({
    success: true,
    data: data
  });
});

exports.getBookById = asyncHandler(async (req, res, next) => {
  let bookId = req.params.bookId;
  let data = await Books.findById(bookId);

  res.status(200).json({
    success: true,
    data: data
  });
});

exports.updateBook = asyncHandler(async (req, res, next) => {
  let bookId = req.params.bookId;
  console.log(req.body);
  let data = await Books.findByIdAndUpdate(
    { _id: bookId },
    { shelf: req.body.shelf },
    { new: true }
  );
  res.status(200).json({
    success: true,
    data: data
  });
});

exports.searchBooks = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `I will send you the search results`
  });
});
