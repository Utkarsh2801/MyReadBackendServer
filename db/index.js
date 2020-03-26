const mongoose = require("mongoose");
const colors = require("colors");

mongoConnect = async function() {
  await mongoose.connect("mongodb://localhost:27017/myread", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  console.log("Database Connected".green.inverse);
};

module.exports = mongoConnect;
