const Schedule = require("../model/mongoseModel/schedule.model.js");

exports.getSchedule = async (req, res) => {
  try {
    const count = await Schedule.find({
      person_id: req.headers["person_id"],
    });

    res.json(count);
  } catch (err) {
    res.status(400);
  }
};
