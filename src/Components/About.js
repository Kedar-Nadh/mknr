import React from "react";
import "../about.css"

export default function About(){
    return(
        <div className="About">
            <p className="About--title">About me...</p>
            <div className="About--image-box"><img className="About--image" src={require("../images/kedarnadh.png")} alt="kedarnadh" /></div>
            <h2 className="About--name">Moram KedarNadh Reddy</h2>
            <p class="About--text">Originally from the land of temples, Tirupati 🛕<br>Now living the tech life in Bengaluru 💻🌆</p>
            <p class="About--text">I spend my days coding and creating apps like a tech wizard 🧙♂️✨</p>
            <div class="About--subgroup">
              <p class="About--text">When I'm not coding, you'll find me:</p>
              <ul class="About--text">
                <li>Lost in movie marathons 🎞️🍿</li>
                <li>Exploring YouTube rabbit holes 🔍🌍</li>
                <li>Chilling with family & friends 👨👩👧👦🤗</li>
              </ul>
            </div>
            <p className="About--side-heading">Working Experience -</p>
            <div className="About--experience">
                <div className="About--experience-item">
                    <div>
                        <p className="About--experience-item-company">Torry Harris Integration Solutions</p>
                        <p className="About--experience-item-role">Associate Software Engineer</p>
                    </div>
                    <p className="About--experience-item-duration">(Feb 2024 – Present)</p>
                    <p className="About--experience-item-description">
                        Worked on creating data pipelines using Ab Initio, improving performance and reducing memory usage. Collaborated with different teams to deliver high-quality solutions that met everyone's needs.
                    </p>
                </div>
                <div className="About--experience-item">
                    <div>
                        <p className="About--experience-item-company">Torry Harris Integration Solutions</p>
                        <p className="About--experience-item-role">Associate Software Engineer Trainee</p>
                    </div>
                    <p className="About--experience-item-duration">(Aug 2023 – Feb 2024)</p>
                    <p className="About--experience-item-description">
                        Built a full-stack app called Kupanify, where users can share and access unused coupons. Deployed the app on the cloud and gained experience with various development tools and cloud services to help scale the app.
                    </p>
                </div>
            </div>
            <p className="About--side-heading">Tools I use -</p>
            <ul className="About--skills">
                <li className="About--skills-item">Python</li>
                <li className="About--skills-item">MySQL</li>
                <li className="About--skills-item">Swift</li>
                <li className="About--skills-item">SwiftUI</li>
                <li className="About--skills-item">HTML</li>
                <li className="About--skills-item">CSS</li>
                <li className="About--skills-item">BootStrap</li>
                <li className="About--skills-item">JavaScript</li>
                <li className="About--skills-item">ReactJs</li>
                <li className="About--skills-item">Django</li>
                <li className="About--skills-item">Figma</li>
                <li className="About--skills-item">Docker</li>
                <li className="About--skills-item">Kubernetes</li>
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
