function Leaderboard() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">
        🏆 Leaderboard
      </h1>

      <div className="space-y-4">

        <div className="bg-yellow-100 p-4 rounded-lg">
          🥇 Sai Patil - 12 Matches
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          🥈 Rohit - 10 Matches
        </div>

        <div className="bg-orange-100 p-4 rounded-lg">
          🥉 Aditya - 8 Matches
        </div>

      </div>
    </div>
  );
}

export default Leaderboard;