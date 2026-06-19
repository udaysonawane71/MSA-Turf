function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-green-50 min-h-[80vh] flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div>
            <h1 className="text-5xl font-bold text-green-700 mb-4">
              Welcome to MSA Turf 🏏
            </h1>

            <p className="text-lg text-gray-700 mb-6">
              Premium Cricket Turf Booking System.
              Book your slot online and enjoy the best playing experience.
            </p>

            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg">
              Book Now
            </button>
          </div>

          {/* Right Side */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e"
              alt="Turf"
              className="rounded-xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-10">
          Why Choose MSA Turf?
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">

          <div className="shadow-lg p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-3">🌱 Premium Grass</h3>
            <p>High quality turf for best playing experience.</p>
          </div>

          <div className="shadow-lg p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-3">💡 Flood Lights</h3>
            <p>Play day and night with powerful lighting.</p>
          </div>

          <div className="shadow-lg p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-3">🚗 Parking</h3>
            <p>Spacious parking available for all players.</p>
          </div>

        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-green-50 py-16">

        <h2 className="text-4xl font-bold text-center mb-10">
          Pricing
        </h2>

        <div className="max-w-md mx-auto bg-white shadow-xl rounded-xl p-8 text-center">

          <h3 className="text-5xl font-bold text-green-600">
            ₹800
          </h3>

          <p className="mt-3 text-xl">
            Per Hour
          </p>

          <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg">
            Book Slot
          </button>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6">

        <h2 className="text-2xl font-bold">
          MSA Turf
        </h2>

        <p>📞 9876543210</p>

        <p>© 2026 MSA Turf</p>

      </footer>

    </div>
  );
}

export default Home;