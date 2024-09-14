import React from 'react';

const ProjectCards = ({ title, main, imageSrc, demoLink, sourceLink }) => {
  return (
    <div className='p-4 md:p-6 flex flex-col overflow-hidden w-full md:w-80 bg-[#2429486d] shadow-xl shadow-black rounded-2xl'>
      
      {/* Image */}
      <img 
        className="p-4 h-56 w-full object-cover rounded-md overflow-hidden  transition-transform duration-500" 
        src={imageSrc} 
        alt={title} 
      /> 

      {/* Title */}
      <h3 className='px-4 text-lg md:text-2xl font-bold leading-normal mt-4'>
        {title}
      </h3>

      {/* Description */}
      <p className='px-4 text-sm md:text-md leading-tight mt-2'>
        {main}
      </p>

      {/* Buttons */}
      <div className='mt-4 p-2 flex flex-wrap justify-between gap-4'>
        
        <button className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300  font-semibold rounded-3xl bg-[#465697]">
          <a href={demoLink} target="_blank" rel="noopener noreferrer">Demo</a>  
        </button>

        <button className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300  font-semibold rounded-3xl bg-[#465697]">
          <a href={sourceLink} target='_blank' rel="noopener noreferrer">Source Code</a>
        </button>

      </div>
    </div>
  );
}

export default ProjectCards;
