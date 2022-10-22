import React from "react";
import "./footerStyle.css"

const Footer = () => {

    return (
        <footer className="footer">
        {/* <a href="mailto:ehrenlewis0@gmail.com"><i className="fa fa-envelope cyber-grey" aria-hidden="true"></i></a> */}
        <a href="https://github.com/Ehren-Lewis" target="_blank" rel="noreferrer"><i className="fa-brands fa-github footer-logo"></i></a>
        <a href="https://www.linkedin.com/in/ehrenlewis/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin footer-logo"></i></a>
        <a href="mailto:ehrenlewis0@gmail.com" className="footer-email" style={{fontSize: "1rem"}}>EhrenLewis0@gmail.com</a>    

        </footer>
    )
}

export default Footer;