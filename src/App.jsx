import React, { useEffect, useState } from "react";
import About from "./components/projects/About";
import Footer from "./components/projects/Footer";
import Education from "./components/Education";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/projects/Projects";
import Skills from "./components/Skills";
import Contact from "./components/projects/Contact";
import Loader from "./components/Loading"; 
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import BackToTop from "./components/BackToTop";

function App() {
  const [loading, setLoading] = useState(true);
  const [animatedSections, setAnimatedSections] = useState({
    home: false,
    education: false,
    skills: false,
    projects: false,
    about: false,
    contact: false,
  });

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // Allow animations to trigger multiple times
    });
  }, []);

  // Simulated loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Handle section animation on scroll
  const handleScroll = () => {
    const sections = ['Home', 'Education', 'Skills', 'Projects', 'About', 'Contact'];
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          setAnimatedSections(prev => ({ ...prev, [section.toLowerCase()]: true }));
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-[#0b0d13] h-auto w-full overflow-hidden">
      <Nav />
      <div id="Home" className={`scroll-section ${animatedSections.home ? 'slideIn fadeUp' : ''}`} data-aos="fade-up">
        <Home />
      </div>
      <div id="Education" className={`scroll-section ${animatedSections.education ? 'slideInRight fadeUp' : ''}`} data-aos="fade-up">
        <Education />
      </div>
      <div id="Skills" className={`scroll-section ${animatedSections.skills ? 'slideInLeft fadeUp' : ''}`} data-aos="fade-up">
        <Skills />
      </div>
      <div id="Projects" className={`scroll-section ${animatedSections.projects ? 'slideInRight fadeUp' : ''}`} data-aos="fade-up">
        <Projects />
      </div>
      <div id="About" className={`scroll-section ${animatedSections.about ? 'slideInLeft fadeUp' : ''}`} data-aos="fade-up">
        <About />
      </div>
      <div id="Contact" className={`scroll-section ${animatedSections.contact ? 'slideInRight fadeUp' : ''}`} data-aos="fade-up">
        <Contact />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
