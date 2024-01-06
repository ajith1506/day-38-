const express = require("express");
const roomController = require("../controllers/roomController");
const Room = require("../models/roomModel");

const router = express.Router();

router.post("/create-room", (req, res) => {
  const { roomName, seats, amenities, pricePerHour } = req.body;
  const newRoom = roomController.createRoom(
    roomName,
    seats,
    amenities,
    pricePerHour
  );
  res.status(201).json({ message: "Room created successfully", room: newRoom });
});

router.get("/list-rooms", async (req, res) => {
  try {
    // Fetch all rooms from the database
    const rooms = await Room.find();

    // Map the rooms to the desired format
    const formattedRooms = rooms.map((room) => {
      return {
        roomName: room.roomName,
        seats: room.seats,
        amenities: room.amenities,
        pricePerHour: room.pricePerHour,
        booked: room.booked,
        // Add other properties as needed
      };
    });

    // Send the formatted rooms as a JSON response
    res.json({ rooms: formattedRooms });
  } catch (error) {
    console.error("Error fetching rooms:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
