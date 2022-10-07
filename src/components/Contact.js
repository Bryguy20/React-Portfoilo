import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Contact() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form =event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

   return(
     <div>
         <h2>Contact Page</h2>
         <Form className="contact-me" noValiadte validated={validated} onSubmit={handleSubmit}>
             <Form.Group className="form-group">
                 <Form.Label>Name</Form.Label>
                <Form.Control className="form-control" id="name" type="text" placeholder="John Smith" required />
                <Form.Control.Feedback type='invalid'>Please enter a name</Form.Control.Feedback>
                 </Form.Group> 
                 <Form.Group className="form-group">
                     <Form.Label>Email address</Form.Label>
                     <Form.Control type="email" className="form-control" id="email" placeholder="jphnsmith@eample.com" required />
                     <Form.Control.Feedback type='invalid'>Please provide a valid email</Form.Control.Feedback>
                 </Form.Group>
                 <Form.Group className="form-group">
                     <Form.Label>Message</Form.Label>
                     <textarea className="form-control" id="message" rows="4" required></textarea>
                 </Form.Group>
                 <Button className="btn btn-primary" type="submit">Submit</Button>
             
         </Form>
     </div>
   ); 
}

export default Contact;