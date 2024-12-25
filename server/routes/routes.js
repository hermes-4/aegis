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
router.route("/").get(Log_In).post(Sign_Up).post(Add_Item)
router.route("/:id").get(Get_Item).put(Update_Item).delete(Delete_Item)
module.exports = router