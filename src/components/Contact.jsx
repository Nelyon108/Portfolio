import React, { forwardRef, useImperativeHandle}from 'react';

const Contact = forwardRef((props, ref) => {
  return (
    <div className='contact' ref={ref}>
        <span className='bigFont'>Leave me a message</span>
        <span>
            <a href="" target='_blank'><img src="" alt="" /></a>
            <a href="" target='_blank'><img src="" alt="" /></a>
        </span>
        <span>
        <p></p>
        <p className='mediumFont'>Or</p>
        <p></p>
        </span>
        <form action="" className='contactForm'>
            <input type="text" name='name'/>
            <input type="email" name='email'/>
            <textarea name="content" id="" cols="30" rows="10"></textarea>
        </form>
    </div>
  )
})

export default Contact;
