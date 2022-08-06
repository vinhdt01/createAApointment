const Schedule = require("../model/mongoseModel/schedule.model.js");
exports.updateSchedule = async (req, res) => {
  const data = req.body;
  try {
    const schedule = new Schedule(data);

    Schedule.findByIdAndUpdate(data.id, schedule, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        console.log(1);
        res.status(200).send({ status: "successfully", result });
      }
    });
  } catch (err) {
    res.status(500).send({ status: "false" });
  }
};
