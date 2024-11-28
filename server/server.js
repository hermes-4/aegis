const mongoose = require("mongoose");
const express = require("express");
const app = express();
const aegisRouter = require("./routes/routes.js");
const connect_db = require("./db/db.js");

require("dotenv").config();
const port = process.env.PORT;

app.use(express.json());
app.use("/aegis/v1", aegisRouter);

const start = async () => {
  try {
    await connect_db(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`Aegis' server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
