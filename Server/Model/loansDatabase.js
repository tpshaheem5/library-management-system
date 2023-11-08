const mongoose = require("mongoose");
const loansSchema = mongoose.Schema({
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
  dueDate: {
    type: Date,
    required: true,
  },
  returnDate: Date, // Date when the book was returned (if applicable).
  status: {
    type: String,
    enum: ["Checked Out", "Returned"],
    required: true,
  },
  fineAmount: {
    type: Number,
    default: 0, // Default to 0 if no fine is accrued.
  },
});
module.exports = mongoose.model("Loans",loansSchema)
