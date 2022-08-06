const Schedule = require("../model/mongoseModel/schedule.model.js");
const deleteSchedule = new Schedule();

exports.deleteSchedule = async (req, res) => {
  var currentNumber;
  try {
    // const findData = await Schedule.findOne(
    //   { _id: req.params.slug },
    //   function (err, adventure) {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       currentNumber = adventure.numberTurn;
    //       console.log(adventure, "delete");
    //       const countData = Schedule.count(
    //         {
    //           faculities: adventure.faculities,
    //           dateofappointment: adventure.dateofappointment,
    //         },
    //         async function (err, result) {
    //           if (err) {
    //             console.log(err);
    //           } else {
    //             const data = await Schedule.deleteOne({
    //               _id: req.params.slug,
    //             });
    //             if (currentNumber === result) {
    //               console.log("not update");
    //             } else {
    //               console.log("update");
    //               const dataUpdateOne = await Schedule.updateMany(
    //                 { numberTurn: { $gt: currentNumber } },

    //                 { $inc: { numberTurn: -1 } }
    //               );
    //             }
    //           }
    //         }
    //       );
    //     }
    //   }
    // );
    const findData = await Schedule.findOne({ _id: req.params.slug });
    console.log(findData);
    currentNumber = findData.numberTurn;
    const countData = await Schedule.count({
      faculities: findData.faculities,
      dateofappointment: findData.dateofappointment,
    });
    const data = await Schedule.deleteOne({
      _id: req.params.slug,
    });
    if (currentNumber === countData) {
      console.log("not update");
    } else {
      console.log("update");
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
