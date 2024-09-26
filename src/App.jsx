import React, { useEffect, useState } from "react";
import About from "./components/projects/About";
import Footer from "./components/projects/Footer";
import Education from "./components/Education";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/projects/Projects";
import Skills from "./components/Skills";
import Contact from "./components/projects/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';
import BackToTop from "./components/BackToTop"; 
import Loading from "./components/Loading"; // Import the Loading component
import "./App.css";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });

    const timer = setTimeout(() => {
      setLoading(false); // Simulate loading time
    }, 3000); // Adjust the time to your needs (e.g., 3000 ms = 3 seconds)

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />; // Show loading component while loading
  }

  return (
    <div className="bg-[#0b0d13] h-auto w-full overflow-hidden">
      <Nav />
      <div className="scroll-section" data-aos="fade-up">
        <Home />
      </div>
      <div className="scroll-section" data-aos="fade-up">
        <Education />
      </div>
      <div className="scroll-section" data-aos="fade-up">
        <Skills />
      </div>
      <div className="scroll-section" data-aos="fade-up">
        <Projects />
      </div>
      <div className="scroll-section" data-aos="fade-up">
        <About />
      </div>
      <div className="scroll-section" data-aos="fade-up">
        <Contact />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
