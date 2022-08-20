import React, { Component } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactMarkdown from "react-markdown";
import { Consumer } from "./context";
import { v4 as uuid } from "uuid";
import AdminNavigation from "./AdminNavigation";
import axios from "axios";
import {Redirect} from "react-router-dom";


class AddEvent extends Component {
  
 

  constructor(props){
       super(props);
   /* if(!this.props.authorized){
      return (< Redirect to="/login" />);
    }  */
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
      likes:"",
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
    likes: "",
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
      evid:this.state.evid,
      likes:this.state.likes
      
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
    likes: this.state.likes,
  };
};
  render() {
    return (
      <Consumer>
        {(value) => {
          const {
            //eid,
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
            <div>
            <video loop autoPlay muted id="bg-video">
                <source src={require("./video.mp4.mp4")} type="video/mp4"/>
            </video>
            <div className="container-fluid">
              <h1 className="text-center my-5 font-weight-light">
                Add Event
              </h1>
              <div className="row px-3 px-lg-5">
                <div className="col-sm-0 col-md-3"></div>
                <div className="col-12 col-md-6 px-lg-5">
                  <div className="card shadow h-100 bg-light">
                  <form onSubmit={this.onSubmit.bind(this, handler)}>
                    <br/><br/>
                    <div className="form-group px-5">
                      <label htmlFor="rnp">Event Id *</label>
                      <input
                        type="number"
                        name="eid"
                        id="eid"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group px-5">
                      <label htmlFor="ename">Event Name *</label>
                      <input
                        type="text"
                        name="ename"
                        id="ename"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group px-5">
                      <label htmlFor="rid">Regional Office Id * </label>
                      <input
                        type="number"
                        name="rid"
                        id="rid"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group px-5">
                      <label htmlFor="edesc">About *</label>
                      <input
                        type="text"
                        name="edesc"
                        id="edesc"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group px-5">
                      <label htmlFor="edate">Start Date *</label>
                      <input
                        type="date"
                        name="edate"
                        id="edate"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group px-5">
                      <label htmlFor="etime">Time *</label>
                      <input
                        type="time"
                        name="etime"
                        id="etime"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group px-5">
                      <label htmlFor="rnp">No.of Boys participated </label>
                      <input
                        type="number"
                        name="ebp"
                        id="ebp"
                        className="form-control"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group px-5">
                      <label htmlFor="rnp">No.of Girls participated </label>
                      <input
                        type="number"
                        name="egp"
                        id="egp"
                        className="form-control"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group px-5">
                      <label htmlFor="ewin">Winner Name </label>
                      <input
                        type="text"
                        name="ewin"
                        id="ewin"
                        className="form-control"
                        onChange={this.onChange}
                      />
                    </div> <div className="form-group px-5 markdown">
                      <label htmlFor="eimg">Image Url *</label><br/>
                      <a href="https://postimages.org/" target="_blank" className=" text-right">Click here to upload images</a>
                      <p className="text-left">Click on choose images and select the image you want to upload. You can also change the size of the image if you want. After uploading you will be given the links for image. Copy the link and paste it below.</p>
                      <input
                        type="url"
                        name="eimg"
                        id="eimg"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group px-5 markdown">
                      <label htmlFor="rimage">Event Image Gallery(Insert your drive link here)</label>
                      <input
                        type="url"
                        name="rimage"
                        id="rimage"
                        value={this.state.rimage}
                        className="form-control"
                        onChange={this.handleonChange}
                        
                      />
                    </div>
                    <div className="form-group px-5">
                      <label htmlFor="evid">Video Link </label>
                      <input
                        type="url"
                        name="evid"
                        id="evid"
                        className="form-control"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group px-5">
                      <label htmlFor="elocation">Location </label>
                      <input
                        type="url"
                        name="elocation"
                        id="elocation"
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
          </div>
          );
        }}
      </Consumer>
    );
  }
}
export default AddEvent;
