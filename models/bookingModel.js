const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  roomName: String,
  customerName: String,
  date: Date,
  startTime: String,
  endTime: String,
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
