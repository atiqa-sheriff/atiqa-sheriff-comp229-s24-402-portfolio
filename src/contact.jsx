/**
 * File name: contact.jsx
 * Student’s Name: Atiqa Sheriff
 * StudentID: 300507716
 * Date: 2024-05-26
 */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./contact.css";

function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      navigate("/");
    }, 3000);
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-content">
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            required
          ></textarea>
          <input type="submit" value="Send" />
        </form>
        {showPopup && <div className="popup">Message Sent!</div>}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Phone: 416-272-6054</p>
          <p>
            Email:{" "}
            <a href="mailto:sheriff.atiqa@gmail.com">sheriff.atiqa@gmail.com</a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/atiqa-sheriff-5b8a39201"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.linkedin.com/in/atiqa-sheriff-5b8a39201
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
