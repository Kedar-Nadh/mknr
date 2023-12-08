import React from "react";
import emailjs from '@emailjs/browser';
import "../contact.css"

export default function Contact(){

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_w9yvocn', 'template_cgju7mu', e.target, 'Q-Yy22YrUBV23v6OX')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };


    return(
        <div className="contact">
            <p className="contact--title">Lets connect...</p>
            <div className="contact--box-field">
                <div className="contact--box">
                    <img className="contact--image" src={require("../images/contact_vector.svg").default} alt="contact vector" />
                    <div className="contact--form">
                        <form onSubmit={sendEmail}>
                            <label className="contact--label" for="name">Name:</label><br/>
                            <input className="contact--input-field" type="text" id="name" name="name"/><br/>
                            <label className="contact--label" for="email">Email:</label><br/>
                            <input className="contact--input-field" type="email" id="email" name="email"/><br/>
                            <label className="contact--label" for="message">Message:</label><br/>
                            <textarea className="contact--message" id="message" name="message"></textarea><br/>
                            <input className="contact--submit" type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
