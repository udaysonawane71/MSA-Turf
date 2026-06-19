import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav className="bg-green-600 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          🏏 MSA Turf
        </h1>

        <ul className="flex gap-6 items-center">

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/book-slot">Book Slot</Link>
          </li>

          {!token ? (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>

              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>

              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 px-3 py-1 rounded"
                >
                  Logout
                </button>
              </li>
            </>
          )}

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;