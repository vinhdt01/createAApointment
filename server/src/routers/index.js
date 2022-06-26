const register = require("./register.router.js");
const login = require("./login.router.js");
const schedule = require("./schedule.router.js");
const refreshToken = require("./refreshToken.router.js");
const listSchedule = require("./listSchedule.router.js");

function route(app) {
  app.use("/register", register);
  app.use("/login", login);
  app.use("/schedule", schedule);
  app.use("/refreshToken", refreshToken);
  app.use("/listschedule", listSchedule);
}

module.exports = route;
