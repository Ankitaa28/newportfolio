// components/BackToTop.js
import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-6 right-6 bg-[#0b0d13] text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <MdKeyboardArrowUp size={30} />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
