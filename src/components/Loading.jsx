// components/BouncingLoader.js
import React from 'react';
import "./Loader.css";
const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0b0d13]">
      <div className="loader">
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
      </div>
      <h2 className="text-white text-xl mt-4">Loading...</h2>
    </div>
  );
};

export default Loader;
