const express = require("express");
const protect = require("../middleware/authMiddleware");
const { sendM, allM } = require("../controllers/messageC");

const router = express.Router();

router.route("/:chatId").get(protect, allM);
router.route("/").post(protect, sendM);

module.exports = router;
