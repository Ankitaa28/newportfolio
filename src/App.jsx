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

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,  // Duration of animations
      once: true,     // Whether animation should happen only once
      easing: 'ease-in-out',
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulated loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-[#0b0d13] h-auto w-full overflow-hidden transition-all duration-100">
      <Nav />
      <div id="Home" data-aos="fade-up">
        <Home />
      </div>

      {/* Education Section: Slide in from the left */}
      <div id="Education" className={`scroll-section`} data-aos="fade-right">
        <Education />
      </div>

      {/* Skills Section: Slide in from the right */}
      <div id="Skills" className={`scroll-section`} data-aos="fade-left">
        <Skills />
      </div>

      {/* Projects Section: Slide in from the left */}
      <div id="Projects" className={`scroll-section`} data-aos="fade-right">
        <Projects />
      </div>

      {/* About Section: Slide in from the right */}
      <div id="About" className={`scroll-section`} data-aos="fade-left">
        <About />
      </div>

      {/* Contact Section: Slide in from the left */}
      <div id="Contact" className={`scroll-section`} data-aos="fade-right">
        <Contact />
      </div>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
