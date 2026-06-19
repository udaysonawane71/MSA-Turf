import { useEffect, useState } from "react";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  const cancelBooking = async (id) => {
    try {
      const res = await fetch(
        `https://msa-turf-api.onrender.com/api/bookings/${id}`,
        {
          method: "PUT",
        }
      );

      const data = await res.json();

      alert(data.message);

      // Refresh bookings
      fetch("https://msa-turf-api.onrender.com/api/bookings")
        .then((res) => res.json())
        .then((data) => setBookings(data));

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-8">
        📖 My Bookings
      </h1>

      {bookings.map((booking) => (

        <div
          key={booking._id}
          className="bg-white shadow-lg p-5 rounded-xl mb-4"
        >
          <h2 className="text-2xl font-bold">
            {booking.groundName}
          </h2>

          <p>📅 {booking.date}</p>

          <p>⏰ {booking.time}</p>

          <p
            className={
              booking.status === "Cancelled"
                ? "text-red-600 font-bold"
                : "text-green-600 font-bold"
            }
          >
            {booking.status}
          </p>

          {booking.status !== "Cancelled" && (
            <button
              onClick={() => cancelBooking(booking._id)}
              className="mt-3 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Cancel Booking
            </button>
          )}

        </div>

      ))}

    </div>
  );
}

export default MyBookings;