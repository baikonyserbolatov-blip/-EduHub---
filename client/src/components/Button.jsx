import React from "react";
import "./Button.css";

const Button = ({ children, onClick, glow }) => {
  return (
    <button className={`btn ${glow ? "glow" : ""}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
