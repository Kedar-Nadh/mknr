import React from "react"
import { BrowserRouter, Link } from "react-router-dom"
import "../App.css"

export default function Navbar(props){
    return(
        <BrowserRouter>
        <div className="Navbar">
            <Link href="/" className="logo" data-hover="Moram KedarNadh Reddy">MKNR</Link>
            <img onClick={props.handleClick} src={require("../icons/menu.svg").default} alt="menu"/>
        </div>
        </BrowserRouter>
    )
}