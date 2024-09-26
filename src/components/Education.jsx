import React, { useState } from 'react';
import { RxDoubleArrowRight } from 'react-icons/rx';
import { motion, AnimatePresence } from 'framer-motion'; // For animations

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
    <motion.div
      id="Education"
      className="p-10 md:p-24 bg-slate-400 bg-opacity-5 text-slate-800 rounded-lg shadow-xl mx-auto my-10 max-w-7xl  md:mx-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">Education</h1>

      <div className="flex flex-col md:flex-row items-center justify-around">
        {/* Image Section */}
        <motion.img
          className="md:h-80 w-full md:w-1/2 mb-8 md:mb-0 rounded-lg hover:scale-105 transition-transform duration-500"
          src="images/happy-students-celebrating-graduation.png"
          alt="Graduation"
          whileHover={{ scale: 1.05 }} // Subtle hover scaling effect
        />

        {/* Accordion Section */}
        <div className="w-full md:w-1/2">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="mb-6 p-6 bg-black rounded-lg  border-l-4 border-slate-700 bg-opacity-25"
              whileHover={{ scale: 1.02 }} // Slight hover scale effect
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="flex justify-between items-center cursor-pointer transition-colors duration-300"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <h2 className="text-xl md:text-2xl font-semibold text-white">{item.title}</h2>
                <RxDoubleArrowRight
                  size={25}
                  color='white'
                  className={`transition-transform duration-300 ${activeIndex === index ? 'rotate-90' : ''}`}
                />
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.p
                    className="text-md md:text-lg text-white mt-4 pl-5"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.details}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
