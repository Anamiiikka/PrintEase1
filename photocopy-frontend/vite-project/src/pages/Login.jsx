import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthInput from "../components/AuthInput";


const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic (connect to API)
        console.log("Login Data:", formData);
        navigate("/buyer-dashboard");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <form onSubmit={handleSubmit} className="mt-4">
                    <AuthInput
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <AuthInput
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-sm text-center">
                    Dont have an account?{" "}
                    <a href="/register" className="text-blue-500 hover:underline">
                        Register
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;