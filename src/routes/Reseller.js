import React from 'react'
import { Route, useHistory } from 'react-router'
import CheckLogin from '../component/CheckLogin';
import ResellerDashboard from "../pages/Reseller/Dashbord";

const Reseller=()=> {
    const history = useHistory();
    if(!CheckLogin()){
        history.push("/");
    }
    return (
        <>
            <Route path="/dashboard"><ResellerDashboard/></Route>
        </>
    )
}
export default Reseller;