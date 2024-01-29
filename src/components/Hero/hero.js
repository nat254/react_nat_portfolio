import React from 'react';
import './hero.css';
import person from '../../assets/me.png';

const Hero = () => {
    return (
        <section className="home" id="home">
            <div className="home-img">
                <img src={person} alt="An image of Natalie" />
            </div>
            <div className="home-content">
                <h3>Hello,</h3>
                <h1>
                    My name is <span>Natalie</span>
                </h1>
                <h3 className="text-animation">
                    I'm a <span />
                </h3>
                <p>
                    I am very passionate about web development and design and I love to create
                    beautiful, responsive and user friendly websites.
                </p>
                <div className="social-icons">
                    <a href="#">
                        <i className="bx bxl-linkedin" />
                    </a>
                    <a href="#">
                        <i className="bx bxl-github" />
                    </a>
                </div>
                <div className="btn-container">
                    <a href="#contact" className="btn">
                        Hire Me
                    </a>
                </div>
            </div>
        </section>

    )
}

export default Hero;