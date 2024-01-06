const Booking = require("../models/bookingModel");
const Room = require("../models/roomModel");

const bookRoom = async (roomName, customerName, date, startTime, endTime) => {
  try {
    const selectedRoom = await Room.findOne({ roomName, booked: false });

    if (!selectedRoom) {
      return null; // Room not available for booking
    }

    selectedRoom.booked = true;
    await selectedRoom.save();

    const newBooking = new Booking({
      roomName,
      customerName,
      date,
      startTime,
      endTime,
    });
    await newBooking.save();

    return newBooking;
  } catch (error) {
    throw error;
  }
};

module.exports = { bookRoom };
