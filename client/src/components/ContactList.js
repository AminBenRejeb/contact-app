import React, {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getContacts} from '../redux/actions/contactActions'
import ContactCard from './ContactCard'

 function ContactList() {
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getContacts())
    }, [])
const contacts = useSelector((state)=>state.contacts.contacts)
console.log(contacts)  
return (
    <div>
      <container style={{display:'flex', flexWrap:'wrap',margin:'5px'}}>
      {contacts && contacts.map((contact)=>(
        <ContactCard contact={contact}/>
      ))}
        </container>
        </div>
  )
}

export default ContactList
