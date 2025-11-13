const Attendance = require("../models/attendanceModel");

exports.markAttendance = async (req, res) => {
  try {
    const { name, date, attendance, specialNote, visits } = req.body;

    if (!name || !date) {
      return res.status(400).json({ message: "Name and date are required" });
    }

    const record = new Attendance({
      name,
      date, 
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


exports.getAttendanceRecords = async (req, res) => {
  try {
    const records = await Attendance.find().sort({ date: -1 }); 
    res.status(200).json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};