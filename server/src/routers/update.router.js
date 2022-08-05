const express = require("express");
const router = express.Router();
const {
  updateSchedule,
} = require("../controllers/updateSchedule.controller.js");

router.patch("/", updateSchedule);

module.exports = router;
