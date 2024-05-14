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
      {/* <span><p className='mediumFont'>What am I great at?</p></span> */}
      <div className='skillsList'>
        <div><img src={django} alt="Django" className='skillsImage' /><span><p>Django</p><p className='progressSlider'><p className='sliderInner' style={{width: "100%"}}></p></p></span></div>
        <div><img src={java} alt="" className='skillsImage' /><span><p>Java</p><p className='progressSlider'><p className='sliderInner' style={{width: "70%"}}></p></p></span></div>
        <div><img src={react} alt="React" className='skillsImage' /><span><p>React</p><p className='progressSlider'><p className='sliderInner' style={{width: "70%"}}></p></p></span></div>
        <div><img src={web} alt="Web Dev" className='skillsImage' /><span><p>Web Development</p><p className='progressSlider'><p className='sliderInner' style={{width: "100%"}}></p></p></span></div>
        <div><img src={unity} alt="Unity" className='skillsImage' /><span><p>Unity</p><p className='progressSlider'><p className='sliderInner' style={{width: "90%"}}></p></p></span></div>
        <div><img src={csharp} alt="C#" className='skillsImage' /><span><p>C#</p><p className='progressSlider'><p className='sliderInner' style={{width: "85%"}}></p></p></span></div>
        <div><img src={python} alt="Python" className='skillsImage' /><span><p>Python</p><p className='progressSlider'><p className='sliderInner' style={{width: "95%"}}></p></p></span></div>
        <div><img src={database} alt="Database and Server" className='skillsImage' /><span><p>Server & Database Management</p><p className='progressSlider'><p className='sliderInner' style={{width: "75%"}}></p></p></span></div>
        <div><img src={ml} alt="Machine Learning" className='skillsImage' /><span><p>Machine Learning</p><p className='progressSlider'><p className='sliderInner' style={{width: "50%"}}></p></p></span></div>
        <div><img src={devops} alt="DevOps" className='skillsImage' /><span><p>DevOps</p><p className='progressSlider'><p className='sliderInner' style={{width: "40%"}}></p></p></span></div>
        <div><img src={kivymd} alt="KivyMD" className='skillsImage' /><span><p>KivyMD</p><p className='progressSlider'><p className='sliderInner' style={{width: "70%"}}></p></p></span></div>
      </div>
    </div>
  )
})

export default SkillsContent;
