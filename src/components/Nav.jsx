import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useEffect, useState } from 'react';

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        // Add or remove the class that prevents scrolling
        if (menuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [menuOpen]);

    return (
        <nav 
            className='flex fixed w-full bg-[#0b0d13] flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 shadow-md  rounded-2xl z-50  shadow-slate-500'
            role="navigation"
            aria-label="Main Navigation"
        >
            <span className="text-xl font-bold tracking-wide hover:scale-110 cursor-pointer transition-all duration-300">
                Portfolio
            </span>
            
            <ul 
                className={`mx-24 py-2 mt-4 font-semibold md:mt-5 bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6 p-10 mb-5 transition-all duration-500 ease-in-out ${menuOpen ? 'block' : 'hidden'}`}
                id="menu"
            >
                <a href="#Home">
                    <li className="text-xl transition-all duration-300 p-1 md:p-0 hover:scale-110 ">Home</li>
                </a>
                <a href="#Education">
                    <li className="text-xl transition-all duration-300 p-1 md:p-0 hover:scale-110 ">Education</li>
                </a>
                <a href="#Skills">
                    <li className="text-xl transition-all duration-300 p-1 md:p-0 hover:scale-110 ">Skills</li>
                </a>
                <a href="#Projects">
                    <li className="text-xl transition-all duration-300 p-1 md:p-0 hover:scale-110 ">Projects</li>
                </a>
                <a href="#About">
                    <li className="text-xl transition-all duration-300 p-1 md:p-0 hover:scale-110">About</li>
                </a>
                <a href="#Contact">
                    <li className="text-xl transition-all duration-300 p-1 md:p-0 hover:scale-110 ">Contact</li>
                </a>
            </ul>

            <button
                className='md:hidden absolute right-10 top-6 transition-all duration-300 mb-3'
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-controls="menu"
                aria-expanded={menuOpen}
                onClick={toggleMenu}
            >
                {menuOpen ? <RiCloseLine size={30} /> : <RiMenu2Line size={30} />}
            </button>
        </nav>
    );
}

export default Nav;
