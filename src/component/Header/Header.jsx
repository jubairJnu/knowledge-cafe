import React from 'react';
import './Header.css'
const Header = () => {
  return (
    <nav className='navbar'>
      
    <div>
      <h2>Knowledge Blog</h2>
    </div>
    
    <div className='nav-style'>

    <a href="/home">Home</a>
    <a href="/blog">Blog</a>
    <a href="/contact">Contact</a>
    
    </div>
    <div className='header-person'>
    <a href="/contact"><img src="img.png" alt="" /></a>
    </div>
    
    </nav>
  );
};

export default Header;