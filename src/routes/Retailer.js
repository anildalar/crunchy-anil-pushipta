import React from 'react'
import { Route, useHistory } from 'react-router'
import CheckLogin from '../component/CheckLogin';
import RetailerDashboard from "../pages/Retailer/Dashbord";
 
const Retailer=()=> {
    const history = useHistory();
    if(!CheckLogin()){
        history.push("/");
    }
    return (
        <>
            <Route path="/dashboard"><RetailerDashboard/></Route>
        </>
    )
}
export default Retailer;