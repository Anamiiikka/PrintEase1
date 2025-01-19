import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BuyerDashboard from "./pages/BuyerDashboard";
import Home from "./pages/Home";
import UploadFile from "./pages/UploadFile";
import SellerLogin from "./pages/SellerLogin";
import Payment from "./pages/Payment";
import OrderConfirmation from "./pages/OrderConfirmation";
import SellerRegister from "./pages/SellerRegister";
import SellerDashboard from "./pages/SellerDashboard";
import { AuthProvider } from "./components/AuthContext"; // Auth Context
import ProtectedRoute from "./components/ProtectedRoute"; // ProtectedRoute Component

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    
                    {/* Protected Routes */}
                    <Route
                        path="/buyer-dashboard"
                        element={
                            <ProtectedRoute>
                                <BuyerDashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/upload"
                        element={
                            <ProtectedRoute>
                                <UploadFile />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/seller-dashboard"
                        element={
                            <ProtectedRoute>
                                <SellerDashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/payment"
                        element={
                            <ProtectedRoute>
                                <Payment />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/order-confirmation"
                        element={
                            <ProtectedRoute>
                                <OrderConfirmation />
                            </ProtectedRoute>
                        }
                    />
                    
                    {/* Public Routes */}
                    <Route path="/seller-login" element={<SellerLogin />} />
                    <Route path="/seller-register" element={<SellerRegister />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
