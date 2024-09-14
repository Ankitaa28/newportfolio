import React from 'react';
import { FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { SiC, SiCplusplus, SiMongodb, SiTailwindcss, SiMysql, SiBootstrap } from 'react-icons/si';

const skills = [
  { icon: <FaHtml5 color="#E34F26" size={50} />, name: 'HTML5', level: 'Intermediate' },
  { icon: <FaCss3 color="#1572b6" size={50} />, name: 'CSS3', level: 'Intermediate' },
  { icon: <FaReact color="#16DAF8" size={50} />, name: 'React', level: 'Intermediate' },
  { icon: <FaJs color="#F7DF1E" size={50} />, name: 'JavaScript', level: 'Intermediate' },
  { icon: <SiBootstrap color="#7952b3" size={50} />, name: 'Bootstrap', level: 'Beginner' },
  { icon: <SiTailwindcss color="#38B2AC" size={50} />, name: 'Tailwind CSS', level: 'Intermediate' },
  { icon: <SiMysql color="#00758f" size={50} />, name: 'MySQL', level: 'Beginner' },
  { icon: <SiMongodb color="#47A248" size={50} />, name: 'MongoDB', level: 'Beginner' },
  { icon: <SiCplusplus color="#00549D" size={50} />, name: 'C++', level: 'Advanced' },
  { icon: <SiC color="#00549D" size={50} />, name: 'C', level: 'Advanced' },
];

const Skills = () => {
  return (
    
    <div id="Skills" className='text-white overflow-hidden flex flex-col items-center justify-center bg-slate-400 
    mx-0 md:mx-20 bg-opacity-5 rounded-lg p-12 '>
      <h1 className='text-2xl md:text-4xl font-bold text-white mb-8'>Skills</h1>
      
      <div className='flex flex-wrap items-center justify-center gap-8 overflow-hidden p-7'>
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className='group p-6 rounded-xl bg-slate-600 bg-opacity-10 transition-transform duration-300 transform hover:scale-110 hover:bg-slate-500 cursor-pointer relative shadow-xl shadow-black'>
            <div className='flex items-center justify-center '>
              {skill.icon}
            </div>
            <div 
              className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-100 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl'>
              <div className='text-center'>
                <div>{skill.name}</div>
                <div className='text-sm text-gray-300'>{skill.level}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
