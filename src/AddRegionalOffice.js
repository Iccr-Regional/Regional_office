import React, { Component } from "react";
import { Consumer } from "./context";
import { v4 as uuid } from "uuid";
import SuperAdminNavigation from "./SuperAdminNavigation";

class AddRegionalOffice extends Component {
  state = {
    rimage: "",
    rname: "",
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
        submitMessage: `Project published successfully`,
        submitMessageTextColor: "text-info",
      });
    } else {
      this.setState({
        submitMessage: "Publish failed :(",
        submitMessageTextColor: "text-danger",
      });
    }

    const newRegionalOffice = {
      rid: uuid(),
      rimage: this.state.rimage,
      rname: this.state.rname,
    };

    handler("ADD_REGIONAL_OFFICE",newRegionalOffice);
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const {
            rimage,
            rname,
            submitMessage,
            submitMessageTextColor,
          } = this.state;
          const { handler } = value;

          return (
            <div className="container-fluid">
              <SuperAdminNavigation/>
              <br/>
              <br/>
              <br/>
              
              <h1 className="text-center my-5 font-weight-light">
                Add Regional Office
              </h1>
              <div className="row px-3 px-lg-5">
                <div className="col-12 col-lg-6 px-lg-5">
                  <form onSubmit={this.onSubmit.bind(this, handler)}>
                    <div className="form-group">
                      <label htmlFor="rname">Name *</label>
                      <input
                        type="text"
                        name="rname"
                        id="rname"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="rdesc">About *</label>
                      <input
                        type="text"
                        name="rdesc"
                        id="rdesc"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="rimage">Image Url *</label>
                      <input
                        type="url"
                        name="rimage"
                        id="rimage"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="rlocation">Location *</label>
                      <input
                        type="url"
                        name="rlocation"
                        id="rlocation"
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
                    <img src={rimage} alt={rname} className="img-fluid"/>
                  </div>
                  <h1 className="font-weight-light text-center my-5">
                    {rname}
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

export default AddRegionalOffice;