// components/BouncingLoader.js
import React from 'react';
import "./Loader.css";
const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0b0d13]">
      <div className="loader">
        <div className="ball bg-red-600" ></div>
        <div className="ball bg-yellow-500"></div>
        <div className="ball bg-green-700"></div>
        <div className="ball bg-blue-900"></div>
        <div className="ball bg-purple-800"></div>
      </div>
      <h2 className="text-white text-xl mt-4">Loading...</h2>
    </div>
  );
};

export default Loader;
