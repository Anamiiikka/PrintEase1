import React from "react";
import logo from "../assets/printease logo.jpg"; // Ensure the logo path is correct
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleBuyerClick = () => {
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#1e1e2f] to-[#610361] text-white">
      <div className="container text-center bg-white/10 p-10 rounded-2xl shadow-xl max-w-md w-4/5">
        <div
          className="w-28 h-28 mx-auto mb-5 rounded-full border-2 border-[#f05454] shadow-lg"
          style={{
            backgroundImage: `url(${logo})`, // Correctly using the logo variable
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <h1 className="font-playfair text-4xl font-bold text-[#fdd835] uppercase tracking-wide text-shadow-lg">
          PrintEase
        </h1>
        <p className="text-[#d1d1d1] mt-3 text-lg">From Pixels to Prints</p>
        <div className="flex justify-center gap-5 mt-6">
          <button className="py-3 px-6 text-lg font-semibold uppercase rounded-full bg-gradient-to-br from-[#00adb5] to-[#006e73] shadow-md hover:-translate-y-1 hover:shadow-lg transform transition">
            Seller
          </button>
          <button
            onClick={handleBuyerClick}
            className="py-3 px-6 text-lg font-semibold uppercase rounded-full bg-gradient-to-br from-[#f05454] to-[#b20000] shadow-md hover:-translate-y-1 hover:shadow-lg transform transition"
          >
            Buyer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
