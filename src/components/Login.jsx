import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Hardcoded user list
  const users = [
    { username: "Agalya", password: "12345678" },
    { username: "username 1", password: "password 1" },
    { username: "username 2", password: "password 2" },
    { username: "username 3", password: "password 3" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    const validUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (validUser) {
      localStorage.setItem("user", JSON.stringify(validUser));
      navigate("/dashboard"); // Make sure route exists
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            autoComplete="username"
            className="border rounded p-2"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
          <input
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            className="border rounded p-2"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700"
          >
            Login
          </button>
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}
          <a href="#" className="text-sm text-blue-500 text-center hover:underline">
            Forgot Password?
          </a>
        </form>
      </div>
    </div>
  );
}
