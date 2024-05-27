/**
 * File name: Home.jsx
 * Student’s Name: Atiqa Sheriff
 * StudentID: 300507716
 * Date: 2024-05-26
 */

import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Atiqa Sheriff</h1>
      <div className="mission-statement">
        <p>
          Empowering businesses and individuals through innovative web and
          mobile solutions. Our mission is to deliver high-quality,
          user-friendly, and scalable applications that meet the unique needs of
          our clients. We are committed to excellence, creativity, and
          continuous improvement, ensuring that our clients achieve their goals
          and exceed their expectations.
        </p>
      </div>
      <div className="links-container">
        <Link to="/about" className="home-link">
          About Me
        </Link>
      </div>
    </div>
  );
}

export default Home;
