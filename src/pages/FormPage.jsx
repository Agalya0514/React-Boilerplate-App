import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FormPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    state: '',
    district: ''
  });

  const locationData = {
    India: {
      TamilNadu: ['Chennai', 'Coimbatore', 'Madurai'],
      Karnataka: ['Bengaluru', 'Mysore', 'Hubli']
    },
    USA: {
      California: ['Los Angeles', 'San Diego', 'San Francisco'],
      Texas: ['Houston', 'Dallas', 'Austin']
    },
    Canada: {
      Ontario: ['Toronto', 'Ottawa'],
      Quebec: ['Montreal', 'Quebec City']
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updated = { ...formData, [name]: value };

    if (name === 'country') {
      updated.state = '';
      updated.district = '';
    } else if (name === 'state') {
      updated.district = '';
    }

    setFormData(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingData = JSON.parse(localStorage.getItem("formSubmissions")) || [];
    const updatedData = [...existingData, formData];
    localStorage.setItem("formSubmissions", JSON.stringify(updatedData));

    alert("Form submitted successfully!");
    navigate('/dashboard'); // 👈 No need to pass formData individually; dashboard can access from localStorage
  };

  const countries = Object.keys(locationData);
  const states = formData.country ? Object.keys(locationData[formData.country]) : [];
  const districts = formData.state ? locationData[formData.country][formData.state] : [];

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">User Location Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          required
        />

        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          required
        >
          <option value="">Select Country</option>
          {countries.map((c, i) => <option key={i} value={c}>{c}</option>)}
        </select>

        {states.length > 0 && (
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          >
            <option value="">Select State</option>
            {states.map((s, i) => <option key={i} value={s}>{s}</option>)}
          </select>
        )}

        {districts.length > 0 && (
          <select
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          >
            <option value="">Select District</option>
            {districts.map((d, i) => <option key={i} value={d}>{d}</option>)}
          </select>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
