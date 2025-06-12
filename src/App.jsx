import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Users from './pages/Users';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Fixed/Sticky Navbar */}
        <nav className="bg-white shadow-md p-4 sticky top-0 z-10 flex gap-6 text-blue-700">
          <Link to="/">🏠 Home</Link>
          <Link to="/about">📘 About</Link>
          <Link to="/login">🔐 Login</Link>
          <Link to="/users">👥 Users</Link>
        </nav>

        {/* Page Content */}
        <main className="p-6 flex-1">
          <h1 className="text-4xl font-bold text-center mb-6">My React Boilerplate</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
