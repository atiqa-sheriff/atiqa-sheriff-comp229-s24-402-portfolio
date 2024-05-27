/**
 * File name: Projects.jsx
 * Student’s Name: Atiqa Sheriff
 * StudentID: 300507716
 * Date: 2024-05-26
 */

import React from "react";
import project1Image from "./assets/project1.png";
import project2Image from "./assets/project2.png";
import project3Image from "./assets/project3.png";
import "./project.css"; // Ensure you have a CSS file for styling

function Projects() {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-content">
        <div className="project-card">
          <h2>Assignment 1: Multiplication Table</h2>
          <img
            src={project1Image}
            alt="Assignment 1"
            className="project-image"
          />
          <p>
            This project is a dynamic multiplication table generator. Users can
            input the number of rows and columns to generate a custom
            multiplication table.
          </p>
          <a href="./assets/assignment1/assignment1.zip" download>
            <button>Download Project</button>
          </a>
        </div>
        <div className="project-card">
          <h2>Assignment 2: Photo Carousel</h2>
          <img
            src={project2Image}
            alt="Assignment 2"
            className="project-image"
          />
          <p>
            This project is a photo carousel that cycles through a collection of
            images. Users can navigate through the images using next and
            previous buttons.
          </p>
          <a href="./assets/Assignment 2/Assignment 2.zip" download>
            <button>Download Project</button>
          </a>
        </div>
        <div className="project-card">
          <h2>Assignment 3: Bug Smasher Game</h2>
          <img
            src={project3Image}
            alt="Assignment 3"
            className="project-image"
          />
          <p>
            This project is a fun and interactive bug smasher game. The speed
            increases each time the user squashes a bug, and the user scores
            points for each bug smashed.
          </p>
          <a
            href="./assets/Assignment 3- Bug Smasher/COMP125Assignment3 (1).docx"
            download
          >
            <button>Download Project</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
