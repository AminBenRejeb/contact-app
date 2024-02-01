import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/actions/contactActions';

function AddForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const [cancel,setCancel] = useState(false)
//add
  const add = () => {
    const newContact = { name, email, phone };
    dispatch(addContact(newContact));
    setCancel(!cancel)
    
  };

  return (
    <div style={{ margin: '2px' }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            type="text" placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email" placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            onChange={(e) => setPhone(e.target.value)}
            type="text" placeholder="Phone Number"
          />
        </Form.Group>
        <Button
          onClick={add}
          variant="primary" type="button">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddForm;
