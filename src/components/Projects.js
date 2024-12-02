import React from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Buggo",
    description: "A real-time bug tracking application with advanced features.",
    technologies: ["Next.js", "Redux", "Node.js", "MongoDB"],
    imageUrl: "/path-to-image.jpg",
    projectUrl: "#",
  },
  {
    title: "Todo",
    description: "A real-time todo application with advanced features.",
    technologies: ["HTML5", "CSS3"],
    imageUrl: "/path-to-image.jpg",
    projectUrl: "#",
  },
  {
    title: "Amazon Clone",
    description:
      "Explore an Amazon-inspired clone website with authentication, purchase capabilities, and a Redux-powered cart system.",
    technologies: ["React", "Firebase", "Stripe"],
    imageUrl: "/path-to-image.jpg",
    projectUrl: "#",
  },
  {
    title: "Save A Child",
    description:
      "Explore an Amazon-inspired clone website with authentication, purchase capabilities, and a Redux-powered cart system.",
    technologies: ["HTML5", "CSS", "JavaScript"],
    imageUrl: "/path-to-image.jpg",
    projectUrl: "#",
  },
  {
    title: "Save A Child",
    description:
      "Explore an Amazon-inspired clone website with authentication, purchase capabilities, and a Redux-powered cart system.",
    technologies: ["HTML5", "CSS", "JavaScript"],
    imageUrl: "/path-to-image.jpg",
    projectUrl: "#",
  },
  {
    title: "Save A Child",
    description:
      "Explore an Amazon-inspired clone website with authentication, purchase capabilities, and a Redux-powered cart system.",
    technologies: ["HTML5", "CSS", "JavaScript"],
    imageUrl: "/path-to-image.jpg",
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
