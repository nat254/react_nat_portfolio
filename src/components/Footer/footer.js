import React from 'react';
import './footer.css';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="social">
                <a href="#">
                    <i className="bx bxl-linkedin" />
                </a>
                <a href="#">
                    <i className="bx bxl-github" />
                </a>
            </div>
            <ul className="list">
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#services">About</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <p className="copyright">© 2024 Natalie Ndetei. All rights reserved.</p>
        </footer>

    );
}

export default Footer;
