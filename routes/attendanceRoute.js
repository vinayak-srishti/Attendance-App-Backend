const express = require("express");
const router = express.Router();
const {
  markAttendance,
//   getAllAttendance
} = require("../controllers/attendanceController");

// POST → Mark attendance
router.post("/mark-attendance", markAttendance);

// GET → Get all attendance records
// router.get("/get-attendance", getAllAttendance);

module.exports = router;
