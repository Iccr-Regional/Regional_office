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
//                 <source src={require("./pink.mp4")} type="video/mp4"/>
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
