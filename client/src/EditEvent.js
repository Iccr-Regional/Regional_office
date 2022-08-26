// import React, { useState } from 'react'
// import { Button, Form } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link} from 'react-router-dom';
// import axios from 'axios';

  
// function EditEvent(props) {
//     const Event=props.location.state;
//     // Here usestate has been used in order
//     // to set and get values from the jsx
//     const [eid, seteid] = useState(Event.eid);
//     const[rid,setrid]=useState(Event.rid);
//     const [ename, setename] = useState(Event.ename);
//     const[edesc,setedesc] = useState(Event.edesc);
//     const [edate, setedate] = useState(Event.edate);
    
//     const [etime, setetime] = useState(Event.etime);
//     const[ebp,setebp] = useState(Event.ebp);
//     const[egp,setegp] = useState(Event.egp);
//     const [ewin, setewin] = useState(Event.ewin);
//     const [eimg, seteimg] = useState(Event.eimg);
//     const[elocation,setelocation] = useState(Event.elocation);
//     const [evid, setevid] = useState(Event.evid);
//     const[ebudget,setebudget] = useState(Event.ebudget);
//     const[ebudgetlink,setebudgetlink] = useState(Event.ebudgetlink);
  
//     // function for handling the edit and 
//     // pushing changes of editing/updating
//     const handelSubmit = (e) =>{
//         e.preventDefault(); // preventing from reload
//         axios.put("http://localhost:3001/updateevent",{
//             eid:parseInt(eid),
//             rid:parseInt(rid),
//             ename:ename,
//             edesc:edesc,
           
//             edate:edate,
//             etime:etime,
//             ebp:parseInt(ebp),
//             egp:parseInt(egp),
//             ewin:ewin,
//             eimg:eimg,
//             elocation:elocation,
//             evid:evid,
//             ebudget:parseInt(ebudget),
//             ebudgetlink:ebudgetlink,


//         });
//         seteid("");
//         setename("");
//         setedesc("");
       
//         setedate("");
//         setetime("");
//         setebp("");
//         setegp("");
//         setewin("");
//         seteimg("");
//         setelocation("");
//         setevid("");
//         setebudget("");
//         setebudgetlink("");
     
//     };
  
// return (
//     <div>
//         <Form className="d-grid gap-2" style={{margin:'15rem'}}>
  
//             {/* setting a name from the input textfiled */}
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Control value={eid} 
//                               onChange={e => seteid(e.target.value)}  
//                               type="number" placeholder="Enter eid" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Control value={rid} 
//                               onChange={e => setrid(e.target.value)}  
//                               type="number" placeholder="Enter rid" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Control value={ename} 
//                               onChange={e => setename(e.target.value)}  
//                               type="text" placeholder="Enter Name" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//                 <Form.Control value={edesc} 
//                               onChange={e => setedesc(e.target.value)} 
//                               type="text" placeholder="Enter description" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Control value={edate} 
//                               onChange={e => setedate(e.target.value)}  
//                               type="date" placeholder="Enter date" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Control value={etime} 
//                               onChange={e => setetime(e.target.value)}  
//                               type="time" placeholder="Enter time" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Control value={ebp} 
//                               onChange={e => setebp(e.target.value)}  
//                               type="number" placeholder="Enter boys participated" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Control value={egp} 
//                               onChange={e => setegp(e.target.value)}  
//                               type="number" placeholder="Enter girls participated" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Control value={ewin} 
//                               onChange={e => setewin(e.target.value)}  
//                               type="text" placeholder="Enter winner" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Control value={eimg} 
//                               onChange={e => seteimg(e.target.value)}  
//                               type="text" placeholder="Enter image" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Control value={elocation} 
//                               onChange={e => setelocation(e.target.value)}  
//                               type="text" placeholder="Enter location" />
//             </Form.Group>
                   
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Control value={evid} 
//                               onChange={e => setevid(e.target.value)}  
//                               type="text" placeholder="Enter Video Link" />
//             </Form.Group>
            
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Control value={ebudget} 
//                               onChange={e => setebudget(e.target.value)}  
//                               type="number" placeholder="Enter Budget" />
//             </Form.Group>
            
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Control value={ebudgetlink} 
//                               onChange={e => setebudgetlink(e.target.value)}  
//                               type="text" placeholder="Enter Budget Link" />
//             </Form.Group>

//             {/* Hadinling an onclick event running an edit logic */}
//             <Button
//                 onClick={e => handelSubmit(e)}
//                 variant="primary" type="submit" size="lg">
//                 Update
//             </Button>
  
//             {/* Redirecting to main page after editing */}
//             <Link className="d-grid gap-2" to='/admin'>
//               <Button variant="warning" size="lg">Home</Button>
//             </Link>
//         </Form>
//     </div>
//   )
// }
  
// export default EditEvent;
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link} from 'react-router-dom';
import axios from 'axios';

  
function EditEvent(props) {
    const Event=props.location.state;
    // Here usestate has been used in order
    // to set and get values from the jsx
    const [eid, seteid] = useState(Event.eid);
    const[rid,setrid]=useState(Event.rid);
    const [ename, setename] = useState(Event.ename);
    const[edesc,setedesc] = useState(Event.edesc);
    const [edate, setedate] = useState(Event.edate);
    
    const [etime, setetime] = useState(Event.etime);
    const[ebp,setebp] = useState(Event.ebp);
    const[egp,setegp] = useState(Event.egp);
    const [ewin, setewin] = useState(Event.ewin);
    const [eimg, seteimg] = useState(Event.eimg);
    const[elocation,setelocation] = useState(Event.elocation);
    const [evid, setevid] = useState(Event.evid);
    const[ebudget,setebudget] = useState(Event.ebudget);
    const[ebudgetlink,setebudgetlink] = useState(Event.ebudgetlink);
  
    // function for handling the edit and 
    // pushing changes of editing/updating
    const handelSubmit = (e) =>{
        e.preventDefault(); // preventing from reload
        axios.put("http://localhost:3001/updateevent",{
            eid:parseInt(eid),
            rid:parseInt(rid),
            ename:ename,
            edesc:edesc,
           
            edate:edate,
            etime:etime,
            ebp:parseInt(ebp),
            egp:parseInt(egp),
            ewin:ewin,
            eimg:eimg,
            elocation:elocation,
            evid:evid,
            ebudget:parseInt(ebudget),
            ebudgetlink:ebudgetlink,

        });
        seteid("");
        setename("");
        setedesc("");
       
        setedate("");
        setetime("");
        setebp("");
        setegp("");
        setewin("");
        seteimg("");
        setelocation("");
        setevid("");
        setebudget("");
        setebudgetlink("");
     
    };
  
return (
    <div>
        <div className='card shadow bg-light h-100'>
        
        <Form className="d-grid gap-2" style={{margin:'15rem'}}>
        <h1 className='display-3 text-center '>Edit Event</h1>
            {/* setting a name from the input textfiled */}
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <label htmlFor="eid">EID</label>
                <Form.Control value={eid} 
                              onChange={e => seteid(e.target.value)}  
                              type="number" placeholder="Enter eid" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <label htmlFor="rid">RID</label>
                <Form.Control value={rid} 
                              onChange={e => setrid(e.target.value)}  
                              type="number" placeholder="Enter rid" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <label htmlFor="ename">Name</label>
                <Form.Control value={ename} 
                              onChange={e => setename(e.target.value)}  
                              type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <label htmlFor="edesc">About</label>
                <Form.Control value={edesc} 
                              onChange={e => setedesc(e.target.value)} 
                              type="text" placeholder="Enter description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <label htmlFor="edate">Date</label>
                <Form.Control value={edate} 
                              onChange={e => setedate(e.target.value)}  
                              type="date" placeholder="Enter date" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <label htmlFor="etime">Time</label>
                <Form.Control value={etime} 
                              onChange={e => setetime(e.target.value)}  
                              type="time" placeholder="Enter time" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <label htmlFor="ebp">No.of boys participated</label>
                <Form.Control value={ebp} 
                              onChange={e => setebp(e.target.value)}  
                              type="number" placeholder="Enter boys participated" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <label htmlFor="egp">No.of girls participated</label>
                <Form.Control value={egp} 
                              onChange={e => setegp(e.target.value)}  
                              type="number" placeholder="Enter girls participated" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <label htmlFor="ewin">Winner</label>
                <Form.Control value={ewin} 
                              onChange={e => setewin(e.target.value)}  
                              type="text" placeholder="Enter winner" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <label htmlFor="eimg">Image</label>
                <Form.Control value={eimg} 
                              onChange={e => seteimg(e.target.value)}  
                              type="text" placeholder="Enter image" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <label htmlFor="elocation">Location</label>
                <Form.Control value={elocation} 
                              onChange={e => setelocation(e.target.value)}  
                              type="text" placeholder="Enter location" />
            </Form.Group>
                   
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <label htmlFor="evid">Video URL</label>
                <Form.Control value={evid} 
                              onChange={e => setevid(e.target.value)}  
                              type="text" placeholder="Enter Video Link" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <label htmlFor="ebudget">Budget</label>
                <Form.Control value={ebudget} 
                              onChange={e => setebudget(e.target.value)}  
                              type="number" placeholder="Enter Budget" />
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <label htmlFor="ebudgetlink">Budget URL</label>
                <Form.Control value={ebudgetlink} 
                              onChange={e => setebudgetlink(e.target.value)}  
                              type="text" placeholder="Enter Budget Document Link" />
            </Form.Group>
  
            {/* Hadinling an onclick event running an edit logic */}
            <div className='d-flex justify-content-around'>
            <Button
                onClick={e => handelSubmit(e)}
                variant="dark" type="submit" size="lg">
                Update
            </Button>
  
            {/* Redirecting to main page after editing */}
            <Link className="d-grid gap-2" to='/admin'>
              <Button variant="dark" size="lg">Home</Button>
            </Link>
            </div>
        </Form>
        </div>
    </div>
  )
}
  
export default EditEvent;