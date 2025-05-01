import React, { useState } from "react";
import "../styles/contactHamburger.css";

export default function ContactHamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        className={`hamburger-icon ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`hamburger-container ${isOpen ? "open" : ""}`}>
        <ul>
          <li>Contact</li>
          <li>Definitely not rickroll</li>
        </ul>
      </div>
    </>
  );
}
