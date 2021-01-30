import React from 'react';

const Nav = () => {
return(
  <div className='whole-nav'>
    <div className='nav'>
        <img src="/Images/facebook.svg" alt=""/>
        <img src="/Images/linkedin.svg" alt=""/>
        <img src="/Images/tumbir.svg" alt=""/>
        <img src="/Images/twitter.svg" alt=""/>
        <img src="/Images/vimo.svg" alt=""/>
      </div>
    <div className='sub-nav'>
      <img src="/Images/defaultlogo.png" alt="mubb"/>
      <div className="sub1-nav">
        <p>Home</p>
        <p className='p1'>Portfolio</p>
        <p>Blog</p>
        <p>Shortcodes</p>
        <p>Features</p>
        <p>Contact</p>
      </div>
    </div>
    <img src="/Images/img1.jpg" alt="img1" className='img1'/>
  </div>
)
}

export default Nav