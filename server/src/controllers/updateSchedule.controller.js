const Schedule = require("../model/mongoseModel/schedule.model.js");

exports.updateSchedule = async (req, res) => {
  const data = req.body;

  try {
    const count = await Schedule.count({
      dateofappointment: data.dateofappointment,
      faculities: data.faculities,
    });
    if (count <= 49) {
      console.log("123");
      const schedule = new Schedule(data);
      schedule.numberTurn = count + 1;

      // await schedule.save();
      Schedule.findByIdAndUpdate(data.id, schedule, function (err, result) {
        if (err) {
          res.send(err);
        } else {
          // res.send(result);
          res
            .status(200)
            .send({ status: "successfully", numberTurn: count + 1 });
        }
      });
    } else {
      res.status(200).send({ status: "pending" });
    }
  } catch (err) {
    res.status(500).send({ status: "false" });
  }
};
