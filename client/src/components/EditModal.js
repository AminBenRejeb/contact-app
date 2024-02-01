import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editContact } from '../redux/actions/contactActions';

function EditModal({ contact }) {
  // states
  const [modal, setModal] = useState(false);
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);

  // Toggle function to open/close the modal
  const toggle = () => {
    setModal(!modal);
  };

  const dispatch = useDispatch();

  // edit
  const edit = () => {
    dispatch(editContact(contact._id, { name, email, phone }));
    toggle();
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Edit Contact
      </Button>
      <Modal show={modal} onHide={toggle}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </Form.Group>
          <Button onClick={edit} variant="primary" type="button">
            Submit
          </Button>
        </Form>
      </Modal>
    </div>
  );
}

export default EditModal;
