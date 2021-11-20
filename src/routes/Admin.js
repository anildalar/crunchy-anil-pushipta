import React from 'react'
import { Route, useHistory } from 'react-router'
import CheckLogin from '../component/CheckLogin';
import AdminDashboard from "../pages/Admin/Dashboard";

const Admin=()=> {
    const history = useHistory();
    if(!CheckLogin()){
        history.push("/");
    }
    return (
        <>
            <Route path="/dashboard"><AdminDashboard/></Route>
        </>
    )
}
export default Admin;