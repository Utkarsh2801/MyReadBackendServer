const mongoose = require("mongoose");
const Books = require("./models");
const fs = require("fs");
let colors = require("colors");

mongoose.connect("mongodb://localhost:27017/myread", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

if (process.argv[2] == "-i") {
  insertBooks();
} else if (process.argv[2] == "-d") {
  deleteBooks();
}

async function insertBooks() {
  let data = fs.readFileSync("./books.json");
  data = JSON.parse(data);
  data = await Books.create(data);
  console.log("Data inserted".green.inverse);
}

async function deleteBooks() {
  await Books.deleteMany();
  console.log("Data deleted".red.inverse);
}
