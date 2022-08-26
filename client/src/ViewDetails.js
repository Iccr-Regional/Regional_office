import React from 'react'
import Footer from './footer';
import Navigation from './Navigation';

export default function ViewDetails(props) {
  const details=props.location.state;
  console.log(details);
  return (
    <div>
        <Navigation/><br></br>
    <div className='card shadow h-100 py-5'>
    <div className='card-body'>
    <div align="center">
    <h1>Student Personal Info</h1>
      <table>
        <tr>
        <td>
        <p><b>Student Id:</b></p></td>
         <td><p>{details.sid}</p></td>
        </tr>
        <tr>
        <td>
        <p><b>Name</b></p></td>
         <td><p>{details.sname}</p></td>
        </tr>
        <tr>
        <td>
        <p><b>Regional Office:</b></p></td>
         <td><p>Ahmedabad</p></td>
        </tr>
        <tr>
        <td>
        <p><b>Date of Birth:</b></p></td>
         <td><p>{details.sdob}</p></td>
        </tr>
        <tr>
        <td>
        <p><b>Passport Number:</b></p></td>
         <td><p>{details.passport}</p></td>
        </tr>
        <tr>
        <td>
        <p><b>Gender:</b></p></td>
         <td><p>{details.gender}</p></td>
        </tr>
        <tr>
        <td>
        <p><b>Email:</b></p></td>
         <td><p>{details.mailid}</p></td>
        </tr>
        <tr>
        <td>
        <p><b>Phone Number:</b></p></td>
         <td><p>{details.spno}</p></td>
        </tr><tr>
        <td>
        <p><b>Home City:</b></p></td>
         <td><p>{details.homecity}</p></td>
        </tr>
        <tr>
        <td>
        <p><b>College Name:</b></p></td>
         <td><p>{details.cname}</p></td>
        </tr>
        <tr>
        <td>
        <p><b>College Address:</b></p></td>
         <td><p>{details.ccity}</p></td>
        </tr>
        <tr>
        <td>
        <p><b>Scholarship Amount:</b></p></td>
         <td><p>{details.scmoney}</p></td>
        </tr>
      </table>
    </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}