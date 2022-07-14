const express = require("express");
const router = express.Router();
const {
  deleteSchedule,
} = require("../controllers/deleteSchedule.controller.js");
const { Auth } = require("../middleware/auth.middleware.js");

router.delete("/:slug", Auth, deleteSchedule);

module.exports = router;
