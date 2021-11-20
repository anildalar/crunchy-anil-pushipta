import React from 'react'
import { Route, useHistory } from 'react-router'
import CheckLogin from '../component/CheckLogin';
import Nopage from '../pages/Nopage';
import SystemAdminDashboard from '../pages/SystemAdmin/Dashbord';
import VenderCreate from '../pages/SystemAdmin/VenderCreate';

 const SystemAdmin=()=> {
    const history = useHistory();
    if(!CheckLogin()){
        history.push("/");
    }
    return (
        <>
            <Route path="/dashboard"><SystemAdminDashboard/></Route>
            <Route path="/vendor/smpp/create" component={ VenderCreate }></Route>
            <Route path="*" component={Nopage}></Route>
        </>
    )
}
export default SystemAdmin;