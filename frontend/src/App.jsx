import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import BookSlot from "./pages/BookSlot";
import Dashboard from "./pages/Dashboard";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

// NEW PAGES
import MyBookings from "./pages/MyBookings";
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/book-slot" element={<BookSlot />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/admin-login" element={<AdminLogin />} />

      <Route path="/admin-dashboard" element={<AdminDashboard />} />

        {/* NEW ROUTES */}

        <Route
          path="/my-bookings"
          element={<MyBookings />}
        />

        <Route
          path="/leaderboard"
          element={<Leaderboard />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;