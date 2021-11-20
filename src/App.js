import React, { useEffect, useState} from "react";
import { Route,Switch } from "react-router-dom";
import { useSelector } from "react-redux";
//import {useSelector, useDispatch} from ""
import Domain from "./pages/Domain";
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
import Clinet_routing from "./pages/SystemAdmin/Clinet_routing";
import SenderId_Rul from "./pages/SystemAdmin/SenderId_Rul";
import Add_field from "./pages/SystemAdmin/Add_field";
import Smsreports from "./pages/SystemAdmin/Smsreports";
import Languages from "./pages/SystemAdmin/Languages";
import SystemAdmin from "./routes/SystemAdmin";
import Admin from "./routes/SystemAdmin";
import NoPage from './routes/NoPage'
import Retailer from "./routes/Retailer";
import Reseller from "./routes/Reseller";
import User from "./routes/User";
import Nopage from "./pages/Nopage";
export default function App() {
  
  const role=useSelector((state) => state.user.role)
  const getComponent = ()=>{
    switch(role){
      case 'systemadmin':
        return <SystemAdmin/>;
        break;
      case 'admin':
        return <Admin/>
        break;
      case 'retailer':
        return <Retailer/> 
        break;
      case 'reseller':
        return <Reseller/>
        break;
      case 'user':
        return <User/> 
        break;
      default:
        return <NoPage/>
        break;
    }
  }
  return (
    <>
      <Switch>
        <Route path="/" exact> <Home /> </Route>
        <Route path="/domain" component={ Domain }></Route>
        <Route path="/pushpita" component={ Pushpita }></Route>
        <Route path="/group"><Groups /></Route>
        <Route path="/datatable"><Abc /></Route>
        <Route path="/importcontects"><ImportContects /></Route>
        <Route path="/ClientConnections" component={ ClientConnections }></Route>
        <Route path="/TableData" component={ TableData }></Route>
        <Route path="/breadcrumb" component={ BreadCrumb }></Route>
        <Route path="/editcontect" component={ ExportContect }></Route>
        <Route path="/smsreport" component={ SMSReport }></Route>
        <Route path="/credit" component={ Credit }></Route>
        <Route path="/sendsms" component={ SendSMS }></Route>
        <Route path="/viewcredit" component={ ViewCredit }></Route>
        <Route path="/editgroup" ><EditGroup/></Route>
        <Route path="/Smmp" component={ Createuser }></Route>
        <Route path="/Clinet_routing" component={ Clinet_routing }></Route>
        <Route path="/Add_field" component={ Add_field }></Route>
        <Route path="/SenderId_Rul" component={ SenderId_Rul }></Route>
        <Route path="/smsreports" component={ Smsreports }></Route>
        <Route path="/languages" component={ Languages }></Route>
        
        {getComponent()}
        <Route path="/"  component={ Nopage }></Route>
      </Switch>
    </>
  )
}

