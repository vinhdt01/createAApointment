const Schedule = require("../model/mongoseModel/schedule.model.js");
const deleteSchedule = new Schedule();

exports.deleteSchedule = async (req, res) => {
  var currentNumber;
  try {
    const findData = await Schedule.findOne({ _id: req.params.slug });
    currentNumber = findData.numberTurn;
    const countData = await Schedule.count({
      faculities: findData.faculities,
      dateofappointment: findData.dateofappointment,
    });
    const data = await Schedule.deleteOne({
      _id: req.params.slug,
    });
    if (currentNumber === countData) {
    } else {
      const dataUpdateOne = await Schedule.updateMany(
        { numberTurn: { $gt: currentNumber } },

        { $inc: { numberTurn: -1 } }
      );
    }
    res.status(200).json("success");
  } catch (err) {
    res.status(500).json("failure");
  }
};
