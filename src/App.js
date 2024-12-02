import React, { useRef, useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Testimonial from "./components/Testimonial";


function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const testimonialRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      <Header
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToTestimonial={() => scrollToSection(testimonialRef)}
        scrollToContact={() => scrollToSection(contactRef)}
        theme={theme}
      />

      <main className="container mx-auto px-4">
        <section id="home" ref={homeRef} className="py-16">
          <Home theme={theme} />
        </section>

        <section id="about" ref={aboutRef} className="py-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-blue-500 mr-2">+</span>
            ABOUT ME
            <span className="text-blue-500 ml-2">+</span>
          </h2>
          <About theme={theme} />
        </section>

        <section id="experience" ref={experienceRef} className="py-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-blue-500 mr-2">+</span>
            EXPERIENCE
            <span className="text-blue-500 ml-2">+</span>
          </h2>
          <ExperienceTimeline theme={theme} />
        </section>
        <section id="testimonial" ref={testimonialRef} className="py-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-blue-500 mr-2">+</span>
            Testimonials
            <span className="text-blue-500 ml-2">+</span>
          </h2>
          <Testimonial theme={theme} />
        </section>
        <section id="projects" ref={projectsRef} className="py-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-blue-500 mr-2">+</span>
            PROJECTS
            <span className="text-blue-500 ml-2">+</span>
          </h2>
          <Projects theme={theme} />
        </section>

        <section id="contact" ref={contactRef} className="py-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-blue-500 mr-2">+</span>
            CONTACT ME
            <span className="text-blue-500 ml-2">+</span>
          </h2>
          <ContactForm theme={theme} />
        </section>
      </main>

      <Footer theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
