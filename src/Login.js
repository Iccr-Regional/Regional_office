import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function Login() {
  return (
      <div className="imaging-2" >
        <br></br><br></br><br></br>
       <div className="container">
        <div className="row pt-3"> 
        <div className="col-sm-3 col-md-4"></div>
          <div className="col-12 col-md-4" >
            <div className="card shadow h-100">
                <form>
                    <img src="https://cracku.in/latest-govt-jobs/wp-content/uploads/2020/04/ICCR-Logo.jpg" width="200" height="300" className="center"/>
                    <div className="form-group px-5 colours"> <input type="text" className="form-control" name="name" placeholder="User Name" required/></div>  
                    <div className="form-group px-5 colours"> <input type="password" className="form-control" name="pwd" placeholder="Password" required/></div>   
                    <div className="p-3 px-5">
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                        </div>
                    </div>
                    <div className="form-group px-5"> <Link to="/" className="colours">Forget password?</Link> </div> 
                </form>   
            </div>
          </div>
          
      </div>
      <div className="row">
        <div className="col-*"></div>
      </div>
     </div>
    </div>
    
  );
}

export default Login;