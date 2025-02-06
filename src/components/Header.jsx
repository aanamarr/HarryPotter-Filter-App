//logo harrypotter
import React from 'react';
import '../styles/Header.css';
import logo from '../images/h-p2.jpg';

function Header() {
  return (
      <header className='title'>
        <img src={logo} alt="Harry Potter" className='title__img'/>
      </header>
    
  )
}

export default Header