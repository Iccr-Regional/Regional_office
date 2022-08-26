import {Link} from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Footer from "./footer";
import SuperAdminNavigation from "./SuperAdminNavigation";
function SuperAdminAllPastEvents(props) {
  return (
    <Consumer>
      {(value) => {
        let sortedPastEvents  = props.location.state;
        //sortedPastEvents =sortedPastEvents.sort((a, b) => (b.edate) - (a.edate));
        return (
          <div>
            <SuperAdminNavigation/>
          <div className="container text-center my-5 py-5">
            <NavDropdown title="Sort by" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/allpasteventssortedbylikes"><Link to={{  pathname: "/allpasteventssortedbylikes",  state: sortedPastEvents }}>Likes</Link></NavDropdown.Item>
              <NavDropdown.Item href="/superadmin/allpastevents">
              <Link to={{  pathname: "/superadmin/allpastevents",  state: sortedPastEvents }}>date</Link>
              </NavDropdown.Item>
              
            </NavDropdown>
            <h1 className="font-weight-light py-5">
              Past Events
            </h1>
            <div className="row my-4 pt-4">
              {sortedPastEvents.map((pastEvent) => (
                <div key={pastEvent.eid} className="col-12 col-md-6 py-3">
                  <SuperAdminPastEventCard pastEvent={pastEvent} />
                </div>
              ))}
            </div>
          </div>
          <Footer/>
          </div>
        );
      }}
    </Consumer>
  );
}

export default SuperAdminAllPastEvents;