import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const SellerRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    businessname: '',
    location: '',
    password: '',
    phone: ''
  });

  const [errors, setErrors] = useState({
    fullname: '',
    email: '',
    businessname: '',
    location: '',
    password: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formValid = true;
    const newErrors = { ...errors };

    // Fullname Validation
    if (!formData.fullname) {
      newErrors.fullname = 'Please enter your full name';
      formValid = false;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      formValid = false;
    }

    // Business Name Validation
    if (!formData.businessname) {
      newErrors.businessname = 'Please enter your business name';
      formValid = false;
    }

    // Location Validation
    if (!formData.location) {
      newErrors.location = 'Please enter your location';
      formValid = false;
    }

    // Password Validation
    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
      formValid = false;
    }

    // Phone Validation
    const phoneRegex = /^[0-9]{10}$/; // Assuming a 10-digit phone number format
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
      formValid = false;
    }

    setErrors(newErrors);

    if (formValid) {
      try {
        const response = await axios.post(
          "/api/v1/users/sellerregister", // backend URL
          formData
        );

        console.log("Registration successful:", response.data);

      
        // Navigate to seller dashboard
        navigate("/seller-dashboard");
      } catch (error) {
        console.error("Error during registration:", error);
        if (error.response) {
          alert(error.response.data.message || "Registration failed. Please try again.");
        } else {
          alert("An error occurred. Please try again later.");
        }
      }
    }
    const seller = {
      name: "Jerry",
      
      
    };

    // Navigate to the seller dashboard with seller data
    navigate("/seller-dashboard", { state: { seller } });

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-purple-600 mb-6">Seller Register</h2>
        <form onSubmit={handleSubmit} id="sellerForm" className="space-y-4">
          {/* Fullname */}
          <div>
            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="John Doe"
            />
            {errors.fullname && <p className="text-red-500 text-xs mt-1">{errors.fullname}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Business Name */}
          <div>
            <label htmlFor="businessname" className="block text-sm font-medium text-gray-700">Business Name</label>
            <input
              type="text"
              id="businessname"
              name="businessname"
              value={formData.businessname}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Your Printing Service"
            />
            {errors.businessname && <p className="text-red-500 text-xs mt-1">{errors.businessname}</p>}
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="City, Country"
            />
            {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="1234567890"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            Create Account
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600">Already have an account? <a href="/seller-login" className="text-purple-600 hover:underline">Sign In</a></p>
      </div>
    </div>
  );
};

export default SellerLogin;
