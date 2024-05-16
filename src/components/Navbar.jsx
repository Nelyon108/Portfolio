import React, { useState, useEffect, useRef } from 'react';
import logo from "../assets/react.svg";

export default function Navbar({ headerRef, skillsRef, projectsRef, aboutMeRef}) {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    // useEffect(() => {
    //     const onScroll = () => {
    //         if (window.scrollY <= 500) {

    //             setScrolled(true);
    //             console.log(window.scrollY);
    //             // window.scrollTo({
    //             //         top: 500,
    //             //         behavior: "smooth"
    //             //     });
    //             setActiveLink("home");
    //         } else if (window.scrollY <= 850) {

    //             setScrolled(true);
    //             console.log(window.scrollY);

    //             setActiveLink("about");
    //         } else if (window.scrollY <= 1200) {
    //             setActiveLink("skills");

    //         } else {
    //             setScrolled(false);
    //             console.log("Scroll False");
    //             console.log(window.scrollY);
    //             setActiveLink("projects");
    //         }
    //     };
    //     window.addEventListener("scroll", onScroll);
    //     return () => window.removeEventListener("scroll", onScroll);
    // }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };
    // window.scrollIntoView({ top: 5,behavior: "smooth" })
    const scrollToSection = (ref) => {
            ref.current?.scrollIntoView({block: "center", behavior: "smooth" });
    };

    return (
        <div className={scrolled ? "scrolled navbar" : "navbar"}>
            <div>
                <img src={logo} alt="icon" />
            </div>
            <div>
                <a href="#home" className={activeLink === "home" ? 'active navbarLink' : "navbarLink"} onClick={() => { scrollToSection(headerRef), onUpdateActiveLink('home') }}><span>Home</span></a>
                <a href="#about" className={activeLink === "about" ? 'active navbarLink' : "navbarLink"} onClick={() => {scrollToSection(aboutMeRef), onUpdateActiveLink('about')}}><span>Details</span></a>
                <a href="#skills" className={activeLink === "skills" ? 'active navbarLink' : "navbarLink"} onClick={() => {scrollToSection(skillsRef), onUpdateActiveLink('skills')}}><span>Skills</span></a>
                <a href="#projects" className={activeLink === "projects" ? 'active navbarLink' : "navbarLink"} onClick={() => {scrollToSection(projectsRef), onUpdateActiveLink('projects')}}><span>Projects</span></a>
            </div>

            <a href="#contact" className='connectBtn'><button>Let's Connect</button></a>
        </div>
    );
}
