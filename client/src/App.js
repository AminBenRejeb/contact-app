import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ContactList from './components/ContactList';
import {Link,Route,Routes} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import AddForm from './components/AddForm';
import EditModal from './components/EditModal'
function App() {
  return (
    <div className="App">
    <NavBar/>
    
    <Button style={{color:'black',backgroundColor:'white'}}><Link to ='/list'> contact List </Link> </Button>
    
    <Button style={{color:'black',backgroundColor:'white'}}><Link to ='/add'> Add Contact </Link> </Button>
    <Routes>
      <Route path='/list'element={<ContactList/>}/>
      <Route path='/add' element ={<AddForm/>}/>
    </Routes>
    </div>
  );
}


export default App;
