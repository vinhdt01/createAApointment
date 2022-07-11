const express = require("express");
const router = express.Router();
const { Logout } = require("../controllers/login.controller.js");

router.get("/", Logout);

module.exports = router;
