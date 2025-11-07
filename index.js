const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const attendanceRoutes = require("./routes/attendanceRoute");

dotenv.config();
const app = express();
connectDB();

// Middlewares
app.use(express.json());
app.use(cors());

app.use("/", attendanceRoutes);

// Checking route
app.get("/", (req, res) => {
  res.send("Attendance API is running...");
});

// Server start
const PORT = process.env.PORT || 6001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
