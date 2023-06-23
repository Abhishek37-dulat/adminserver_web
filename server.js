const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 5236;
const MONGO_URL = process.env.MONGO_URL;

const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log("listening to PORT: ", PORT);
});
