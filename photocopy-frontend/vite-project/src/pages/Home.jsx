import React from "react";
import logo from "../assets/printease logo.jpg";

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[linear-gradient(to_right,_rgb(55,_59,_68),_rgb(66,_134,_244))] text-white">
      <div className="container text-center bg-[#A9A9A9] p-12 rounded-2xl shadow-2xl max-w-lg w-3/5">
        <div
          className="w-32 h-32 mx-auto mb-6 rounded-full border-2 border-[#f05454] shadow-lg"
          style={{
            backgroundImage: `url(${logo})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <h1 className="font-playfair text-4xl font-bold text-[#fdd835] uppercase tracking-wide text-shadow-lg">
          PrintEase
        </h1>
        <p className="text-white mt-3 text-lg">From Pixels to Prints</p>
        <div className="flex justify-center gap-6 mt-8">
          <button className="py-3 px-6 text-lg font-semibold uppercase rounded-full bg-gradient-to-br from-[#00adb5] to-[#006e73] shadow-2xl hover:bg-gradient-to-br hover:from-[#1ac1c8] hover:to-[#2e7c7a] hover:shadow-2xl transform transition duration-300 hover:scale-105">
            Seller
          </button>
          <button className="py-3 px-6 text-lg font-semibold uppercase rounded-full bg-gradient-to-br from-[#f05454] to-[#b20000] shadow-2xl hover:bg-gradient-to-br hover:from-[#f06c6c] hover:to-[#9e0000] hover:shadow-2xl transform transition duration-300 hover:scale-105">
            User
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
