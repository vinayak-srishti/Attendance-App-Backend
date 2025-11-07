const Attendance = require("../models/attendanceModel");

exports.markAttendance = async (req, res) => {
  try {
    const { name, date, attendance, specialNote, visits } = req.body;

    if (!name || !date) {
      return res.status(400).json({ message: "Name and date are required" });
    }

    const record = new Attendance({
      name,
      date, // ✅ Use the date from req.body
      attendance,
      specialNote,
      visits
    });

    await record.save();
    res.status(201).json({ message: "Attendance recorded successfully", record });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};