import React from 'react'
import { Route, useHistory } from 'react-router'
import CheckLogin from '../component/CheckLogin';
import UserDashboard from "../pages/User/Dashbord";

const User=()=> {
    const history = useHistory();
    if(!CheckLogin()){
        history.push("/");
    }
    return (
        <>
            <Route path="/dashboard"><UserDashboard/></Route>
        </>
    )
}
export default User;