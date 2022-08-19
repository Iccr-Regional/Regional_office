import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link} from 'react-router-dom';
import axios from 'axios';

  
function EditRegionaloffice() {
  
    // Here usestate has been used in order
    // to set and get values from the jsx
   
    const[rid,setrid]=useState();
    const [rname, setrname] = useState('');
    const [rimage, setrimage] = useState('');
    const[rlocation,setrlocation] = useState('');
    const[rdesc,setrdesc] = useState('');
  
    // function for handling the edit and 
    // pushing changes of editing/updating
    const handelSubmit = (e) =>{
        e.preventDefault(); // preventing from reload
        axios.put("http://localhost:3001/updateregionaloffice",{
            rid:parseInt(rid),
            rname:rname,
            rimage:rimage,
            rlocation:rlocation,
            rdesc:rdesc

        });
        setrid("");
        setrname("");
        setrdesc("");
        setrimage("");
        setrlocation("");
        
    };
  
return (
    <div>
        <Form className="d-grid gap-2" style={{margin:'15rem'}}>
  
            {/* setting a name from the input textfiled */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={rid} 
                              onChange={e => setrid(e.target.value)}  
                              type="number" placeholder="Enter rid" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={rname} 
                              onChange={e => setrname(e.target.value)}  
                              type="text" placeholder="Enter Regional office Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control value={rdesc} 
                              onChange={e => setrdesc(e.target.value)} 
                              type="text" placeholder="Enter description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={rimage} 
                              onChange={e => setrimage(e.target.value)}  
                              type="text" placeholder="Enter image" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={rlocation} 
                              onChange={e => setrlocation(e.target.value)}  
                              type="text" placeholder="Enter location" />
            </Form.Group>
                   
            {/* Handling an onclick event running an edit logic */}
            <Button
                onClick={e => handelSubmit(e)}
                variant="primary" type="submit" size="lg">
                Update
            </Button>
  
            {/* Redirecting to main page after editing */}
            <Link className="d-grid gap-2" to='/superadmin'>
              <Button variant="warning" size="lg">Home</Button>
            </Link>
        </Form>
    </div>
  )
}
  
export default EditRegionaloffice;