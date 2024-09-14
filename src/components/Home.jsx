import React from 'react'
import TextChange from '../assets/TextChanger'

const Home = () => {
  return (
    <div id="Home" className='text-white flex flex-col md:flex-row justify-between items-center p-5 md:p-20'>
      <div className='w-full md:w-7/12 p-5 mt-10 md:mt-20'>
        <h1 className='text-3xl md:text-6xl font-bold leading-normal tracking-tighter text-center md:text-left'>
          <TextChange className=""/>
        </h1>
        <p className='text-sm md:text-2xl tracking-tighter mt-5 text-center md:text-left'>
          I am a web developer, I create visually appealing websites using Tailwind and React JS.
        </p>
        {/* Uncomment the button if needed */}
        {/* <button className='mt-5 md:mt-10 text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-slate-700'>
          Contact
        </button> */}
      </div>
      <div className='w-full md:w-5/12 flex justify-center md:justify-end'>
        <img className="w-3/4 md:w-1/2 mt-10 md:mt-20" src="src\components\images\animation-character-portrait-woman-pose-flat-design.png" alt="Character" />
      </div>
    </div>
  )
}

export default Home
