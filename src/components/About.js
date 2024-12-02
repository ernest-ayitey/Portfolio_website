import React from "react";
import { User } from "lucide-react";
import "../styles/About.css"; // Ensure the path is correct
import profileImage from "../assets/images/okoyecharles.jpeg"; // Adjust the path if needed

const About = () => {
  return (
    <div className="about-container">
      <div className="main-container">
        <div className="column">
          <div className="image-container">
            <img src={profileImage} alt="Profile" className="profile-image" />
          </div>
        </div>
        <div className="introduction">
          <h1>Introduction</h1>
          <p>
            My name is <strong>Ayitey Ernest</strong>{" "}
            <User className="inline w-4 h-4" />. I'm a{" "}
            <h6>
            <strong>Full-Stack Developer</strong> (front-end heavy) based in
            Ghana. I spend most of my time designing graphics, coding up things
            for the web, and learning algorithms.
            </h6>
          </p>
          <p>
            My goal is to deliver, through code, unique and innovative solutions
            to complex problems. If my portfolio interests you, or you need an
            enthusiastic developer on your team,{" "}
            <a href="#" className="text-blue-500 hover:underline">
              I am available for hire
            </a>
            .
          </p>
          <div className="skills-container">
            <div>
              <h2>Languages & Technologies</h2>
              <ul>
                {[
                  "JavaScript",
                  "TypeScript",
                  "Python",
                  "React",
                  "Next.js",
                  "Express.js",
                  "MongoDB",
                  "Firebase",
                ].map((item) => (
                  <li key={item}>
                    <span></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Tools & Methods</h2>
              <ul>
                {[
                  "Git / Github",
                  "Figma",
                  "Spline",
                  "Vercel",
                  "Responsive Development",
                ].map((item) => (
                  <li key={item}>
                    <span></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
