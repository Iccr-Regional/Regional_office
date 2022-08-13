import React, { Component } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactMarkdown from "react-markdown";
import { Consumer } from "./context";
import { v4 as uuid } from "uuid";
import AdminNavigation from "./AdminNavigation";
import axios from "axios";

class AddEvent extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      eid:"",
      ename: "",
      edesc: "",
      edate: "",
      etime: "",
      eimg:"",
      rid: "",
      enp: "",
      ewin: "",
      elocation:"",
      evid:"",
      submitMessage: "",
      submitMessageTextColor: "",
    };
  }

  state = {
    eid:"",
    ename: "",
    edesc: "",
    edate: "",
    etime: "",
    eimg:"",
    rid: "",
    enp: "",
    ewin: "",
    elocation:"",
    evid:"",
    submitMessage: "",
    submitMessageTextColor: "",
  };

  handleonChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onBodyChange = (value) => {
    this.setState({
      body: value,
    });
  };

  publishEventData=()=> {
   
    axios.post('http://localhost:3001/insertevent',{
      eid:parseInt(this.state.eid,10),
      ename:this.state.ename,
      rid:parseInt(this.state.rid,10),
      edesc:this.state.edesc,
      edate:this.state.edate,
      etime:this.state.etime,
      enp:parseInt(this.state.enp),
      ewin:this.state.ewin,
      eimg:this.state.eimg,
      elocation:this.state.elocation,
      evid:this.state.evid
      
  }).then(()=>{
    console.log("success");
  })
  .catch(err =>{
    console.log(err)
  });  
}


onSubmit = event => {
  event.preventDefault();
  this.publishEventData();
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

  const newEvent = {
    eid: this.state.eid,
    ename: this.state.ename,
    edesc: this.state.edesc,
    edate: this.state.edate,
    etime: this.state.etime,
    eimg:this.state.eimg,
    rid: this.state.rid,
    enp: this.state.enp,
    ewin: this.state.ewin,
    elocation: this.state.elocation,
    evid: this.state.evid,
  };

    //handler("ADD_EVENT", newEvent);
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const {
            eid,
            ename,
            edesc,
            edate,
            etime,
            eimg,
            rid,
            enp,
            ewin,
            elocation,
            evid,
            submitMessage,
            submitMessageTextColor,
          } = this.state;
          const { handler } = value;

          return (
            <div className="container-fluid">
              <AdminNavigation/>
              <br/>
              <br/>
              <br/>
              <br/>
              <h1 className="text-center my-5 font-weight-light">
                Add Event
              </h1>
              <div className="row px-3 px-lg-5">
                <div className="col-12 col-lg-6 px-lg-5">
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group markdown">
                  
                      <label htmlFor="eid">Event Id * </label>
                      <input
                        type="number"
                        name="eid"
                        id="eid"
                        value={this.state.eid}
                        className="form-control"
                        onChange={this.handleonChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="ename">Event Name *</label>
                      <input
                        type="text"
                        name="ename"
                        id="ename"
                        value={this.state.ename}
                        className="form-control"
                        onChange={this.handleonChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="rid">Regional Office Id * </label>
                      <input
                        type="number"
                        name="rid"
                        id="rid"
                        value={this.state.rid}
                        className="form-control"
                        onChange={this.handleonChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="edesc">About Event *</label>
                      <input
                        type="text"
                        name="edesc"
                        id="edesc"
                        value={this.state.edesc}
                        className="form-control"
                        onChange={this.handleonChange}
                        required
                      />
                    </div>
             
                    
                    <div className="form-group">
                      <label htmlFor="edate">Date *</label>
                      <input
                        type="date"
                        name="edate"
                        id="edate"
                        value={this.state.edate}
                        className="form-control"
                        onChange={this.handleonChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="etime">Time *</label>
                      <input
                        type="time"
                        name="etime"
                        id="etime"
                        value={this.state.etime}
                        className="form-control"
                        onChange={this.handleonChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="enp">No.of students participated </label>
                      <input
                        type="number"
                        name="enp"
                        id="enp"
                        value={this.state.enp}
                        className="form-control"
                        onChange={this.handleonChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ewin">Winner </label>
                      <input
                        type="text"
                        name="ewin"
                        id="ewin"
                        value={this.state.ewin}
                        className="form-control"
                        onChange={this.handleonChange}
                      />
                    </div>

                    
                    <div className="form-group markdown">
                      <label htmlFor="eimg">Image Url *</label>
                      <input
                        type="url"
                        name="eimg"
                        id="eimg"
                        value={this.state.eimg}
                        className="form-control"
                        onChange={this.handleonChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="elocation">Location *</label>
                      <input
                        type="url"
                        name="elocation"
                        id="elocation"
                        value={this.state.elocation}
                        className="form-control"
                        onChange={this.handleonChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="evid">Event Video Link </label>
                      <input
                        type="url"
                        name="evid"
                        id="evid"
                        value={this.state.evid}
                        className="form-control"
                        onChange={this.handleonChange}
                      />
                    </div>
                    <SimpleMDE
                      onChange={this.onBodyChange}
                      options={{
                        hideIcons: ["preview", "side-by-side", "fullscreen"],
                      }}
                    />
                   
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
                <div className="col-12 col-lg-6 markdown">
                  <div className="justify-content-center">
                    <img src={eimg} alt={ename} />
                  </div>
                  <h1 className="font-weight-light text-center">
                    {ename}
                  </h1>
                  <h1 className="font-weight-light text-center">
                    {edate} {etime}
                  </h1>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddEvent;
