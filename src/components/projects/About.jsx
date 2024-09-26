import React, { useEffect, useState } from 'react';
import resume from './resume/resume.pdf';

const About = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
    }, 100); // Delay for fade-in effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      id="About" 
      className={`text-white overflow-hidden md:flex items-center md:flex-wrap justify-center bg-slate-400 
      mx-0 md:mx-20 bg-opacity-5 rounded-lg p-8 md:p-12 transition-transform duration-500 
      ${fade ? 'opacity-100 transform translate-y-0' : 'opacity-0 translate-y-5'}`}
      style={{
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}
    >
      {/* Section Title */}
      <h1 className='text-2xl md:text-4xl font-bold mb-6 md:mb-10 text-center transition-transform duration-300 transform hover:scale-110'>
        About
      </h1>

      <div className='md:flex items-center justify-between w-full'>
        
        {/* About Image */}
        <img 
          className="md:h-80 w-full md:w-1/2 rounded-lg object-cover mb-6 md:mb-0 transition-transform duration-300 transform hover:scale-105" 
          src="images/modern-productivity-concept-with-flat-design.png" 
          alt="Productivity Concept"
        />
        
        {/* About Description */}
        <div className='md:w-1/2 md:pl-10'>
          <p className='text-sm md:text-xl leading-tight mb-6 text-justify transition-all duration-300 hover:text-gray-300'>
            I am a frontend developer who creates clean, responsive, and user-friendly websites. Check out my projects to see how I turn ideas into engaging web experiences.
          </p>
          
          {/* Buttons */}
          <div className='flex flex-wrap gap-4'>
            <button className='bg-emerald-500 text-white p-3 rounded-2xl hover:text-emerald-500 hover:bg-white transition-all duration-300'>
              <a href={resume} target="_blank" rel="noopener noreferrer">View Resume</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
