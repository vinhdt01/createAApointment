const Schedule = require("../model/mongoseModel/schedule.model.js");
exports.updateSchedule = async (req, res) => {
  const data = req.body;
  // console.log(dateFormat(data.dateofappointment, isoDate));
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
    // } else {
    //   const findData = await Schedule.count({
    //     faculities: isUpdate.faculities,
    //     dateofappointment: isUpdate.dateofappointment,
    //   });
    //   if (isUpdate.numberTurn === findData) {
    //     const countNew = await Schedule.count({
    //       dateofappointment: data.dateofappointment,
    //       faculities: data.faculities,
    //     });
    //     if (countNew <= 49) {
    //       const schedule = new Schedule(data);
    //       schedule.numberTurn = countNew + 1;
    //       console.log(2);

    //       await schedule.save();
    //     } else {
    //       res.status(200).send({ status: "pending" });
    //     }
    //   } else {
    //     if (countNew <= 49) {
    //       const schedule = new Schedule(data);
    //       schedule.numberTurn = countNew + 1;
    //       console.log(2);

    //       await schedule.save();
    //       const onUpdate = Schedule.updateMany(
    //         {
    //           numberTurn: { $gt: isUpdate.numberTurn },
    //           faculities: isUpdate.numberTurn,
    //           dateofappointment: isUpdate.dateofappointment,
    //         },
    //         { $inc: { numberTurn: -1 } }
    //       );
    //       res.status(200).send({ status: "successfully", result });
    //     } else {
    //       res.status(200).send({ status: "pending" });
    //     }
    //   }
  } catch (err) {
    res.status(500).send({ status: "false" });
  }
};
