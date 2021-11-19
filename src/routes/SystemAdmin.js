import React from 'react'
import { Route } from 'react-router'
import SystemAdminDashboard from '../pages/SystemAdmin/Dashbord';
 const SystemAdmin=()=> {
    return (
        <>
            <Route path="/dashboard"><SystemAdminDashboard/></Route>
        </>
    )
}
export default SystemAdmin;