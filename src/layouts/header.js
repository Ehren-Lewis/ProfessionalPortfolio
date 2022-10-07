import React from "react";
import { Link } from "react-router-dom"


const Header = () => {

    return(
    <nav className="nav">
    <Link className="cyber-grey" to="/">About Me</Link>
    <Link  className="cyber-grey" to="/projects">Projects</Link>
    <a className="cyber-grey" href="mailto:ehrenlewis0@gmail.com">Contact Me</a>
    {/* <Link className="cyber-grey" target="_blank" href="./assets/images/EhrenLewisResume.pdf">Resume </Link> */}
</nav>)

}

export default Header;