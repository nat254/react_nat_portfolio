import React from 'react';
import './contact.css';


const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h2 className="heading">
                Contact <span>Me</span>
            </h2>
            <form action="#">
                <div className="input-box">
                    <input type="text" placeholder="Full Name" required="" />
                    <input type="email" placeholder="Email Address" required="" />
                </div>
                <div className="input-box">
                    <input type="number" placeholder="Phone Number" required="" />
                    <input type="text" placeholder="Subject" required="" />
                </div>
                <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={10}
                    placeholder="Message"
                    required=""
                    defaultValue={""}
                />
                <input type="submit" defaultValue="Send Message" className="btn" />
            </form>
        </section>

    );
}

export default Contact;