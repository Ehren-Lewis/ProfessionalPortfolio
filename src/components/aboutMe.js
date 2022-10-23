import React, {useState, useEffect} from "react";
import TypeIt from "typeit-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./aboutMeStyle.css"

gsap.registerPlugin(ScrollTrigger);

// import portaitPhotoTransparent from "../images/portaitPhotoTransparent.png";
const AboutMe = () => {

    const [windowWidth, setwindowWidth] = useState(window.innerWidth);

    const setWidth = () => {
      setwindowWidth(window.innerWidth)
    }
  
    useEffect( () => {
      window.addEventListener('resize', setWidth)
    })

    const helloStyle = {
        marginLeft: "20%",
        marginTop: "150px"
    }    
    

    const nameStyle = {
        fontSize: "5rem"
    }

    const snallStyle= {
        fontSize: "3rem"
    }
    // const [instance, setInstance] = useState(null);

    return(


        <>
        <div className="background-wrapper">
           
            <h1 className="greeting cyber-grey text-light" style={helloStyle}>Hello, I am </h1>

                {/* <p className="name text-light my-5" style={{ fontSize: windowWidth < 500 ? "2rem" : "5rem"}}>Ehren Lewis</p> */}
                <p className="name text-light my-5" style={{ fontSize: windowWidth < 500 ? "2.3rem" : windowWidth < 769 ? "3rem" : "5rem"}}>Ehren Lewis</p>

                <div className="snippet" >
                <div className="typewriter">

                <TypeIt className="cyber-grey text-light" element={"h2"} style={{fontSize: windowWidth < 500 ? "2rem": "3rem"}}
                    getBeforeInit={(instance) => {
                        instance
                        .pause(500)
                        .type("Life-long learner")
                        .pause(500)
                        .delete(18)
                        .pause("200")
                        .type("Fullstack Software Developer")
                        .pause("1000")
                        .delete(28)

                        .type("Your next employee")
                    return instance
                    }} />

                </div>
                <div className="col-xs-11 col-lg-6 mx-auto">
                <p className="description text-light text-center w-100">&emsp;&emsp; I'm a software developer currently living in 
                Fort Worth, Texas. I'm interested in frontend, backend, and full stack opportunities,
                and I can't wait to use my skills in a professional setting!
                </p>
                </div>
            </div>

            </div>


            <div id="smooth-wrapper">
            <div id="smooth-content">
            <div className="about-section">
                <div className="row" style={{marginTop: "200px"}} id="about">
                    <div className="col-5">
                        <p className="name text-light">About Me</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-lg-12 col-xl-6 text-light about-p text-center">
                        <p>&ensp;&ensp;Hi, I'm Ehren! My first runin with software development was my senior year of high school.
                            Ever since then, I've been obssessed the scope of what programming can do, fueling
                            a desire to learn as much as I can about the topic.
                        </p>

                        <div className="row">
                            <p className="text-light">&ensp;&ensp;My goal is to enter the industry as a web developer, regardless of frontend, backend
                            or full stack position.
                            </p>

                            </div>
                        <div className="row">
                        <p className="text-light">Outside of software development, I'm a classically trained musician. I played the violin for 7 years
                         and I have performed along the Fort Worth Symphony Orchestra with the Fort Worth Youth Orchestra. I now play the piano,
                         but regardless of the instrument I play, I always love the challenge of understanding what it takes to master a skill! </p>
                        </div>
                    </div>
                    <div className="col-lg-12 col-xl-6 d-flex justify-content-center">
                        <img src={require("../images/portraitPhotoTransparent.png")} alt="Myself with a transparent background" width="300px" height="304px" className="img-border"/>
                    </div> 
                </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default AboutMe;