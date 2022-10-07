import React from "react";
// import portaitPhotoTransparent from "../images/portaitPhotoTransparent.png";
const AboutMe = () => {
    return(
        <>
            <div className="snippet" style={{marginTop: "150px"}}>
                <h1 className="greeting cyber-grey text-light">Hello, I am </h1>
                <p className="name text-light">Ehren Lewis</p>
                <p className="cyber-grey text-light">Fullstack Software Developer</p>
                <p className="description text-light">&emsp;&emsp;I am currently a student
                    in the University of Denver Fullstack Software Developer
                    Coding Bootcamp. I live in Fort Worth, Texas. I currently
                    have experience with Pyhon, Django, Tkinter, HTML, CSS, Bootstrap, and JavaScript,
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
                        {/* <img src="/assets/images/portraitPhotoTransparent.png" width="300px" height="304px"> */}
                        {/* <img src="../../assets/images/portaitPhotoTransparent.png" width="300px" height="304px" /> */}
                        {/* <img src={portaitPhotoTransparent} />   */}
                        <img src={require("../images/portraitPhotoTransparent.png")} alt="Myself with a transparent background"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe;