import React from "react";

export function Input({ className = "", ...props }) {
  return (
    <input
      className={`px-4 py-2 border border-gray-300 rounded-lg outline-none ${className}`}
      {...props}
    />
  );
}
