import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import FormPage from './pages/FormPage';
import Users from './pages/Users';
import Dashboard from './pages/Dashboard';

function App() {
  const [userData, setUserData] = useState(null); // shared state

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <nav className="bg-white shadow-md p-4 sticky top-0 z-10 flex gap-6 text-blue-700">
          <Link to="/">🏠 Home</Link>
          <Link to="/about">📘 About</Link>
          <Link to="/login">🔐 Login</Link>
          <Link to="/users">👥 Users</Link>
          <Link to="/form">📝 Form</Link>
        </nav>

        <main className="p-6 flex-1">
          <h1 className="text-4xl font-bold text-center mb-6">My React Boilerplate</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/form" element={<FormPage setUserData={setUserData} userData={userData} />} />
            <Route path="/users" element={<Users />} />
            <Route path="/dashboard" element={<Dashboard userData={userData} setUserData={setUserData} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
