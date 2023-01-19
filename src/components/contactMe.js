import { React, useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import "./contactMe.css"

const ContactForm =  () => {
    const [windowWidth, setwindowWidth] = useState(window.innerWidth);
    const setWidth = () => {
      setwindowWidth(window.innerWidth)
    }
    useEffect( () => {
      window.addEventListener('resize', setWidth)
    });

    const onSubmit = async e => {
        e.preventDefault();
        emailjs.init("4UDQw5DrveSXsqEHt");
        // e.stopPropagation();

 

        const templateParams = {
            name: document.querySelector("#name").value,
            email: document.querySelector("#email").value,
            message: document.querySelector("#message").value
        }


        await emailjs.send("service_z4n0gcu","template_747wh4q", templateParams, "4UDQw5DrveSXsqEHt");

        document.querySelector("#confirmation").textContent = "Email Sent!"
        
    }

    return (

        <>
        <div style={{marginBottom:"100px"}}></div>

        <div className="row">
            <div className="col-sm-12 col-md-6 mx-auto d-flex justify-content-center mb-3">
            <p className="name text-light text-center" style={{fontSize: windowWidth <  600 ? "2.5rem" : "3rem"}}>Reach out!</p>
        </div>
        </div>
        <div className="row">
        <div className='col-sm-12 col-md-6 mx-auto '>
            <p className='text-light text-sm-center'>Whether it's a question about software development, wanting to work
            on a project together, or employment opportunies, I am available and will respond!</p>

                {/* <p className='text-light mx-auto project-name name' >!</p> */}
            </div>
        </div>
        <div className='row mb-5'>
            <div className='col-sm-12 col-md-7 mx-auto'>
                <Form className='text-light mx-auto p-3' style={{border: "1px solid #c16632"}} id="contactForm">
                <Form.Group className='mb-2'>
                <Form.Label>Name</Form.Label>
                <Form.Control id="name" type="text" placeholder="Full Name" className='form-input'/>
                </Form.Group>


                <Form.Group className="mb-2">
                <Form.Label>Email</Form.Label>
                <Form.Control id="email" type="email" placeholder="Email@Address.com" className='form-input' />
                </Form.Group>

                <Form.Group>
                <Form.Label>Message </Form.Label>
                <Form.Control id="message" as="textarea" rows={3} className='form-input'/>
                <small id="confirmation"></small>
                </Form.Group>
                <Form.Group>
                    <Button type="submit" onClick={onSubmit} className="mt-3 button-orange">Submit</Button>
                </Form.Group>

      

                </Form>
            </div>
        </div>
        </>
    )
}

export default ContactForm