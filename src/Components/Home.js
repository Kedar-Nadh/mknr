import React from "react";
import "../home.css"

export default function Home(){
    return(
        <div className="Home">
            <div className="Home--text">
                <p className="Home--text-intro">Hi there!</p>
                <p className="Home--text-intro">I'm KedarNadh 👋🏻,</p>
                <p className="Home--text-about">I'm a Front End Developer 👨🏻‍💻 interested in web design 👨🏻‍🎨 and web development ⚙️.</p>
                <p className="Home--text-about">I pursued Electronics and Communication Engineering at Sri Venkateswara College of Engineering in Tirupati.</p>
            </div>
            <div className="Home--avatar"><img className="Home--avatar-image" src={require("../icons/home-avatar.svg").default} alt="Boy Vector img"/></div>
        </div>
    )
}
