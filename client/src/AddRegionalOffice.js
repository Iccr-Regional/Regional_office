import React, { Component } from "react";
import { Consumer } from "./context";
import SuperAdminNavigation from "./SuperAdminNavigation";
import axios from "axios";

class AddRegionalOffice extends Component {

  constructor(props){
    super(props);
    this.state = {
      rimage: "",
    rname: "",
    submitMessage: "",
    submitMessageTextColor: "", 
    rid:"",
    rdesc:"",
    rlocation:"",
    };
  }


  publishData=()=> {
    
      axios.post('http://localhost:3001/create',{
      rid:parseInt(this.state.rid,10),
      rname:this.state.rname,
      rimage:this.state.rimage,
      rlocation:this.state.rlocation,
      rdesc:this.state.rdesc
    }).then(()=>{
      console.log("success");
    })
    .catch(err =>{
      console.log(err)
    });  
}
  state = {
    rimage: "",
    rname: "",
    rid:"",
    rdesc:"",
    rlocation:"",
    submitMessage: "",
    submitMessageTextColor: "",
  };

  handleonChange = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = event  => {
    event.preventDefault();
    console.log(this.state.rid);
    console.log("on submited");
    this.publishData();
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
      rid: this.state.rid,
      rimage: this.state.rimage,
      rname: this.state.rname,
    };

   // handler("ADD_REGIONAL_OFFICE",newRegionalOffice);
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
                  <form onSubmit={this.onSubmit}>

                  <div className="form-group">
                      <label htmlFor="rid">Id *</label>
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
                      <label htmlFor="rname">Name *</label>
                      <input
                        type="text"
                        name="rname"
                        id="rname"
                        value={this.state.rname}
                        className="form-control"
                        onChange={this.handleonChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="rdesc">About *</label>
                      <input
                        type="text"
                        name="rdesc"
                        id="rdesc"
                        value={this.state.rdesc}
                        className="form-control"
                        onChange={this.handleonChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="rimage">Image Url *</label>
                      <input
                        type="url"
                        name="rimage"
                        id="rimage"
                        value={this.state.rimage}
                        className="form-control"
                        onChange={this.handleonChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="rlocation">Location *</label>
                      <input
                        type="url"
                        name="rlocation"
                        id="rlocation"
                        value={this.state.rlocation}
                        className="form-control"
                        onChange={this.handleonChange}
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