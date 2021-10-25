import React, { useEffect } from "react";
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

export default function App() {
  var comp,role = localStorage.getItem('role');
  
    //alert(role);
    switch(role){
      case 'systemadmin':
        comp = <SystemAdminDashboard />
        break;
      case 'admin':
        comp = <AdminDashboard />
        break;
      case 'retailer':
        comp = <RetailerDashboard /> 
        break;
      case 'reseller':
        comp = <ResellerDashboard />
        break;
      case 'user':
        comp = <UserDashboard /> 
        break;
      default:
        //alert(comp);
  }
  return (
    <>
      <Router>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path={"/"+role+"/dashboard"}>
         { comp }
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
        <Route path="/editgroup" >
          <EditGroup/>
        </Route>
      </Router>
    </>
  )
}

