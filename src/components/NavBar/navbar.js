import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <header className="header">
       {/*logo*/}
        <a href="#home" className="logo"> Natalie <span>Ndetei</span></a>

      {/*toggle*/}
        <i className="bx bx-menu" id="menu-icon" />

      {/*navbar*/}
      <nav className="nav-menu">
          <a href="#home" className="nav-active"> Home</a>
          <a href="#services">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
      </nav>
    </header>

  );
}

export default Navbar;
