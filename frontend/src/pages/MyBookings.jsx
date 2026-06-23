import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const fetchUserBookings = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    fetch(`https://msa-turf-api.onrender.com/api/bookings/user/${user._id}`)
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchUserBookings();
  }, []);

  const cancelBooking = async (booking) => {
    try {
      const res = await fetch(
        `https://msa-turf-api.onrender.com/api/bookings/${booking._id}`,
        {
          method: "PUT",
        }
      );

      const data = await res.json();
      alert(data.message);

      const message = `Hello MSA Turf,%0A%0AI want to cancel my booking and request refund.%0A%0AName: ${booking.userName}%0AGround: ${booking.groundName}%0ADate: ${booking.date}%0ATime: ${booking.time}%0APayment ID: ${booking.paymentId}%0AAmount: ₹${booking.amount}%0AReason: `;

      window.open(
        `https://wa.me/9529635997?text=${message}`,
        "_blank"
      );

      fetchUserBookings();
    } catch (error) {
      console.log(error);
      alert("Cancel failed");
    }
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-2">
        📖 My Bookings
      </h1>

      {user && (
        <p className="mb-8 text-gray-600">
          Logged in as: <b>{user.name}</b> ({user.email})
        </p>
      )}

      {bookings.length === 0 && (
        <div className="bg-white p-6 rounded-xl shadow">
          No bookings found.
        </div>
      )}

      {bookings.map((booking) => (
        <div
          key={booking._id}
          className="bg-white shadow-lg p-6 rounded-xl mb-4"
        >
          <h2 className="text-2xl font-bold">
            {booking.groundName}
          </h2>

          <p>👤 {booking.userName}</p>
          <p>📧 {booking.userEmail}</p>
          <p>📅 {booking.date}</p>
          <p>⏰ {booking.time}</p>
          <p>💰 ₹{booking.amount}</p>
          <p>💳 Payment: {booking.paymentStatus}</p>

          <p
            className={
              booking.bookingStatus === "Cancelled"
                ? "text-red-600 font-bold"
                : "text-green-600 font-bold"
            }
          >
            Booking: {booking.bookingStatus}
          </p>

          <p className="font-semibold">
            Refund: {booking.refundStatus}
          </p>

          {booking.bookingStatus !== "Cancelled" && (
            <button
              onClick={() => cancelBooking(booking)}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Cancel & Request Refund
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default MyBookings;