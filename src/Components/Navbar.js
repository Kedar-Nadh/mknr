import React from "react"
import "../App.css"

export default function Navbar(props){
    return(
        <div className="Navbar">
            <a href="/" className="logo" data-hover="Moram KedarNadh Reddy">MKNR</a>
            <img onClick={props.handleClick} src={require("../icons/menu.svg").default} alt="menu"/>
        </div>
    )
}
