import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <header className="header">
       {/*logo*/}
        <Link href="#home" className="logo"> Natalie <span>Ndetei</span></Link>

      {/*toggle*/}
        <i className="bx bx-menu" id="menu-icon" />

      {/*navbar*/}
      <nav className="nav-menu">
          <Link href="#home" className="nav-active"> Home</Link>
          <Link href="#services">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
      </nav>
    </header>

  )
}

export default Navbar;
