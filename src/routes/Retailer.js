import React from 'react'
import { Route, useNavigate } from 'react-router'
import CheckLogin from '../component/CheckLogin';
import RetailerDashboard from "../pages/Retailer/Dashbord";
 
const Retailer=()=> {
    const navigate  = useNavigate();
    if(!CheckLogin()){
        navigate("/");
    }
    return (
        <>
           <Route  path="dashboard" element={ <RetailerDashboard/> } />
        </>
    )
}
export default Retailer;