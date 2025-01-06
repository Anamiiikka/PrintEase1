import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SellerDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [seller, setSeller] = useState(() => {
    // Check location.state or fallback to localStorage
    return location.state?.seller || JSON.parse(localStorage.getItem("seller"));
  });

  // Redirect to login if no seller found
  useEffect(() => {
    if (!seller) {
      navigate("/seller-login"); // Redirect to login if no seller data is found
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
          Welcome, {seller.name}!
        </h2>
        <p className="text-gray-600">
          Manage your shop and view orders conveniently from this dashboard.
        </p>
      </div>
      {/* Additional dashboard content */}
    </div>
  );
};

export default SellerDashboard;
