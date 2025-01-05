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
    navigate("/upload", { state: { shop } });
  };

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-purple-dark">
        Buyer Dashboard
      </h1>
      <p className="text-center text-gray-600 mb-8 text-lg">
        Browse shops and select one to place your order.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {shops.map((shop) => (
          <div
            key={shop.id}
            className="bg-purple-p3 p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 border-t-4 border-purple-dark"
          >
            <h2 className="text-2xl font-semibold text-purple-dark">{shop.name}</h2>
            <p className="text-gray-600 mt-2">📍 {shop.location}</p>
            <p className="text-gray-600 mt-1">💵 {shop.price}</p>
            <button
              onClick={() => handleChooseShop(shop)}
              className="mt-5 bg-purple-dark text-white py-2 px-4 rounded-full hover:bg-purple-600 transition-all duration-300 w-full"
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
