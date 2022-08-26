import React from "react";
import "./App.css";
import { BrowserRouter , Route, Switch } from "react-router-dom";
import PastEventPage from "./PastEventPage";
import CurrentEventPage from "./CurrentEventPage";
import AllCurrentEvents from "./AllCurrentEvents";
import HomePage from "./HomePage";
import NotFound from "./NotFound";
import FutureEventPage from "./FutureEventPage";
import { Provider } from "./context";
import AllPastEvents from "./AllPastEvents";
import AllFutureEvents from "./AllFutureEvents";
import AllRegionalOffices from "./AllRegionalOffices";
import RegionalOfficePage from "./RegionalOfficePage";
import AddEvent from "./AddEvent";
import Forget from "./Forget";
import SuperAdminFutureEventPage from "./SuperAdminFutureEventPage";
import SuperAdminPastEventPage from "./SuperAdminPastEventPage";
import EditEvent from "./EditEvent";
import AddRegionalOffice from "./AddRegionalOffice";
import Login from "./Login";
import ScrollToTop from "./ScrollToTop";
import AdminHomePage from "./AdminHomePage";
import SuperAdminAddEvent from "./SuperAdminAddEvent";
import SuperAdminHomePage from "./SuperAdminHomePage";
import Support from "./Support";
import Contact from "./Contact";
import DynamicTable from "./DynamicTable";
import SuperAdminDynamicTable from "./SuperAdminDynamicTable";
import SuperAdminStudentPage from "./SuperAdminStudentPage";
import StudentPage from "./StudentPage";
import AdminStudentPage from "./AdminStudentPage";
import ViewDetails from "./ViewDetails";
import AdminDynamicTable from "./AdminDynamicTable";
import AdminViewDetails from "./AdminViewDetails";
import SuperAdminViewDetails from "./SuperAdminViewDetails";
import AdminAllFutureEvents from "./AdminAllFutureEvents"
import SuperAdminEditEvent from "./SuperAdminEditEvent";
import AdminCurrentEventPage from "./AdminCurrentEventPage";
import AdminFutureEventPage from "./AdminFutureEventPage";
import SuperAdminCurrentEventPage from "./SuperAdminCurrentEventPage";
import AdminRegionalOfficePage from "./AdminRegionalOfficePage";
import SuperAdminRegionalOfficePage from "./SuperAdminRegionalOfficePage";
import AdminAllCurrentEvents from "./AdminAllCurrentEvents";
import SuperAdminAllCurrentEvents from "./SuperAdminAllCurrentEvents";
import SuperAdminAllRegionalOffices from "./SuperAdminAllRegionalOffices";
import AdminAllRegionalOffices from "./AdminAllRegionalOffices";
import Register from "./register";
import loading from "./loading";
import background from "./background";
import Footer from "./footer";
import Student from "./Student"
import SuperAdminStatistics from "./SuperAdminStatistics";
import AdminStatistics from "./AdminStatistics";
import Statistics from "./Statistics";
import SuperAdminAllFutureEvents from "./SuperAdminAllFutureEvents";
import AdminPastEventPage from "./AdminPastEventPage";
import EditRegionaloffice from "./EditRegionaloffice";
import SortedByLikes from "./SortedByLikes";
import AdminAllPastEvents from "./AdminAllPastEvents";
function App() {
  return (
    <Provider>
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={loading} />
          <Route exact path="/home" component={HomePage}/>
          <Route exact path="/admin" component={AdminHomePage}/>
          <Route exact path="/superadmin" component={SuperAdminHomePage}/>
          <Route exact path="/regionaloffice/:id/allpastevents" component={AllPastEvents}/>
          <Route exact path="/allcurrentevents" component={AllCurrentEvents}/>
          <Route exact path="/allcurrentevents" component={AdminAllPastEvents}/>
          <Route exact path="/admin/allcurrentevents" component={AdminAllCurrentEvents}/>
          <Route exact path="/superadmin/allfutureevents" component={SuperAdminAllFutureEvents}/>
          <Route exact path="/superadmin/allcurrentevents" component={SuperAdminAllCurrentEvents}/>
          <Route exact path="/allregionaloffices" component={AllRegionalOffices}/>
          <Route exact path="/admin/allregionaloffices" component={AdminAllRegionalOffices}/>
          <Route exact path="/superadmin/futureevent/:id" component={SuperAdminFutureEventPage} />
          <Route exact path="/superadmin/allregionaloffices" component={SuperAdminAllRegionalOffices}/>
          <Route exact path="/regionaloffice/:id/allfutureevents" component={AllFutureEvents} />
          <Route exact path="/pastevent/:id" component={PastEventPage} />
          <Route exact path="/superadmin/pastevent/:id" component={SuperAdminPastEventPage} />
          <Route exact path="/admin/pastevent/:id" component={AdminPastEventPage} />
          <Route exact path="/currentevent/:id" component={CurrentEventPage}/>
          <Route exact path="/admin/allfutureevents" component={AdminAllFutureEvents} />
          <Route exact path="/superadmin/editevent" component={SuperAdminEditEvent} />
          <Route exact path="/admin/currentevent/:id" component={AdminCurrentEventPage}/>
          <Route exact path="/admin/futureevent/:id" component={AdminFutureEventPage}/>
          <Route exact path="/superadmin/currentevent/:id" component={SuperAdminCurrentEventPage}/>
          <Route exact path="/futureevent/:id" component={FutureEventPage} />
          <Route exact path="/regionaloffice/:id" component={RegionalOfficePage} />
          <Route exact path="/admin/regionaloffice/:id" component={AdminRegionalOfficePage}/>
          <Route exact path="/superadmin/regionaloffice/:id" component={SuperAdminRegionalOfficePage}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/addevent" component={AddEvent}  />
          <Route exact path="/admin/editevent" component={EditEvent}/>
          <Route exact path="/editregionaloffice" component={EditRegionaloffice}/>
          <Route exact path="/addregionaloffice" component={AddRegionalOffice} /> 
          <Route exact path="/superadmin/addevent" component={SuperAdminAddEvent}/>
          <Route exact path="/support" component={Support}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/forget" component={Forget}/>
          <Route exact path="/statistics" component={Statistics}/>
          <Route exact path="/admin/statistics" component={AdminStatistics}/>
          <Route exact path="/superadmin/statistics" component={SuperAdminStatistics}/>
          <Route exact path="/allpasteventssortedbylikes" component={SortedByLikes}/>
          <Route exact path="/student" component={Student}/>
          <Route exact path="/studentdetails" component={DynamicTable}/>
          <Route exact path="/admin/studentdetails" component={AdminDynamicTable}/>
          <Route exact path="/studentpage" component={StudentPage}/>
          <Route exact path="/admin/studentpage" component={AdminStudentPage}/>
          <Route exact path="/admin/details" component={AdminViewDetails}/>
          <Route exact path="/superadmin/studentdetails" component={SuperAdminDynamicTable}/>
          <Route exact path="/superadmin/studentpage" component={SuperAdminStudentPage}/>
          <Route exact path="/superadmin/details" component={SuperAdminViewDetails}/>
          <Route exact path="/details" component={ViewDetails}/>
          <Route component={NotFound} />  
        </Switch>  


      </BrowserRouter>
    </Provider>
  );
}
export default App;

