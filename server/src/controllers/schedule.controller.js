const { v4: uuidv4 } = require("uuid");
const Schedule = require("../model/mongoseModel/schedule.model.js");
exports.CreateSchedule = async (req, res) => {
  const data = req.body;
  try {
    const count = await Schedule.count({
      dateofappointment: data.dateofappointment,
      faculities: data.faculities,
    });
    if (count <= 49) {
      const schedule = new Schedule(data);
      schedule._id = uuidv4();
      schedule.numberTurn = count + 1;

      await schedule.save();
      res.status(200).send({ status: "successfully", numberTurn: count + 1 });
    } else {
      res.status(200).send({ status: "pending" });
    }
  } catch (err) {
    res.status(500).send({ status: "false" });
  }
};
