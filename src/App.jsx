import About from "./components/projects/About"
import Footer from "./components/projects/Footer"
import Education from "./components/Education"
import Home from "./components/Home"
import Nav from "./components/Nav"
import Projects from "./components/projects/Projects"
import Skills from "./components/Skills"
import Contact from "./components/projects/Contact"
// import AOS from 'aos';
// import 'aos/dist/aos.css';
function App() {
  

  return ( 
  <div className="bg-[#0b0d13] h-auto w-full overflow-hidden ">
   
 <Nav/>
 <Home/>
 <Education/>
 <Skills/>
 <Projects/>
 <About/>
 <Contact/>
 <Footer/>

  </div>)
    
    
 
}

export default App
