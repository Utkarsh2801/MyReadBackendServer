const asyncHandler = require("../middlewares/async");
const Books = require("../models/");

exports.getAllbooks = asyncHandler(async (req, res, next) => {
  let data = await Books.find({});
  if (data === null) throw new Error("Something Went Wrong");
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
  await Books.findByIdAndUpdate({ _id: bookId }, { shelf: req.body.shelf });

  let data = await Books.find({});
  if (data === null) throw new Error("Something Went Wrong");
  res.status(200).json({
    success: true,
    data: data
  });
});

exports.searchBooks = asyncHandler(async (req, res, next) => {
  let query = req.body.query;
  let rg = new RegExp(query, "i");
  let data = await Books.find({
    $or: [{ authors: { $in: [rg] } }, { title: { $regex: rg } }]
  });

  if (data === null) throw new Error("Something Went Wrong");

  res.status(200).json({
    success: true,
    data: data
  });
});
