import React from "react";
import { ExternalLink } from "lucide-react";
import dstoreImage from "../assets/images/wms_guide_hero.png"; // Adjust the path if needed
import todoImage from "../assets/images/Screenshot from 2024-12-04 09-27-32.png";
import wellnessImage from "../assets/images/Screenshot from 2024-12-04 09-36-00.png";
import qrImage from "../assets/images/Screenshot from 2024-12-04 09-39-40.png";
import blogImage from "../assets/images/Screenshot from 2024-12-04 09-41-13.png";
import businessImage from "../assets/images/Screenshot from 2024-12-04 09-42-28.png";
const projects = [
  {
    title: "Dstore",
    description:
      "A real-time inventory tracking application with advanced features.",
    technologies: ["Ruby on rails", "javascript", "Mysql", "bootstrap5"],
    imageUrl: dstoreImage,
    projectUrl: "https://dstore.devdexsoftware.com",
  },
  {
    title: "Todo",
    description: "A real-time todo application with advanced features.",
    technologies: ["HTML5", "CSS3"],
    imageUrl: todoImage,
    projectUrl: "#",
  },
  {
    title: "GHINGER WELLNESS",
    description:
      "Discover a holistic approach to health and happiness with Ghinger Wellness, your personal wellness companion.",
    technologies: ["Ruby on rails", "mysql", "tailwind"],
    imageUrl: wellnessImage,
    projectUrl: "#",
  },
  {
    title: "PRODUCT PREVIEW CARD",
    description: "Explore an inspired frontend mentor project.",
    technologies: ["HTML5", "CSS", "JavaScript"],
    imageUrl: blogImage,
    projectUrl: "#",
  },
  {
    title: "BUSINESS CARD ",
    description: "Frontend mentor project.",
    technologies: ["HTML5", "CSS"],
    imageUrl: businessImage,
    projectUrl: "#",
  },
  {
    title: "QR CODE COMPONENT",
    description: "Frontend Mentor - QR code component",
    technologies: ["HTML5", "CSS"],
    imageUrl: qrImage,
    projectUrl: "#",
  },
  // Add more projects here
];

const TechTag = ({ tech }) => (
  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
    {tech}
  </span>
);

const WorkItem = ({
  title,
  description,
  technologies,
  imageUrl,
  projectUrl,
}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
    <img className="w-full h-45 object-cover" src={imageUrl} alt={title} />
    <div className="p-5">
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-700 mb-4 dark:text-gray-300">{description}</p>
      <div className="mb-4">
        {technologies.map((tech, index) => (
          <TechTag key={index} tech={tech} />
        ))}
      </div>
      <a
        href={projectUrl}
        className="inline-flex items-center text-blue-600 hover:underline dark:text-blue-400"
      >
        View Project
        <ExternalLink className="ml-1" size={16} />
      </a>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section className="border border-gray-300 py-16 px-4 sm:px-6 lg:px-8 dark:bg-red-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-blue-900 mb-2 dark:text-white">
          Featured Work
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 dark:text-white">
          A curated collection of my most exceptional work
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <WorkItem key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
