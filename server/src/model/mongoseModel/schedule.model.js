const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    _id: {
      type: "string",
    },
    name: {
      type: "string",
      required: true,
    },
    dateofbirth: {
      type: "date",
      required: true,
    },
    phone: {
      type: "string",
      required: true,
    },

    dateofappointment: {
      type: "date",
      required: true,
    },
    faculities: {
      type: "string",

      required: true,
    },
    person_id: {
      type: "string",

      required: true,
    },
    numberTurn: {
      type: "number",
      required: true,
    },
  },
  {
    _id: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("schedules", schema);
