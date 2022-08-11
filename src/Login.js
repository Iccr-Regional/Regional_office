import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function Login() {
  return (
    <div>
      <Navigation/>
      <div className="imaging-2" >
       <div className="container ">
        <div className="row my-3 pt-3"> 
        <div className="col-sm-0 col-md-3"></div>
          <div className="col-12 col-md-5">
            <div className="card shadow h-90">
                <form>
                    <img src="https://cracku.in/latest-govt-jobs/wp-content/uploads/2020/04/ICCR-Logo.jpg" width="150" height="300" className="center"/>
                    
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
