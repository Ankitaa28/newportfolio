import React from 'react';
import ProjectCards from './ProjectCards';

const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl font-bold text-white'>Projects</h1>
      <h3 className='mt-4'>More complex projects will be added soon....</h3>
      
      <div className='py-12 px-8 flex flex-wrap gap-5'>
        <ProjectCards 
          title="Portfolio" 
          main="This is a simple and efficient web application built using React JS and styled with Tailwind CSS. The app fetches weather data from an external API, ensuring accurate and up-to-date information."
          imageSrc="images\people-analyzing-growth-charts-illustrated.png"
          demoLink="#Home"
          sourceLink="https://github.com/Ankitaa28/portfolio"
        />
      </div>
    </div>
  );
}

export default Projects;
