const express = require("express");
const router = express.Router();
const { Logout } = require("../controllers/login.controller.js");
const { Auth } = require("../middleware/auth.middleware.js");

router.get("/", Auth, Logout);

module.exports = router;
