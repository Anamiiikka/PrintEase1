import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BuyerDashboard from "./pages/BuyerDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Welcome to PrintEase</h1>} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;