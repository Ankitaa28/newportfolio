import React from 'react';

const ProjectCards = ({ title, main, imageSrc, demoLink, sourceLink }) => {
  return (
    <div className='p-4 md:p-6 flex flex-col overflow-hidden w-full md:w-80 bg-[#2429486d] shadow-lg rounded-2xl 
      transition-transform duration-500 transform hover:scale-105 hover:shadow-2xl hover:bg-opacity-80'>
      
      {/* Image */}
      <div className='overflow-hidden rounded-md'>
        <img 
          className="p-4 h-56 w-full object-cover transition-transform duration-500 transform hover:scale-110 hover:brightness-110" 
          src={imageSrc} 
          alt={title} 
        /> 
      </div>

      {/* Title */}
      <h3 className='px-4 text-lg md:text-2xl font-bold leading-normal mt-4 text-white'>
        {title}
      </h3>

      {/* Description */}
      <p className='px-4 text-sm md:text-md leading-tight mt-2 text-gray-300'>
        {main}
      </p>

      {/* Buttons */}
      <div className='mt-6 p-2 flex flex-wrap justify-between gap-4'>
        
        <button className="text-white py-2 px-4 text-sm md:text-lg hover:opacity-90 hover:scale-105 duration-300 font-semibold rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all">
          <a href={demoLink} target="_blank" rel="noopener noreferrer">Demo</a>  
        </button>

        <button className="text-white py-2 px-4 text-sm md:text-lg hover:opacity-90 hover:scale-105 duration-300 font-semibold rounded-full bg-gradient-to-r from-green-500 to-teal-600 transition-all">
          <a href={sourceLink} target='_blank' rel="noopener noreferrer">Source Code</a>
        </button>

      </div>
    </div>
  );
}

export default ProjectCards;
