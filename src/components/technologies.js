import React, {useState, useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./aboutMeStyle.css"
import { Button } from "react-bootstrap";

gsap.registerPlugin(ScrollTrigger);

// import portaitPhotoTransparent from "../images/portaitPhotoTransparent.png";
const Technologies = () => {

    const [windowWidth, setwindowWidth] = useState(window.innerWidth);

    const setWidth = () => {
      setwindowWidth(window.innerWidth)
    }
  
    useEffect( () => {
      window.addEventListener('resize', setWidth)
    })


    return(


        <> 
        <div className="row" style={{marginTop: "200px"}}>
            <div className={`col d-flex ${windowWidth > 1000 ? "justify-content-end" : "justify-content-center"}`}>
                <p className="name text-light">My Skills</p>
                
            </div>
            <div className="row justify-content-center">
            <a target="_blank" className="links" href="https://icons8.com/icon/t2x6DtCn5Zzx/nginx">All icons by Icons8</a>
            </div>
        </div>

        <div className="row">
            <div className="col-md-12 col-lg-4">
                <p className="project-name text-light mx-auto">Languages</p>
                <div className="row">
                    <div className="col-12 mx-auto d-flex justify-content-around">
                        <img src="https://img.icons8.com/color/48/000000/python--v1.png" alt="Python" />
                        <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="JavaScript" />
                        <img src="https://img.icons8.com/color/48/000000/html-5--v2.png" alt="HTML5" />
                        <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS3" />
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-12 mx-auto d-flex justify-content-around">
                        {/* dynamo */}
                        <img src="https://img.icons8.com/color/48/000000/mysql-logo.png" alt="MySQL" />
                        <img src="https://img.icons8.com/color/48/000000/graphql.png" alt="GraphQL" />
                        <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="MongoDB" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/DynamoDB.png" style={{width: "48px", height: "48px"}} />
                    </div>
                </div>
            </div>

            <div className="col-md-12 col-lg-4">
                <p className="project-name text-light mx-auto">Technologies</p>
                <div className="row">
                    <div className="col-12 mx-auto d-flex justify-content-around">
                        <img src="https://img.icons8.com/office/40/000000/react.png" alt="React" />
                        <img src="https://img.icons8.com/fluency/48/000000/node-js.png" alt="NodeJs" />
                        <img src="https://img.icons8.com/ios-filled/50/78cff5/jquery.png" alt="JQuery" />
                        <img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt="BootStrap" />     
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-12 mx-auto d-flex justify-content-around">
                        <p style={{width: "48px"}}></p>
                        <img src="https://img.icons8.com/office/40/000000/express-js.png" alt="Express" />
                        <img src="https://img.icons8.com/color/48/000000/django.png" alt="Django" />         
                        <p style={{width: "48px"}}></p> 
                    </div>
                </div>
            </div>


            <div className="col-md-12 col-lg-4">
                <p className="project-name text-light mx-auto">Tools</p>
                <div className="row">
                    <div className="col-12 mx-auto d-flex justify-content-around">
                        <img src="https://img.icons8.com/color/48/000000/git.png" alt="Git" />
                        <img src="https://img.icons8.com/color/48/ffffff/amazon-web-services.png" alt="Amazon web services" />
                        <img src="https://img.icons8.com/color/48/000000/heroku.png" alt="Heroku" />
                        <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-digital-ocean-a-cloud-infrastructure-with-data-centers-worldwide-logo-shadow-tal-revivo.png" alt="DigitalOcean" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mx-auto d-flex justify-content-around"> 
                    <p style={{width: "48px"}}></p>
                    <img src="https://img.icons8.com/color/48/000000/apollo.png" alt="Apollo" />
                    <img src="https://img.icons8.com/color/48/000000/nginx.png" alt="NginX" />
                    <p style={{width: "48px"}}></p>
                    </div>
                </div>
            </div>

        </div>
        
        </>
    )
}

export default Technologies;