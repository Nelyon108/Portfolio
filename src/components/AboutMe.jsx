import React, { forwardRef, useImperativeHandle } from 'react';

const AboutMe = forwardRef((props, ref) => {
    return (
        <div className='skills' ref={ref}>
            <div className='aboutMe skills'>
                <span className='bigFont'>About Me</span>
                <div className='aboutBox'>
                    <span>
                        <p>I am a highly motivated, diligent and astute team player with great attention to detail. I am an indie developer and freelancer who is continually seeking to improve my programming skills and learn the newest up to date systems in the software development world. With a solid educational background and numerous experiences, I look forward to developing and improving my skillset regardless of the environment.</p>
                    </span>
                    <span>
                        <p>Phone number: +233 (0)24 020 5963 / +233 (0)50 93 44 711</p>
                        <a href="mailto:nelson.allen0@gmail.com"><p><i className='fa plus'></i>Email address: nelson.allen0@gmail.com</p></a>
                        <a href="www.linkedin.com/in/nelson-allen-35b059169" target='_blank'><p>LinkedIn: www.linkedin.com/in/nelson-allen-35b059169</p></a>
                        <a href="https://github.com/Nelyon108" target='_blank'><p>Github: https://github.com/Nelyon108</p></a>
                        <p>Location: Ghana - Accra</p>
                    </span>
                </div>
            </div>
        </div>
    )
})

export default AboutMe;
