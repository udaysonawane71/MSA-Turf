const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

dotenv.config();

const app = express();

// ✅ CORS FIX FOR LOCAL + VERCEL
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://msa-turf.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// ✅ MongoDB Connection
connectDB();

// ✅ Routes
app.use("/api/users", userRoutes);
app.use("/api/bookings", bookingRoutes);

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("MSA Turf Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});