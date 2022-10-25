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
        <div id="projects" style={{marginTop: "150px"}}>

{/* 
        { windowWidth > 850 ?
            <div className="row justify-content-center mb-5">
            <div className="col-5">
                <p className="name text-light">My Projects</p>
            </div>
        </div> :
        <div className="row mb-5">
            <div className="col-5">
                <p className="name text-light" style={{fontSize: "243m"}}>My Projects</p>
            </div>
        </div>
        } */}
        <div className={windowWidth < 600 ? "row mb-5" : "row justify-content-center mb-5" }>
            <div className="col-5">
                <p className="name text-light" style={{fontSize: windowWidth <  500 ? "2.5rem" : "3rem"}}>My Projects</p>
            </div>
        </div>

        <div className="row text-light mb-5">


            <div className="col-lg-12 col-xl-6 mx-auto">
                <p className="project-name mx-auto">Hobby Spot</p>
                <div className="row">
                    <div className="col-12">
                        <p className="text-center">
                        &emsp;&emsp;Hobby Spot is a Discussion sight focused around allowing individuals to freely discuss
                        Their hobbies as they please. It features a fully functional login system with User authentification,
                        as well as using cookies to persist session information for the user. This project was a collaboration between <a href="https://github.com/SThevenot" className="links" target="_blank" rel="noreferrer">Sarah Thevenot</a>, <a href="https://github.com/vianvianc" className="links" target="_blank" rel="noreferrer">Vian Charbonneau</a>,
                        <a href="https://github.com/ConnerMart" className="links" target="_blank" rel="noreferrer">Conner Martin</a>, 
                        <a href="https://github.com/csundheimjr" className="links" target="_blank" rel="noreferrer">Carl Sundheim</a>, <a href="https://github.com/trystan333" className="links" target="_blank" rel="noreferrer">Trystan Button</a>, and I.</p>
                    </div>
                </div>
                <div className="row pb-5">
                    <div className="col-6 mx-auto d-flex justify-content-around">
                        <Button className="btn" onClick={ () => {window.open("https://github.com/Ehren-Lewis/HobbySpot")}}>Repository</Button>


                        <Button className="btn" onClick={ () => {window.open("https://damp-reaches-02576.herokuapp.com")}}>Live Site</Button>
                    </div>
                </div>
            </div>
            
            <div className=" justify-content-center col-lg-12 col-xl-4">
                { windowWidth > 550 ? 
                <img src={require("../images/hobbySpotLanding.png")} style={biggerImage} alt="Landing page of Hobby Spot" className="mx-auto d-block"  /> :
                <img src={require("../images/hobbySpotLanding.png")} style={smallerImage} alt="Landing page of Hobby Spot" className="mx-auto d-block" />
                }
            </div>
        </div>

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
                <div className="col-6 mx-auto d-flex justify-content-around">
                    <Button className="btn" onClick={ () => {window.open("https://github.com/Ehren-Lewis/ConnectKid")}}>Repository</Button>
                    <Button className="btn" onClick={ () => {window.open("https://hidden-spire-64432.herokuapp.com/")}}>Live Site</Button>
                </div>
            </div>
        </div>
        
        <div className=" justify-content-center col-lg-12 col-xl-4">
            { windowWidth > 550 ? 
                <img src={require("../images/scrapingResults.png")} style={biggerImage} alt="Landing page of Hobby Spot" className="mx-auto d-block"  /> :
                <img src={require("../images/scrapingResults.png")} style={smallerImage} alt="Landing page of Hobby Spot" className="mx-auto d-block"  />
                }
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
                <div className="col-6 mx-auto d-flex justify-content-around">
                    <Button className="btn" onClick={ () => {window.open("https://github.com/Ehren-Lewis/DeepThoughts")}}>Repository</Button>
                    <Button className="btn" onClick={ () => {window.open("https://thawing-depths-74272.herokuapp.com/")}}>Live Site</Button>
                </div>
            </div>
            </div>

            <div className=" justify-content-center col-lg-12 col-xl-4">
            { windowWidth > 550 ? 
                <img src={require("../images/tkinterBookshelf.png")} style={biggerImage} alt="Landing page of Hobby Spot" className="mx-auto d-block" /> :
                <img src={require("../images/tkinterBookshelf.png")} style={smallerImage} alt="Landing page of Hobby Spot" className="mx-auto d-block" />
                }
            </div>
        </div>




        </div>
    )
}

export default Projects;