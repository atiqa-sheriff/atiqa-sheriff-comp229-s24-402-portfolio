/**
 * File name: Services.jsx
 * Student’s Name: Atiqa Sheriff
 * StudentID: 300507716
 * Date: 2024-05-26
 */

import React from "react";
import webdevImage from "./assets/webdev.webp";
import mobileAppImage from "./assets/mobile app.png";
import programmingImage from "./assets/programming.png";
import "./services.css";

function Services() {
  console.log("Services component rendered");
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-content">
        <div className="service-card">
          <h2>Web Development</h2>
          <img
            src={webdevImage}
            alt="Web Development"
            className="service-image"
          />
          <p>
            We offer professional web development services, creating responsive
            and user-friendly websites to meet your business needs.
          </p>
        </div>
        <div className="service-card">
          <h2>Mobile App Development</h2>
          <img
            src={mobileAppImage}
            alt="Mobile App Development"
            className="service-image"
          />
          <p>
            Our team specializes in mobile app development, building
            cross-platform applications for both iOS and Android devices.
          </p>
        </div>
        <div className="service-card">
          <h2>General Programming</h2>
          <img
            src={programmingImage}
            alt="General Programming"
            className="service-image"
          />
          <p>
            We provide general programming services, offering solutions for
            various programming needs including automation, data analysis, and
            more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
