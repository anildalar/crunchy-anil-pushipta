import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import Layout from '../../component/Layout'
import { BreadCrumb } from '../../component/UI/BreadCrumb'
import HelperHook from '../../custHook/HelperHook';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom'
import { Toast, toastOption } from '../../helpers/helper'
import { url } from '../../url';
import $, { event } from 'jquery';
/**
* @author
* @function EditVenderHttp
**/

export const EditVenderHttp = (props) => {
    const { t } = useTranslation();
    const helper = HelperHook();
    const [editdata, setEditData] = useState({})
    const [mastProd, setData] = useState([]);
    const [mroute, setmRoute] = useState([]);
    let p = useParams();

    useEffect(() => {
        try {
            fetch(url + "/master/route/getRouteType", {
                ...helper.fetchOption
            }).then(response => response.json())
                .then(data => {
                    setData(data.data);
                }).catch((error) => {
                    console.error('Error:', error);
                });
        }
        catch (err) {
            toast.error("sever error",
                {
                    ...Toast,
                    position: "top-right"
                });
        }

        let uuid = {
            "id": p.uuid
        }
        fetch('http://173.249.39.43:3000/vendor/conn/getConnbyId', {
            ...helper.fetchOption,
            body: JSON.stringify(uuid),
        })
            .then(response => response.json())
            .then(data => {
                if (data.status == 200) {
                    console.log('Success:', data.data);
                    setEditData({ ...editdata, ...data.data })
                    // setVenBasInfo({...venBasInfo,...data.data.venBasInfo})
                    console.log(JSON.stringify(editdata))
                } else {
                    toast.danger(data.msg, toastOption);
                }

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])

    const submit = (e) => {
        e.preventDefault()
        console.log(editdata)
    }

    const handleChange = (e) => {
        $('.route').html('<option value="">' + t('Select Route Type') + '</option>');
        if (e.target.value != '') {
            //setHttpCollection({ ...hhtpCollection, [e.target.name]: e.target.value })
            setmRoute([]); //initially emtpy   
            fetch(url + "/master/route/routesByType", {
                ...helper.fetchOption,
                body: JSON.stringify({ routeType: e.target.value })
            }).then(response => response.json())
                .then(d => {
                    console.log(' Success:', d.data);
                    setmRoute(result => [...result, d.data]);//
                }).catch((error) => {
                    console.error('Error:', error);
                });
        }
    }
    return (
        <Layout>
            <div className="main-content horizontal-content">
                <div className="container">
                    <BreadCrumb></BreadCrumb>
                    <div className="row">
                        <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
                            {/* start next time hare  */}
                            <div className="card ">
                                <div className="card-header bg-info px-2 py-1">
                                    <h5 className="m-2 text-white">{t("HTTP Connection")}</h5>
                                </div>
                                <form id="myForm" >
                                    <div className="card-body bg-white">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label htmlFor="masprotypeld">{t("Route Type")}&nbsp; <sup className="text-danger">*</sup></label>
                                                <select onChange={handleChange} name="routeType" id="masprotypeld" className="form-select form-select-lg" required >
                                                    <option value="">{t("select route type")}</option>
                                                    {mastProd.map((d) => {
                                                        return <option value={d.id} key={d.id}>{d.title}</option>
                                                    })}
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="masprold">{t("Route")}&nbsp; <sup className="text-danger">*</sup></label>
                                                <select  id="masprold" name="route" className="form-select form-select-lg route" required>
                                                    <option value="" >{t("select one")}</option>
                                                    {mroute.map((items, index) => {
                                                        return items.map((b) => {
                                                            return <option value={b.id} key={b.id}>{b.title}</option>
                                                        })
                                                    })
                                                    }

                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="sslType" className="mg-b-10">{t("SSL Type")}&nbsp; <sup className="text-danger">*</sup></label>
                                                <select id="sslType" className="form-select form-select-lg" name="sslType" required>
                                                    <option value=" ">{t("select one")}</option>
                                                    <option value="0" >{t("SSLv2")}</option>
                                                    <option value="1" > {t("SSLv3")}</option>
                                                    <option value="2" >{t("SSLv23")}</option>
                                                    <option value="3" > {t("TLSV1")} </option>
                                                    <option value="-1" >{t("No-secure")}</option>
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="addrTON">{t("AddrTON")}</label>
                                                <input defaultValue={editdata.addrTON} type="text" className="form-control " name="addrTON" id="addrTON" />
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="addrNPI">{t("AddrNPI")}</label>
                                                <input defaultValue={editdata.addrNPI} type="text" className="form-control " name="addrNPI" id="addrNPI" />
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="addrRange">{t("AddrRange")}</label>
                                                <input defaultValue={editdata.addrRange} type="text" className="form-control " name="addrRange" id="addrRange" />
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="priority">{t("Priority")}</label>
                                                <input defaultValue={editdata.priority} type="text" className="form-control " name="priority" id="priority" />
                                            </div>
                                            <div className="col-md-3 mg-t-20 mg-lg-t-0">
                                                <p className="mg-b-10">{t("Loglevel")}&nbsp; <sup className="text-danger">*</sup></p> {/* message on payload */}
                                                <select className="form-select form-select-lg" name="logLevel"  >
                                                    <option value="">{t("select one")}</option>
                                                    <option value="0" >{t("debug ")}</option>
                                                    <option value="1" >{t("info")}</option>
                                                    <option value="2" >{t("warning")}</option>
                                                    <option value="3" >{t("error")}</option>
                                                    <option value="4" >{t("painik")}</option>
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="systype">{t("Systype")}</label>
                                                <input defaultValue={editdata.systype} type="text" className="form-control " name="sysType" id="systype" />

                                            </div>

                                            <div className="col-md-3">
                                                <label htmlFor="dsc">{t("Data Coding schema")}</label>
                                                <input defaultValue={editdata.dsc} type="text" className="form-control " name="dsc" id="dsc" />
                                                <span className="text-danger error"></span>
                                            </div>

                                            <div className="col-md-3">
                                                <label htmlFor="smscapcity">{t("Throughtput")}</label>
                                                <input defaultValue={editdata.smsCapacity} type="text" className="form-control " name="smsCapacity" id="smscapcity" />

                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="openTime">{t("Open Time")}</label>
                                                <input defaultValue={editdata.openTime} type="time" className="form-control " name="openTime" id="openTime" />

                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="closeTime">{t("Close Time")}</label>
                                                <input defaultValue={editdata.closeTime} type="time" className="form-control " name="closeTime" id="closeTime" />

                                            </div>
                                            <div className="col-md-3 mg-t-20 mg-lg-t-0">
                                                <label className="mg-b-10">{t("Active")}</label> {/* message on payload */}
                                                <select className="form-select form-select-lg " name="active" >
                                                    <option value="">{t("select one")}</option>
                                                    <option value="0">{t("Active")}</option>
                                                    <option value="1">{t("Inactive")}</option>
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3 mg-t-20 mg-lg-t-0">
                                                <label htmlFor="apiPushUrl">{t("API Push Url")}</label>
                                                <input defaultValue={editdata.apiPushUrl} type="text" name="apiPushUrl" id="apiPushUrl" className="form-control " />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3 mg-t-20 mg-lg-t-0">
                                                <p className="mg-b-10">{t("API Method")}&nbsp; <sup className="text-danger">*</sup></p> {/* message on payload */}
                                                <select className="form-select form-select-lg" name="apiMeth"  >
                                                    <option value=""> {t("none")}</option>
                                                    <option value="0" >{t("POST")}</option>
                                                    <option value="1" >{t("GET")}</option>
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3 mg-t-20 mg-lg-t-0">
                                                <p className="mg-b-10">{t("API Parameter")}&nbsp; <sup className="text-danger">*</sup></p> {/* message on payload */}
                                                <select className="form-select form-select-lg" name="apiParType"  >
                                                    <option value="">{t("none")}</option>
                                                    <option value="0">{t("Quert")}</option>
                                                    <option value="1">{t("Data")}</option>
                                                    <option value="2">{t("JSON")}</option>
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3 mg-t-20 mg-lg-t-0">
                                                <p className="mg-b-10">{t("API Auth")}&nbsp; <sup className="text-danger">*</sup></p> {/* message on payload */}
                                                <select onChange={onchange} className="form-select form-select-lg apiauth" name="apiAuth"  >
                                                    <option value="0">{t("None")}</option>
                                                    <option value="1">{t("Basic")}</option>
                                                    <option value="2">{t("Bearer Token")}</option>
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                        </div>
                                        <div id="basicRow" className="row row-sm">
                                            <div className="col-sm-6 col-md-4 d-none bearer_token">
                                                <div className="form-group">
                                                    <label htmlFor="BearerToken">{t("Bearer Token")}</label>
                                                    <input type="text" name="BearerToken" id="BearerToken" className="form-control " />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3 d-none username ">
                                                <div className="form-group ">
                                                    <label htmlFor="username">{t("User Name")}</label>
                                                    <input type="text" name="userName" id="username" className="form-control  basic_token" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3 d-none password">
                                                <div className="form-group">
                                                    <label htmlFor="password">{t("Password")}</label>
                                                    <input type="text" name="password" id="password" className="form-control  basic_token" />
                                                </div>
                                            </div>
                                        </div>
                                        <h4 className="text-danger">{t("api fix data parameter")}</h4>
                                        <div className="row mt-1">
                                            <div className="col-sm-6 col-md-3">
                                                <div className="form-group">
                                                    <label htmlFor="apiData.sender">To&nbsp; <sup className="text-danger">*</sup></label>
                                                    <p>{t("Use for destination address.")}</p>
                                                    <input defaultValue={editdata.sender} type="text" name="sender" id="sender" className="form-control " />
                                                    <span className="text-danger error"></span>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3">
                                                <div className="form-group">
                                                    <label htmlFor="from">{t("From")}&nbsp; <sup className="text-danger">*</sup></label>
                                                    <p>{t("Use for source address or sender id.")}</p>
                                                    <input defaultValue={editdata.from} type="text" name="from" id="from" className="form-control " />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3">
                                                <div className="form-group">
                                                    <label htmlFor="msg">{t("MSG")}&nbsp; <sup className="text-danger">*</sup></label>
                                                    <p>{t("Use for content (message).")}</p>
                                                    <input defaultValue={editdata.msg} type="text" name="msg" id="msg" className="form-control  ps ps--theme_default" data-ps-id="e3819da9-57e8-e0c6-a66f-24315f5adce4" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 col-md-3">
                                                <div className="form-group">
                                                    <label htmlFor="flash">{t("flash")}&nbsp; <sup className="text-danger">*</sup></label>
                                                    <p>{t("Use for flash message.")}</p>
                                                    <input type="text" name="flash" id="flash" className="form-control " />
                                                </div>
                                            </div>

                                            <div className="col-sm-6 col-md-8">

                                                <div className="row pt-2">
                                                    <h4>{t("Flash value")}</h4>
                                                    <div className="col-sm-4">
                                                        <div className="form-group">
                                                            <label htmlFor="flash_yes">Yes</label>
                                                            <input type="text" data-parent="flash_obj" name="yes" id="flash_yes" className=" form-control" />
                                                        </div>
                                                        <span className="text-danger error"></span>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="form-group">
                                                            <label htmlFor="flash_no">{t("No")}</label>
                                                            <input type="text" data-parent="flash_obj" name="no" id="flash_no" className=" form-control" />
                                                        </div>
                                                        <span className="text-danger error"></span>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="form-group">
                                                            <label htmlFor="flash_default">{("flash default value")}</label>
                                                            <input type="text" data-parent="flash_obj" name="def" id="flash_default" className=" form-control" />
                                                        </div>
                                                        <span className="text-danger error"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="unicode">{t("Unicoded")}&nbsp; <sup className="text-danger">*</sup></label>
                                                    <p>{t("Use for unicode message.")}</p>
                                                    <input type="text" name="uc" id="unicode" className="form-control " />
                                                </div>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-sm-6 col-md-8 mt-4">
                                                <div className="row mt-1">
                                                    <div className="col-sm-4">
                                                        <div className="form-group">
                                                            <label htmlFor="uc_yes">{t("Yes")}</label>
                                                            <input type="text" data-parent="uc_obj" name="yes" id="uc_yes" className=" form-control" />
                                                        </div>
                                                        <span className="text-danger error"></span>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="form-group">
                                                            <label htmlFor="uc_no">{t("No")}</label>
                                                            <input type="text" data-parent="uc_obj" name="no" id="uc_no" className=" form-control" />
                                                        </div>
                                                        <span className="text-danger error"></span>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="form-group">
                                                            <label htmlFor="uc_default">{t("Unicode defaultv value")}</label>
                                                            <input type="text" data-parent="uc_obj" name="def" id="uc_default" className=" form-control" />
                                                        </div>
                                                        <span className="text-danger error"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row custfieldcol a_custfieldcol ">
                                            <h4 className="text-danger">{t("api custom data parameter")}</h4>

                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label htmlFor="apidlrType" className="mg-b-10">{t("Api Dlr Type")}&nbsp; <sup className="text-danger">*</sup></label>
                                                <select id="apidlrType" className="form-select form-select-lg " name="apidlrType" >
                                                    <option value=" ">{t("select one")}</option>
                                                    <option value="0" >{t("Get")}</option>
                                                    <option value="1" >{t("Recived")}</option>
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="url">Url</label>
                                                <input type="text" className="form-control " name="url" id="url" />
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="method" className="mg-b-10">{t("Method")}</label>
                                                <select id="method" className="form-select form-select-lg" name="method" >
                                                    <option value="">{t("select one")}</option>
                                                    <option value="0">{t("Get")}</option>
                                                    <option value="1">{t("Post")}</option>
                                                </select>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="paramType" className="mg-b-10">{t("ParamType")}</label>
                                                <select id="paramType" className="form-select form-select-lg" name="paramType" >
                                                    <option value="">{t("select one")}</option>
                                                    <option value="0">{t("Quert")}</option>
                                                    <option value="1">{t("Data")}</option>
                                                    <option value="2">{t("JSON")}</option>
                                                </select>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="apiRespoType" className="mg-b-10">{t("Api Response Type")}</label>
                                                <select id="apiRespoType" className="form-select form-select-lg" name="apiRespoType" >
                                                    <option value=" ">{t("select one")}</option>
                                                    <option value="0">{t("object")}</option>
                                                    <option value="1">{t("string")}</option>
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-3 mt-4 float-start">
                                                    <button className="btn btn-success">{t("Add morefiled")}</button>
                                                </div>

                                            </div>
                                        </div>
                                        <h4 className="text-danger">Api Respones Pattern</h4>
                                        <div className="row">
                                            <div className="col-md-3 mt-4 ">
                                                <button type="button" className="btn btn-success">Add morefiled</button>
                                            </div>
                                        </div>
                                        {/* dynamic dlr response  store start */}
                                        {/* <div className="row">
                                            {hhtpCollection.apiRespo.map((item, index) => {
                                                return (
                                                    <div className="col-12 mt-2" key={index}>
                                                        <h5 className="text-warning">Response {index}</h5>
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <label htmlFor="succWord" className="mg-b-10">Success word</label>
                                                                <input type="text" value={item.succWord} className="form-control " name="succWord" id="succWord" />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor="errCode" className="mg-b-10"> Error Code </label>
                                                                <input type="errCode" value={item.errCode} className="form-control " name="errCode" id="errCode" />
                                                            </div>
                                                            <div className="col-md-4 mt-4">
                                                                <button type="button" className="btn btn-sm btn-danger">Remove</button>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <label htmlFor="param" className="mg-b-10">Message Id Parameter</label>
                                                                <input data-parent="msgId" value={item.msgId.param} type="text" className="form-control " name="param" id="param" />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor="spat" className="mg-b-10"> Message Start Pattern</label>
                                                                <input data-parent="msgId" value={item.msgId.spat} type="text" className="form-control " name="spat" id="spat" />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor="epat" className="mg-b-10"> Message End Pattern</label>
                                                                <input data-parent="msgId" value={item.msgId.epat} type="text" className="form-control " name="epat" id="epat" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <label htmlFor="param" className="mg-b-10">Status Id Parameter</label>
                                                                <input type="text" value={item.stat.param} data-parent="stat" className="form-control " name="param" id="param" />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor="spat" className="mg-b-10"> Status Start Pattern</label>
                                                                <input type="text" value={item.stat.spat} data-parent="stat" className="form-control " name="spat" id="spat" />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor="epat" className="mg-b-10"> Status End Pattern</label>
                                                                <input type="text" value={item.stat.epat} data-parent="stat" className="form-control " name="epat" id="epat" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <label htmlFor="param" className="mg-b-10">Error Id Parameter</label>
                                                                <input type="text" value={item.err.param} data-parent="err" className="form-control " name="param" id="param" />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor="spat" className="mg-b-10">Error Start Pattern</label>
                                                                <input type="text" value={item.err.spat} className="form-control " data-parent="err" name="spat" id="spat" />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor="epat" className="mg-b-10"> Error End Pattern</label>
                                                                <input type="text" value={item.err.epat} data-parent="err" className="form-control " name="epat" id="epat" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div> */}
                                        {/* dynamic dlr response store end */}
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label htmlFor="name">Name</label>
                                                <input type="text" className="form-control " name="name" id="name" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="name">Company Name</label>
                                                <input type="text" className="form-control " name="companyName" id="name" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="name">Email</label>
                                                <input type="email" className="form-control " name="email" id="name" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="name">Support Number</label>
                                                <input type="number" className="form-control " name="supportNo" id="name" />
                                                <span className="text-danger error"></span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3 mt-4 float-end">
                                                <button type="submit" className="   btn btn-info bg-primary border-secondary"  >Submit</button>
                                            </div>
                                            <div className="col-md-3 mt-4 float-start">
                                                <button onClick={e => { submit(e) }} className="btn btn-success">Add morefiled</button>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )

}