import React from "react";
import "../App.css";
import {BrowserRouter, Link} from 'react-router-dom';

export default function Menu(props){
    return(
        <BrowserRouter>
            <div className="menu">
                <div className="close-logo">
                    <img onClick={props.handleClick} src={require("../icons/close.svg").default} alt="close"/>
                </div> 
                <ul className="menu-list">
                    <li><Link to="/" className="menu-item" onClick={props.handleClick}>Home</Link></li>
                    <li><Link to="/about" className="menu-item" onClick={props.handleClick}>About</Link></li>
                    <li><Link to="/work" className="menu-item" onClick={props.handleClick}>Work</Link></li>
                    <li><a href="https://docs.google.com/document/d/1g0ruuWqKptW-1MiL4SYHbT_xHC2xXP8JpJpTrgHabGs/edit?usp=sharing" className="menu-item">Resume</a></li>
                    <li><Link to="/contact" className="menu-item" onClick={props.handleClick}>Contact</Link></li>
                </ul>
            </div>
        </BrowserRouter>
    )
}
