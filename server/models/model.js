const mongoose = require("mongoose");

const LoginModel = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const SignUpModel = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});



const ItemModel = mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
});

const Login = mongoose.model("login", LoginModel);
const SignUp = mongoose.model("signUp", SignUpModel);
const Item = mongoose.model("Item", ItemModel);

module.exports = { Login, SignUp, Item };
