import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import earthImage from "../assets/images/earth-black.png";
import clifImage from "../assets/images/image-p.png"
const testimonials = [
  {
    name: "Clifford Owusu",
    role: "Full-Stack Developer",
    location: "Ontario, Canada",
    lat: 51.2538,
    lng: -85.3232,
    image: clifImage,
    text: "Charles and I worked together on a couple of projects, and I appreciate his skills and discipline. He has the focus and skills that keep him and his team productive during intense crunch periods. I couldn't recommend him more for any business looking for new talent.",
  },
  {
    name: "Ishpaul Singh",
    role: "Frontend Developer",
    location: "New Delhi, India",
    lat: 28.6139,
    lng: 77.209,
    image: clifImage,
    text: "Charles is very knowledgeable when it comes to working with software tools and technologies, and he is also a very fast learner. I really enjoyed our pair-programming sessions together, as he was a helpful and understanding team member.",
  },
  {
    name: "Sidney Kaguli",
    role: "Full-Stack Developer",
    location: "Nairobi County, Kenya",
    lat: 30.2921,
    lng: 36.8219,
    image: clifImage,
    text: "I had the pleasure of working with Charles on a three-week project (with 3 other members), a full-stack reservation app with React and Rails. I was particularly impressed by Charles' ability to handle challenges, whether it's getting to the root of buggy code or getting people on board with ideas.",
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const { lng } = testimonials[activeIndex];
    const rotationAngle = (lng + 180) * (360 / 360);
    setRotation(rotationAngle);
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const { lat, lng } = testimonials[activeIndex];

  const locationIndicatorStyle = {
    top: `${((lat + 40) / 180) * 100}%`,
    left: `${((lng + 100) / 360) * 100}%`,
    transform: "translate(-50%, -50%)",
  };

  return (
    <section className="  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white-900 dark:text-white text-center mb-8">
          Collaborating{" "}
          <span className="text-blue-600 dark:text-blue-400">remotely</span>{" "}
          with professionals across the globe
        </h2>
        <p className="text-xl text-white-100 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Recommendations from talented developers with whom I have had the
          privilege of collaborating
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full max-w-md">
            <div className="relative aspect-square rounded-full overflow-hidden shadow-lg">
              <img
                src={earthImage}
                alt="Earth"
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                style={{ transform: `rotate(${rotation}deg)` }}
              />
              <div
                className="absolute w-3 h-3 bg-red-600 rounded-full"
                style={locationIndicatorStyle}
              />
            </div>
          </div>

          <div className="w-full max-w-lg">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
              <div className="flex items-center mb-4">
                <img
                  className="w-12 h-12 rounded-full mr-4"
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {testimonials[activeIndex].name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {testimonials[activeIndex].role}
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    {testimonials[activeIndex].location}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                "{testimonials[activeIndex].text}"
              </p>
              <div className="flex justify-between items-center">
                <button
                  onClick={handlePrevious}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
