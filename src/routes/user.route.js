const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const auth = require("../middleware/auth");

router.post("/register", userController.register);
router.post("/login", userController.login);

module.exports = router;
