import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Axios from "axios";
// const data = [
//   {sid:1,sname: "Robert",spno:1234,sdob:"01-01-2001",passport:1234567889,gender:'male',mailid:'abc@gmail.com',homecity: "America", cname: "HIT",ccity:"Guntur",rid:1,coname:"fdsgd",scmoney:1234},
//   {sid:2,sname: "Michal",spno:1234,sdob:"01-01-2001",passport:1234567889,gender:'male',mailid:'abc@gmail.com',homecity: "London", cname: "VVIT",ccity:"hyderabad",rid:1,coname:"fdsgd",scmoney:1234},
//   {sid:3,sname: "Morgan",spno:1234,sdob:"01-01-2001",passport:1234567889,gender:'male',mailid:'abc@gmail.com',homecity: "NewYork", cname: "KLU",ccity:"vizag",rid:1,coname:"fdsgd",scmoney:1234},
//   {sid:4,sname: "Tom",spno:1234,sdob:"01-01-2001",passport:1234567889,gender:'male',mailid:'abc@gmail.com',homecity: "Sydney", cname: "Vignan Lara",ccity:"Guntur",rid:1,coname:"fdsgd",scmoney:1234},
//   {sid:5,sname: "Steve",spno:1234,sdob:"01-01-2001",passport:1234567889,gender:'male',mailid:'abc@gmail.com',homecity:"France", cname: "IIT Bombay",ccity:"Guntur",rid:1,coname:"fdsgd",scmoney:1234}
// ]

function SuperAdminDynamicTable() {
    const [data,setData]=useState([]);
    const Display = ()=>{
      Axios.get('http://localhost:3001/getData').then((response)=>{
        console.log(response.data);
        setData(response.data);
        console.log(data);
      }).catch(err=>{
        console.log(err)
      });
    };
  
   useEffect(()=>{
    Display();
   },[])
  return (
    <div className="row px-5">
        <div className="col-md-12">
      <h1>Student Table</h1>
      <table>
        <thead>
          <tr align="center">
            <th>Student id</th>
            <th>Name</th>
            <th>homecity</th>
            <th>cname</th>
            <th>More Details</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((value, key) => {
              return (
                <tr key={key}>
                  <td>{value.sid}</td>
                  <td>{value.sname}</td>
                  <td>{value.homecity}</td>
                  <td>{value.cname}</td>
                  <td>
                    <Link to={{pathname:"/superadmin/details",state:value}}>View Details</Link>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default SuperAdminDynamicTable;