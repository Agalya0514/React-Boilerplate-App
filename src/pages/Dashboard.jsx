import React from "react";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">🎉 Welcome, {user?.username}!</h1>
      <p className="text-gray-600">This is your dashboard.</p>
    </div>
  );
};

export default Dashboard;
