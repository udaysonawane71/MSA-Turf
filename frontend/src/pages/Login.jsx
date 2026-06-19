import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch("https://msa-turf-api.onrender.com/api/users/login   ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      alert("Login successful ✔");

      console.log("LOGIN SUCCESS:", data);

      navigate("/dashboard");

    } catch (error) {
      console.log("LOGIN ERROR:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="shadow-lg p-8 rounded-lg w-96 bg-white">

        <h1 className="text-3xl font-bold mb-4 text-center">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="border w-full p-2 mb-3 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 mb-3 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-green-600 text-white w-full p-2 rounded hover:bg-green-700"
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;