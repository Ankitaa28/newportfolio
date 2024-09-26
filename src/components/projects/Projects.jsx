import React, { useState, useEffect } from 'react';
import ProjectCards from './ProjectCards';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Project Data
  const projects = [
    {
      title: "Portfolio",
      main: "A responsive portfolio built using React JS and styled with Tailwind CSS.",
      imageSrc: "images/people-analyzing-growth-charts-illustrated.png",
      demoLink: "#Home",
      sourceLink: "https://github.com/Ankitaa28/newportfolio.git",
    },
    {
      title: "Weather App",
      main: "A weather app using React JS that fetches live weather data from an external API.",
      imageSrc: "images/people-analyzing-growth-charts-illustrated.png",
      demoLink: "#Home",
      sourceLink: "#",
    },
    {
      title: "E-commerce App",
      main: "A simple e-commerce application showcasing React, Redux, and Tailwind integration.",
      imageSrc: "images/people-analyzing-growth-charts-illustrated.png",
      demoLink: "#Home",
      sourceLink: "#",
    },
  ];

  // Timer for automatic slide change
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, [currentIndex]);

  // Move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  // Move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  // Update current slide index when dots are clicked
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div id='Projects' className='p-10 md:p-24 text-white bg-gray-400 bg-opacity-5 my-10 overflow-hidden rounded-lg'>
      {/* Section Title */}
      <h1 className='text-2xl md:text-4xl font-bold text-white text-center'>Projects</h1>
      <h3 className='mt-4 text-center text-gray-400'>More complex projects will be added soon...</h3>

      {/* Slider */}
      <div className='relative w-full flex flex-col items-center justify-center mt-12'>
        {/* Slide Wrapper */}
        <div 
          className='flex transition-transform duration-700 ease-in-out w-full md:w-1/2' 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {projects.map((project, index) => (
           <div key={index} className='w-full flex-shrink-0 flex justify-center p-2 md:p-0'>
           <ProjectCards
             title={project.title}
             main={project.main}
             imageSrc={project.imageSrc}
             demoLink={project.demoLink}
             sourceLink={project.sourceLink}
           />
         </div>
         
          ))}
        </div>

        {/* Navigation Buttons */}
        <button 
          className='absolute left-4 transform -translate-y-1/2 top-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-100 transition-all duration-300'
          onClick={prevSlide}
        >
          <FaArrowLeft size={20} />
        </button>
        <button 
          className='absolute right-4 transform -translate-y-1/2 top-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-100 transition-all duration-300'
          onClick={nextSlide}
        >
          <FaArrowRight size={20} />
        </button>

        {/* Pagination Dots */}
        <div className='flex justify-center mt-6'>
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`mx-2 w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-500'} transition-colors duration-300`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
