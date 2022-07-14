const Schedule = require("../model/mongoseModel/schedule.model.js");
const deleteSchedule = new Schedule();

exports.deleteSchedule = async (req, res) => {
  try {
    const data = await Schedule.deleteOne({
      _id: req.params.slug,
    });

    res.status(200).json("success");
  } catch (err) {
    res.status(500).json("failure");
  }
};
