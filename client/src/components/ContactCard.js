import React from 'react'
import {Card,Button}from 'react-bootstrap'
import { deleteContact } from '../redux/actions/contactActions'
import { useDispatch } from 'react-redux'
import EditModal from './EditModal'
function ContactCard({contact}) {
  const dispatch = useDispatch()
   const delet =()=>{
    dispatch(deleteContact(contact._id))
   }
  return (
    <div>
        
        <Card style={{ width: '18rem'}}>
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>
          {contact.email}
        </Card.Text>
        <Button variant="primary">{contact.phone}</Button>
      
 </Card.Body>
 <Button onClick={delet}  style={{margin:'10px'}} variant="primary">Delete</Button>
<EditModal contact={contact}/>
    </Card>
    </div>
  )
}

export default ContactCard