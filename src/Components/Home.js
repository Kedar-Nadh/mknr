import React from "react";
import "../home.css"

export default function Home(){
    return(
        <div className="Home">
            <div className="Home--text">
                <p className="Home--text-intro">Hi there!</p>
                <p className="Home--text-intro">I'm KedarNadh 👋🏻,</p>
                <p className="Home--text-about">Tech enthusiast with a passion for software development, currently working as an Associate Software Engineer at Torry Harris Integration Solutions (THIS) <span className="emoji">🚀💻</span></p>
                <p className="Home--text-about">Exploring iOS development with SwiftUI <span className="emoji">📱</span>, while skilled in full-stack development <span className="emoji">🌐</span>, data engineering <span className="emoji">📊</span>, and design <span className="emoji">🎨</span>.</p>    
            </div>
            <div className="Home--avatar"><img className="Home--avatar-image" src={require("../icons/home-avatar.svg").default} alt="Boy Vector img"/></div>
        </div>
    )
}
