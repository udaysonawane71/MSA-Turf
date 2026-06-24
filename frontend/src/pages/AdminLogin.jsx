import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleAdminLogin = () => {
    if (
      email === "admin@msaturf.com" &&
      password === "admin123"
    ) {
      localStorage.setItem("admin", "true");
      alert("Admin Login Successful ✅");
      navigate("/admin-dashboard");
    } else {
      alert("Invalid Admin Credentials ❌");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl p-8 w-96">
        <h1 className="text-3xl font-bold text-center mb-6">
          🛠️ Admin Login
        </h1>

        <input
          type="email"
          placeholder="Admin Email"
          className="border w-full p-3 mb-4 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Admin Password"
          className="border w-full p-3 mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleAdminLogin}
          className="bg-green-600 text-white w-full py-3 rounded hover:bg-green-700"
        >
          Login as Admin
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;