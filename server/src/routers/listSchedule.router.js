const express = require("express");
const router = express.Router();
const { getSchedule } = require("../controllers/getSchedule.controller.js");
const { Auth } = require("../middleware/auth.middleware.js");

router.get("/", Auth, getSchedule);

module.exports = router;
