import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CheckLogin from '../component/CheckLogin';
import AdminDashboard from "../pages/Admin/Dashboard";
import { EditVenderHttp } from '../pages/SystemAdmin/EditVenderHttp';
import { SystemErrorCode } from '../pages/SystemAdmin/SystemErrorCode';

const PushpitaRoute = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/helloanil">hello anil</Route>
                    
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default PushpitaRoute