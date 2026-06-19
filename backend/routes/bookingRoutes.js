const express = require("express");

const router = express.Router();

const {
  createBooking,
  getBookings,
  cancelBooking,
} = require("../controllers/bookingController");

// Create Booking
router.post("/", createBooking);

// Get All Bookings
router.get("/", getBookings);

// Cancel Booking
router.put("/:id", cancelBooking);

module.exports = router;