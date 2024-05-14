import React, { forwardRef, useImperativeHandle } from 'react';

const AboutMe = forwardRef((props, ref) => {
    return (
        <div className='skills' ref={ref}>
            <div className='aboutMe skills'>
                <span className='bigFont'>About Me</span>
                <div className='aboutBox'>
                    <span>
                        <p>I am a highly motivated, diligent and astute team player with great attention to detail. I am an indie developer and freelancer who is continually seeking to improve my programming skills and learn the newest up to date systems in the software development world. With a solid educational background and numerous experiences, I look forward to developing and improving my skillset regardless of the environment in which I find myself.</p>
                    </span>
                    <span>
                        <p>gsdhfsdf</p>
                        <p>bdjsbfkhdskjfn sk</p>
                    </span>
                </div>
            </div>
        </div>
    )
})

export default AboutMe;
