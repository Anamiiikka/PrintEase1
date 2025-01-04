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
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-gray-900 to-purple-900 flex flex-col items-center p-6">
      <h1 className="text-4xl font-extrabold text-yellow-400 mb-6 tracking-wide drop-shadow-lg">
        Buyer Dashboard
      </h1>
      <p className="text-gray-300 mb-8 text-lg text-center">
        Select a shop to place an order and get started with your prints!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {shops.map((shop) => (
          <div
            key={shop.id}
            className="relative bg-gradient-to-br from-purple-800 to-purple-700 p-6 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl opacity-80"
          >
          
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-900 opacity-40 blur-lg rounded-xl"></div>
            
            <div className="relative">
              <h2 className="text-2xl font-bold text-yellow-400 mb-2">
                {shop.name}
              </h2>
              <p className="text-gray-300 mb-1">
                <span className="font-semibold text-gray-400">Location:</span> {shop.location}
              </p>
              <p className="text-gray-300 mb-4">
                <span className="font-semibold text-gray-400">Price:</span> {shop.price}
              </p>
              <button
                onClick={() => handleChooseShop(shop)}
                className="w-full bg-pink-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-pink-700 transition duration-300 shadow-md"
              >
                Choose Shop
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyerDashboard;
