const { v4: uuidv4 } = require("uuid");

const Authen = require("../model/mongoseModel/authen.model.js");

exports.Register = async (req, res) => {
  try {
    const findUsers = await Authen.count({
      username: req.body.username,
    });
    if (findUsers > 0) {
      res.status(500).json({ status: "account already created" });
    } else {
      const User = new Authen(req.body);
      User.person_id = uuidv4();
      User.save();
      res.status(200).json({ status: "ok" });
    }
  } catch (error) {
    res.status(500).json({ status: "none", error: error });
  }
};
