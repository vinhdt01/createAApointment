const register = require("./register.router.js");
const login = require("./login.router.js");
const schedule = require("./schedule.router.js");
const refreshToken = require("./refreshToken.router.js");
const listSchedule = require("./listSchedule.router.js");
const logout = require("./logout.router.js");
const deleteSchedule = require("./delete.router.js");
const updateSchedule = require("./update.router");
function route(app) {
  app.use("/register", register);
  app.use("/login", login);
  app.use("/logout", logout);
  app.use("/delete", deleteSchedule);
  app.use("/update", updateSchedule);
  app.use("/schedule", schedule);
  app.use("/refreshToken", refreshToken);
  app.use("/listschedule", listSchedule);
}

module.exports = route;
