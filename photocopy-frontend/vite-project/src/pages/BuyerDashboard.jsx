import React from "react";
import { useNavigate } from "react-router-dom";

const BuyerDashboard = () => {
  const navigate = useNavigate();

  const shops = [
    { id: 1, name: "PrintX", location: "JanakPuri", price: "10 per page" },
    { id: 2, name: "Shivam Prints", location: "Rohini-Est", price: "12 per page" },
    { id: 3, name: "EcoPrint", location: "Rohini-West", price: "10 per page" },
    { id: 4, name: "Quick Copy", location: "Seelampur", price: "7 per page" },
    { id: 5, name: "Premium Prints", location: "Pitampura", price: "20 per page" },
    { id: 6, name: "Student Prints", location: "Gurugram", price: "10 per page" },
    { id: 7, name: "Budget Copy", location: "Rithala", price: "13 per page" },
    { id: 8, name: "OfficePrint", location: "Noida", price: "10 per page" },
    { id: 9, name: "Express Print", location: "Near Railway Station", price: "6 per page" },
    { id: 10, name: "SuperFast Print", location: "Aerocity", price: "5 per page" },
  ];

  const handleChooseShop = (shop) => {
    navigate("/upload-file", { state: { shop } });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Buyer Dashboard</h1>
      <p className="text-center text-gray-700 mb-6">Select a shop to place an order.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {shops.map((shop) => (
          <div key={shop.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{shop.name}</h2>
            <p>Location: {shop.location}</p>
            <p>Price: {shop.price}</p>
            <button
              onClick={() => handleChooseShop(shop)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Choose Shop
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyerDashboard;
