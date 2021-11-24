import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Nopage from '../pages/Nopage'
import Home from '../pages/Home'
import Login from '../pages/Login';
import AdminDashboard from "../pages/Admin/Dashboard";
import { SMSReport } from "../pages/Admin/SMSReport";
import { SendSMS } from "../pages/Admin/SendSMS";
import { Groups } from "../pages/Admin/Groups";
import { ImportContects } from "../pages/Admin/ImportContects";
import { ExportContect } from "../pages/Admin/ExportContect";
function Admin() {
    return (
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={ <Home/>} />
                <Route  path="login" element={ <Login/>} />
                {/* dashboard */}
                <Route  path="dashboard" element={ <AdminDashboard/> } />
                {/* reports */}
                <Route  path="sms/reports" element={ <SMSReport/> } />
                {/* sms */}
                <Route  path="sms/send" element={ <SendSMS/> } />
                {/* phonebook */}
                <Route  path="phonebook/groups" element={ <Groups/> } />
                <Route  path="phonebook/import-contact" element={ <ImportContects/> } />
                <Route  path="phonebook/export-contact" element={ <ExportContect/> } />
                {/* not fouond page */}
                <Route  path="*" element={ <Nopage/> } />
                
            </Routes>
        </BrowserRouter>
    )
}

export default Admin;
