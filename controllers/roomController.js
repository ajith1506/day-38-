const Room = require("../models/roomModel");

const createRoom = async (roomName, seats, amenities, pricePerHour) => {
  try {
    const newRoom = new Room({ roomName, seats, amenities, pricePerHour });
    await newRoom.save();
    return newRoom;
  } catch (error) {
    throw error;
  }
};

module.exports = { createRoom };
