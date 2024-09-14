import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="Footer" className="flex flex-col md:flex-row justify-around bg-[#0a0c15] text-white p-6 md:p-10 items-center">
      
      <div className="text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-2xl md:text-4xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-lg font-normal mt-2">
          Feel free to reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-lg space-y-2 md:space-y-4">
        <li className="flex gap-2 items-center">
          <a href="mailto:vishwakarma102ankita@gmail.com" className="flex items-center">
            <MdOutlineEmail size={20} />
            <span className="ml-2">myemail@gmail.com</span>
          </a>
        </li>
        <li className="flex gap-2 items-center">
          <a href="https://www.linkedin.com/in/ankita-vishwakarma-018a82298/" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <CiLinkedin size={20} />
            <span className="ml-2">linkedin.com/in/username</span>
          </a>
        </li>
        <li className="flex gap-2 items-center">
          <a href="https://github.com/Ankitaa28" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <FaGithub size={20} />
            <span className="ml-2">github.com/username</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
