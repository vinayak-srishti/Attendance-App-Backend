const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
   required: true
  },
  attendance: {
    present: { type: Boolean, default: false },
    absent: { type: Boolean, default: false }
  },
  specialNote: {
    note: { type: String, default: "" } // storing note as a string inside an object
  },
  visits: {
    type: [String], // array of strings
    default: []
  }
});

module.exports = mongoose.model("Attendance", attendanceSchema);