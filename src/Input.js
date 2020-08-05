import React from "react";
import "./styles.css";

export default function Input({ label, placeholder }) {
  return (
    <div className="input">
      <p>{label}</p>
      <input type="text" placeholder={placeholder} />
    </div>
  );
}
