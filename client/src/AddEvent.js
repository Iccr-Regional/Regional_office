import React, { Component } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactMarkdown from "react-markdown";
import { Consumer } from "./context";
import { v4 as uuid } from "uuid";
import AdminNavigation from "./AdminNavigation";

class AddEvent extends Component {
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

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onBodyChange = (value) => {
    this.setState({
      body: value,
    });
  };
  onSubmit = (handler, event) => {
    event.preventDefault();

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
      eid: uuid(),
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

    handler("ADD_EVENT", newEvent);
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
                  <form onSubmit={this.onSubmit.bind(this, handler)}>
                    <div className="form-group markdown">
                      <label htmlFor="eimg">Image Url *</label>
                      <input
                        type="url"
                        name="eimg"
                        id="eimg"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group">
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
                    <div className="form-group">
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
                    <div className="form-group">
                      <label htmlFor="edate">Date *</label>
                      <input
                        type="date"
                        name="edate"
                        id="edate"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group">
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
                    <div className="form-group">
                      <label htmlFor="rid">Regional Office Id * </label>
                      <input
                        type="text"
                        name="rid"
                        id="rid"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="rnp">No.of students participated </label>
                      <input
                        type="number"
                        name="rnp"
                        id="rnp"
                        className="form-control"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ewin">Winner </label>
                      <input
                        type="text"
                        name="ewin"
                        id="ewin"
                        className="form-control"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="elocation">Location *</label>
                      <input
                        type="url"
                        name="elocation"
                        id="elocation"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <SimpleMDE
                      onChange={this.onBodyChange}
                      options={{
                        hideIcons: ["preview", "side-by-side", "fullscreen"],
                      }}
                    />
                    <div className="form-group">
                      <label htmlFor="evid">Video Link </label>
                      <input
                        type="url"
                        name="evid"
                        id="evid"
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
