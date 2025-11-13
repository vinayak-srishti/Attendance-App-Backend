const express = require("express");
const router = express.Router();
const {
  markAttendance,
  getAttendanceRecords
} = require("../controllers/attendanceController");

// POST - Mark attendance
router.post("/mark-attendance", markAttendance);

// GET - Get all attendance records
router.get("/get-attendance", getAttendanceRecords);

module.exports = router;
