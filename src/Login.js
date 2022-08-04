import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function Login() {
  return (
    <div>
       <Navigation/>
       <div className="container">
        <div className="row my-5 pt-3"> 
          <div className="col-sm-0 col-md-3"></div>
          <div className="col-12 col-md-6">
            <div className="card shadow h-100 imaging-2">
                <form>  
                    <br/>
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
                    <div className="p-3 px-5 colours">
                        <p>Don't have an account?</p>
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                        </div>
                    </div>
                </form>   
            </div>
          </div>
      </div>
     </div>
    </div>
  );
}

export default Login;
