const express = require("express");
const router = express.Router();
const {
  Sign_Up,
  Log_In,
  Add_Item,
  Get_Item,
  Update_Item,
  Delete_Item,
} = require("../controllers/server");

router.route("/sign-up").post(Sign_Up);
router.route("/login").post(Log_In);
router.route("/new-password").post(Add_Item);
router.route("/item/:id").get(Get_Item).put(Update_Item).delete(Delete_Item);

module.exports = router;
