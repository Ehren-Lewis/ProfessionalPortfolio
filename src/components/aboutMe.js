import React from "react";
import TypeIt from "typeit-react"

// import portaitPhotoTransparent from "../images/portaitPhotoTransparent.png";
import "./aboutMeStyle.css"
const AboutMe = () => {

    // const [instance, setInstance] = useState(null);

    return(


        <>
           
            <h1 className="greeting cyber-grey text-light" style={{marginTop: "150px"}}>Hello, I am </h1>

                <p className="name text-light my-5" style={{fontSize: "5rem"}}>Ehren Lewis</p>
                <div className="snippet" >
                <div className="typewriter">

                <TypeIt className="cyber-grey text-light" element={"h2"} style={{fontSize: "3rem"}}
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
                <p className="description text-light">&emsp;&emsp; I'm a software developer currently living in 
                Fort Worth, Texas. I'm interestedin frontend, backend, and full stack opportunities,
                and I can't wait to use my skills in a professional setting!
                </p>
            </div>

            <div className="about-section">
                <div className="row" style={{marginTop: "200px"}} id="about">
                    <div className="col-5">
                        <p className="name text-light">About Me</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-xl-6 text-light about-p">
                        <p>&ensp;&ensp;Hi, I'm Ehren! My first runin with software development was my senior year of high school.
                            Ever since then, I've been obssessed the scope of what programming can do, fueling
                            a desire to learn as much as I can about the topic.
                        </p>

                        <div className="row">
                            <p className="text-light">&ensp;&ensp;My goal is to enter the industry as a web developer focusing on
                                frontend sofware development
                            </p>

                            </div>
                        <div className="row">
                        <p className="text-light">I'm excited to use my knowledge in <span className="cyberpunk-pink">JavaScript</span>, <span className="cyberpunk-pink">JQuery</span>, <span className="cyberpunk-teal">HTML/CSS</span>,
                            <span className="cyberpunk-teal">React</span>, and <span className="cyber-grey">Node.js</span> (just to name a few technologies I know), to help any company
                            provide the most relevant and up to date technology we all desire!</p>
                        </div>
                    </div>
                    <div className="col-lg-12 col-xl-6 d-flex justify-content-center">
                        {/* <img src={require("../images/portraitPhotoTransparent.png")} alt="Myself with a transparent background" /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe;