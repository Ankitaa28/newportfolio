import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useEffect, useState } from 'react';

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        document.body.classList.toggle('overflow-hidden', menuOpen);
    }, [menuOpen]);

    // Smooth scroll function
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false); // Close the menu after clicking
    };

    return (
        <nav 
            className='flex fixed w-full bg-[#0b0d13] flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 shadow-md rounded-2xl z-50 shadow-slate-500'
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
                {['Home', 'Education', 'Skills', 'Projects', 'About', 'Contact'].map((item) => (
                    <li key={item} className="text-xl transition-all duration-300 p-1 md:p-0 hover:scale-110 cursor-pointer" onClick={() => scrollToSection(item)}>
                        {item}
                    </li>
                ))}
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
