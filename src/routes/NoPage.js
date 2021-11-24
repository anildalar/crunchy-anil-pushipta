import React from 'react'
import { Route, useNavigate } from 'react-router-dom'
import CheckLogin from '../component/CheckLogin';
import AdminDashboard from "../pages/Admin/Dashboard";

const Admin=()=> {
    const navigate  = useNavigate();
    if(!CheckLogin()){
        navigate("/");
    }
    return (
        <>
            <Route  path="dashboard" element={ <AdminDashboard/> } />
        </>
    )
}
export default Admin;