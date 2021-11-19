import React from 'react'
import { Route } from 'react-router';
import SystemAdminDashboard from "./pages/SystemAdmin/Dashbord";

const  Anil=()=>{
    return (
        <>
            <Route path={"/dashboard"}>
            <h1>hello anil test wala </h1>
                {/* <SystemAdminDashboard/> */}
            </Route>
        </>
    )
}

export default Anil
