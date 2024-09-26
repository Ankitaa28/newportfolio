import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import TextChange from '../assets/TextChanger';

const Home = () => {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      id="Home"
      className='text-white flex flex-col md:flex-row justify-between items-center p-5 md:p-20'
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.6 }} // Adjust the duration as needed
    >
      <motion.div
        className='w-full md:w-7/12 p-5 mt-10 md:mt-20'
        variants={textVariants}
        transition={{ duration: 0.6, delay: 0.2 }} // Delay for sequential animation
      >
        <h1 className='text-3xl md:text-6xl font-bold leading-normal tracking-tighter text-center md:text-left'>
          <TextChange />
        </h1>
        <p className='text-sm md:text-2xl tracking-tighter mt-5 text-center md:text-left'>
          I am a web developer, I create visually appealing websites using Tailwind and React JS.
        </p>
        {/* Uncomment the button if needed */}
        {/* <button className='mt-5 md:mt-10 text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-slate-700'>
          Contact
        </button> */}
      </motion.div>
      <motion.div
        className='w-full md:w-5/12 flex justify-center md:justify-end'
        variants={imageVariants}
        transition={{ duration: 0.6, delay: 0.4 }} // Delay for sequential animation
      >
        <img className="w-3/4 md:w-1/2 mt-10 md:mt-20" src="images/animation-character-portrait-woman-pose-flat-design.png" alt="A character illustration of a woman in a dynamic pose" />
      </motion.div>
    </motion.div>
  );
};

export default Home;
