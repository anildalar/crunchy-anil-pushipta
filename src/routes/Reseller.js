import React from 'react'
import { Route, useNavigate } from 'react-router'
import CheckLogin from '../component/CheckLogin';
import ResellerDashboard from "../pages/Reseller/Dashbord";

const Reseller=()=> {
    const navigate  = useNavigate ();
    if(!CheckLogin()){
        navigate("/");
    }
    return (
        <>
            <Route  path="dashboard" element={ <ResellerDashboard/> } />
        </>
    )
}
export default Reseller;