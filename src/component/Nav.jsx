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
        <ul>
          <li className= "active"><a href="#">Home</a></li>
          <li><a href="#">Portfolio</a> 
            <ul>
              <li><a href="#">Portfolio 2 Colomns</a></li>
              <li><a href="#">Portfolio 3 Colomns</a></li>
              <li><a href="#">Portfolio 4 Colomns</a></li>
              <li><a href="#">Portfolio with Right Sidebar</a>
                <ul>
                  <li><a href="#">2 Colomns right sidebar</a></li>
                  <li><a href="#">3 Colomns right sidebar</a></li>
                  <li><a href="#">4 Colomns right sidebar</a></li>
                </ul>
              </li>
              <li><a href="#">Portfolio with Left Sidebar</a>
                <ul>
                 <li><a href="#">2 Colomns left sidebar</a></li>
                 <li><a href="#">3 Colomns left sidebar</a></li>
                 <li><a href="#">4 Colomns left sidebar</a></li>
                </ul> 
              </li>
              <li><a href="#">Portfolio with both sidebar</a></li>
              <li><a href="#">Portfolio with filterer</a>
                <ul>
                  <li><a href="#">2 Colomns with filterer</a></li>
                  <li><a href="#">3 Colomns with filterer</a></li>
                  <li><a href="#">4 Colomns with filterer</a></li>
                </ul>
              </li>
              <li><a href="#">Potfolio Gallery Style</a>
                <ul>
                  <li><a href="#">2 Colomns Gallery Style</a></li>
                  <li><a href="#">3 Colomns Gallery Style</a></li>
                  <li><a href="#">4 Colomns Gallery Style</a></li>
                </ul>
              </li>
              <li><a href="#">Gallery</a>
                <ul>
                  <li><a href="#">Gallery 2 Colomns</a></li>
                  <li><a href="#">Gallery 3 Colomns</a></li>
                  <li><a href="#">Gallery 4 Colomns</a></li>
                </ul>
              </li>
            </ul>
          </li>

          <li><a href="#">Blog</a>
            <ul>
              <li><a href="#">Blog with Right Sidebar</a></li>
              <li><a href="#">Blog with Left Sidebar</a></li>
              <li><a href="#">Blog with Both Sidebar</a></li>
              <li><a href="#">Blog without sidebar</a></li>
            </ul>
          </li>

          <li><a href="#">Shortcodes</a>
            <ul>
              <li><a href="#">Typography</a></li>
              <li><a href="#">Accordion</a></li>
              <li><a href="#">Block Quote</a></li>
              <li><a href="#">Buttons</a></li>
              <li><a href="#">Colomns</a></li>
              <li><a href="#">Divider</a></li>
              <li><a href="#">Dropcap</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Light Box & Frame</a></li>
              <li><a href="#">List Style</a></li>
              <li><a href="#">Message Box</a></li>
              <li><a href="#">Price Table</a></li>
              <li><a href="#">Social Icons</a></li>
              <li><a href="#">Tabs</a></li>
              <li><a href="#">Testimonial</a></li>
              <li><a href="#">Toggle Boxes</a></li>
              <li><a href="#">Video</a></li>
            </ul>
          </li>

          <li><a href="#">Features</a>
            <ul>
              <li><a href="#">Page Builder</a></li>
              <li><a href="#">Thumbnail Management</a></li>
              <li><a href="#">Creating Gallery</a></li>
              <li><a href="#">Creating Blog</a></li>
              <li><a href="#">Creating Portfolio</a></li>
            </ul>
          </li>

          <li><a href="#">Contact</a></li>
        </ul>
      
    </div>
    <img src="/Images/img1.jpg" alt="img1" className='img1'/>
  </div>
)
}

export default Nav