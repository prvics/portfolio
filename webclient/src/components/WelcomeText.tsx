import React from "react";
import "../styles/welcomeText.css";

interface WelcomeTextProps {
  isVisible: boolean;
}

export default function WelcomeText({ isVisible }: WelcomeTextProps) {
  return (
    <div className={`welcome-text ${isVisible ? "visible" : "not-visible"}`}>
      <h2>Welcome</h2>
      <h2>On</h2>
      <h2>My</h2>
      <h2>Portfolio</h2>
    </div>
  );
}
