import React, { useState } from 'react';
import { RxDoubleArrowRight } from 'react-icons/rx';

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const educationData = [
    {
      title: "Senior Secondary",
      details: "Passed from M.P. Board in 2017 with 75%.",
    },
    {
      title: "Higher Secondary",
      details: "Passed from M.P. Board in 2019 with 68%.",
    },
    {
      title: "Graduation",
      details: "Bachelor of Science in Computer Science (BSc CS). Passed from Vikram University Ujjain in 2022 with 60%.",
    },
    {
      title: "Post Graduation",
      details: "Master of Computer Applications (MCA). Passed from MITM Ujjain in 2024 with 7.90 CGPA.",
    },
  ];

  return (
    <div id="Education" className="md:p-24 text-white overflow-hidden flex flex-col md:flex-row items-center md:flex-wrap justify-center bg-slate-400 mx-0 md:mx-20 bg-opacity-5 rounded-lg p-8 mb-10 transition-all duration-1000 cursor-pointer">
      
      <h1 className='text-2xl md:text-4xl font-bold text-white mb-8 md:mb-0 md:w-full text-center'>Education</h1>
      
      <div className='flex flex-col md:flex-row items-center justify-around w-full pl-10 pt-6 '>
        
        <img 
          className="md:h-80 w-full md:w-auto mb-8 md:mb-0 md:mr-10 object-contain transition-transform duration-500"
          src="src\components\images\happy-students-celebrating-graduation.png"
          alt="Graduation"
        />
        
        <div className="w-full md:w-2/3 items-center justify-around ">
          {educationData.map((item, index) => (
            <div key={index} className='mb-4 items-center justify-around'>
              <div 
                className='flex gap-3 py-4 items-center cursor-pointer  transition-colors duration-300 rounded-lg pl-72'
                onClick={() => toggleAccordion(index)}
              >
                <RxDoubleArrowRight size={30} className={`transition-transform duration-300 items-center ${activeIndex === index ? "rotate-90" : ""}`} />
                <div className={`w-full ${activeIndex === index ? 'text-white items-center justify-between' : ''}`}>
                  <h2 className='text-xl md:text-2xl font-semibold leading-normal hover:text-white items-center '>
                    {item.title}
                  </h2>
                </div>
              </div>
              {activeIndex === index && (
                <p className='text-sm md:text-md leading-tight pl-10 transition-opacity duration-300 pl-80'>
                  {item.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
