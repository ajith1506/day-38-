const express = require("express");
const bookingController = require("../controllers/bookingController");

const router = express.Router();

router.post("/book-room", (req, res) => {
  const { roomName, customerName, date, startTime, endTime } = req.body;
  const newBooking = bookingController.bookRoom(
    roomName,
    customerName,
    date,
    startTime,
    endTime
  );

  if (newBooking) {
    res
      .status(201)
      .json({ message: "Room booked successfully", booking: newBooking });
  } else {
    res.status(400).json({ message: "Room not available for booking" });
  }
});

module.exports = router;
