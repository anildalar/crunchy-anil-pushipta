import React from 'react'
import { Route, useHistory } from 'react-router'
import CheckLogin from '../component/CheckLogin';
import Nopage from '../pages/Nopage';
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
import { EditVenderSmpp } from "../pages/SystemAdmin/EditVenderSmpp";
import { EditVenderHttp } from '../pages/SystemAdmin/EditVenderHttp';
const SystemAdmin = () => {
    const history = useHistory();
    if (!CheckLogin()) {
        history.push("/");
    }
    return (
        <>
            <Route path="/dashboard"><SystemAdminDashboard /></Route>
            {/* Vendor connecton */}
            <Route exact path="/vendor/smpp/editvendersmpp/:uuid"  component={EditVenderSmpp}></Route>
            <Route exact path="/vendor/http/editvenderhttp/:uuid"  component={EditVenderHttp}></Route>
            <Route path="/vendor/smpp/create" component={VendorCreateSmpp}></Route>
            <Route path="/vendor/http/create" component={VenderCreateHttp}></Route>
            
            <Route path="/vendor/smpp" component={VendorSmppConnection}></Route>
            
            <Route path="/vendor/http" component={VendorHttpConnections}></Route>

            {/* clienct connection  */}
            <Route path="/client/connection/create" component={CreateClientConnections}></Route>
            <Route path="/client/connections" component={ClientConnections}></Route>

            {/* client routing route   */}
            <Route path="/routing/create" component={CreateRouting}></Route>
            <Route path="/routing" component={ClinetRouting}></Route>
            {/* setting */}
            <Route path="/sender-id-rule" component={SenderIdRule}></Route>
            <Route path="/languages" component={Languages}></Route>
            {/* reports */}
            <Route path="/sms/scoreboard" component={SmsScoreboard}></Route>
            <Route path="/sms/reports" component={Smsreports}></Route>
        </>
    )
}
export default SystemAdmin;