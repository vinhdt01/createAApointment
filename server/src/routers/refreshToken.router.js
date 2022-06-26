const express = require("express");
const router = express.Router();
const { refreshToken } = require("../controllers/login.controller.js");

router.post("/", refreshToken);

module.exports = router;
