import SuperAdminDynamicTable from "./SuperAdminDynamicTable";
import Footer from "./footer";
import SuperAdminNavigation from "./SuperAdminNavigation";
function SuperAdminStudentPage()
{
    return(
        <div>
            <SuperAdminNavigation/>
            <br/><br/>
            <div className="py-5">
            <SuperAdminDynamicTable/>
            </div>
            <Footer/>
        </div>
    );
}
export default SuperAdminStudentPage;