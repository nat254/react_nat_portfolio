import React from 'react';
import './skills.css';

const Skills = () => {
  return (
    <div className="container" id="skills">
        <h2 class="heading">Skills</h2>

        <div className="skills">
        <div className="skill-box">
            <span className="title">HTML</span>
            <div className="skill-bar">
                <span className="skill-per html">
                    <span className="tooltip">90%</span>
                </span>
            </div>
        </div>

        <div className="skill-box">
            <span className="title">CSS</span>
            <div className="skill-bar">
                <span className="skill-per css">
                    <span className="tooltip">80%</span>
                </span>
            </div>
        </div>

        <div className="skill-box">
            <span className="title">Javascript</span>
            <div className="skill-bar">
                <span className="skill-per js">
                    <span className="tooltip">40%</span>
                </span>
            </div>
        </div>

        <div className="skill-box">
            <span className="title">PHP</span>
            <div className="skill-bar">
                <span className="skill-per php">
                    <span className="tooltip">60%</span>
                </span>
            </div>
        </div>

        <div className="skill-box">
            <span className="title">MySQL</span>
            <div className="skill-bar">
                <span className="skill-per mysql">
                    <span className="tooltip">70%</span>
                </span>
            </div>
        </div>

        </div>
    </div>
  );
}

export default Skills;
