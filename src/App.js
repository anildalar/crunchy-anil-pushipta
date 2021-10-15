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
import Routing from "./pages/Routing";
import ClientConnections from "./pages/SystemAdmin/ClientConnections";
import TableData from "./pages/SystemAdmin/TableData";
import Createuser from "./pages/SystemAdmin/Createuser";
import Vender_create from "./pages/SystemAdmin/Vender_create";
import Clinet_routing from "./pages/SystemAdmin/Clinet_routing";

export default function App() {
  var comp;
  var role = localStorage.getItem('role');
  
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
        <Route path="/routing" component={ Routing }></Route>
        <Route path="/ClientConnections" component={ ClientConnections }></Route>
        <Route path="/TableData" component={ TableData }></Route>
        <Route path="/Smmp" component={ Createuser }></Route>
        <Route path="/Vendercreate" component={ Vender_create }></Route>
        <Route path="/Clinet_routing" component={ Clinet_routing }></Route>

      </Router>
    </>
  )
}

