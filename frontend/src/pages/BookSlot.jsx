import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookSlot() {
  const navigate = useNavigate();

  const [groundName, setGroundName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            groundName,
            date,
            time,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      alert("Booking Successful ✅");

      navigate("/my-bookings");

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white shadow-xl rounded-xl p-8 w-[500px]">

        <h1 className="text-4xl font-bold text-center mb-8">
          🏏 Book Your Turf
        </h1>

        {/* Ground */}
        <label className="font-semibold">
          Select Ground
        </label>

        <select
          className="border w-full p-3 rounded mt-2 mb-4"
          value={groundName}
          onChange={(e) =>
            setGroundName(e.target.value)
          }
        >
          <option value="">
            Select Ground
          </option>

          <option value="MSA Turf Ground 1">
            MSA Turf Ground 1
          </option>

          <option value="MSA Turf Ground 2">
            MSA Turf Ground 2
          </option>

          <option value="MSA Turf Ground 3">
            MSA Turf Ground 3
          </option>
        </select>

        {/* Date */}
        <label className="font-semibold">
          Select Date
        </label>

        <input
          type="date"
          className="border w-full p-3 rounded mt-2 mb-4"
          value={date}
          onChange={(e) =>
            setDate(e.target.value)
          }
        />

        {/* Time */}
        <label className="font-semibold">
          Select Time Slot
        </label>

        <select
          className="border w-full p-3 rounded mt-2 mb-6"
          value={time}
          onChange={(e) =>
            setTime(e.target.value)
          }
        >
          <option value="">
            Select Time
          </option>

          <option value="7 AM - 9 AM">
            7 AM - 9 AM
          </option>

          <option value="9 AM - 11 AM">
            9 AM - 11 AM
          </option>

          <option value="4 PM - 6 PM">
            4 PM - 6 PM
          </option>

          <option value="7 PM - 9 PM">
            7 PM - 9 PM
          </option>
        </select>

        <button
          onClick={handleBooking}
          className="bg-green-600 text-white w-full py-3 rounded-lg text-xl hover:bg-green-700"
        >
          Book Now 🏏
        </button>

      </div>

    </div>
  );
}

export default BookSlot;