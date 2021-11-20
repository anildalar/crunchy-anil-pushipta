import React from 'react'
import { Route, useHistory } from 'react-router'
import CheckLogin from '../component/CheckLogin';
import SystemAdminDashboard from '../pages/SystemAdmin/Dashbord';
 const SystemAdmin=()=> {
    const history = useHistory();
    if(!CheckLogin()){
        history.push("/");
    }
    return (
        <>
            <Route path="/dashboard"><SystemAdminDashboard/></Route>
        </>
    )
}
export default SystemAdmin;