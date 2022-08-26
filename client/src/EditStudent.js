import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link} from 'react-router-dom';
import axios from 'axios';

  
function EditStudent(props) {
    const Student=props.location.state;
    // Here usestate has been used in order
    // to set and get values from the jsx
    const [sid, setsid] = useState(Student.sid);
    const[rid,setrid]=useState(Student.rid);
    const [sname, setsname] = useState(Student.sname);
    const[spno,setspno] = useState(Student.spno);
    const [sdob, setsdob] = useState(Student.sdob);
    const [passport, setpassport] = useState(Student.passport);
    const[gender,setgender] = useState(Student.gender);
    const[mailid,setmailid] = useState(Student.mailid);
    const [homecity, sethomecity] = useState(Student.homecity);
    const [cname, setcname] = useState(Student.cname);
    const[ccity,setccity] = useState(Student.ccity);
    const [coname, setconame] = useState(Student.coname);
    const [scmoney, setscmoney] = useState(Student.scmoney);
  
    // function for handling the edit and 
    // pushing changes of editing/updating
    const handelSubmit = (e) =>{
        e.preventDefault(); // preventing from reload
        axios.put("http://localhost:3001/updatestudentinfo",{
            sid:parseInt(sid),
            sname:sname,
            spno:parseInt(spno),
            sdob:sdob,
            passport:parseInt(passport),
            gender:gender,
            mailid:mailid,
            homecity:homecity,
            cname:cname,
            rid:parseInt(rid),
            ccity:ccity,
            coname:coname,
            scmoney:parseInt(scmoney)

        });
        setsid("");
        setsname("");
        setspno("");
       
        setsdob("");
        setpassport("");
        setgender("");
        setmailid("");
        sethomecity("");
        setccity("");
        setrid("");
        setconame("");
        setscmoney("");
     
    };
  
return (
    <div>
        <Form className="d-grid gap-2" style={{margin:'15rem'}}>
  
            {/* setting a name from the input textfiled */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={sid} 
                              onChange={e => setsid(e.target.value)}  
                              type="number" placeholder="Enter Student id" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={sname} 
                              onChange={e => setsname(e.target.value)}  
                              type="text" placeholder="Enter student Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={spno} 
                              onChange={e => setspno(e.target.value)}  
                              type="number" placeholder="Enter Phone Number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control value={sdob} 
                              onChange={e => setsdob(e.target.value)} 
                              type="date" placeholder="Enter Date of Birth" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={passport} 
                              onChange={e => setpassport(e.target.value)}  
                              type="number" placeholder="Enter Passport" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={gender} 
                              onChange={e => setgender(e.target.value)}  
                              type="text" placeholder="Enter Gender" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={mailid} 
                              onChange={e => setmailid(e.target.value)}  
                              type="email" placeholder="Enter Mail Id" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={homecity} 
                              onChange={e => sethomecity(e.target.value)}  
                              type="text" placeholder="Enter Home City" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={cname} 
                              onChange={e => setcname(e.target.value)}  
                              type="text" placeholder="Enter College Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={ccity} 
                              onChange={e => setccity(e.target.value)}  
                              type="text" placeholder="Enter College city" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={rid} 
                              onChange={e => setrid(e.target.value)}  
                              type="number" placeholder="Enter Rid" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={coname} 
                              onChange={e => setconame(e.target.value)}  
                              type="text" placeholder="Enter College Name" />
            </Form.Group>
                   
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control value={scmoney} 
                              onChange={e => setscmoney(e.target.value)}  
                              type="number" placeholder="Enter Scholarship Name" />
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
  
export default EditStudent;