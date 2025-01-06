import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SellerDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Helper to safely parse JSON
  const safeParseJSON = (jsonString) => {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      console.error("Invalid JSON in localStorage:", error);
      return null;
    }
  };

  // Retrieve seller data
  const [seller, setSeller] = useState(() => {
    const storedSeller = localStorage.getItem("seller");
    const parsedSeller = storedSeller ? safeParseJSON(storedSeller) : null;
    return location.state?.seller || parsedSeller;
  });

  // Redirect to login if no seller found
  useEffect(() => {
    if (!seller) {
      navigate("/seller-login");
    }
  }, [seller, navigate]);

  if (!seller) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-700 text-lg">Redirecting to login...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-900">
        Seller Dashboard
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Welcome, {seller.businessname}!
        </h2>
        <p className="text-gray-600">
          Manage your shop and view orders conveniently from this dashboard.
        </p>
      </div>

      {/* Add any additional dashboard sections as needed */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Your Orders</h3>
        <p className="text-gray-600">You have no new orders at this time.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Business Info
        </h3>
        <p className="text-gray-600">Location: {seller.location}</p>
        <p className="text-gray-600">Contact: {seller.phone}</p>
        <p className="text-gray-600">Email: {seller.email}</p>
      </div>

      <div className="text-center">
        <button
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("seller");
            navigate("/seller-login");
          }}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default SellerDashboard;
