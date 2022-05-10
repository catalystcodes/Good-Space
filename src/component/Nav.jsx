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
        <ul className="sub1-nav">
          <li><a href="/">Home</a></li>
          <li><a href="/">Portfolio</a> 
            <ul>
              <li>Portfolio 2 Colomns</li>
              <li>Portfolio 3 Colomns</li>
              <li>Portfolio 4 Colomns</li>
              <li>Portfolio with Right Sidebar
                <ul>
                  <li>2 Colomns right sidebar</li>
                  <li>3 Colomns right sidebar</li>
                  <li>3 Colomns right sidebar</li>
                </ul>
              </li>
              <li>Portfolio with Left Sidebar
                <ul>
                 <li>2 Colomns left sidebar</li>
                 <li>3 Colomns left sidebar</li>
                 <li>4 Colomns left sidebar</li>
                </ul> 
              </li>
              <li>Portfolio with both sidebar</li>
              <li>Portfolio with filterer
                <ul>
                  <li>2 Colomns with filterer</li>
                  <li>3 Colomns with filterer</li>
                  <li>4 Colomns with filterer</li>
                </ul>
              </li>
              <li>Potfolio Gallery Style
                <ul>
                  <li>2 Colomns Gallery Style</li>
                  <li>3 Colomns Gallery</li>
                  <li>4 Colomns Gallery</li>
                </ul>
              </li>
              <li>Gallery
                <ul>
                  <li>Gallery 2 Colomns</li>
                  <li>Gallery 3 Colomns</li>
                  <li>Gallery 4 Colomns</li>
                </ul>
              </li>
            </ul>
          </li>

          <li><a href="/">Blog</a>
            <ul>
              <li>Blog with Right Sidebar</li>
              <li>Blog with Left Sidebar</li>
              <li>Blog with Both Sidebar</li>
              <li>Blog without sidebar</li>
            </ul>
          </li>

          <li><a href="/">Shortcodes</a>
            <ul>
              <li>Typography</li>
              <li>Accordion</li>
              <li>Block Quote</li>
              <li>Buttons</li>
              <li>Colomns</li>
              <li>Dividers</li>
              <li>Dropcap</li>
              <li>Gallery</li>
              <li>Light Box & Frame</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li>
          <li><a href="/">Features</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      
    </div>
    <img src="/Images/img1.jpg" alt="img1" className='img1'/>
  </div>
)
}

export default Nav