import React, { Component } from "react";
import { Consumer } from "./context";
import { v4 as uuid } from "uuid";

class Register extends Component {
  state = {
    pid:"",
    pname: "",
    pemail:"",
    ppwd:"",
    pcpwd:"",
    pphn: "",
    submitMessage: "",
    submitMessageTextColor: "",
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (handler, event) => {
    event.preventDefault();

    let isSuccessful = true;
    if (isSuccessful) {
      this.setState({
        submitMessage: ` Registered Successfully`,
        submitMessageTextColor: "text-info",
      });
    } else {
      this.setState({
        submitMessage: "Registration failed :(",
        submitMessageTextColor: "text-danger",
      });
    }

    const newPerson = {
      pid: uuid(),
      pname: this.state.pname,
      pemail: this.state.pemail,
      ppwd: this.state.ppwd,
      pcpwd: this.state.pcpwd,
      pphn:this.state.pphn,
    };

    handler("ADD_PERSON", newPerson);
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const {
            pid,
            pname,
            pemail,
            ppwd,
            pcpwd,
            pphn,
            submitMessage,
            submitMessageTextColor,
          } = this.state;
          const { handler } = value;

          return (
            <div>
                <video loop autoPlay muted id="bg-video">
//                 <source src={require("./video.mp4.mp4")} type="video/mp4"/>
//             </video>
            <div className="container-fluid py-5">
              <h1 className="text-center my-5 font-weight-light sizing">
                Registration Form
              </h1>
              <div className="row px-3 px-lg-5">
                <div className="col-sm-0 col-md-3"></div>
                <div className="col-12 col-md-6 px-lg-5">
                  <div className="card shadow h-100 bg-light py-4">
                  <form onSubmit={this.onSubmit.bind(this, handler)}>
                    <div className="form-group px-5 markdown">
                      <label htmlFor="eimg">Id Number *</label>
                      <input
                        type="number"
                        name="pid"
                        id="pid"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group px-5">
                      <label htmlFor="ename">Name *</label>
                      <input
                        type="text"
                        name="pname"
                        id="pname"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group px-5">
                      <label htmlFor="rid">Phone Number * </label>
                      <input
                        type="number"
                        name="pphn"
                        id="pphn"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group px-5">
                      <label htmlFor="edesc">Email *</label>
                      <input
                        type="email"
                        name="pemail"
                        id="pemail"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group px-5">
                      <label htmlFor="edate">Password *</label>
                      <input
                        type="password"
                        name="ppwd"
                        id="ppwd"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group px-5">
                      <label htmlFor="etime">Confirm Password *</label>
                      <input
                        type="password"
                        name="pcwd"
                        id="pcwd"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                   <div className="d-flex justify-content-around">
                    <button
                      type="submit"
                      className="btn btn-dark "
                      style={{ backgroundColor: "black" }}
                    >
                      Register
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

export default Register;
// import React, { Component } from "react";
// import { Consumer } from "./context";
// import { v4 as uuid } from "uuid";

// class register extends Component {
//   state = {
//     eid:"",
//     ename: "",
//     edesc: "",
//     edate: "",
//     etime: "",
//     eimg:"",
//     rid: "",
//     enp: "",
//     ewin: "",
//     elocation:"",
//     evid:"",
//     submitMessage: "",
//     submitMessageTextColor: "",
//   };

//   onChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

//   onSubmit = (handler, event) => {
//     event.preventDefault();

//     let isSuccessful = true;
//     if (isSuccessful) {
//       this.setState({
//         submitMessage: `Event published successfully`,
//         submitMessageTextColor: "text-info",
//       });
//     } else {
//       this.setState({
//         submitMessage: "Publish failed :(",
//         submitMessageTextColor: "text-danger",
//       });
//     }

//     const newEvent = {
//       eid: uuid(),
//       ename: this.state.ename,
//       edesc: this.state.edesc,
//       edate: this.state.edate,
//       etime: this.state.etime,
//       eimg:this.state.eimg,
//       rid: this.state.rid,
//       enp: this.state.enp,
//       ewin: this.state.ewin,
//       elocation: this.state.elocation,
//       evid: this.state.evid,
//     };

//     handler("ADD_EVENT", newEvent);
//   };

//   render() {
//     return (
//       <Consumer>
//         {(value) => {
//           const {
//             //eid,
//             ename,
//             edesc,
//             edate,
//             etime,
//             eimg,
//             rid,
//             enp,
//             ewin,
//             elocation,
//             evid,
//             submitMessage,
//             submitMessageTextColor,
//           } = this.state;
//           const { handler } = value;

//           return (
//             <div>
//             <video loop autoPlay muted id="bg-video">
//                 <source src={require("./video.mp4.mp4")} type="video/mp4"/>
//             </video>
//             <div className="container-fluid">
//               <h1 className="text-center my-5 font-weight-light">
//                 Add Event
//               </h1>
//               <div className="row px-3 px-lg-5">
//                 <div className="col-sm-0 col-md-3"></div>
//                 <div className="col-12 col-md-6 px-lg-5">
//                   <div className="card shadow h-100 bg-light">
//                   <form onSubmit={this.onSubmit.bind(this, handler)}>
//                     <div className="form-group px-5 markdown">
//                       <br/><br/>
//                       <label htmlFor="eimg">Image Url *</label><br/>
//                       <a href="https://postimages.org/" target="_blank" className=" text-right">Click here to upload images</a>
//                       <p className="text-left">Click on choose images and select the image you want to upload. You can also change the size of the image if you want. After uploading you will be given the links for image. Copy the link and paste it below.</p>
//                       <input
//                         type="url"
//                         name="eimg"
//                         id="eimg"
//                         className="form-control"
//                         onChange={this.onChange}
//                         required
//                       />
//                     </div>
//                     <div className="form-group px-5">
//                       <label htmlFor="ename">Event Name *</label>
//                       <input
//                         type="text"
//                         name="ename"
//                         id="ename"
//                         className="form-control"
//                         onChange={this.onChange}
//                         required
//                       />
//                     </div>
//                     <div className="form-group px-5">
//                       <label htmlFor="edesc">About *</label>
//                       <input
//                         type="text"
//                         name="edesc"
//                         id="edesc"
//                         className="form-control"
//                         onChange={this.onChange}
//                         required
//                       />
//                     </div>
//                     <div className="form-group px-5">
//                       <label htmlFor="edate">Date *</label>
//                       <input
//                         type="date"
//                         name="edate"
//                         id="edate"
//                         className="form-control"
//                         onChange={this.onChange}
//                         required
//                       />
//                     </div>
//                     <div className="form-group px-5">
//                       <label htmlFor="etime">Time *</label>
//                       <input
//                         type="time"
//                         name="etime"
//                         id="etime"
//                         className="form-control"
//                         onChange={this.onChange}
//                         required
//                       />
//                     </div>
//                     <div className="form-group px-5">
//                       <label htmlFor="rid">Regional Office Id * </label>
//                       <input
//                         type="text"
//                         name="rid"
//                         id="rid"
//                         className="form-control"
//                         onChange={this.onChange}
//                         required
//                       />
//                     </div>
//                     <div className="form-group px-5">
//                       <label htmlFor="rnp">No.of students participated </label>
//                       <input
//                         type="number"
//                         name="rnp"
//                         id="rnp"
//                         className="form-control"
//                         onChange={this.onChange}
//                       />
//                     </div>
//                     <div className="form-group px-5">
//                       <label htmlFor="ewin">Winner </label>
//                       <input
//                         type="text"
//                         name="ewin"
//                         id="ewin"
//                         className="form-control"
//                         onChange={this.onChange}
//                       />
//                     </div>
//                     <div className="form-group px-5">
//                       <label htmlFor="elocation">Location *</label>
//                       <input
//                         type="url"
//                         name="elocation"
//                         id="elocation"
//                         className="form-control"
//                         onChange={this.onChange}
//                         required
//                       />
//                     </div>
//                     <div className="form-group px-5">
//                       <label htmlFor="evid">Video Link </label>
//                       <input
//                         type="url"
//                         name="evid"
//                         id="evid"
//                         className="form-control"
//                         onChange={this.onChange}
//                       />
//                     </div>
//                    <div className="d-flex justify-content-around">
//                     <button
//                       type="submit"
//                       className="btn btn-dark "
//                       style={{ backgroundColor: "black" }}
//                     >
//                       Publish
//                     </button>
//                     <button
//                       type="reset"
//                       className="btn btn-dark "
//                       style={{ backgroundColor: "black" }}
//                     >
//                       Cancel
//                     </button>
//                    </div>
                    
//                   </form>
//                   <div className="text-center">
//                     <h5 className={submitMessageTextColor}>{submitMessage}</h5>
                    
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           </div>
//           );
//         }}
//       </Consumer>
//     );
//   }
// }

// export default register;