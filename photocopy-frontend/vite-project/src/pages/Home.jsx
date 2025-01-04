import React from "react";
import logo from "../assets/printease logo.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleSellerClick = () => {
    navigate("/seller-login");
  };

  const handleUserClick = () => {
    navigate("/user-login");
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="w-1/2 bg-gradient-to-br from-purple-600 to-purple-800 flex flex-col justify-center items-center text-white p-12 animate-fadeInLeft">
        <div
          className="w-32 h-32 mb-6 bg-white rounded-full shadow-md animate-pulse"
          style={{
            backgroundImage: `url(${logo})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <h1 className="text-4xl font-bold uppercase animate-bounce">PrintEase</h1>
        <p className="mt-4 text-lg animate-fadeInUp">From Pixels to Prints</p>
        <p className="mt-2 text-sm text-gray-200">
          Your one-stop solution for all printing needs.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-12 animate-fadeInRight">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Sign In</h2>
        <p className="text-gray-600 mb-6">Please select your role</p>
        <div className="flex gap-6">
          <button
            onClick={handleSellerClick}
            className="w-32 h-32 flex flex-col justify-center items-center bg-purple-200 hover:bg-purple-300 rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl animate-fadeInUp"
          >
            <svg
              className="w-8 h-8 text-purple-600 mb-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h11m4 0h1a2 2 0 012 2v6a2 2 0 01-2 2h-6a2 2 0 01-2-2v-6a2 2 0 012-2h1m4-6h-5a2 2 0 00-2 2v4h9V6a2 2 0 00-2-2z"
              />
            </svg>
            <span className="text-sm font-semibold text-purple-800">Seller</span>
          </button>

          <button
            onClick={handleUserClick}
            className="w-32 h-32 flex flex-col justify-center items-center bg-purple-200 hover:bg-purple-300 rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl animate-fadeInUp"
          >
            <svg
              className="w-8 h-8 text-purple-600 mb-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 21v-2a4 4 0 00-8 0v2m8 0a4 4 0 004-4V9a4 4 0 00-4-4h-4a4 4 0 00-4 4v8a4 4 0 004 4z"
              />
            </svg>
            <span className="text-sm font-semibold text-purple-800">User</span>
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
