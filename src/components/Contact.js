// src/pages/Contact.js
import React from "react";
import ContactForm from "./ContactForm";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <h1>Get in Touch</h1>
      <p>
        I'm always open to new opportunities and collaborations. Feel free to
        reach out!
      </p>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <ul>
          <li>Email: ernestayitey65@gmail.com</li>
          <li>Phone: +233241899089</li>
          <li>Location: Ghana</li>
        </ul>
      </section>

      <section className="social-links">
        <h2>Connect with Me</h2>
        <ul>
          <li>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
      </section>

      <section className="contact-form-section">
        {/* <h2>Send Me a Message</h2> */}
        {/* <ContactForm /> */}
      </section>
    </div>
  );
}

export default Contact;
