import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        // Validate password length
        if (e.target.name === "password") {
            const password = e.target.value;
            setPasswordError(password.length >= 5 ? "" : "Password must be at least 5 characters long.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Ensure password meets criteria before proceeding
        if (passwordError) {
            alert("Please correct the password issue before proceeding.");
            return;
        }

        console.log("Login Data:", formData);
        navigate("/buyer-dashboard");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-purple-800 text-white">
            <div className="w-full max-w-md p-10 bg-white rounded-2xl shadow-2xl">
                <h2 className="text-3xl font-bold text-center text-purple-800">
                    Login
                </h2>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-purple-800">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 text-gray-900 bg-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-text"
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label className="block mb-2 text-sm font-medium text-purple-800">
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 text-gray-900 bg-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-text"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-9 right-3 text-gray-600 focus:outline-none"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                        {passwordError && (
                            <p className="text-red-600 text-sm mt-1">
                                {passwordError}
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 mt-4 text-white bg-gradient-to-br from-purple-600 to-purple-700 shadow-2xl hover:bg-gradient-to-br hover:from-purple-700 hover:to-purple-800 transform transition"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-sm text-center text-purple-800">
                    Don't have an account?{" "}
                    <a href="/register" className="text-purple-600 hover:underline">
                        Register
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
