import React from "react";
import resume from "../images/EhrenLewisResume.pdf"

const Header = () => {




    return(
        <nav className="nav">
            <a className="cyber-grey" href="#about">About Me</a>
            <a className="cyber-grey" href="#projects" >Projects</a>
            <a className="cyber-grey" href="mailto:ehrenlewis0@gmail.com">Contact Me</a>
            <a className="cyber-grey" target="_blank"  style={{cursor: "pointer"}} onClick={ () => window.open(resume)}>Resume </a>
        </nav>
    )

}

export default Header;