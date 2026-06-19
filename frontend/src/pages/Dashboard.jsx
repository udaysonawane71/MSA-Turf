import { useNavigate } from "react-router-dom";

import banner from "../assets/cricket-banner.webp";
import turf1 from "../assets/turf1.jpeg";
import turf2 from "../assets/turf2.jpg";
import turf3 from "../assets/turf3.jpg";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HERO SECTION */}
      <div
        className="h-[500px] bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center">

          <h1 className="text-6xl font-bold mb-4">
            🏏 Welcome To MSA Turf
          </h1>

          <p className="text-2xl mb-6">
            Book • Play • Win Like IPL Stars
          </p>

          <button
            onClick={() => navigate("/book-slot")}
            className="bg-green-600 px-8 py-3 rounded-lg text-xl hover:bg-green-700"
          >
            Book Turf Now
          </button>

        </div>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-4 gap-6 p-8">

        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h2 className="text-gray-500">🏏 Bookings</h2>
          <h1 className="text-4xl font-bold">24</h1>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h2 className="text-gray-500">🎯 Matches</h2>
          <h1 className="text-4xl font-bold">12</h1>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h2 className="text-gray-500">⏰ Hours Played</h2>
          <h1 className="text-4xl font-bold">86</h1>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h2 className="text-gray-500">🏆 Rewards</h2>
          <h1 className="text-4xl font-bold">1500</h1>
        </div>

      </div>

      {/* QUICK ACTIONS */}
      {/* QUICK ACTIONS */}
<div className="px-8">

  <h2 className="text-4xl font-bold mb-6">
    ⚡ Quick Actions
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <button
      onClick={() => navigate("/book-slot")}
      className="bg-green-600 text-white py-5 rounded-xl text-2xl hover:bg-green-700"
    >
      🏏 Book Turf
    </button>

    <button
      onClick={() => navigate("/my-bookings")}
      className="bg-blue-600 text-white py-5 rounded-xl text-2xl hover:bg-blue-700"
    >
      📖 My Bookings
    </button>

    <button
      onClick={() => navigate("/leaderboard")}
      className="bg-yellow-500 text-white py-5 rounded-xl text-2xl hover:bg-yellow-600"
    >
      🏆 Leaderboard
    </button>

    <button
      onClick={() => navigate("/profile")}
      className="bg-purple-600 text-white py-5 rounded-xl text-2xl hover:bg-purple-700"
    >
      👤 Profile
    </button>

    <button
      onClick={() => navigate("/rewards")}
      className="bg-pink-600 text-white py-5 rounded-xl text-2xl hover:bg-pink-700"
    >
      🎁 Rewards
    </button>

    <button
      onClick={() => navigate("/support")}
      className="bg-red-600 text-white py-5 rounded-xl text-2xl hover:bg-red-700"
    >
      📞 Support
    </button>

  </div>

</div>

      {/* UPCOMING BOOKING */}
      <div className="p-8">

        <div className="bg-white rounded-xl shadow-xl p-8">

          <h2 className="text-4xl font-bold mb-6">
            📅 Upcoming Booking
          </h2>

          <div className="space-y-4 text-xl">

            <p>🏏 Ground : MSA Turf Ground 1</p>

            <p>📅 Date : 20 June 2026</p>

            <p>⏰ Time : 7 PM - 9 PM</p>

            <p className="text-green-600 font-bold">
              ✅ Booking Confirmed
            </p>

          </div>

        </div>

      </div>

      {/* LEADERBOARD */}
      <div className="px-8 pb-8">

        <div className="bg-white rounded-xl shadow-xl p-8">

          <h2 className="text-4xl font-bold mb-6">
            🏆 Top Players This Month
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between bg-yellow-100 p-4 rounded-lg">
              <span>🥇 Sai Patil</span>
              <span>12 Matches</span>
            </div>

            <div className="flex justify-between bg-gray-100 p-4 rounded-lg">
              <span>🥈 Rohit</span>
              <span>10 Matches</span>
            </div>

            <div className="flex justify-between bg-orange-100 p-4 rounded-lg">
              <span>🥉 Aditya</span>
              <span>8 Matches</span>
            </div>

          </div>

        </div>

      </div>

      {/* SPECIAL OFFER */}
      <div className="px-8 pb-8">

        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-xl p-8">

          <h2 className="text-4xl font-bold mb-4">
            🔥 Weekend Special Offer
          </h2>

          <p className="text-xl">
            Book 2 Hours & Get 10% OFF
          </p>

          <button
            onClick={() => alert("Offer Claimed 🎉")}
            className="mt-5 bg-white text-green-700 px-6 py-3 rounded-lg font-bold"
          >
            Claim Offer
          </button>

        </div>

      </div>

      {/* GALLERY */}
      <div className="px-8 pb-10">

        <h2 className="text-4xl font-bold mb-6">
          📸 Turf Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <img
            src={turf1}
            alt="Turf"
            className="h-72 w-full object-cover rounded-xl shadow-lg"
          />

          <img
            src={turf2}
            alt="Turf"
            className="h-72 w-full object-cover rounded-xl shadow-lg"
          />

          <img
            src={turf3}
            alt="Turf"
            className="h-72 w-full object-cover rounded-xl shadow-lg"
          />

        </div>

      </div>

    </div>
  );
}

export default Dashboard;