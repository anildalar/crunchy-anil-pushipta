import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Nopage from '../pages/Nopage'
import Home from '../pages/Home'
import SystemAdminDashboard from '../pages/SystemAdmin/Dashbord';
import VenderCreateHttp from '../pages/SystemAdmin/VenderCreateHttp';
import VendorCreateSmpp from '../pages/SystemAdmin/VendorCreateSmpp';
import ClinetRouting from "../pages/SystemAdmin/ClinetRouting";
import CreateRouting from "../pages/SystemAdmin/CreateRouting";
import SenderIdRule from "../pages/SystemAdmin/SenderIdRule";
import SmsScoreboard from '../pages/SystemAdmin/SmsScoreboard';
import Smsreports from '../pages/SystemAdmin/Smsreports';
import Languages from '../pages/SystemAdmin/Languages';
import CreateClientConnections from '../pages/SystemAdmin/CreateClientConnections';
import VendorSmppConnection from '../pages/SystemAdmin/VendorSmppConnection';
import { VendorHttpConnections } from '../pages/SystemAdmin/VendorHttpConnections';
import ClientConnections from '../pages/SystemAdmin/ClientConnections';
import Users from '../pages/SystemAdmin/NewUser';
import CreateUsers from '../pages/SystemAdmin/Createusers';
import { EditVenderSmpp } from "../pages/SystemAdmin/EditVenderSmpp";
import { EditVenderHttp } from '../pages/SystemAdmin/EditVenderHttp';
import Login from '../pages/Login';

function SystemAdmin() {
    return (
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={ <Home/>} />
                <Route  path="login" element={ <Login/>} />
                <Route  path="dashboard" element={ <SystemAdminDashboard/> } />
                {/* Vendor connecton */}
                <Route  path="vendor/smpp/create" element={ <VendorCreateSmpp/> }/>
                <Route  path="vendor/http/create" element={ <VenderCreateHttp/> }/>
                <Route  path="vendor/smpp" element={ <VendorSmppConnection/> }/>
                <Route  path="vendor/http" element={ <VendorHttpConnections/> }/>        
                {/* clienct connection  */}
                <Route  path="client/connection/create" element={ <CreateClientConnections/> }/> 
                <Route  path="client/connections" element={ <ClientConnections/> }/>            
                {/* client routing route   */}
                <Route  path="routing/create" element={ <CreateRouting/> }/>
                <Route  path="routing" element={ <ClinetRouting/> }/>
                {/* setting */}
                <Route  path="sender-id-rule" element={ <SenderIdRule/> }/>
                <Route  path="languages" element={ <Languages/> }/>
                {/* reports */}
                <Route  path="sms/scoreboard" element={ <SmsScoreboard/> }/>
                <Route  path="sms/reports" element={ <Smsreports/> }/>
                {/* users */}
                <Route  path="users/create" element={ <CreateUsers/> }/>
                <Route  path="users" element={ <Users/> }/>            
                {/* 404 page */}
                <Route  path="*" element={ <Nopage/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default SystemAdmin
