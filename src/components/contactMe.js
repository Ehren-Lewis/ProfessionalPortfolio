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
        // e.stopPropagation();

 

        const templateParams = {
            name: document.querySelector("#name").value,
            email: document.querySelector("#email").value,
            message: document.querySelector("#message").value
        }

        console.log(templateParams);

        const response = await emailjs.send("service_z4n0gcu","template_747wh4q", templateParams, "4UDQw5DrveSXsqEHt");
        
    }

    return (

        <>
        <div className="row">
            <div className="col">
                <p className='text-light mx-auto project-name'>Don't be afraid to reach out!</p>
            </div>
        </div>
        <div className='row mb-5'>
            <div className='col'>
                <Form className='text-light w-50 mx-auto p-3' style={{border: "1px solid #c16632"}} id="contactForm">
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
                </Form.Group>
                <Form.Group>
                    <Button type="submit" onClick={onSubmit} className="mt-3 btn-orange">Submit</Button>
                </Form.Group>

                </Form>
            </div>
        </div>
        </>
    )
}

export default ContactForm