import React, { useEffect, useState } from 'react'
import { fetchOption, Toast } from '../../url';
//import Home from '../pages/Home';
import { url } from '../../helpers/helper';
import $ from 'jquery';
import swal from 'sweetalert';
import { useTranslation } from 'react-i18next';
import Layout from '../../component/Layout';

import { ToastContainer, toast } from 'react-toastify';
import { BreadCrumb } from '../../component/UI/BreadCrumb';
import HelperHook from '../../custHook/HelperHook'
import Unauthorized  from '../../component/Unauthorized';
/**
* @author
* @function VendorCreateSmpp
**/

const VendorCreateSmpp = (props) => {
    const { t } = useTranslation();
    const helper=HelperHook();
    
    const [mastProd, setData] = useState([]);
    const [mroute, setmRoute] = useState([]);
    const [subdata, setsubData] = useState({
        "routeType": "",
        "route": "",
        "sslType": "",
        "isPayLoad": "",
        "bindType": "",
        "hostName": "",
        "port": "",
        "userName": "",
        "password": "",
        "enqInterTime": "",
        "allowConn": "",
        "addrTON": "",
        "addrNPI": "",
        "addrRange": "",
        "priority": "",
        "logLevel": "",
        "sysType": "",
        "dsc": "",
        "smsCapacity": "",
        "windowSize": "",
        "openTime": "",
        "closeTime": "",
        "active": "",
        "name": "",
        "companyName": "",
        "email": "",
        "supportNo": ""
    })
    useEffect(() => {
        try {
            fetch(url + "/master/route/getRouteType", {
                ...helper.fetchOption
            }).then(response => response.json())
            .then(data => {
                if(data.status==200) {
                    setData(data.data);
                    console.log("hello",mastProd)
                    console.log(data.data)
                }
            }).catch((error) => {
                console.error('Error:', error);
            })
        }
        catch (err) {
            toast.error("sever error",
                {
                    ...Toast,
                    position: "top-right"
                });
        }

    }, [])
    let handleChange = (e) => {
        //$('').action()
        try {
            $('.route').html('<option value="">Select Route Type</option>');
            if (e.target.value != '') {
                setsubData({ ...subdata, [e.target.name]: e.target.value });
                setmRoute([]); //initially emtpy   
                fetch(url + "/master/route/routesByType", {
                    ...helper.fetchOption,
                    body: JSON.stringify({ routeType: e.target.value })
                }).then(response => response.json())
                    .then(d => {
                        console.log('sms antim Success:', d.data);
                        setmRoute(result => [...result, d.data]);//
                    }).catch((error) => {
                        console.error('Error:', error);
                    });
            }
        } catch (err) {
            toast.error("sever error",
                {
                    ...Toast,
                    position: "top-right"
                });
        }
    };
    const datasubmit = (e) => {
        setsubData({ ...subdata, [e.target.name]: e.target.value });
    }
    const submit = (e) => {
        $('[name]').css('border', '1px solid gray').siblings('.text-danger').html('');
        e.preventDefault()
        fetch(url + "/vendor/conn/create/smpp", {
            ...helper.fetchOption,
            body: JSON.stringify(subdata)
        }).then(response => response.json())
        .then(data => {
            if (data.errors) {
                toast.error("data error",
                    {
                        ...Toast,
                        position: "top-right"
                    });
                data.errors.forEach(function (arrayItem) {
                    //console.log(arrayItem);
                    console.log(arrayItem.param);
                    //$(selector).action()
                    $('[name=' + arrayItem.param + ']').css("border", "1px solid red").siblings('span.text-danger').html(arrayItem.msg);
                });
            } else {
                //Sweet alrt
                console.log('Success:', data);
                swal("Success!", t('SMPP Conenction created Successfully!'), "success");
                document.getElementById("myForm").reset();
            }
        }).catch((error) => {
            console.error('Error:', error);
        });
    }
    return (
        <Layout>
            <div className="main-content horizontal-content">
                <div className="container">
                    <BreadCrumb></BreadCrumb>
                    <div className="row">
                        <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
                            {/* start next time hare  */}
                            <div classname="card ">
                                <div className="card-header bg-info px-2 py-1">
                                    <h5 className="m-2 text-white">{t("SMPP Connection")}</h5>
                                </div>
                                <form  id="myForm" onSubmit={submit} >
                                    <div className="card-body bg-white">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label htmlFor="masprotypeld">{t("Route Type")}&nbsp;<sup className="text-danger">*</sup></label>
                                                <select onChange={handleChange} name="routeType" id="masprotypeld" className="form-select " required="required">
                                                    <option value="">{t("Select Route Type")}</option>
                                                    {
                                                        mastProd.map((c) => {
                                                            return <option value={c.id} key={c.id}>{c.title}</option>
                                                        })
                                                    }
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="masprold">{t("Route")}&nbsp;<sup className="text-danger">*</sup></label>
                                                <select id="masprold" name="route" onChange={datasubmit} className="form-select  route" required="required">
                                                    <option value="" >{t("Select One")}</option>
                                                    {mroute.map((items) => {
                                                        return items.map((b) => {
                                                            return <option value={b.id} key={b.id}>{b.title}</option>
                                                        })
                                                    })}
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3 mg-t-20 mg-lg-t-0">
                                                <label htmlFor="SSI_type" className="mg-b-10">{t("SSL Type")}&nbsp;<sup className="text-danger">*</sup></label>

                                                <select onChange={datasubmit} id="SSI_type" className="form-select " name="sslType" required="required">
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
                                                <select onChange={datasubmit} id="payload" className="form-select " name="isPayLoad" required>
                                                    <option value="">{t("select one")}</option>
                                                    <option value="0">{t("No")}</option>
                                                    <option value="1">{t("Yes")}</option>
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3 mg-t-20 mg-lg-t-0">
                                                <label htmlFor="bind_type">{t("Bind Type")}&nbsp;<sup className="text-danger">*</sup></label>

                                                <select onChange={datasubmit} name="bindType" id="bind_type" className="form-select " required >
                                                    <option value="">{t("select one")}</option>
                                                    <option value="TR">{t("TRANSCIVER")}</option>
                                                    <option value="TX">{t("TRANSMITTER")}</option>
                                                    <option value="RX">{t("RECIEVER")}</option>
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="hostname" >{t("Host Name")}&nbsp;<sup className="text-danger">*</sup></label>
                                                <input onChange={datasubmit} className="form-control  readonly" type="text" name="hostName" id="hostname" required="required" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="port">{t("Port")}&nbsp;<sup className="text-danger">*</sup></label>
                                                <input onChange={datasubmit} className="form-control  readonly" type="number" name="port" id="port" required />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="userName">{t("User Name")}&nbsp;<sup className="text-danger">*</sup></label>
                                                <input onChange={datasubmit} type="text" className="form-control  " name="userName" id="userName" placeholder="Enter userName" required />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="password">{t("Password")}&nbsp;<sup className="text-danger">*</sup></label>
                                                <input onChange={datasubmit} type="text" className="form-control " name="password" id="password" placeholder="Enter password" required />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="enqInterTime">{t("Enqure Interval Time")}</label>
                                                <input onChange={datasubmit} type="number" min="0" className="form-control " name="enqInterTime" id="enqInterTime" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="allowconn">{t("Allow Connection")}</label>
                                                <input onChange={datasubmit} type="number" min="0" className="form-control " name="allowConn" id="allowconn" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="addrTON">{t("AddrTON")}</label>
                                                <input onChange={datasubmit} type="text" className="form-control " name="addrTON" id="addrTON" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="addrNPI">{t("AddrNPI")}</label>
                                                <input onChange={datasubmit} type="text" className="form-control " name="addrNPI" id="addrNPI" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="addrRange">{t("AddrRange")}</label>
                                                <input onChange={datasubmit} type="text" className="form-control " name="addrRange" id="addrRange" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="priority">{t("Priority")}</label>
                                                <input onChange={datasubmit} type="text" className="form-control " name="priority" id="priority" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3 mg-t-20 mg-lg-t-0">
                                                <p className="mg-b-10">{t("Loglevel")}&nbsp;<sup className="text-danger">*</sup></p> {/* message on payload */}
                                                <select onChange={datasubmit} className="form-select " name="logLevel" required >
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
                                                <input onChange={datasubmit} type="text" className="form-control " name="sysType" id="systype" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="dsc">{t("Data Coding schema")}</label>
                                                <input onChange={datasubmit} type="text" className="form-control " name="dsc" id="dsc" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="smscapcity">{t("Throughtput")}</label>
                                                <input onChange={datasubmit} type="text" className="form-control " name="smsCapacity" id="smscapcity" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="windowSize">{t("Window Size")}</label>
                                                <input onChange={datasubmit} type="text" className="form-control " name="windowSize" id="windowSize" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="openTime">{t("Open Time")}</label>
                                                <input onChange={datasubmit} type="time" className="form-control " name="openTime" id="openTime" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="closeTime">{t("Close Time")}</label>
                                                <input onChange={datasubmit} type="time" className="form-control " name="closeTime" id="closeTime" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>

                                            <div className="col-md-3 mg-t-20 mg-lg-t-0">
                                                <p className="mg-b-10">Active</p> {/* message on payload */}
                                                <select onChange={datasubmit} className="form-select  " name="active" >
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
                                                <input onChange={datasubmit} type="text" className="form-control " name="name" id="name" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="name">{t("Company Name")}</label>
                                                <input onChange={datasubmit} type="text" className="form-control " name="companyName" id="name" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="name">{t("Email")}</label>
                                                <input onChange={datasubmit} type="email" className="form-control " name="email" id="name" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="name">{t("Support Number")}</label>
                                                <input onChange={datasubmit} type="number" className="form-control " name="supportNo" id="name" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3 mt-4 offset-9">
                                                <input type="submit" className="text-white form-control  btn btn-info bg-primary border-secondary" value="Submit" />
                                            </div>
                                        </div>
                                    </div>
                                    <ToastContainer />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )

}
export default VendorCreateSmpp;