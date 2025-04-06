import React from "react";

export function Button({ children, className = "", variant = "solid", ...props }) {
  const baseStyle = "inline-flex items-center justify-center font-medium rounded-full transition";
  const styles = {
    solid: "bg-black text-white hover:opacity-90",
    ghost: "bg-transparent text-black hover:bg-gray-100",
  };

  return (
    <button className={`${baseStyle} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
