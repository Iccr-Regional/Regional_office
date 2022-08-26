import React, { Component } from "react";
import "easymde/dist/easymde.min.css";
import { Consumer } from "./context";
import SuperAdminNavigation from "./SuperAdminNavigation";
//import { RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import axios from "axios";
import Footer from "./footer";

class SuperAdminStudent extends Component {
  
  constructor(props){
    super(props);
  
    this.state = {
      sid:"",
      sname: "",
      spno: "",
      sdob: "",
      passport: "",
      gender:"",
      mailid: "",
      homecity: "",
      cname: "",
      ccity:"",
      rid:"",
      coname:"",
      scmoney:"",
      submitMessage: "",
      submitMessageTextColor: "",
    };
  }

  state = {
    sid:"",
    sname: "",
    spno: "",
    sdob: "",
    passport: "",
    gender:"",
    mailid: "",
    homecity: "",
    cname: "",
    ccity:"",
    rid:"",
    coname:"",
    scmoney:"",
    submitMessage: "",
    submitMessageTextColor: "",
  };

  onChange = event => {
    //const{name,value}=event.target;
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onBodyChange = (value) => {
    this.setState({
      body: value,
    });
  };

  publishStudentData=()=> {
   
    axios.post('http://localhost:3001/insertstudent',{
      sid:parseInt(this.state.sid,10),
      sname:this.state.sname,
      spno:parseInt(this.state.spno,10),
      sdob:this.state.sdob,
      passport:parseInt(this.state.passport,12),
      gender:this.state.gender,
      mailid:this.state.mailid,
      homecity:this.state.homecity,
      cname:this.state.cname,
      ccity:this.state.ccity,
      rid:parseInt(this.state.rid,10),
      coname:this.state.coname,
      scmoney:parseInt(this.state.scmoney)
      
  }).then(()=>{
    console.log("success");
  })
  .catch(err =>{
    console.log(err)
  });  
}


onSubmit = event => {
  event.preventDefault();
  this.publishStudentData();
  console.log("on submitted");
  let isSuccessful = true;

  if (isSuccessful) {
    this.setState({
      submitMessage: `Event published successfully`,
      submitMessageTextColor: "text-info",
    });
  } else {
    this.setState({
      submitMessage: "Publish failed :(",
      submitMessageTextColor: "text-danger",
    });
  }

};

  render() {
    return (
      <Consumer>
        {(value) => {
          const {
       
            submitMessage,
            submitMessageTextColor,
          } = this.state;
         

          return (
            <div>
            <video loop autoPlay muted id="bg-video">
                <source src={require("./video.mp4.mp4")} type="video/mp4"/>
            </video>
            <SuperAdminNavigation/>
            <div className="container-fluid">
              <h1 className="text-center my-5 py-5 font-weight-light">
                Student Details
              </h1>
              <div className="row px-3 px-lg-5">
                <div className="col-sm-0 col-md-3"></div>
                <div className="col-12 col-md-6 px-lg-5">
                  <div className="card shadow h-100 bg-light">
                  <form onSubmit={this.onSubmit}>
                    <br/><br/>
                    <div className="form-group px-5">
                      <label htmlFor="sname">Student Id *</label>
                      <input
                        type="number"
                        name="sid"
                        id="sid"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group px-5">
                      <label htmlFor="sname">Student Name *</label>
                      <input
                        type="text"
                        name="sname"
                        id="sname"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group px-5">
                      <label htmlFor="spno">Phone Number *</label>
                      <input
                        type="number"
                        name="spno"
                        id="spno"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group px-5">
                      <label htmlFor="sdob">Date of birth *</label>
                      <input
                        type="date"
                        name="sdob"
                        id="sdob"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group px-5">
                      <label htmlFor="passport">Passport Number * </label>
                      <input
                        type="number"
                        name="passport"
                        id="passport"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                     <div className="form-group px-5">
                      <label htmlFor="gender">Gender *</label>
                      <input
                        type="text"
                        name="gender"
                        id="gender"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div> 
                    {/* <div className="form-group px-5">
                      <label htmlFor="gender">Gender *</label>
                      <br/>
                      <input
                        type="radio"
                        name="male"
                        id="gender"
                        value="male"
                        className=""
                        onChange={this.onChange}
                        
                      />Male
                      <input
                        type="radio"
                        name="female"
                        id="gender"
                        value="female"
                        className=""
                        onChange={this.onChange}
                        
                      />Female
                      
                    </div> */}
                    <div className="form-group px-5">
                      <label htmlFor="mailid">Email *</label>
                      <input
                        type="email"
                        name="mailid"
                        id="mailid"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group px-5">
                      <label htmlFor="homecity">Home City *</label>
                      <input
                        type="text"
                        name="homecity"
                        id="homecity"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group px-5">
                      <label htmlFor="cname">College Name*</label>
                      <input
                        type="text"
                        name="cname"
                        id="cname"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group px-5">
                      <label htmlFor="ccity">College City* </label>
                      <input
                        type="text"
                        name="ccity"
                        id="ccity"
                        className="form-control"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group px-5">
                      <label htmlFor="rid">Rid*</label>
                      <input
                        type="number"
                        name="rid"
                        id="rid"
                        className="form-control"
                        onChange={this.onChange}
                      />
                      </div>
                      <div className="form-group px-5">
                      <label htmlFor="coname">Course</label>
                      <input
                        type="text"
                        name="coname"
                        id="coname"
                        className="form-control"
                        onChange={this.onChange}
                      />
                    </div> 
                    <div className="form-group px-5">
                      <label htmlFor="scmoney">ScholarShip Amount* </label>
                      <input
                        type="number"
                        name="scmoney"
                        id="scmoney"
                        className="form-control"
                        onChange={this.onChange}
                      />
                    </div>

                    
                   <div className="d-flex justify-content-around">
                    <button
                      type="submit"
                      className="btn btn-dark "
                      style={{ backgroundColor: "black" }}
                    >
                      Publish
                    </button>
                    <button
                      type="reset"
                      className="btn btn-dark "
                      style={{ backgroundColor: "black" }}
                    >
                      Cancel
                    </button>
                   </div>
                    
                 </form>
                  <div className="text-center">
                    <h5 className={submitMessageTextColor}>{submitMessage}</h5>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
          </div>
          );
        }}
      </Consumer>
    );
  }
}
export default SuperAdminStudent;