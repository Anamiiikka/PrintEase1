import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SellerLogin = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [idError, setIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [serverError, setServerError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    let isValid = true;

    // Reset errors
    setIdError("");
    setPasswordError("");
    setServerError("");

    // Validation
    if (!id.includes("@")) {
      setIdError("Please enter a valid email address.");
      isValid = false;
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      isValid = false;
    }

    if (isValid) {
      try {
        const response = await axios.post(
          "/api/v1/users/sellerlogin", // Replace with your backend URL
          { email: id, password }
        );

        // Handle successful login
        console.log("Login successful:", response.data);

        // Store token in local storage or cookies
        localStorage.setItem("token", response.data.token);

        // Navigate to seller dashboard
        navigate("/seller-dashboard");
      } catch (error) {
        console.error("Error during login:", error);
        if (error.response) {
          setServerError(error.response.data.message || "Login failed.");
        } else {
          setServerError("An error occurred. Please try again later.");
        }
      }
    }
  };

  //axios
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center relative bg-[url('./public/bg.png')]">
      {/* Form container */}
      <div className="bg-white bg-opacity-80 p-8 rounded shadow-lg w-full max-w-sm z-10">
        <h2 className="text-2xl font-bold text-center mb-6">Seller Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Enter your ID"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
            />
            {idError && <p className="text-red-500 text-sm mt-1">{idError}</p>}
          </div>
          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>
          <div className="text-right mb-4">
            <a href="#" className="text-blue-500 hover:underline text-sm">
              Forgot Password?
            </a>
          </div>
          <button 
            type="submit"
            className="w-full bg-purple-dark hover:bg-purple-p1 text-white py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <a href="/seller-register" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default SellerLogin;
