const Booking = require("../models/Booking");

// CREATE BOOKING
const createBooking = async (req, res) => {
  try {
    const {
      userId,
      userName,
      userEmail,
      groundName,
      date,
      time,
      amount,
      paymentId,
      orderId,
      paymentStatus,
    } = req.body;

    const existingBooking = await Booking.findOne({
      groundName,
      date,
      time,
      bookingStatus: "Confirmed",
    });

    if (existingBooking) {
      return res.status(400).json({
        message: "This slot is already booked ❌",
      });
    }

    const booking = await Booking.create({
      userId,
      userName,
      userEmail,
      groundName,
      date,
      time,
      amount,
      paymentId,
      orderId,
      paymentStatus: paymentStatus || "Paid",
      bookingStatus: "Confirmed",
      refundStatus: "Not Requested",
    });

    res.status(201).json({
      message: "Booking Successful ✅",
      booking,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET ALL BOOKINGS
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET BOOKINGS BY USER
const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      userId: req.params.userId,
    }).sort({ createdAt: -1 });

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// CANCEL BOOKING + REFUND REQUEST
const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      {
        bookingStatus: "Cancelled",
        refundStatus: "Requested",
      },
      { new: true }
    );

    res.status(200).json({
      message: "Booking Cancelled. Refund request sent ✅",
      booking,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createBooking,
  getBookings,
  getUserBookings,
  cancelBooking,
};