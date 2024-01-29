import React from 'react';
import './about.css';

const About = () => {
    return (
        <section className="services" id="services">
            <h2 className="heading"> About </h2>
            <div className="service-container">
                <div className="service-card">
                    <i className="bx bxs-user-voice" />
                    <h3>Personalized Web Design</h3>
                    <p>
                        I can elevate a business's online presence by creating visually stunning
                        and personalized web designs that are out of the ordinary and leave
                        lasting impressions on its users.
                    </p>
                </div>
                <div className="service-card">
                    <i className="bx bxs-devices" />
                    <h3>Responsive designs</h3>
                    <p>
                        I can ensure that a particular website is seamlessly accessible and
                        optimized across all kinds of devices.
                    </p>
                </div>
                <div className="service-card">
                    <i className="bx bxs-user-check" />
                    <h3>User Experience Optimization</h3>
                    <p>
                        Bid farewell to regular complaints due to unsatisfactory user
                        experience. I can convert a standard webpage to a fully immersive
                        experience.
                    </p>
                </div>
            </div>
        </section>

    );
}

export default About;
