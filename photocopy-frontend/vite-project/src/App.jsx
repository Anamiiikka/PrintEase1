import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BuyerDashboard from "./pages/BuyerDashboard";
import Home from "./pages/Home";
import UploadFile from "./pages/UploadFile";
import SellerLogin from "./pages/SellerLogin";
import Payment from "./pages/payment";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
        <Route path="/upload" element={<UploadFile />} />
        <Route path="/seller-login" element={<SellerLogin />} />
        <Route path="/payment" element={<Payment />} />

      </Routes>
    </Router>
  );
};

export default App;