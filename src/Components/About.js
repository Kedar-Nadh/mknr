import React from "react";
import "../about.css"

export default function About(){
    return(
        <div className="About">
            <p className="About--title">About me...</p>
            <div className="About--image-box"><img className="About--image" src={require("../images/kedarnadh.png")} alt="kedarnadh" /></div>
            <h2 className="About--name">Moram KedarNadh Reddy</h2>
            <p className="About--text">I'm a front-end developer from Tirupati, Andhra Pradesh, India. I work on front-end development and design projects. I enjoy creating visually appealing websites and web apps.</p>
            <p className="About--text">When I'm not coding, I enjoy watching movies or browsing YouTube.</p>
            <p className="About--side-heading">Tools I use -</p>
            <ul className="About--skills">
                <li className="About--skills-item">Python</li>
                <li className="About--skills-item">HTML</li>
                <li className="About--skills-item">CSS</li>
                <li className="About--skills-item">BootStrap</li>
                <li className="About--skills-item">JavaScript</li>
                <li className="About--skills-item">ReactJs</li>
                <li className="About--skills-item">Figma</li>
            </ul>
            <p className="About--side-heading">Educational History -</p>
            <div className="About--education">
                <div className="About--education-item">
                    <div>
                        <p className="About--education-item-institute">Sri Venkateswara College of Engineering - Tirupati</p>
                        <p className="About--education-item-standard">B.Tech in Electronics and Communication Engineering</p>
                    </div>
                    <p className="About--education-item-duration">(2019 - 2023)</p>
                </div>
                <div className="About--education-item">
                    <div>
                        <p className="About--education-item-institute">Sri Chaitanya Junior College</p>
                        <p className="About--education-item-standard">Intermediate / Class 12th</p>
                    </div>
                    <p className="About--education-item-duration">(2017 - 2019)</p>
                </div>
                <div className="About--education-item">
                    <div>
                        <p className="About--education-item-institute">Little Angels High Schoool</p>
                        <p className="About--education-item-standard">Seconday School of Education</p>
                    </div>
                    <p className="About--education-item-duration">(2016 - 2017)</p>
                </div>
            </div>
        </div>
    )
}