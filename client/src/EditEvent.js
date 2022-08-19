import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link} from 'react-router-dom';
import axios from 'axios';

  
function EditEvent() {
  
    // Here usestate has been used in order
    // to set and get values from the jsx
    const [eid, seteid] = useState();
    const[rid,setrid]=useState();
    const [ename, setename] = useState('');
    const[edesc,setedesc] = useState('');
    const [estartdate, setestartdate] = useState('');
    const [eenddate, seteenddate] = useState('');
    const [etime, setetime] = useState('');
    const[ebp,setebp] = useState();
    const[egp,setegp] = useState();
    const [ewin, setewin] = useState('');
    const [eimg, seteimg] = useState('');
    const[elocation,setelocation] = useState('');
    const [evid, setevid] = useState('');
  
    // function for handling the edit and 
    // pushing changes of editing/updating
    const handelSubmit = (e) =>{
        e.preventDefault(); // preventing from reload
        axios.put("http://localhost:3001/updateevent",{
            eid:parseInt(eid),
            rid:parseInt(rid),
            ename:ename,
            edesc:edesc,
            estartdate:eenddate,
            eenddate:eenddate,
            etime:etime,
            ebp:parseInt(ebp),
            egp:parseInt(egp),
            ewin:ewin,
            eimg:eimg,
            elocation:elocation,
            evid:evid

        });
        seteid("");
        setename("");
        setedesc("");
        setestartdate("");
        seteenddate("");
        setetime("");
        setebp("");
        setegp("");
        setewin("");
        seteimg("");
        setelocation("");
        setevid("");
     
    };
  
return (
    <div>
        <Form className="d-grid gap-2" style={{margin:'15rem'}}>
  
            {/* setting a name from the input textfiled */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={eid} 
                              onChange={e => seteid(e.target.value)}  
                              type="number" placeholder="Enter eid" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={rid} 
                              onChange={e => setrid(e.target.value)}  
                              type="number" placeholder="Enter rid" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={ename} 
                              onChange={e => setename(e.target.value)}  
                              type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control value={edesc} 
                              onChange={e => setedesc(e.target.value)} 
                              type="text" placeholder="Enter description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={estartdate} 
                              onChange={e => setestartdate(e.target.value)}  
                              type="date" placeholder="Enter start date" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={eenddate} 
                              onChange={e => seteenddate(e.target.value)}  
                              type="date" placeholder="Enter end date" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={etime} 
                              onChange={e => setetime(e.target.value)}  
                              type="time" placeholder="Enter time" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={ebp} 
                              onChange={e => setebp(e.target.value)}  
                              type="number" placeholder="Enter boys participated" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={egp} 
                              onChange={e => setegp(e.target.value)}  
                              type="number" placeholder="Enter girls participated" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={ewin} 
                              onChange={e => setewin(e.target.value)}  
                              type="text" placeholder="Enter winner" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={eimg} 
                              onChange={e => seteimg(e.target.value)}  
                              type="text" placeholder="Enter image" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={elocation} 
                              onChange={e => setelocation(e.target.value)}  
                              type="text" placeholder="Enter location" />
            </Form.Group>
                   
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={evid} 
                              onChange={e => setevid(e.target.value)}  
                              type="text" placeholder="Enter Video Link" />
            </Form.Group>
  
            {/* Hadinling an onclick event running an edit logic */}
            <Button
                onClick={e => handelSubmit(e)}
                variant="primary" type="submit" size="lg">
                Update
            </Button>
  
            {/* Redirecting to main page after editing */}
            <Link className="d-grid gap-2" to='/admin'>
              <Button variant="warning" size="lg">Home</Button>
            </Link>
        </Form>
    </div>
  )
}
  
export default EditEvent;