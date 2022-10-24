import React from "react";
import "../work.css"

export default function ProjectCard(props){
    return(
        <div className="projectcard">
            <img className="project-image" src={require(`../images/projectss/${props.screenshot}`)} alt="project"/>
            <div className="projectcard-details">
                <p className="projetcard-title">{props.title}</p>
                <p className="projetcard-text">{props.text}</p>
                <a href={props.link} className="projetcard-btn">View Project</a>
            </div>
        </div>
    )
}