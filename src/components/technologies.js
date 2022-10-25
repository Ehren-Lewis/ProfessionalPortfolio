import React, {useState, useEffect} from "react";
import TypeIt from "typeit-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./aboutMeStyle.css"

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
            <div className="col d-flex justify-content-end">
                <p className="name text-light">My Technologies</p>
            </div>
        </div>

        <div className="row">
            
        </div>
        
        </>
    )
}

export default Technologies;