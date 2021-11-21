import React from 'react'
import { Route, useHistory } from 'react-router'
import CheckLogin from '../component/CheckLogin';
import Nopage from '../pages/Nopage';
import SystemAdminDashboard from '../pages/SystemAdmin/Dashbord';
import VenderCreateHttp from '../pages/SystemAdmin/VenderCreateHttp';
import VendorCreateSmpp from '../pages/SystemAdmin/VendorCreateSmpp';
import ClinetRouting from "../pages/SystemAdmin/ClinetRouting";
import CreateRouting from "../pages/SystemAdmin/CreateRouting";

 const SystemAdmin=()=> {
    const history = useHistory();
    if(!CheckLogin()){
        history.push("/");
    }
    return (
        <>
            <Route path="/dashboard"><SystemAdminDashboard/></Route>
            <Route path="/vendor/smpp/create" component={ VendorCreateSmpp }></Route>
            <Route path="/vendor/http/create" component={ VenderCreateHttp }></Route>
            {/* VendorCreateSmpp */}
            {/* <Route path="*" component={Nopage}></Route> */}
            {/* client routing route  */}
            <Route path="/routing" component={ ClinetRouting }></Route>
            <Route path="/routing/create" component={ CreateRouting }></Route>
        
        </>
    )
}
export default SystemAdmin;