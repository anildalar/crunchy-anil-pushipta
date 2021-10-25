import React, { useEffect, useState } from 'react'
import { url, fetchOption, Toast } from '../../url';
//import Home from '../pages/Home';

import $ from 'jquery';
import swal from 'sweetalert';
import { useTranslation } from 'react-i18next';
import Layout from '../../component/Layout';
import BreadCrumb from '../../component/UI/BreadCrumb';
import { ToastContainer, toast } from 'react-toastify';
/**
* @author
* @function Createuser
**/

const Createuser = (props) => {
    const { t } = useTranslation();

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
                ...fetchOption
            })
                .then(response => response.json())
                .then(data => {
                    setData(data.data);
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
                    ...fetchOption,
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
                ...fetchOption,
                body: JSON.stringify(subdata)
            })
                .then(response => response.json())
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
                })
                .catch((error) => {
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
                                    <h5 className="m-2 text-white">SMPP Connection</h5>
                                </div>
                                <form  id="myForm" onSubmit={submit} >
                                    <div className="card-body bg-white">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label htmlFor="masprotypeld">Route Type&nbsp;<sup className="text-danger">*</sup></label>
                                                <select onChange={handleChange} name="routeType" id="masprotypeld" className="form-select " required="required">
                                                    <option value="">Select Route Type</option>
                                                    {
                                                        mastProd.map((c) => {
                                                            return <option value={c.id} key={c.id}>{c.title}</option>
                                                        })
                                                    }
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="masprold">Route&nbsp;<sup className="text-danger">*</sup></label>
                                                <select id="masprold" name="route" onChange={datasubmit} className="form-select  route" required="required">
                                                    <option value="" >Select One</option>
                                                    {mroute.map((items, index) => {
                                                        return items.map((b) => {
                                                            return <option value={b.id} key={b.id}>{b.title}</option>
                                                        })
                                                    })}
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3 mg-t-20 mg-lg-t-0">
                                                <label htmlFor="SSI_type" className="mg-b-10">SSL Type&nbsp;<sup className="text-danger">*</sup></label>

                                                <select onChange={datasubmit} id="SSI_type" className="form-select " name="sslType" required="required">
                                                    <option value="" >Select One</option>
                                                    <option value="0" >SSLv2</option>
                                                    <option value="1" > SSLv3</option>
                                                    <option value="2" >SSLv23</option>
                                                    <option value="3" >TLSV1 </option>
                                                    <option value="-1" >No-secure </option>
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3 mg-t-20 mg-lg-t-0">
                                                <label htmlFor="payload">Payload&nbsp;<sup className="text-danger">*</sup></label> {/* message on payload */}
                                                <select onChange={datasubmit} id="payload" className="form-select " name="isPayLoad" required>
                                                    <option value=""> select one</option>
                                                    <option value="0" >No</option>
                                                    <option value="1" >Yes </option>
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3 mg-t-20 mg-lg-t-0">
                                                <label htmlFor="bind_type">Bind Type&nbsp;<sup className="text-danger">*</sup></label>

                                                <select onChange={datasubmit} name="bindType" id="bind_type" className="form-select " required >
                                                    <option value=""> select one</option>
                                                    <option value="TR">TRANSCIVER</option>
                                                    <option value="TX">TRANSMITTER</option>
                                                    <option value="RX">RECIEVER</option>
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="hostname" >Host Name &nbsp;<sup className="text-danger">*</sup></label>
                                                <input onChange={datasubmit} className="form-control  readonly" type="text" name="hostName" id="hostname" required="required" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="port">Port&nbsp;<sup className="text-danger">*</sup></label>
                                                <input onChange={datasubmit} className="form-control  readonly" type="number" name="port" id="port" required />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="userName">User Name&nbsp;<sup className="text-danger">*</sup></label>
                                                <input onChange={datasubmit} type="text" className="form-control  " name="userName" id="userName" placeholder="Enter userName" required />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="password">Password&nbsp;<sup className="text-danger">*</sup></label>
                                                <input onChange={datasubmit} type="text" className="form-control " name="password" id="password" placeholder="Enter password" required />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="enqInterTime">Enqure Interval Time</label>
                                                <input onChange={datasubmit} type="number" min="0" className="form-control " name="enqInterTime" id="enqInterTime" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="allowconn">Allow Connection</label>
                                                <input onChange={datasubmit} type="number" min="0" className="form-control " name="allowConn" id="allowconn" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="addrTON">AddrTON</label>
                                                <input onChange={datasubmit} type="text" className="form-control " name="addrTON" id="addrTON" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="addrNPI">AddrNPI</label>
                                                <input onChange={datasubmit} type="text" className="form-control " name="addrNPI" id="addrNPI" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="addrRange">AddrRange</label>
                                                <input onChange={datasubmit} type="text" className="form-control " name="addrRange" id="addrRange" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="priority">Priority</label>
                                                <input onChange={datasubmit} type="text" className="form-control " name="priority" id="priority" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3 mg-t-20 mg-lg-t-0">
                                                <p className="mg-b-10">Loglevel&nbsp;<sup className="text-danger">*</sup></p> {/* message on payload */}
                                                <select onChange={datasubmit} className="form-select " name="logLevel" required >
                                                    <option value=""> select one</option>
                                                    <option value="0" >debug </option>
                                                    <option value="1" > info</option>
                                                    <option value="2" > warning</option>
                                                    <option value="3" > error</option>
                                                    <option value="4" >painik</option>
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="systype">Systype</label>
                                                <input onChange={datasubmit} type="text" className="form-control " name="sysType" id="systype" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="dsc">Data Coding schema</label>
                                                <input onChange={datasubmit} type="text" className="form-control " name="dsc" id="dsc" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="smscapcity">Throughtput</label>
                                                <input onChange={datasubmit} type="text" className="form-control " name="smsCapacity" id="smscapcity" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="windowSize">Window Size</label>
                                                <input onChange={datasubmit} type="text" className="form-control " name="windowSize" id="windowSize" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="openTime">Open Time</label>
                                                <input onChange={datasubmit} type="time" className="form-control " name="openTime" id="openTime" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="closeTime">Close Time</label>
                                                <input onChange={datasubmit} type="time" className="form-control " name="closeTime" id="closeTime" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>

                                            <div className="col-md-3 mg-t-20 mg-lg-t-0">
                                                <p className="mg-b-10">Active</p> {/* message on payload */}
                                                <select onChange={datasubmit} className="form-select  " name="active" >
                                                    <option value=""> select one</option>
                                                    <option value="0" >Active </option>
                                                    <option value="1" >Inactive</option>
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label htmlFor="name">Name</label>
                                                <input onChange={datasubmit} type="text" className="form-control " name="name" id="name" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="name">Company Name</label>
                                                <input onChange={datasubmit} type="text" className="form-control " name="companyName" id="name" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="name">Email</label>
                                                <input onChange={datasubmit} type="email" className="form-control " name="email" id="name" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="name">Support Number</label>
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
export default Createuser;