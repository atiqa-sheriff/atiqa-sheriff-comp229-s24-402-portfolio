/**
 * File name: Layout.jsx
 * Student’s Name: Atiqa Sheriff
 * StudentID: 300507716
 * Date: 2024-05-26
 */

import React from "react";
import { Link } from "react-router-dom";
import logo from "../src/assets/logo.png"; // Adjusted path
import "./layout.css"; // Ensure you import the new CSS file

function Layout() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Layout;
