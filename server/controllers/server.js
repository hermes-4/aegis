const bcrypt = require("bcrypt");
const { Login, SignUp, Item } = require("../models/model");

// app.post("/signIn", async (req, res) => {
//   try {
//     const signup = await SignUp.create({
//       username: req.body.username,
//       password: req.body.username,
//     });
// 	res.send("Sign In")
//     res.status(200).json(signup);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json(error);
//   }
// });

// app.get("/login", async (req, res) => {
//   const login = await Login.find({
//     username: req.body.username,
//     password: req.body.username,
//   });
//   res.send("Login")
//   res.status(200).json(login);
// });

const Sign_Up = async (req, res) => {
  try {
    const signup = await SignUp.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.status(200).json(signup);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const Log_In = async (req, res) => {
  try {
    const login = await Login.find({
      username: req.body.username,
      password: req.body.username,
    });
    if (!login) {
      return res.status(401).json({ message: "Invalid login credentials" });
    }
    res.status(200).json(login);
  } catch (error) {
    res.status(500).json(error);
  }
};

const Add_Item = async (req, res) => {
  try {
    const { password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const item = await Item.create({
      name: req.body.username,
      password: hashed,
    });

    res.status(201).json({ message: "Item stored successfully" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const Get_Item = async (req, res) => {
  try {
    const { id } = req.params;
    const view_item = await Item.findById(id);
    if (!view_item) {
      res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(view_item);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const Update_Item = async (req, res) => {
  try {
    const { id } = req.params;

    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    const updatedItem = await Item.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json({message: "Item updated successfully"});
  } catch (err) {
    res.status(500).json({ message: err });
    console.log(err);
  }
};

const Delete_Item = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await Item.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ msg: "Item not found" });
    }
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = {
  Sign_Up,
  Log_In,
  Add_Item,
  Get_Item,
  Update_Item,
  Delete_Item,
};
