import React from 'react'
import { Route, useNavigate } from 'react-router'
import CheckLogin from '../component/CheckLogin';
import UserDashboard from "../pages/User/Dashbord";

const User=()=> {
    const navigate  = useNavigate();
    if(!CheckLogin()){
        navigate("/");
    }
    return (
        <>
            <Route path="dashboard" element={ <UserDashboard/> } />
        </>
    )
}
export default User;