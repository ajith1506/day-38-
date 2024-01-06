const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const roomRouter = require("./routes/roomRouter");
const bookingRouter = require("./routes/bookingRouter");

const app = express();
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/hall-booking-db", {})
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.error("Error connecting to mongo db:", error);
  });

app.use("/rooms", roomRouter);
app.use("/booking", bookingRouter);

const Port = process.env.Port || 3000;

app.listen(Port, () => {
  console.log(`server is running on port ${Port}`);
});
