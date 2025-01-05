import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SellerDashboard = () => {

  const location = useLocation();
  const navigate = useNavigate();
  

  // Get seller details from location.state or redirect to login if not found
  const seller = location.state?.seller;

  if (!seller) {
    navigate("/seller-login");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-900">
        Seller Dashboard
      </h1>

      {/* Welcome Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Welcome, {seller.name}!
        </h2>
        <p className="text-gray-600">
          We are glad to have you onboard. Manage your shop and view orders
          conveniently from this dashboard.
        </p>
      </div>

      {/* View Orders Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          View Orders
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          {/* Replace with dynamic order data */}
          <li>Order #1 - Pickup</li>
          <li>Order #2 - Home Delivery</li>
          <li>Order #3 - Pickup</li>
        </ul>
      </div>

      {/* Seller Details Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Seller Details
        </h2>
        <p className="text-gray-600">Name: {seller.name}</p>
        <p className="text-gray-600">Email: jerry123@gmail.com</p>
        
      </div>
    </div>
  );
};

export default SellerDashboard;
