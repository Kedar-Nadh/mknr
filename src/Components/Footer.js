import React from "react";
import "../App.css"

export default function Footer(){
    return(
        <div className="Footer">
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/kedar-nadh"><img src={require("../icons/linkedin.svg").default} alt="linkedin"/></a>
                <a href="https://github.com/Kedar-Nadh"><img src={require("../icons/github.svg").default} alt="github"/></a>
                <a href="https://t.me/Kedar_Nadh"><img src={require("../icons/telegram.svg").default} alt="telegram"/></a>
            </div>
            <p className="copyrights">&copy;2025 by kedarnadh</p>
        </div>
    )
}
