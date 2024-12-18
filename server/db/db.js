const mongoose = require("mongoose");


//Try uploading server components

const connect_db = (url) => {
  return mongoose.connect(url);
};

module.exports = connect_db;
