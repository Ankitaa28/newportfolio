import React from 'react';
import resume from './resume/resume.pdf';

const About = () => {
  return (
    <div id="About" className='text-white overflow-hidden md:flex items-center md:flex-wrap justify-center bg-slate-400 
    mx-0 md:mx-20 bg-opacity-5 rounded-lg p-8 md:p-12 transition-all duration-300'>
      
      {/* Section Title */}
      <h1 className='text-2xl md:text-4xl font-bold mb-6 md:mb-10'>About</h1>
      
      <div className='md:flex items-center justify-between w-full'>
        
        {/* About Image */}
        <img 
          className="md:h-80 w-full md:w-1/2 rounded-lg object-cover mb-6 md:mb-0" 
          src="public\images\modern-productivity-concept-with-flat-design.png" 
          alt="Productivity Concept"
        />
        
        {/* About Description */}
        <div className='md:w-1/2 md:pl-10'>
          <p className='text-sm md:text-xl leading-tight mb-6'>
            I am a frontend developer who creates clean, responsive, and user-friendly websites. Check out my projects to see how I turn ideas into engaging web experiences.
          </p>
          
          {/* Buttons */}
          <div className='flex flex-wrap gap-4'>
            {/* <button className='bg-emerald-500 text-white p-3 rounded-2xl hover:text-emerald-500 hover:bg-white transition-all duration-300'>
              <a href={resume} download={resume}>Download CV</a>
            </button> */}
            
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
