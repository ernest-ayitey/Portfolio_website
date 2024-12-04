import React, { useState } from "react";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Import images
import microverseImage from "../assets/images/free_code_camp.png";
import universityOfMinnesotaImage from "../assets/images/Screenshot from 2024-12-04 10-56-18.png";
import linkedinLearningImage from "../assets/images/linkedin-learning-logo.png";

const ExperienceTimeline = ({ theme }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      date: "Sept 2024",
      logo: microverseImage,
      altText: "loughborough Logo",
      institution: "Free Code Camp",
      title: "Remote Developer Bootcamp",
      description:
        "Developed skills in remote pair programming using GitHub, industry-standard git-flow, and daily standups. Mastered algorithms, data structures, and full-stack development.",
      certificateLink:
        "https://www.freecodecamp.org/certification/fcc41837fba-6f65-42c1-921c-b93cbfeee359/javascript-algorithms-and-data-structures",
    },
    {
      date: "Sept 2024",
      logo: universityOfMinnesotaImage,
      altText: "University of Loughborough Logo",
      institution: "University of Loughborough",
      title: "Software Development Methodologies",
      description:
        "An online non-credit course authorized by the University of Loughborough and offered through Coursera, on Important Processes and Methodologies in Healthcare Digitalization.",
      certificateLink: "#",
    },
    {
      date: "Jul - Aug 2023",
      logo: linkedinLearningImage,
      altText: "LinkedIn Learning Logo",
      institution: "LinkedIn Learning",
      title: "Become a Software Developer",
      description:
        "A course that provides a broad perspective on core technologies for web development, software development, and databases. It introduced a bigger picture of how development careers work.",
      certificateLink: "#",
    },
  ];

  const nextExperience = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevExperience = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={`experience-timeline ${theme} p-6 max-w-6xl mx-auto`}>
      <h2 className="text-3xl font-bold text-center mb-4">
        My <span className="text-blue-600">experience</span> as a developer
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
        A display of my growth as a frontend developer, showcasing the progress
        I have achieved and the valuable experience I've acquired.
      </p>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
              <div className="md:w-1/3 flex flex-col items-center md:items-start mb-4 md:mb-0">
                <img
                  src={experiences[activeIndex].logo}
                  alt={experiences[activeIndex].altText}
                  className="w-24 h-24 object-cover rounded-full md:w-48 md:h-48 md:rounded-none mb-4"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold text-center md:text-left">
                  {experiences[activeIndex].institution}
                </h3>
                <h4 className="text-lg text-gray-600 dark:text-gray-300 text-center md:text-left">
                  {experiences[activeIndex].title}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {experiences[activeIndex].date}
                </p>
                <p className="text-gray-700 dark:text-gray-200 mb-4">
                  {experiences[activeIndex].description}
                </p>
                <a
                  href={experiences[activeIndex].certificateLink}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  <Award size={16} className="mr-2" />
                  Certificate of completion
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevExperience}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full bg-white dark:bg-gray-800 rounded-full p-2 shadow-md"
        >
          <ChevronLeft className="text-gray-600 dark:text-gray-300" />
        </button>
        <button
          onClick={nextExperience}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full bg-white dark:bg-gray-800 rounded-full p-2 shadow-md"
        >
          <ChevronRight className="text-gray-600 dark:text-gray-300" />
        </button>
      </div>

      <div className="flex justify-center mt-6">
        {experiences.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full mx-1 ${
              index === activeIndex
                ? "bg-blue-600"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
