const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    userName: {
      type: String,
    },

    userEmail: {
      type: String,
    },

    groundName: {
      type: String,
      required: true,
    },

    date: {
      type: String,
      required: true,
    },

    time: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      default: 0,
    },

    paymentId: {
      type: String,
    },

    orderId: {
      type: String,
    },

    paymentStatus: {
      type: String,
      default: "Pending",
    },

    bookingStatus: {
      type: String,
      default: "Confirmed",
    },

    refundStatus: {
      type: String,
      default: "Not Requested",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Booking",
  bookingSchema
);