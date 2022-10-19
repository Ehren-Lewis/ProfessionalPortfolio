import "./sidebar.css"
// import { Link } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEvernote, faGithub} from "@fortawesome/free-brands-svg-icons"
const Sidebar = () => {


    return (
        <div className="nav-bar">

        <a href="https://github.com/Ehren-Lewis" target="_blank" rel="noreferrer"><i className="fa-brands fa-github fa-2xl sidebar-logo"></i></a>
        <a href="https://www.linkedin.com/in/ehrenlewis/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin fa-2xl sidebar-logo"></i></a>
        <a href="mailto:ehrenlewis0@gmail.com" className="email">EhrenLewis0@gmail.com</a>    
        </div>
    )
}

export default Sidebar;