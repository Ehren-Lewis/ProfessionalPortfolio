import React, { useState, useEffect } from "react";

import "./otherworks.css"

const OtherWorks = () => {
    const [windowWidth, setwindowWidth] = useState(window.innerWidth);

    const setWidth = () => {
        setwindowWidth(window.innerWidth)
      }

    const otherWorksInfo = [
        {
            "name": "Hobby Spot",
            "link": "https://github.com/Ehren-Lewis/HobbySpot",
            "description":"Discussion site focused around allowing individuals to freely discuss Their hobbies as they please. It features a fully functional login system with User authentification, as well as using cookies to persist session information for the user.",
            "tech": ["Handlebars", "Sequelize", "Express", "SQL"]
        },
        {
            "name": "Spirit",
            "link": "https://github.com/Ehren-Lewis/Spirit",
            "description": "Static web appliation focused on design and mobile responsiveness.",
            "tech": ["Bootstrap", "React"]
        },
        // {
        //     "name": "Deep Thoughts",
        //     "link": "https://github.com/Ehren-Lewis/DeepThoughts",
        //     "description": " Full-stack React thought board designed to allow users to post their thoughts without having to login.",
        //     "tech": ["AWS", "DynamoDB", "React", "Heroku"],
        // },
        {
            "name": "Trilogy API",
            "link": "https://github.com/Ehren-Lewis/TrilogySocialMediaAPI",
            "description": "Functioning backend based around MongoDB and Mongoose that allows for the creation of users, thoughts and reactions that a webstie would use as a backend.",
            "tech": ["MongdoDB", "Mongoos", "Insomnia", "Express"],
        },
        {
            "name": "Manage Your Company",
            "link": "https://github.com/Ehren-Lewis/ManageYourCompany",
            "description": "Command line application that allows for anyone to manage a company by using persisting data techniques to view employees, roles, departments, add additional employees, role, departments, as well as update employees.",
            "tech": ["MySql", "Inquirer", "Node.js"],
        },
        {
            "name": "Follow Your Notes",
            "link": "https://github.com/Ehren-Lewis/FollowYourNotes",
            "description": "Notes taking application. The note taker can view previously saved notes, delete a selected note one at a time, and save new notes to their liking.",
            "tech": ["Node.js", "Insomnia", "HTML", "CSS"],
        },
        {
            "name": "FiHub",
            "link": "https://github.com/Ehren-Lewis/FiHub",
            "description": "Dynamic web application focused on bringing financial information to each user.",
            "tech": ["Node.js", "HTML", "CSS", "APIs"],
            "deployment": "https://ehren-lewis.github.io/FiHub/"
        },
        {
            "name": "Create Your README",
            "link": "https://github.com/Ehren-Lewis/CreateYourREADME",
            "description": "Fully automated command line interface README generator that converts your directed inputs into a fully functioning markdown readme file.",
            "tech": ["Node.js", "Inquirer", "Readline-sync"],
        },
        {
            "name": "Dune Scraper",
            "link": "https://github.com/Ehren-Lewis/DuneWebScaper",
            "description": "Python command line web scraper that gets the scores from Rotten Tomatoes, converts the scores to one common notation, and then averages the number of appearences for each score, then presents it to the user in an easy to understand format.",
            "tech": ["Selenium", "BeautifulSoup", "MatPlotLib", "Python"],
        }  

    ]


  
    useEffect( () => {
      window.addEventListener('resize', setWidth)
    })


    return(
        <div>      


            <div style={{marginBottom:"100px"}}></div>

            <div className={windowWidth < 600 ? "row mb-5" : "row justify-content-center mb-5" }>
                <div className="col-5">
                    <p className="name text-light" style={{fontSize: windowWidth <  600 ? "2.3rem" : "3rem"}}>Other Works</p>
                </div>
            </div>


            
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {otherWorksInfo.map( ele => {
                
                return (
      
                <div className="col" key={ele.name}>
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="card-title">
                                <div className="card-title-wrapper">
                                    <p>{ele.name}</p>
                                    <a href={ele.link} target={"_blank"}>
                                        <svg width="24" className="folder" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11 5h13v17h-24v-20h8l3 3zm-10-2v18h22v-15h-12.414l-3-3h-6.586z"/></svg>
                                    </a>
                                </div>
                            </div>
                            <p className="card-text">{ele.description}</p>
                        </div>

                        <div className="card-footer">
                            {
                                <ul className="technology-list">
                                    {ele.tech.map( (tech_item, idx) => {
                                        return (
                                            <li key={`${ele.name}-tech-${idx}`}>{tech_item}</li>
                                        )
                                    })}
                                </ul>

                                    
                            }
                        </div>
                    </div>
                </div>
                )
                
            })
            }
   
            </div>



        </div>
    )
}

export default OtherWorks;