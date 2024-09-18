import React from "react";

const InputField = ({ label, type, id, placeholder, value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value} // Bind value to the state
        onChange={onChange} // Trigger onChange handler
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
