import React from 'react'
import { Route, useHistory } from 'react-router'
import CheckLogin from '../component/CheckLogin';
import AdminDashboard from "../pages/Admin/Dashboard";
import { EditVenderHttp } from '../pages/SystemAdmin/EditVenderHttp';

const PushpitaRoute=()=> {
    const history = useHistory();
    if(!CheckLogin()){
        history.push("/");
    }
    return (
        <>
            <Route path="/helloanil">hello anil</Route>
            
        
        
        </>
    )
}
export default PushpitaRoute