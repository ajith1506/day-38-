const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomName: String,
  seats: Number,
  amenities: [String],
  pricePerHour: Number,
  booked: { type: Boolean, default: false },
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
