const express = require("express");

const router = express.Router();

const {
  createBooking,
  getBookings,
  getUserBookings,
  cancelBooking,
} = require("../controllers/bookingController");

// Create Booking
router.post("/", createBooking);

// Get All Bookings
router.get("/", getBookings);

// Get User Bookings
router.get("/user/:userId", getUserBookings);

// Cancel Booking
router.put("/:id", cancelBooking);

module.exports = router;