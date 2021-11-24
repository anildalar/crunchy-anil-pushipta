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
import Admin from "./routes/SystemAdmin";
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
        return <Loading/>;
        break;
    }
  }
  //console.log(getComponent());
  return (
    <>
      {getComponent()}
      {/* <BrowserRouter>
        <Routes>
          
          {/* <Route element={ getComponent() } /> */}
          {/* 
          <Route path="/domain" element={ <Domain/> } />
          <Route path="/pushpita" element={ <Pushpita/> } />
          <Route path="/group" element={<Groups/> } />
          <Route path="/importcontects" element={<ImportContects/> } />
          <Route path="/TableData" element={ <TableData/> } />
          <Route path="/breadcrumb" element={ <BreadCrumb/> } />
          <Route path="/editcontect" element={ <ExportContect/> } /> 
          <Route path="/smsreport" element={ <SMSReport/> } />
          <Route path="/credit" element={ <Credit/> } />
          <Route path="/sendsms" element={ <SendSMS/> } />
          <Route path="/viewcredit" element={ <ViewCredit/> } />
          <Route path="/editgroup" element={<EditGroup/> }/>
          <Route path="/newcreateuser" element={ <NewCreateUser/> } />
          <Route path="/userprofile/:uuid" element={ <UserProfile/> } />
          <Route path="/importrateeditor" element={ <ImportRateEditor/> } />
          <Route path="/editvendersmpp" element={ <EditVenderSmpp/> } />
          <Route path="/editvenderhttp" element={ <EditVenderHttp/> } /> */}
          {/* <Route path="/" element={ <Outlet/>}>{getComponent()} </Route> */}
          {/* <Route  path="*" element={ <Nopage/> } /> */}
        {/* </Routes> */}
      {/* </BrowserRouter>  */}
    </>
    
  )
}

