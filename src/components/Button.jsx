import React from "react";

const Button = ({ label, onClick, type = "submit", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
