import React from 'react';
import { BrowserRouter, Routes,Outlet,Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Domain from "./pages/Domain";
import Home from "./pages/Home";
import Pushpita from "./pages/Pushpita";
import ClientConnections from "./pages/SystemAdmin/CreateClientConnections";
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
import Createuser from "./pages/SystemAdmin/Createusers";
import SystemAdmin from "./routes/SystemAdmin";
import Admin from "./routes/Admin";
import NoPage from './routes/NoPage'
import Retailer from "./routes/Retailer";
import Reseller from "./routes/Reseller";
import User from "./routes/User";
import Nopage from "./pages/Nopage";
import { NewCreateUser } from "./pages/SystemAdmin/NewCreateUser";
import { UserProfile } from "./pages/SystemAdmin/UserProfile";
import { ImportRateEditor } from "./pages/SystemAdmin/ImportRateEditor";
import { EditVenderSmpp } from "./pages/SystemAdmin/EditVenderSmpp";
import { EditVenderHttp } from "./pages/SystemAdmin/EditVenderHttp";
import Login from "./pages/Login";
import PushpitaRoute from "./routes/PushpitaRoute";
import Loading from './routes/Loading';

export default function App() {
  const role=useSelector((state) => state.user.role)
  const getComponent = ()=>{
    switch(role){
      case 'systemadmin':
        console.log('sys')
        return <SystemAdmin/>;
        
        break;
      case 'admin':
        console.log('admin')
        return <Admin/>
        
        break;
      case 'retailer':
        console.log('admin')
        return <Retailer/> 
        break;
      case 'reseller':
        console.log('reseller')
        return <Reseller/>
        break;
      case 'user':
        console.log('User')
        return <User/> 
        break;
      default:
        console.log('loading')
        return <Loading/>;
        break;
    }
  }
  console.log(getComponent());
  return (
    <>
      {getComponent()}
    </>
    
  )
}

