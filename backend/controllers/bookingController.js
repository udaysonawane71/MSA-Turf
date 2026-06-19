const Booking = require("../models/Booking");

// CREATE BOOKING
const createBooking = async (req, res) => {
  try {
    const { groundName, date, time } = req.body;

    const existingBooking = await Booking.findOne({
      groundName,
      date,
      time,
    });

    if (existingBooking) {
      return res.status(400).json({
        message: "This slot is already booked ❌",
      });
    }

    const booking = await Booking.create({
      groundName,
      date,
      time,
      status: "Confirmed",
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
    const bookings = await Booking.find();

    res.status(200).json(bookings);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// CANCEL BOOKING
const cancelBooking = async (req, res) => {
  try {

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      {
        status: "Cancelled",
      },
      { new: true }
    );

    res.status(200).json({
      message: "Booking Cancelled ❌",
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
  cancelBooking,
};