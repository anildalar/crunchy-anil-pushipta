import React, { useEffect, useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Domain from "./pages/Domain";
import SystemAdminDashboard from "./pages/SystemAdmin/Dashbord";
import AdminDashboard from "./pages/Admin/Dashboard";
import RetailerDashboard from "./pages/Retailer/Dashbord";
import ResellerDashboard from "./pages/Reseller/Dashbord";
import UserDashboard from "./pages/User/Dashbord";
import Home from "./pages/Home";
import Pushpita from "./pages/Pushpita";
import ClientConnections from "./pages/SystemAdmin/ClientConnections";
import TableData from "./pages/SystemAdmin/TableData";
import { Groups } from "./pages/Admin/Groups";
import { ImportContects } from "./pages/Admin/ImportContects";

import { Abc } from "./pages/Abc";
import { EditGroup } from "./pages/Admin/EditGroup";
import { BreadCrumb } from "./component/UI/BreadCrumb";
import { ExportContect } from "./pages/Admin/ExportContect";
import { SMSReport } from "./pages/Admin/SMSReport";
import { Credit } from "./pages/Admin/Credit";
import { SendSMS } from "./pages/Admin/SendSMS";
import { ViewCredit } from "./pages/Admin/ViewCredit";
import Createuser from "./pages/SystemAdmin/Createuser";
import Vender_create from "./pages/SystemAdmin/Vender_create";
import Clinet_routing from "./pages/SystemAdmin/Clinet_routing";
import SenderId_Rul from "./pages/SystemAdmin/SenderId_Rul";
import Add_field from "./pages/SystemAdmin/Add_field";
import Smsreports from "./pages/SystemAdmin/Smsreports";
import Languages from "./pages/SystemAdmin/Languages";

export default function App() {
  
  const [role,setRole]=useState('');

  useEffect(() => {

    setRole(localStorage.getItem('role'));

  }, [])
  const loadDashboard = () =>{
    switch(role){
      case 'systemadmin':
        console.log("systemadmin")
        return <SystemAdminDashboard/>;
        break;
      case 'admin':
        return <AdminDashboard />
        break;
      case 'retailer':
        return <RetailerDashboard /> 
        break;
      case 'reseller':
        return <ResellerDashboard />
        break;
      case 'user':
        return <UserDashboard /> 
        break;
      default:
        console.log("anil") 
    }
  }
  return (
    <>
      <Router>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path={"/"+role+"/dashboard"}>
          <h1>hello anil</h1>
          {loadDashboard()}
        </Route>
        <Route path="/domain" component={ Domain }></Route>
        <Route path="/pushpita" component={ Pushpita }></Route>
        <Route path="/group">
        <Groups />
      </Route>
     
      <Route path="/datatable">
        <Abc />
      </Route>
      <Route path="/importcontects">
        <ImportContects />
      </Route>
        
        <Route path="/ClientConnections" component={ ClientConnections }></Route>
        <Route path="/TableData" component={ TableData }></Route>
        <Route path="/breadcrumb" component={ BreadCrumb }></Route>
        <Route path="/editcontect" component={ ExportContect }></Route>
        <Route path="/smsreport" component={ SMSReport }></Route>
        <Route path="/credit" component={ Credit }></Route>
        <Route path="/sendsms" component={ SendSMS }></Route>
        <Route path="/viewcredit" component={ ViewCredit }></Route>
        <Route path="/editgroup" >
          <EditGroup/>
        </Route>
        <Route path="/Smmp" component={ Createuser }></Route>
        <Route path="/Vendercreate" component={ Vender_create }></Route>
        <Route path="/Clinet_routing" component={ Clinet_routing }></Route>
        <Route path="/Add_field" component={ Add_field }></Route>
        <Route path="/SenderId_Rul" component={ SenderId_Rul }></Route>
        <Route path="/smsreports" component={ Smsreports }></Route>
        <Route path="/languages" component={ Languages }></Route>

      </Router>
    </>
  )
}

