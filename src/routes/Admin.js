import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Nopage from '../pages/Nopage'
import Home from '../pages/Home'
import Login from '../pages/Login';
import AdminDashboard from "../pages/Admin/Dashboard";

function Admin() {
    return (
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={ <Home/>} />
                <Route  path="login" element={ <Login/>} />
                {/* dashboard */}
                <Route  path="dashboard" element={ <AdminDashboard/> } />
                <Route  path="*" element={ <Nopage/> } />
            
            </Routes>
        </BrowserRouter>
    )
}

export default Admin;
