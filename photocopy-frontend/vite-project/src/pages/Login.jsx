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
        <div className="flex items-center justify-center min-h-screen bg-[linear-gradient(to_right,_rgb(55,_59,_68),_rgb(66,_134,_244))] text-white">
            <div className="w-full max-w-md p-10 bg-[#D3D3D3] rounded-2xl shadow-2xl">
                <h2 className="text-3xl font-bold text-center text-[#a68e00]">
                    Login
                </h2>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-black">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 text-gray-900 bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-text"
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label className="block mb-2 text-sm font-medium text-black">
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 text-gray-900 bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-text"
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
                        className="w-full px-4 py-2 mt-4 text-white bg-gradient-to-br from-[#00adb5] to-[#006e73] shadow-2xl hover:bg-gradient-to-br hover:from-[#1ac1c8] hover:to-[#2e7c7a] transform transition"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-sm text-center text-black">
                    Don't have an account?{" "}
                    <a href="/register" className="text-blue-500 hover:underline">
                        Register
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
