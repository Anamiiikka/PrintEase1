import React, { useState } from 'react';
import axios from 'axios';

const ServiceProviderRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    printerCapabilities: '',
    deliveryOptions: '',
    contactNumber: '',
    email: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/service-providers/register', formData);
      setMessage(response.data.message);
      setFormData({
        name: '',
        location: '',
        printerCapabilities: '',
        deliveryOptions: '',
        contactNumber: '',
        email: ''
      });
    } catch (err) {
      setMessage('Error during registration: ' + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="container mx-auto my-5">
      <h1 className="text-2xl font-bold">Service Provider Registration</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-semibold">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="printerCapabilities" className="block text-sm font-semibold">Printer Capabilities</label>
          <input
            type="text"
            name="printerCapabilities"
            id="printerCapabilities"
            value={formData.printerCapabilities}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            placeholder="e.g. color printing, binding"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="deliveryOptions" className="block text-sm font-semibold">Delivery Options</label>
          <input
            type="text"
            name="deliveryOptions"
            id="deliveryOptions"
            value={formData.deliveryOptions}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            placeholder="e.g. home delivery, shop pickup"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="contactNumber" className="block text-sm font-semibold">Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            id="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Register</button>

        {message && <div className="mt-4 text-center text-sm">{message}</div>}
      </form>
    </div>
  );
};

export default ServiceProviderRegistration;