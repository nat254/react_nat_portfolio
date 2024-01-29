import React from 'react';
import './project.css';
import avechi from '../../assets/avechi.PNG';
import chakura from '../../assets/chakura.PNG';

const Project = () => {
    return (
        <section className="projects" id="projects">
            <h2 className="heading">Projects</h2>
            <div className="project-container">
                <div className="project-card">
                    <img src={avechi} alt="" />
                    <div className="projects-info">
                        <h4>Electronics Ecommerce</h4>
                        <p>
                            This website allows customers to buy electronics from different
                            vendors.
                        </p>
                    </div>
                </div>
                <div className="project-card">
                    <img src={chakura} alt="" />
                    <div className="projects-info">
                        <h4>Food Ecommerce</h4>
                        <p>
                            This website allows users to buy fast food products from a particular
                            restaurant.
                        </p>
                    </div>
                    
                </div>
            </div>
        </section>

    );
}

export default Project;
