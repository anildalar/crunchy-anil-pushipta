import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import Layout from '../../component/Layout'
import { BreadCrumb } from '../../component/UI/BreadCrumb'
import HelperHook from '../../custHook/HelperHook';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom'
import {  Toast, toastOption } from '../../helpers/helper'
/**
* @author
* @function EditVenderSmpp
**/

export const EditVenderSmpp = (props) => {
    const[editdata,setEditData]=useState({})
    const[venBasInfo,setVenBasInfo]=useState({})
    const helper = HelperHook();
    let p = useParams();
   
    const { t } = useTranslation();
    useEffect(() => {
        let uuid = {
            "id": p.uuid
          }
        fetch('http://173.249.39.43:3000/vendor/conn/getConnbyId', {
            ...helper.fetchOption,
            body: JSON.stringify(uuid),
        })
            .then(response => response.json())
            .then(data => {
                if(data.status==200){
                    //console.log('Success:', data.data);
                    setEditData({...editdata,...data.data})
                    setVenBasInfo({...venBasInfo,...data.data.venBasInfo})
                    console.log(JSON.stringify(editdata))
                }else {
                    toast.danger(data.msg,toastOption);
                }
               
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])

    const showData=(e)=>{
e.preventDefault()
console.log(editdata.venBasInfo.name)
console.log(editdata.venBasInfo.supportNo)
console.log(venBasInfo)
    }
    return (
        <Layout>
            <div className="main-content horizontal-content">
                {/* container opened */}
                <div className="container">
                    {/* breadcrumb */}
                    <BreadCrumb></BreadCrumb>
                    {/* breadcrumb */}
                    {/* row */}
                    {/* your work start here */}
                    <div className="row">
                        <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
                            {/* start next time hare  */}
                            <div classname="card ">
                                <div className="card-header bg-info px-2 py-1">
                                    <h5 className="m-2 text-white">{t("SMPP Connection")}</h5>
                                </div>
                                <form id="myForm"  >
                                    <div className="card-body bg-white">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label htmlFor="masprotypeld">{t("Route Type")}&nbsp;<sup className="text-danger">*</sup></label>
                                                <select name="routeType" id="masprotypeld" className="form-select " required="required">
                                                    <option value="">{t("Select Route Type")}</option>
                                                    {/* {
                                                        mastProd.map((c) => {
                                                            return <option value={c.id} key={c.id}>{c.title}</option>
                                                        })
                                                    } */}
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="masprold">{t("Route")}&nbsp;<sup className="text-danger">*</sup></label>
                                                <select id="masprold" name="route" className="form-select  route" required="required">
                                                    <option value="" >{t("Select One")}</option>
                                                    {/* {mroute.map((items) => {
                                                        return items.map((b) => {
                                                            return <option value={b.id} key={b.id}>{b.title}</option>
                                                        })
                                                    })} */}
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3 mg-t-20 mg-lg-t-0">
                                                <label htmlFor="SSI_type" className="mg-b-10">{t("SSL Type")}&nbsp;<sup className="text-danger">*</sup></label>

                                                <select id="SSI_type" className="form-select " name="sslType" required="required">
                                                    <option value="" >{t("Select One")}</option>
                                                    <option value="0">{t("SSLv2")}</option>
                                                    <option value="1">{t("SSLv3")}</option>
                                                    <option value="2">{t("SSLv23")}</option>
                                                    <option value="3">{t("TLSV1")}</option>
                                                    <option value="-1">{t("No-secure")}</option>
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3 mg-t-20 mg-lg-t-0">
                                                <label htmlFor="payload">Payload&nbsp;<sup className="text-danger">*</sup></label> {/* message on payload */}
                                                <select id="payload" className="form-select " name="isPayLoad" required>
                                                    <option value="">{t("select one")}</option>
                                                    <option value="0">{t("No")}</option>
                                                    <option value="1">{t("Yes")}</option>
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3 mg-t-20 mg-lg-t-0">
                                                <label htmlFor="bind_type">{t("Bind Type")}&nbsp;<sup className="text-danger">*</sup></label>

                                                <select name="bindType" id="bind_type" className="form-select " required >
                                                    <option value="">{t("select one")}</option>
                                                    <option value="TR">{t("TRANSCIVER")}</option>
                                                    <option value="TX">{t("TRANSMITTER")}</option>
                                                    <option value="RX">{t("RECIEVER")}</option>
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="hostname" >{t("Host Name")}&nbsp;<sup className="text-danger">*</sup></label>
                                                <input defaultValue={editdata.hostName} className="form-control   readonly" type="text" name="hostName" id="hostname" required="required" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="port">{t("Port")}&nbsp;<sup className="text-danger">*</sup></label>
                                                <input defaultValue={editdata.port} className="form-control  readonly" type="number" name="port" id="port" required />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="userName">{t("User Name")}&nbsp;<sup className="text-danger">*</sup></label>
                                                <input  defaultValue={editdata.userName} type="text" className="form-control  " name="userName" id="userName" placeholder="Enter userName" required />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="password">{t("Password")}&nbsp;<sup className="text-danger">*</sup></label>
                                                <input defaultValue={editdata.password} type="text" className="form-control " name="password" id="password" placeholder="Enter password" required />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="enqInterTime">{t("Enqure Interval Time")}</label>
                                                <input type="number" min="0" className="form-control " name="enqInterTime" id="enqInterTime" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="allowconn">{t("Allow Connection")}</label>
                                                <input type="number" min="0" className="form-control " name="allowConn" id="allowconn" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="addrTON">{t("AddrTON")}</label>
                                                <input defaultValue={editdata.addrTON} type="text" className="form-control " name="addrTON" id="addrTON" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="addrNPI">{t("AddrNPI")}</label>
                                                <input defaultValue={editdata.addrNPI} type="text" className="form-control " name="addrNPI" id="addrNPI" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="addrRange">{t("AddrRange")}</label>
                                                <input defaultValue={editdata.addrRange} type="text" className="form-control " name="addrRange" id="addrRange" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="priority">{t("Priority")}</label>
                                                <input defaultValue={editdata.priority} type="text" className="form-control " name="priority" id="priority" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3 mg-t-20 mg-lg-t-0">
                                                <p className="mg-b-10">{t("Loglevel")}&nbsp;<sup className="text-danger">*</sup></p> {/* message on payload */}
                                                <select className="form-select " name="logLevel" required >
                                                    <option value="">{t("select one")}</option>
                                                    <option value="0">{t("debug")}</option>
                                                    <option value="1">{t("info")}</option>
                                                    <option value="2">{t("warning")}</option>
                                                    <option value="3">{t("error")}</option>
                                                    <option value="4">{t("painik")}</option>
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="systype">{t("Systype")}</label>
                                                <input defaultValue={editdata.sysType} type="text" className="form-control " name="sysType" id="systype" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="dsc">{t("Data Coding schema")}</label>
                                                <input defaultValue={editdata.dsc} type="text" className="form-control " name="dsc" id="dsc" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="smscapcity">{t("Throughtput")}</label>
                                                <input defaultValue={editdata.smsCapacity} type="text" className="form-control " name="smsCapacity" id="smscapcity" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="windowSize">{t("Window Size")}</label>
                                                <input defaultValue={editdata.windowSize} type="text" className="form-control " name="windowSize" id="windowSize" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="openTime">{t("Open Time")}</label>
                                                <input defaultValue={editdata.openTime} type="time" className="form-control " name="openTime" id="openTime" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="closeTime">{t("Close Time")}</label>
                                                <input defaultValue={editdata.closeTime} type="time" className="form-control " name="closeTime" id="closeTime" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>

                                            <div className="col-md-3 mg-t-20 mg-lg-t-0">
                                                <p className="mg-b-10">Active</p> {/* message on payload */}
                                                <select className="form-select  " name="active" >
                                                    <option value="">{t("select one")}</option>
                                                    <option value="0">{t("Active")}</option>
                                                    <option value="1">{t("Inactive")}</option>
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label htmlFor="name">{t("Name")}</label>
                                                <input  defaultValue={venBasInfo.name} type="text" className="form-control " name="name" id="name" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="name">{t("Company Name")}</label>
                                                <input defaultValue={venBasInfo.companyName}  type="text" className="form-control " name="companyName" id="name" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="name">{t("Email")}</label>
                                                <input defaultValue={venBasInfo.name} type="email" className="form-control " name="email" id="name" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="name">{t("Support Number")}</label>
                                                <input defaultValue={venBasInfo.supportNo} type="number" className="form-control " name="supportNo" id="name" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3 mt-4 offset-9">
                                                <input onClick={e=>{showData(e)}} type="submit" className="text-white form-control  btn btn-info bg-primary border-secondary" value="Submit" />
                                            </div>
                                        </div>
                                    </div>
                                    <ToastContainer />
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* your work end here */}
                    {/* row close */}
                </div>
                {/* Container closed */}
            </div>


        </Layout>
    )

}