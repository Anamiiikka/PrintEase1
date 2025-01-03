import React from "react";
import PropTypes from "prop-types";

const AuthInput = ({ label, type, name, placeholder, value, onChange }) => (
    <div className="mb-4">
        <label htmlFor={name} className="block mb-1 text-sm font-medium text-gray-700">
            {label}
        </label>
        <input
            type={type}
            id={name}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </div>
);

AuthInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default AuthInput;