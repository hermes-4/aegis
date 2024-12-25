const express = require("express")
const router = express.Router()
const {  
    Sign_Up,
    Log_In,
    Add_Item,
    Get_Item,
    Update_Item,
    Delete_Item
} = require("../controllers/routes")
router.route("/login").get(Log_In)
router.route("/signup").post(Sign_Up)
router.route("/add_new").post(Add_Item)
router.route("/item/:id").get(Get_Item).put(Update_Item).delete(Delete_Item)
module.exports = router