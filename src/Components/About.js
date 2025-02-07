import React from "react";
import "../about.css";

export default function About() {
    return(
        <div className="About">
            <h1 className="About--title">About Me</h1>
            
            <div className="About--profile-section">
                <div className="About--image-box">
                    <img className="About--image" src={require("../images/kedarnadh.png")} alt="Kedarnadh Reddy" />
                </div>
                <div className="About--bio">
                    <h2 className="About--name">Moram KedarNadh Reddy</h2>
                    <p className="About--text">
                        Originally from the land of temples, Tirupati 🛕<br />
                        Now living the tech life in Bengaluru 💻🌆
                    </p>
                </div>
            </div>

            <div className="About--content">
                <section className="About--section">
                    <p className="About--text">
                        I spend my days coding and creating apps like a tech wizard 🧙♂️✨
                    </p>
                    
                    <div className="About--subsection">
                        <h3 className="About--subheading">When I'm not coding:</h3>
                        <ul className="About--list">
                            <li className="About--list-item">Lost in movie marathons 🍿 </li>
                            <li className="About--list-item">Exploring YouTube rabbit holes 🔍 </li>
                            <li className="About--list-item">Hangingout with family & friends ⛰</li>
                        </ul>
                    </div>
                </section>

                <section className="About--section">
                    <h2 className="About--section-heading">Work Experience</h2>
                    <div className="About--work">
                        <div className="About--work-item">
                            <div className="About--work-details">
                                <h3 className="About--work-company">Torry Harris Integration Solutions</h3>
                                <p className="About--work-position">Associate Software Engineer</p>
                                <p className="About--work-duration">Feb 2024 – Present</p>
                            </div>
                            <p className="About--work-description">
                                Created data pipelines using Ab Initio, improving performance and reducing memory usage. 
                                Collaborated with cross-functional teams to deliver high-quality solutions.
                            </p>
                        </div>
                        
                        <div className="About--work-item">
                            <div className="About--work-details">
                                <h3 className="About--work-company">Torry Harris Integration Solutions</h3>
                                <p className="About--work-position">Associate Software Engineer Trainee</p>
                                <p className="About--work-duration">Aug 2023 – Feb 2024</p>
                            </div>
                            <p className="About--work-description">
                                Developed full-stack app (Kupanify) for sharing unused coupons. 
                                Deployed cloud-based solutions and implemented scaling strategies.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="About--section">
                    <h2 className="About--section-heading">Technical Skills</h2>
                    <ul className="About--skills">
                        <li className="About--skills-item">Python</li>
                        <li className="About--skills-item">JavaScript</li>
                        <li className="About--skills-item">React</li>
                        <li className="About--skills-item">Django</li>
                        <li className="About--skills-item">Docker</li>
                        <li className="About--skills-item">Kubernetes</li>
                        <li className="About--skills-item">MySQL</li>
                        <li className="About--skills-item">SwiftUI</li>
                        <li className="About--skills-item">Figma</li>
                    </ul>
                </section>

                <section className="About--section">
                    <h2 className="About--section-heading">Education</h2>
                    <div className="About--education">
                        <div className="About--education-item">
                            <h3 className="About--education-institute">
                                Sri Venkateswara College of Engineering, Tirupati
                            </h3>
                            <p className="About--education-degree">
                                B.Tech in Electronics and Communication Engineering
                            </p>
                            <p className="About--education-duration">2019 - 2023</p>
                        </div>
                        
                        <div className="About--education-item">
                            <h3 className="About--education-institute">
                                Sri Chaitanya Junior College
                            </h3>
                            <p className="About--education-degree">Intermediate / Class 12th</p>
                            <p className="About--education-duration">2017 - 2019</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
