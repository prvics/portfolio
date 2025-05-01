import React from "react";
import "../styles/sideIntro.css";
import profilePic from "../assets/1.jpg";

interface WelcomeTextProps {
  isVisible: boolean;
}

export default function SideIntro({ isVisible }: WelcomeTextProps) {
  return (
    <div className={`side-intro ${isVisible ? "visible" : "not-visible"}`}>
      <div className="links">
        <a
          href="https://www.linkedin.com/in/prvics/"
          target="_blank"
          rel="noopener noreferrer"
          className="external-link"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/prvics"
          target="_blank"
          rel="noopener noreferrer"
          className="external-link"
        >
          GitHub
        </a>
      </div>

      <img src={profilePic} alt="☹️" className="portfolio-pic" />

      <div className="about-me">
        <h3>About Me</h3>
        <p>
          My strengths lie in my patience and composure in various situations,
          as well as my strong ability to collaborate effectively as part of a
          team. I am also quick to adapt to new challenges and eager to learn,
          which helps me continuously grow and contribute to any project I am
          involved in. I am particularly skilled in JavaScript and React, which
          I use confidently and effectively in projects.
        </p>
      </div>
    </div>
  );
}
