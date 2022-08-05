const express = require("express");
const router = express.Router();
const { Register } = require("../controllers/register.controller.js");

router.post("/", Register);

module.exports = router;
