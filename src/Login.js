import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function Login() {
  return (
    <div>
      <Navigation/>
      <div className="gradiating-1">

       <div className="container pt-5">
        <div className="row my-3 pt-5"> 
          <div className="col-sm-0 col-md-3"></div>
          <div className="col-12 col-md-6">
            <div className="card shadow h-100">
                <form>  
                    <br/>
                    <img src="https://aniportalimages.s3.amazonaws.com/media/details/ICCR3110_AQ5L0rs.jpg" width="40%" className="center"/>
                    <h1 className="font-weight-light pl-5 colours"> Sign In </h1>
                    <br/><br/>
                    <div className="form-group px-5 colours"> <label htmlFor="name">User Name</label> <input type="text" className="form-control" name="name"  required/></div>  
                    <div className="form-group px-5 colours"> <label htmlFor="pwd">Password</label> <input type="password" className="form-control" name="pwd"  required/></div>  
                    <div className="form-group px-5"> <Link to="/" className="colours">Forget password?</Link> </div> 
                    <div className="p-3 px-5">
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                        </div>
                    </div>
                </form>   
            </div>
          </div>
      </div>
      <div className="row">
        <div className="col-*"></div>
      </div>
     </div>
    </div>
    </div>
  );
}

export default Login;
