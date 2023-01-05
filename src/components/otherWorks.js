import React, { useState, useEffect } from "react";
import {Button, Card } from "react-bootstrap";

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
            <div className="row">
                <div className="col">
                    <p className="name text-light">Other Works</p>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6 col-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>

                            </Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            </div>


        </div>
    )
}

export default OtherWorks;