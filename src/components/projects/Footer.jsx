import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { useState } from 'react';

const Footer = () => {
  const [fadeIn, setFadeIn] = useState(false);

  // Trigger fade-in effect when the component mounts
  React.useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100); // Delay for effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      id="Footer" 
      className={`flex flex-col md:flex-row justify-around bg-[#0a0c15] text-white p-6 md:p-10 items-center transition-opacity duration-500 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} 
      style={{ transition: 'opacity 0.5s ease, transform 0.5s ease' }}
    >
      <div className="text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-2xl md:text-4xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-lg font-normal mt-2">
          Feel free to reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-lg space-y-2 md:space-y-4">
        <li className="flex gap-2 items-center">
          <a 
            href="mailto:vishwakarma102ankita@gmail.com" 
            className="flex items-center hover:text-gray-300 transition duration-300"
          >
            <MdOutlineEmail size={20} className="transition-transform duration-300 hover:scale-110" />
            <span className="ml-2">myemail@gmail.com</span>
          </a>
        </li>
        <li className="flex gap-2 items-center">
          <a 
            href="https://www.linkedin.com/in/ankita-vishwakarma-018a82298/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center hover:text-gray-300 transition duration-300"
          >
            <CiLinkedin size={20} className="transition-transform duration-300 hover:scale-110" />
            <span className="ml-2">linkedin.com/in/username</span>
          </a>
        </li>
        <li className="flex gap-2 items-center">
          <a 
            href="https://github.com/Ankitaa28" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center hover:text-gray-300 transition duration-300"
          >
            <FaGithub size={20} className="transition-transform duration-300 hover:scale-110" />
            <span className="ml-2">github.com/username</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
