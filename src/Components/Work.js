import React from "react";
import "../work.css"
import ProjectCard from "./ProjectCard"
import {ProjectsData} from "./ProjectsData"

export default function Work(){
    const projects = ProjectsData.map((project) => {return <ProjectCard key={project.title} title={project.title} text={project.text} link={project.link} screenshot={project.screenshot}/>} )
    return(
        <div className="work">
            <p className="work--title">My work...</p>
            <div className="work--field">
                <img className="work--image" src={require("../images/work_vector.svg").default} alt="work vector" />
                {projects}
            </div>
        </div>
    )
}