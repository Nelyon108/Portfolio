import React, { useState, useRef, useEffect,  } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeaderContent from './components/HeaderContent'
import SkillsContent from './components/SkillsContent'
import ProjectsContent from './components/ProjectsContent'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'

function App() {
  const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
  // const [isIntersecting, setIsIntersecting] = useState(false);
  // const ref = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setIsIntersecting(entry.isIntersecting);
  //     },
  //     { rootMargin: "-300px" }
  //   );
  //   console.log(isIntersecting);

  //   if (ref.current) {
  //       observer.observe(ref.current);
  //   }

  //   return () => observer.disconnect();
  // }, [isIntersecting]);

  // useEffect(() => {
  //   if (isIntersecting) {
  //     console.log("is inter");
  //   } else {
  //     console.log("is not inter");
  //     // ref.current.querySelectorAll("div").forEach((el) => {
  //     //   el.classList.remove("slide-in");
  //     }
  // }, [isIntersecting]);

  const inputRef = React.createRef();

  const clickHandler = () => {
    inputRef.current.scrollIntoView({behavior:"smooth"});
  }

  const headerRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutMeRef = useRef(null);
  const contactRef = useRef(null);



  return (
    <>
      <Navbar
        headerRef={headerRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        aboutMeRef={aboutMeRef}
        // contactRef={contactRef}
      />
      <HeaderContent ref={headerRef}/>
      <AboutMe ref={aboutMeRef}/>
      <SkillsContent ref={skillsRef}/>
      <ProjectsContent ref={projectsRef}/>
      {/* <Contact ref={contactRef}/> */}
    </>
  )
}

export default App
