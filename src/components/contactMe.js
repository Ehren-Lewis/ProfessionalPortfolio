import { React, useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import "./contactMe.css"

const ContactForm =  () => {
    const [windowWidth, setwindowWidth] = useState(window.innerWidth);
    const setWidth = () => {
      setwindowWidth(window.innerWidth)
    }
    useEffect( () => {
      window.addEventListener('resize', setWidth)
    });

    return (

        <>
        <div className="row">
            <div className="col">
                <p className='text-light mx-auto project-name'>Don't be afraid to reach out!</p>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <Form className='text-light w-50 mx-auto p-3' style={{border: "1px solid #c16632"}}>
                <Form.Group className='mb-2'>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Full Name" className='form-input'/>
                </Form.Group>


                <Form.Group className="mb-2">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email@Address.com" className='form-input' />
                </Form.Group>

                <Form.Group>
                <Form.Label>Message </Form.Label>
                <Form.Control as="textarea" row={3} className='form-input'/>

                </Form.Group>

                </Form>
            </div>
        </div>
        </>
    )
}

export default ContactForm