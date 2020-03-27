const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
require("./db")();
const routes = require("./routes/index");
const bodyParsor = require("body-parser");
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParsor());
app.use(cors());
app.use("/", routes);

app.listen(PORT, () => {
  console.log("Server is running");
});
