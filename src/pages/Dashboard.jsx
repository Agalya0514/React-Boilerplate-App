import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaChartLine,
  FaUserFriends,
  FaSignOutAlt,
  FaInstagram,
  FaPinterest,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();
  const [formSubmissions, setFormSubmissions] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("formSubmissions")) || [];
    setFormSubmissions(data);
  }, []);

  const handleDelete = (indexToRemove) => {
    const updated = formSubmissions.filter((_, index) => index !== indexToRemove);
    setFormSubmissions(updated);
    localStorage.setItem("formSubmissions", JSON.stringify(updated));
  };

  if (formSubmissions.length === 0) {
    return (
      <div className="text-center text-gray-600 mt-20">
        <p>No user data found.</p>
        <button
          onClick={() => navigate("/form")}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Go to Form
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-50 p-6 text-gray-800 font-sans">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">📊 Dashboard</h1>
        <button
          onClick={() => navigate("/login")}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>

      {formSubmissions.map((user, index) => (
        <div
          key={index}
          className="bg-white p-5 mb-6 rounded-lg shadow-md border border-orange-100"
        >
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-orange-600 mb-2">👤 {user.name}</h2>
              <ul className="text-sm space-y-1">
                <li><strong>Email:</strong> {user.email}</li>
                <li><strong>Country:</strong> {user.country}</li>
                <li><strong>State:</strong> {user.state}</li>
                <li><strong>District:</strong> {user.district}</li>
              </ul>
            </div>
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80"
              alt="User"
              className="w-16 h-16 rounded-full object-cover border-2 border-orange-300"
            />
          </div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={() => navigate("/form")}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              ✏️ Edit
            </button>
            <button
              onClick={() => handleDelete(index)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              🗑️ Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
