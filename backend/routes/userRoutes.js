const express = require("express");
const router = express.Router();
const user = require("../controllers/userController")
const { protect } = require("../middleware/authMiddleware");

router.post("/", user.registerUser);
router.post("/login", user.loginUser);
router.get("/me", protect, user.getMe);

module.exports = router;