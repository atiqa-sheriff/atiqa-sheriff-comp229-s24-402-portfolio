/**
 * File name: About.jsx
 * Student’s Name: Atiqa Sheriff
 * StudentID: 300507716
 * Date: 2024-05-26
 */

import React from "react";
import atiqaImage from "./assets/atiqa.jpeg";
import "./about.css"; // Ensure you import the new CSS file

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="about-content">
        <img src={atiqaImage} alt="Atiqa Sheriff" className="about-image" />
        <div className="about-text">
          <p>
            Hi, I'm Atiqa Sheriff from Maple, Ontario. I love helping people and
            have a knack for solving problems and managing my time effectively.
            I’ve got experience in customer service, sales, and running teams.
            I’m also pretty tech-savvy with tools like Sales Force, Slack, Zoom,
            Google Suite, JIRA, and Figma. I hold a degree in Human Resources
            Management from York University and have taken various courses in
            tech sales and project management. On the side, I run a home baking
            business called As Easy As Cake.
          </p>
          <div className="about-button">
            <a href="/Atiqa_Sheriff_Resume.pdf" download>
              <button>Download my Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
