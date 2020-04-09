const mongoose = require("mongoose");
const colors = require("colors");

mongoConnect = async function () {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("Database Connected".green.inverse);
};

module.exports = mongoConnect;
