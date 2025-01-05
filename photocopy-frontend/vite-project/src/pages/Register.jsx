import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        confirmPassword: "",
        address: "",
    });

    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();
    const [formError, setFormError] = useState("");
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFormError("");

        if (name === "password" || name === "confirmPassword") {
            const { password, confirmPassword } = formData;
            const updatedPassword = name === "password" ? value : password;
            const updatedConfirmPassword =
                name === "confirmPassword" ? value : confirmPassword;

            if (updatedPassword !== updatedConfirmPassword) {
                setPasswordError("Passwords do not match!");
            } else if (updatedPassword.length < 5) {
                setPasswordError("Password must be at least 5 characters long!");
            } else {
                setPasswordError("");
            }
        }
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (
            !formData.name ||
            !formData.email ||
            !formData.password ||
            !formData.confirmPassword ||
            !formData.address
        ) {
            setFormError("All fields are required.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setPasswordError("Passwords do not match!");
            return;
        }

        if (formData.password.length < 5) {
            setPasswordError("Password must be at least 5 characters long!");
            return;
        }
    
        try {
            const response = await axios.post(
               "/register",
                {
                    fullname: formData.name,
                    email: formData.email,
                    password: formData.password,
                    phone: formData.phone,
                },
                { withCredentials: true }
            );
    
            console.log("Registration Successful:", response.data);
            alert("Registration successful!");
            navigate("/buyer-dashboard");
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
            alert(error.response?.data?.message || "Something went wrong!");
        }
    };
    

    return (
        <div className="flex items-center justify-center min-h-screen bg-[linear-gradient(to_right,_rgb(55,_59,_68),_rgb(66,_134,_244))] text-white">
            <div className="w-full max-w-md p-10 bg-[#D3D3D3] rounded-2xl shadow-2xl">
                <h2 className="text-3xl font-bold text-center text-[#a68e00]">
                    Register
                </h2>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-black">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 text-black bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
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
                            className="w-full px-4 py-2 text-black bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-black">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 text-black bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-black">
                            Phone
                        </label>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 text-black bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-black">
                            Address
                        </label>
                        <textarea
                            name="address"
                            placeholder="Enter your address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full px-4 py-2 text-black bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            rows="3"
                        />
                    </div>
                    {formError && (
                        <p className="text-red-600 text-sm mt-2 text-center">
                            {formError}
                        </p>
                    )}
                    {passwordError && (
                        <p className="text-red-600 text-sm mt-2 text-center">
                            {passwordError}
                        </p>
                    )}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 mt-6 text-lg font-semibold uppercase bg-gradient-to-br from-[#00adb5] to-[#006e73] text-white rounded-lg shadow-lg hover:bg-gradient-to-br hover:from-[#1ac1c8] hover:to-[#2e7c7a] transform transition"
                    >
                        Register
                    </button>
                </form>
                <p className="mt-6 text-sm text-center text-black">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-500 hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;
