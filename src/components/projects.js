import React, { useState, useEffect } from "react";

const Projects = () => {
    const [windowWidth, setwindowWidth] = useState(window.innerWidth);

    const setWidth = () => {
      setwindowWidth(window.innerWidth)
    }
  
    useEffect( () => {
      window.addEventListener('resize', setWidth)
      console.log(windowWidth)
    })

    const smallerImage = {
        width: "370px",
        height: "300px"
    }
    
    const biggerImage = {
        width: "400px",
        height: "300px"
    }

  
    return(
        <div id="projects" style={{marginTop: "150px"}}>
        <div className="row justify-content-center project-title-container mb-5">
            <div className="col-5">
                {/* <p className="name text-light">My Projects</p> */}
            </div>
        </div>

        <div className="row text-light mb-5 d-flex flex-wrap">
            <div className="col-lg-7 mx-auto col-xl-4 order-2">
                { windowWidth > 550 ? 
                <img src={require("../images/hobbySpotLanding.png")} style={biggerImage} alt="Landing page of Hobby Spot" /> :
                <img src={require("../images/hobbySpotLanding.png")} style={smallerImage} alt="Landing page of Hobby Spot" />
                }
            </div>

                <div className="col-lg-12 col-xl-6 order-1 mx-auto">
                    <p className="project-name mx-auto">Hobby Spot</p>
                    <div className="row">
                        &emsp;&emsp;Hobby Spot is a Discussion sight focused around allowing individuals to freely discuss
                        Their hobbies as they please. It features a fully functional login system with User authentification,
                        as well as using cookies to persist session information for the user. This project was a collaboration between <a href="https://github.com/SThevenot" className="links" target="_blank" rel="noreferrer">Sarah Thevenot</a>, <a href="https://github.com/vianvianc" className="links" target="_blank" rel="noreferrer">Vian Charbonneau</a>,
                        <a href="https://github.com/ConnerMart" className="links" target="_blank" rel="noreferrer">Conner Martin</a>, 
                        <a href="https://github.com/csundheimjr" className="links" target="_blank" rel="noreferrer">Carl Sundheim</a>, <a href="https://github.com/trystan333" className="links" target="_blank" rel="noreferrer">Trystan Button</a>, and I.
                    </div>
                </div>


        
        </div>

        <div className="row text-light mb-5 d-flex">
            <div className="col-lg-7 mx-auto col-xl-4 order-2">
            { windowWidth > 550 ? 
                <img src={require("../images/scrapingResults.png")} style={biggerImage} alt="Landing page of Hobby Spot" /> :
                <img src={require("../images/scrapingResults.png")} style={smallerImage} alt="Landing page of Hobby Spot" />
                }
            </div>

            <div className="col-lg-12 col-xl-6 order-1 mx-auto">
                <p className="project-name mx-auto">Python Webscraping</p>

                <div className="row">
                    &emsp;&emsp;Command line Python data scraper. Gathers information on the 2021 movie "Dune" and presents it in an easy to digest format. Built off of Selenium automation, BeautifulSoup for html scraping, and MatPlotLib to present the number of move scores per rating.
                </div>
            </div>
        </div>

        <div className="row text-light mb-5">
            <div className="col-lg-7 mx-auto col-xl-4 order-2">
            { windowWidth > 550 ? 
                <img src={require("../images/tkinterBookshelf.png")} style={biggerImage} alt="Landing page of Hobby Spot" /> :
                <img src={require("../images/tkinterBookshelf.png")} style={smallerImage} alt="Landing page of Hobby Spot" />
                }
            </div>

            <div className="col-lg-12 col-xl-6 order-1 mx-auto">
                <p className="project-name mx-auto">Python GUI Library</p>

                <div className="row">
                    &emsp;&emsp;Python desktop application built with Tkinter
                    for the GUI and SQLite3 for the database. Designed to have 9 different
                    bookshelves, name is fully customizable, and each bookshelf can store 
                    as many books as needed. The application supports creation,
                    reading, updating, and deleting.
                </div>
            </div>
        </div>
    </div>
    )
}

export default Projects;