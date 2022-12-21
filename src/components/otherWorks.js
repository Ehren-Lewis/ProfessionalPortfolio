import React, { useState, useEffect } from "react";
import {Button } from "react-bootstrap";

const OtherWorks = () => {
    const [windowWidth, setwindowWidth] = useState(window.innerWidth);

    const setWidth = () => {
      setwindowWidth(window.innerWidth)
    }
  
    useEffect( () => {
      window.addEventListener('resize', setWidth)
    })

  
    return(
        <div>



        </div>
    )
}

export default OtherWorks;