import React from "react";
import AdminRegionalOfficeCard from "./AdminRegionalOfficeCard";
import { Consumer } from "./context";
import { Link } from "react-router-dom";
import{useEffect,useState} from "react";
import Axios from "axios";
function AdminRegionalOfficeSection() {
  

  const [regionalOffice,setregionaloffice]=useState([]);
  const Display = ()=>{
    Axios.get('http://localhost:3001/getregionaloffice').then((response)=>{
      console.log(response.data);
      setregionaloffice(response.data);
    }).catch(err=>{
      console.log(err)
    });
  };

 useEffect(()=>{
  Display();
 },[])
  return (
    <Consumer>
      {(value) => {
        const { regionalOffices } = value;
        return (
          <div className="container text-center my-5">
            <h1 className="font-weight-light">
              Regional Offices
            </h1>
            <div className="row my-5 pt-3">
              {regionalOffice.slice(0, 3).map((office) => (
                <div key={office.rid} className="col-12 col-md-4 my-2">
                  <AdminRegionalOfficeCard regionalOffice={office} />
                </div>
              ))}
            </div>
            <div className="my-5 text-right" >
              <Link to="/admin/allregionaloffices" className="text-dark text-right">
                {/* <h5>
                  See all Regional Offices
                  <i className="fas fa-arrow-right align-middle pl-1"></i>
                </h5> */}
                <button
                      type="submit"
                      className="btn btn-dark align-items-right"
                      style={{ backgroundColor: "black" }}
                    >
                      See all regional offices
                    </button>
              </Link>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default AdminRegionalOfficeSection;