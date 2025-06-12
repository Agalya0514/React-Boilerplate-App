import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-48 bg-gray-100 min-h-screen p-4 shadow">
      <ul className="space-y-4">
        <li><Link to="/">🏠 Home</Link></li>
        <li><Link to="/about">📘 About</Link></li>
        <li><Link to="/login">🔐 Login</Link></li>
        <li><Link to="/users">👥 Users</Link></li>
      </ul>
    </aside>
  );
}

