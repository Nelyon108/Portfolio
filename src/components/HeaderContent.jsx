import React, { forwardRef, useImperativeHandle, useState, useEffect } from 'react';
import selfImage from "../assets/DSC_0031.jpg"
import background from "../assets/techBack.jpg"



const HeaderContent = forwardRef((props, ref) => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Backend Developer", "Mobile Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1500;

    useEffect(() => {
        let ticker = setInterval(()=>{
            tick();
        }, delta)

        return ()=>{
            clearInterval(ticker)
        }
    }, [text]);

    const tick =()=>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText ===""){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(200);
        }
    
}

  return (
    <div className='header' ref={ref}>
        {/* <div className='backgroundImg'>
        <img src={background} alt="" className='headerBackground' />
        </div> */}
        <div className='headerContent'>
            <span className='wrap bigFont'>Hi, My name is <h2>NELSON ALLEN</h2></span>
            <span className='wrap bigFont'>I am a <span className='diffTextCol'>{text}</span></span>
            <button>Let's Connect</button>
        </div>
        <span className='selfImageBox'>
            <img src={selfImage} alt="selfImage" className='selfImage'/>
            <span className='pulse'></span>
            <span className='nonPulse'></span>
        </span>
        
    </div>
  )
})

export default HeaderContent;