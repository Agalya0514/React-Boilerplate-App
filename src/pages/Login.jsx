import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const users = [
    { username: "Agalya", password: "12345678" },
    { username: "username 2", password: "password 2" },
    { username: "username 3", password: "password 3" },
    // Add more if needed
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    const validUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (validUser) {
      localStorage.setItem("user", JSON.stringify(validUser));
      navigate("/form");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-md w-96 space-y-4">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          className="border px-3 py-2 rounded w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border px-3 py-2 rounded w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
        >
          Login
        </button>
        <div className="text-center">
          <a href="#" className="text-blue-500 text-sm">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}

        