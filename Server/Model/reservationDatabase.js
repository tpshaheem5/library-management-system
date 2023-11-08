const mongoose = require("mongoose");
const reservationSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the Users collection
    required: true,
  },
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book", // Reference to the Books collection
    required: true,
  },
  reservationDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Available"],
    required: true,
  },
  pickupDeadline: {
    type: Date,
    required: true,
  },
});
module.exports = mongoose.model("Reservation",reservationSchema)