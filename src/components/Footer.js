import React from "react";
import { Moon, Sun, Laptop } from "lucide-react";
import "../styles/Footer.css";

const Footer = ({ theme, toggleTheme }) => {
  return (
    <footer
      className={`footer ${theme === "dark" ? "dark-theme" : "light-theme"}`}
    >
      <div className="logo_theme_container">
        <div className="logo">
          <p>EA.</p>
        </div>
        <div className="switcher">
          <div className="theme-switcher">
            <button
              className="theme-button"
              onClick={() => toggleTheme("dark")}
            >
              <Moon size={20} />
            </button>
            <button
              className="theme-button"
              onClick={() => toggleTheme("light")}
            >
              <Sun size={20} />
            </button>
            <button className="theme-button">
              <Laptop size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="sub-container">
        <div className="social-links">
          <a href="/" className="social-link">
            <svg viewBox="0 0 16 15" className="icon">
              <path d="M9.5,6.8l5.8-6.2h-1.4l-5,5.4l-4-5.4H0l6.2,8.2L0,15.5h1.4l5.4-5.9l4.4,5.9H16L9.5,6.8z M2.1,1.6h2.2l9.7,12.9h-2.2L2.1,1.6z" />
            </svg>
            <span className="socials">X</span>
          </a>
          <a href="/" className="social-link">
            <svg viewBox="0 0 24 24" className="icon">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            <span>Github</span>
          </a>
          <a href="/" className="social-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 193"
              className="icon"
            >
              <path
                fill="#4285f4"
                d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z"
              ></path>
              <path
                fill="#34a853"
                d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z"
              ></path>
              <path
                fill="#ea4335"
                d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"
              ></path>
              <path
                fill="#fbbc04"
                d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z"
              ></path>
              <path
                fill="#c5221f"
                d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z"
              ></path>
            </svg>
            <span>Gmail</span>
          </a>
          <a href="/" className="social-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="icon"
            >
              <path
                fill="#0a66c2"
                d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
              ></path>
            </svg>
            <span>Linkedin</span>
          </a>
        </div>
        <div className="footer-text">
          Built with ❤️ by <span className="author-name">Ernest Ayitey</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
