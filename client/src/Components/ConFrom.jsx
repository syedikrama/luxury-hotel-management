import React from 'react';
import './ContactForm.css';

export default function ContactForm() {
    return (
        <div className="contact-container">
            <div className="contact-info" style={{marginTop :"50px"}}>
                <div className="office">
                    <h3>Manitoba Office</h3>
                    <p>121 King's Street,<br />Manitoba 1230, Canada<br />Cell: +475 3538 3458</p>
                </div>
                <div className="office">
                    <h3>Brooklyn Office</h3>
                    <p>62 Collins Street West,<br />Brooklyn 3030, USA<br />Cell: +475 2343 3421</p>
                </div>
                <div className="socials">
                    <h3>Socials</h3>
                    <div className="icons">
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-google-plus-g"></i>
                    </div>
                </div>
            </div>

            <form className="contact-form"  style={{marginTop :"50px" , marginRight : "120px"}}>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Enter your descriptions here..."></textarea>
                <button type="submit">Send Now</button>
            </form>
        </div>
    );
}
