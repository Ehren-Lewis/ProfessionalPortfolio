import React, { useState, useEffect } from "react";
import {Button } from "react-bootstrap"
const Projects = () => {
    const [windowWidth, setwindowWidth] = useState(window.innerWidth);

    const setWidth = () => {
      setwindowWidth(window.innerWidth)
    }
  
    useEffect( () => {
      window.addEventListener('resize', setWidth)
    })

    const smallerImage = {
        width: "330px",
        height: "300px",
  
    }
    
    const biggerImage = {
        width: "400px",
        height: "300px",
    }

  
    return(
        <div id="projects" style={{marginTop: "125px"}}>

        <div className={windowWidth < 600 ? "row mb-5" : "row justify-content-center mb-5" }>
            <div className="col-5">
                <p className="name text-light" style={{fontSize: windowWidth <  500 ? "2.5rem" : "3rem"}}>My Projects</p>
            </div>
        </div>

{/* https://63be37258884bf0008c0a709--beamish-peony-760e55.netlify.app/ : Premium Machinery */}


        <div className="row text-light mb-5 d-flex">

        <div className="col-lg-12 col-xl-6 mx-auto">
            <p className="project-name mx-auto" style={{fontSize: windowWidth < 500 ? "1.5rem" : "2rem"}}>ConnectKid</p>
            <div className="row">
            <p className="text-center">
                &emsp;&emsp;ConnectKid is a full-stack React application focused on providing both in-person and online events with the ability
                to set attendence through the fully authentificated login system. Built with React,
                Express.Js, Node.Js, React-Bootstrap, JWT, Apollo, GraphQL, and Bcrypt.
            </p>
            </div>
            <div className="row pb-5">
                <div className="col-8 mx-auto d-flex justify-content-around">
                    <Button className="project-button" onClick={ () => {window.open("https://github.com/Ehren-Lewis/ConnectKid")}}>Repository</Button>
                    <Button className="project-button" onClick={ () => {window.open("https://connect-kid.herokuapp.com/")}}>Live Site</Button>
                </div>
            </div>
        </div>
        
        <div className=" justify-content-center col-lg-12 col-xl-4">
            { windowWidth > 550 ? 
                <img src={require("../images/connectKidEvents.png")} style={biggerImage} alt="Event page of ConnectKid" className="mx-auto d-block"  /> :
                <img src={require("../images/connectKidEvents.png")} style={smallerImage} alt="Event page of ConnectKid" className="mx-auto d-block"  />
                }
                {/* <figcaption className="text-sm text-center text-secondary">(Most Complex)</figcaption>  */}

            </div>


        </div>


        <div className="row text-light mb-5">

            <div className="col-lg-12 col-xl-6 mx-auto">
                <p className="project-name mx-auto" style={{fontSize: windowWidth < 500 ? "1.7rem" : "2rem"}}>Deep Thoughts</p>
                <div className="row">
                
                <p className="text-center">
                    &emsp;&emsp;Deep Thoughts is a full-stack React thought board designed to allow users to post their Thoughts
                    without having to login. Designed and implemented with DynamoDB and S3 Bucket AWS services in the backend, React on the frontend,
                    and deployed to Heroku.
                </p>
                </div>
                <div className="row pb-5">
                <div className="col-8 mx-auto d-flex justify-content-around">
                    <Button className="project-button" onClick={ () => {window.open("https://github.com/Ehren-Lewis/DeepThoughts")}}>Repository</Button>
                    <Button className="project-button" onClick={ () => {window.open("https://deepthoughtsboard.herokuapp.com/")}}>Live Site</Button>
                </div>
            </div>
            </div>

            <div className=" justify-content-center col-lg-12 col-xl-4">
            { windowWidth > 550 ? 
                <img src={require("../images/DeepThoughtsLanding.png")} style={biggerImage} alt="Landing page of Deep Thoughts" className="mx-auto d-block" /> :
                <img src={require("../images/DeepThoughtsLanding.png")} style={smallerImage} alt="Landing page of Deep Thoughts" className="mx-auto d-block" />
                }
            </div>
        </div>

        <div className="row text-light mb-5">


            <div className="col-lg-12 col-xl-6 mx-auto">
                <p className="project-name mx-auto" style={{fontSize: windowWidth < 550 ? '1.7rem': "2rem"}}>Precision Machinery</p>
                <div className="row">
                    <div className="col-12">
                        <p className="text-center">
                        &emsp;&emsp;Precision Machinery is a frontend website focused on design theory, mobile responsiveness,
                        and emulation regarding the standard elements that the clients need in a given website. Built with React, Bootstrap,
                        HTML5, CSS3, and deployed on Netlify</p>
                    </div>
                </div>

                <div className="row pb-5">
                    <div className="col-8 mx-auto d-flex justify-content-around">
                        <Button className="project-button"  onClick={ () => {window.open("https://github.com/Ehren-Lewis/precision-machinery")}}>Repository</Button>
                        <Button className="project-button" onClick={ () => {window.open("precisionmachinery.netlify.app")}}>Live Site</Button>
                    </div>
                </div>
            </div>

            <div className=" justify-content-center col-lg-12 col-xl-4">
                { windowWidth > 550 ? 
                <img src={require("../images/precisionmachinerylanding.png")} style={biggerImage} alt="Landing page of Precision Machinery" className="mx-auto d-block"  /> :
                <img src={require("../images/precisionmachinerylanding.png")} style={smallerImage} alt="Landing page of Precision Machinery" className="mx-auto d-block" />
                }
                <figcaption className="text-sm text-center text-secondary">(Personal Favorite)</figcaption> 
            </div>
        </div>




        </div>
    )
}

export default Projects;
