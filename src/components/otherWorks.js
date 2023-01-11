import React, { useState, useEffect } from "react";
import {Card } from "react-bootstrap";
import axios from 'axios';
import "./otherworks.css"
import { faKrw } from "@fortawesome/free-solid-svg-icons";

const OtherWorks = () => {
    const [windowWidth, setwindowWidth] = useState(window.innerWidth);
    const [repoData, setRepoData] = useState();

    const otherWorksInfo = [
        {
            "name": "Hobby Spot",
            "link": "https://github.com/Ehren-Lewis/HobbySpot",
            "description":"Hobby Spot",
            "tech": "Handlebars, SQL, Sequelize"
        },
        {
            "name": "Spirit",
            "link": "",
            "description": "Static web appliation focused on design and mobile responsiveness",
            "tech": "Bootstrap, React"
        },
        {
            "name": "Deep Thoughts",
            "link": "",
            "description": " Full-stack React thought board designed to allow users to post their thoughts without having to login.",
            "tech": "AWS, DynamoDB, React, Heroku",
        },
        {
            "name": "Trilogy Backend",
            "link": "",
            "description": "",
            "tech": "",
        },
        {
            "name": "Manage Your Company",
            "link": "",
            "description": "",
            "tech": "",
        },
        {
            "name": "Follow Your Notes",
            "link": "",
            "description": "",
            "tech": "",
        },
        {
            "name": "FiHub",
            "link": "",
            "description": "",
            "tech": "",
        },
        {
            "name": "Create Your README",
            "link": "",
            "description": "",
            "tech": "",
        },
        {
            "name": "Dune Scraper",
            "link": "",
            "description": "",
            "tech": "",
        }  

    ]

    const setWidth = () => {
      setwindowWidth(window.innerWidth)
    }
  
    useEffect( () => {
      window.addEventListener('resize', setWidth)
    })

    // useEffect( () => {
    //     const getData = () => {
    //         const myData = axios.get(myReposUrl).then( (response) => {
    //             setRepoData(response.data);
    //             console.log(response.data);
    //         });
    //     }
    //     getData();
    // }, [])

  
//data.url

    return(
        <div>

            <div style={{marginBottom:"200px"}}></div>
            
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
                    </div>
                </div>
                )
                
            })
            }
                {/* <div className="col">
                    <div className="card h-100">
                    <div className="card-body">
                        <div className="card-title">
                        <div className="card-title-wrapper">
                            <p>Hobby Spot</p>
                            <a href="https://github.com/Ehren-Lewis/HobbySpot" target={"_blank"}>
                            <svg width="24" className="folder" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11 5h13v17h-24v-20h8l3 3zm-10-2v18h22v-15h-12.414l-3-3h-6.586z"/></svg>
                            </a>
                        </div>
                        </div>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100">
                    <div className="card-body">
                        <div className="card-title">
                        <div className="card-title-wrapper">
                            <p>Title</p>
                            <a href="https://github.com/Ehren-Lewis/HobbySpot" target={"_blank"}>
                            <svg width="24" className="folder" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11 5h13v17h-24v-20h8l3 3zm-10-2v18h22v-15h-12.414l-3-3h-6.586z"/></svg>
                            </a>
                        </div>
                        </div>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100">
                    <div className="card-body">
                        <div className="card-title">
                        <div className="card-title-wrapper">
                            <p>Title</p>
                            <a href="https://github.com/Ehren-Lewis/HobbySpot" target={"_blank"}>
                            <svg width="24" className="folder" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11 5h13v17h-24v-20h8l3 3zm-10-2v18h22v-15h-12.414l-3-3h-6.586z"/></svg>
                            </a>
                        </div>
                        </div>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100">
                    <div className="card-body">
                        <div className="card-title">
                        <div className="card-title-wrapper">
                            <p>Title</p>
                            <a href="https://github.com/Ehren-Lewis/HobbySpot" target={"_blank"}>
                            <svg width="24" className="folder" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11 5h13v17h-24v-20h8l3 3zm-10-2v18h22v-15h-12.414l-3-3h-6.586z"/></svg>
                            </a>
                        </div>
                        </div>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div> */}
   
            </div>



        </div>
    )
}

export default OtherWorks;