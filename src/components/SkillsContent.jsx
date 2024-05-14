import React, { forwardRef, useImperativeHandle, useState, useEffect } from 'react';
import django from "../assets/django.jpg"
import java from "../assets/java.webp"
import react from "../assets/react.svg"
import web from "../assets/webDev.jpg"
import unity from "../assets/unity.jpg"
import csharp from "../assets/csharp.jpg"
import python from "../assets/python.webp"
import devops from "../assets/devops.png"
import database from "../assets/data.png"
import ml from "../assets/ml.png"
import kivymd from "../assets/kivymd.jpg"


const SkillsContent = forwardRef((props, ref) => {
  return (
    <div className='skills' ref={ref}>
        <span className='bigFont'>Skills</span>
        <span><p className='mediumFont'>What am I great at?</p></span>
        <div className='skillsList'>
            <span><img src={django} alt="Django" className='skillsImage'/><p>Django</p></span>
            <span><img src={java} alt="" className='skillsImage'/><p>Java</p></span>
            <span><img src={react} alt="React" className='skillsImage'/><p>React</p></span>
            <span><img src={web} alt="Web Dev" className='skillsImage'/><p>Web Development</p></span>
            <span><img src={unity} alt="Unity" className='skillsImage'/><p>Unity</p></span>
            <span><img src={csharp} alt="C#" className='skillsImage'/><p>C#</p></span>
            <span><img src={python} alt="Python" className='skillsImage'/><p>Python</p></span>
            <span><img src={database} alt="Database and Server" className='skillsImage'/><p>Server and Database Management</p></span>
            <span><img src={ml} alt="Machine Learning" className='skillsImage'/><p>Machine Learning</p></span>
            <span><img src={devops} alt="DevOps" className='skillsImage'/><p>DevOps</p></span>
            <span><img src={kivymd} alt="KivyMD" className='skillsImage'/><p>KivyMD</p></span>
        </div>
    </div>
  )
})

export default SkillsContent;
