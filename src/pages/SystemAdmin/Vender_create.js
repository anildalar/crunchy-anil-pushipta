import React, { useEffect, useState } from 'react'
import { fetchOption, url } from '../../url';

import Header from '../../component/Header'
import $, { event } from 'jquery';
import { useTranslation } from 'react-i18next';
import swal from 'sweetalert';
// import { url } from "../url";
function Vender_create() {
    const { t } = useTranslation();
    const [mastProd, setData] = useState([]);
    const [mroute, setmRoute] = useState([]);
    const [formValues, setFormValues] = useState([{ custLabel_1: "", custField_1: "" }])
    const [fields, setfields] = useState([{ fieldname: "", fieldvalue: "" }])
    const [hhtpCollection, setHttpCollection] = useState({
        "routeType": "",
        "route": "",
        "sslType": "",
        "addrTON": "",
        "addrNPI": "",
        "addrRange": "",
        "priority": "",
        "sysType": "",
        "dsc": "",
        "smsCapacity": "",
        "openTime": "",
        "closeTime": "",
        "active": "",
        "name": "",
        "companyName": "",
        "email": "",
        "supportNo": "",
        ////// api data store start 
        "apiMeth": "",
        "apiParType": "",
        "apiRespoType": "",
        "apiAuth": "",
        "apiAuthData": {
            "userName": "",
            "password": "",
            "BearerToken": ""
        },
        "apidlrType": "",
        "apiRespo": [],


    })
    const [apiData, setVendorHttp] = useState({ // camelCase
        "sender": "",
        "from": "",
        "msg": "",
        "flash": "",
        "flash_obj": {
            "no": "",
            "yes": "",
            'def': "",
        },
        "uc": "",
        "uc_obj": {
            "no": "",
            "yes": "",
            'def': "",
        },
    });
    const [apidlrData, setApidlrData] = useState({
        "url": "",
        "method": "",
        "paramType": "",
        "fields": {}
    })
    const apiResponseDami = {
        "succWord": "",
        "errCode": "",
        "msgId": {
            "param": "",
            "spat": "",
            "epat": ""
        },
        "stat": {
            "param": "",
            "spat": "",
            "epat": ""
        },
        "err": {
            "param": "",
            "spat": "",
            "epat": ""
        }
    };
    //api fix data parameter
    const handleDesAdd = (e) => {
        e.preventDefault();
        if ((e.target.name == 'yes') || (e.target.name == 'no') || (e.target.name == 'def')) {
            let parent = e.currentTarget.dataset.parent;
            let cut = apiData[parent];
            setVendorHttp({
                ...apiData,
                [parent]: {
                    ...cut,
                    [e.target.name]: e.target.value
                }
            })
        } else {
            const value = "{{" + e.target.value + "}}"
            setVendorHttp({ ...apiData, [e.target.name]: value });
            //console.log(apiData);
        }
    }
    useEffect(() => {
        // localStorage.setItem({ "key": hhtpCollection })
        fetch(url + "/master/route/getRouteType", {
            ...fetchOption
        }).then(response => response.json())
            .then(data => {
                setData(data.data);
            }).catch((error) => {
                console.error('Error:', error);
            });
    }, [])
    const handleChange = (e) => {
        $('.route').html('<option value="">' + t('Select Route Type') + '</option>');
        if (e.target.value != '') {
            setHttpCollection({ ...hhtpCollection, [e.target.name]: e.target.value })
            setmRoute([]); //initially emtpy   
            fetch(url + "/master/route/routesByType", {
                ...fetchOption,
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
    //API Auth eventhandl
    const onchange = (e) => {
        e.preventDefault();
        switch (parseInt(e.target.value)) {
            case 1:
                $(".username").removeClass("d-none")
                $(".password").removeClass("d-none")
                $(".bearer_token").addClass("d-none")
                setHttpCollection({ ...hhtpCollection, [e.target.name]: e.target.value })
                break;
            case 2:
                $(".username").addClass("d-none")
                $(".password").addClass("d-none")
                $(".bearer_token").removeClass("d-none")
                setHttpCollection({ ...hhtpCollection, [e.target.name]: e.target.value })
                break;
            default:
                $(".bearer_token").addClass("d-none")
                $(".username").addClass("d-none")
                $(".password").addClass("d-none");
                setHttpCollection({ ...hhtpCollection, [e.target.name]: e.target.value })
        }
    }

    //Dynamic field
    let handleChangew = (i, e) => {
        e.preventDefault();
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }
    /// dynamic apidlrData
    const handleChangew2 = (i, e) => {
        e.preventDefault();
        let newapidata = [...fields];
        newapidata[i][e.target.name] = e.target.value;
        setfields(newapidata)
    }
    let handleHttpColl = (e) => {
        // console.log(e.target.name,":",e.target.value);
        setHttpCollection({ ...hhtpCollection, [e.target.name]: e.target.value });
    }
    //Dynamic field
    let addFormFields = (e) => {
        e.preventDefault();
        setFormValues([...formValues, { custLabel_1: "", custField_1: "" }])
    }
    //apidlrData
    const addfileddrdata = (e) => {
        e.preventDefault();
        setfields([...fields, { fieldname: "", fieldvalue: "" }])
    }
    //console.log(vendorHttp);
    let removeFormFields = (i, e) => {
        e.preventDefault();
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    //apidlrData
    let removeFormFields2 = (i, e) => {
        e.preventDefault();
        let newFormValues = [...fields];
        newFormValues.splice(i, 1);
        setfields(newFormValues)
    }
    // add api dlr response object to calletion
    const addApiDlrResObj = (e) => {
        //apiResponseDami
        let coll = hhtpCollection.apiRespo;
        coll.push(apiResponseDami);
        setHttpCollection({ ...hhtpCollection, 'apiRespo': coll });
    }
    const removeApiDlrResObj = (e, index) => {
        let coll = [...hhtpCollection.apiRespo];
        coll.splice(index, 1);
        setHttpCollection({ ...hhtpCollection, 'apiRespo': coll });
    }
    const handleApiDlrResObjValue = (e, index) => {
        let coll = [...hhtpCollection.apiRespo];
        if ((e.target.name == 'param') || (e.target.name == 'spat') || (e.target.name == 'epat')) {
            let parent = e.currentTarget.dataset.parent;
            coll[index][parent][e.target.name] = e.target.value;
        } else {
            coll[index][e.target.name] = e.target.value;
        }
        setHttpCollection({ ...hhtpCollection, 'apiRespo': coll });
    };
    const handlaApiauthadta = (e) => {
        e.preventDefault();
        setHttpCollection({
            ...hhtpCollection, "apiAuthData": {
                ...hhtpCollection.apiAuthData,
                [e.target.name]: e.target.value
            }
        });
    }
    const handleapidlr = (e) => {
        e.preventDefault();
        setApidlrData({ ...apidlrData, [e.target.name]: e.target.value })
    }
    const submit = (e) => {
        e.preventDefault();
        $('[name]').css('border', '1px solid gray').siblings('.text-danger').html('');
        let xfield = {}
        //apidata collection start
        formValues.forEach(element => {
            xfield = { ...xfield, [element.custLabel_1]: element.custField_1 }
        });
        setVendorHttp({ ...apiData, ...xfield });
        //apidata collection end
        /** api dlr data dynamic field colletion start */
        let yfiedl = {};
        fields.forEach((e) => {
            setHttpCollection({ ...hhtpCollection, apidlrData, apiData });
            yfiedl = { ...yfiedl, [e.fieldname]: "{{" + e.fieldvalue + "}}" }
        });
        setApidlrData({ ...apidlrData, "fields": yfiedl })
        setHttpCollection({ ...hhtpCollection, apidlrData, apiData });
        /** api dlr data dynamic field colletion end */

        //api CALLING
        fetch(url + "/vendor/conn/create/http", {
            ...fetchOption,
            body: JSON.stringify(hhtpCollection)
        }).then(response => response.json())
            .then(data => {
                // setData(data.data);
                //console.log(data)

                if (data.errors) {
                    console.log('Error:', data.errors);
                    data.errors.forEach(function (arrayItem) {
                        console.log("hello" + arrayItem);
                        //console.log(arrayItem.param);
                        //$(selector).action()
                        $('[name=' + arrayItem.param.split(".").pop() + ']').css("border", "1px solid red").siblings('span.text-danger').html(arrayItem.msg);
                    });
                } else {
                    swal("Vendor smpp connecton successfully stored.");
                }
            }).catch((error) => {
                console.error('Error antim:', error);
            });


    }
    return (
        <React.Fragment>
            <Header />
            <div className="main-content horizontal-content">
                <div className="container">
                    <div className="breadcrumb-header justify-content-between">
                        <div className="my-auto">
                            <div className="d-flex">
                                <h4 className="content-title mb-0 my-auto">Forms</h4><span className="text-muted mt-1 tx-13 ms-2 mb-0">/ Form-Elements</span>
                            </div>
                        </div>
                        <div className="d-flex my-xl-auto right-content">
                            <div className="pe-1  mb-xl-0">
                                <button type="button" className="btn btn-info btn-icon me-2 btn-b"><i className="mdi mdi-filter-variant" /></button>
                            </div>
                            <div className="pe-1  mb-xl-0">
                                <button type="button" className="btn btn-danger btn-icon me-2"><i className="mdi mdi-star" /></button>
                            </div>
                            <div className="mb-xl-0">
                                <button type="button" className="btn btn-warning  btn-icon me-2"><i className="mdi mdi-refresh" /></button>
                            </div>
                            <div className="mb-xl-0">
                                <div className="btn-group dropdown">
                                    <button type="button" className="btn btn-primary">14 Aug 2019</button>
                                    <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" id="dropdownMenuDate" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <span className="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuDate" x-placement="bottom-end">
                                        <a className="dropdown-item" href="#">2015</a>
                                        <a className="dropdown-item" href="#">2016</a>
                                        <a className="dropdown-item" href="#">2017</a>
                                        <a className="dropdown-item" href="#">2018</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
                            {/* start next time hare  */}
                            <div className="card ">
                                <div className="card-header bg-info px-2 py-1">
                                    <h5 className="m-2 text-white">SMPP Connection</h5>
                                </div>
                                <form onSubmit={submit}>
                                    <div className="card-body bg-white">
                                        <div className="row">

                                            <div className="col-md-3">
                                                <label htmlFor="masprotypeld">Route Type&nbsp; <sup className="text-danger">*</sup></label>
                                                <select onChange={handleChange} name="routeType" id="masprotypeld" className="form-select form-select-sm" required >
                                                    <option value="">Select Route Type</option>
                                                    {mastProd.map((d) => {
                                                        return <option value={d.id} key={d.id}>{d.title}</option>
                                                    })}
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="masprold">Route&nbsp; <sup className="text-danger">*</sup></label>
                                                <select id="masprold" onChange={handleHttpColl} name="route" className="form-select form-select-sm route" required>
                                                    <option value="" >Select One</option>

                                                    {mroute.map((items, index) => {
                                                        return items.map((b) => {
                                                            return <option value={b.id} key={b.id}>{b.title}</option>
                                                        })
                                                    })}

                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="sslType" className="mg-b-10">SSL Type&nbsp; <sup className="text-danger">*</sup></label>
                                                <select id="sslType" onChange={handleHttpColl} className="form-select form-select-sm" name="sslType" required>
                                                    <option value=" ">Select One</option>
                                                    <option value="0" >SSLv2</option>
                                                    <option value="1" > SSLv3</option>
                                                    <option value="2" >SSLv23</option>
                                                    <option value="3" >TLSV1 </option>
                                                    <option value="-1" >No-secure </option>
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="addrTON">AddrTON</label>
                                                <input onBlur={handleHttpColl} type="text" className="form-control form-control-sm" name="addrTON" id="addrTON" placeholder="" />
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="addrNPI">AddrNPI</label>
                                                <input onBlur={handleHttpColl} type="text" className="form-control form-control-sm" name="addrNPI" id="addrNPI" placeholder="" />
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="addrRange">AddrRange</label>
                                                <input onBlur={handleHttpColl} type="text" className="form-control form-control-sm" name="addrRange" id="addrRange" placeholder="" />
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="priority">Priority</label>
                                                <input onBlur={handleHttpColl} type="text" className="form-control form-control-sm" name="priority" id="priority" placeholder="" />
                                            </div>
                                            <div className="col-md-3 mg-t-20 mg-lg-t-0">
                                                <p className="mg-b-10">Loglevel&nbsp; <sup className="text-danger">*</sup></p> {/* message on payload */}
                                                <select onChange={handleHttpColl} className="form-select form-select-sm" name="logLevel"  >
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
                                                <input onBlur={handleHttpColl} type="text" className="form-control form-control-sm" name="sysType" id="systype" placeholder="" />

                                            </div>

                                            <div className="col-md-3">
                                                <label htmlFor="dsc">Data Coding schema</label>
                                                <input onBlur={handleHttpColl} type="text" className="form-control form-control-sm" name="dsc" id="dsc" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>

                                            <div className="col-md-3">
                                                <label htmlFor="smscapcity">Throughtput</label>
                                                <input onBlur={handleHttpColl} type="text" className="form-control form-control-sm" name="smsCapacity" id="smscapcity" placeholder="" />

                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="openTime">Open Time</label>
                                                <input onBlur={handleHttpColl} type="time" className="form-control form-control-sm" name="openTime" id="openTime" placeholder="" />

                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="closeTime">Close Time</label>
                                                <input onBlur={handleHttpColl} type="time" className="form-control form-control-sm" name="closeTime" id="closeTime" placeholder="" />

                                            </div>
                                            <div className="col-md-3 mg-t-20 mg-lg-t-0">
                                                <label className="mg-b-10">Active</label> {/* message on payload */}
                                                <select onChange={handleHttpColl} className="form-select form-select-sm " name="active" >
                                                    <option value=""> select one</option>
                                                    <option value="0" >Active </option>
                                                    <option value="1" >Inactive</option>
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3 mg-t-20 mg-lg-t-0">
                                                <label htmlFor="apiPushUrl">API Push Url</label>
                                                <input onBlur={handleHttpColl} type="text" name="apiPushUrl" id="apiPushUrl" className="form-control form-control-sm" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3 mg-t-20 mg-lg-t-0">
                                                <p className="mg-b-10">API Method&nbsp; <sup className="text-danger">*</sup></p> {/* message on payload */}
                                                <select onChange={handleHttpColl} className="form-select form-select-sm" name="apiMeth"  >
                                                    <option value=""> none</option>
                                                    <option value="0" >POST</option>
                                                    <option value="1" >GET</option>
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3 mg-t-20 mg-lg-t-0">
                                                <p className="mg-b-10">API Parameter&nbsp; <sup className="text-danger">*</sup></p> {/* message on payload */}
                                                <select onChange={handleHttpColl} className="form-select form-select-sm" name="apiParType"  >
                                                    <option value=""> none</option>
                                                    <option value="0"> Quert</option>
                                                    <option value="1">Data</option>
                                                    <option value="2">JSON</option>
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3 mg-t-20 mg-lg-t-0">
                                                <p className="mg-b-10">API Auth&nbsp; <sup className="text-danger">*</sup></p> {/* message on payload */}
                                                <select onChange={onchange} className="form-select form-select-sm apiauth" name="apiAuth"  >
                                                    <option value="0">None</option>
                                                    <option value="1">Basic</option>
                                                    <option value="2">Bearer Token</option>
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                        </div>
                                        <div id="basicRow" className="row row-sm">
                                            <div className="col-sm-6 col-md-4 d-none bearer_token">
                                                <div className="form-group">
                                                    <label htmlFor="BearerToken">Bearer Token</label>
                                                    <input onBlur={handlaApiauthadta} type="text" name="BearerToken" id="BearerToken" className="form-control form-control-sm" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3 d-none username ">
                                                <div className="form-group ">
                                                    <label htmlFor="username">User Name</label>
                                                    <input onBlur={handlaApiauthadta} type="text" name="userName" id="username" className="form-control form-control-sm basic_token" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3 d-none password">
                                                <div className="form-group">
                                                    <label htmlFor="password">Password</label>
                                                    <input onBlur={handlaApiauthadta} type="text" name="password" id="password" className="form-control form-control-sm basic_token" />
                                                </div>
                                            </div>
                                        </div>
                                        <h4 className="text-danger">api fix data parameter</h4>
                                        <div className="row mt-1">
                                            <div className="col-sm-6 col-md-3">
                                                <div className="form-group">
                                                    <label htmlFor="apiData.sender">To&nbsp; <sup className="text-danger">*</sup></label>
                                                    <p>Use for destination address.</p>
                                                    <input onChange={handleDesAdd} type="text" name="sender" id="sender" className="form-control form-control-sm" />
                                                    <span className="text-danger error"></span>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3">
                                                <div className="form-group">
                                                    <label htmlFor="from">From&nbsp; <sup className="text-danger">*</sup></label>
                                                    <p>Use for source address or sender id.</p>
                                                    <input onChange={handleDesAdd} type="text" name="from" id="from" className="form-control form-control-sm" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-3">
                                                <div className="form-group">
                                                    <label htmlFor="msg">MSG&nbsp; <sup className="text-danger">*</sup></label>
                                                    <p>Use for content (message).</p>
                                                    <input onChange={handleDesAdd} type="text" name="msg" id="msg" className="form-control form-control-sm ps ps--theme_default" data-ps-id="e3819da9-57e8-e0c6-a66f-24315f5adce4" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 col-md-3">
                                                <div className="form-group">
                                                    <label htmlFor="flash">flash&nbsp; <sup className="text-danger">*</sup></label>
                                                    <p>Use for flash message.</p>
                                                    <input onBlur={handleDesAdd} type="text" name="flash" id="flash" className="form-control form-control-sm" />
                                                </div>
                                            </div>

                                            <div className="col-sm-6 col-md-8">

                                                <div className="row pt-2">
                                                    <h4>Flash value</h4>
                                                    <div className="col-sm-4">
                                                        <div className="form-group">
                                                            <label htmlFor="flash_yes">Yes</label>
                                                            <input type="text" onBlur={handleDesAdd} data-parent="flash_obj" name="yes" id="flash_yes" className="form-control-sm form-control" />
                                                        </div>
                                                        <span className="text-danger error"></span>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="form-group">
                                                            <label htmlFor="flash_no">No</label>
                                                            <input type="text" onBlur={handleDesAdd} data-parent="flash_obj" name="no" id="flash_no" className="form-control-sm form-control" />
                                                        </div>
                                                        <span className="text-danger error"></span>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="form-group">
                                                            <label htmlFor="flash_default">flash default value</label>
                                                            <input type="text" onBlur={handleDesAdd} data-parent="flash_obj" name="def" id="flash_default" className="form-control-sm form-control" />
                                                        </div>
                                                        <span className="text-danger error"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 col-md-4">
                                                <div className="form-group">
                                                    <label htmlFor="unicode">Unicoded&nbsp; <sup className="text-danger">*</sup></label>
                                                    <p>Use for unicode message.</p>
                                                    <input onBlur={handleDesAdd} type="text" name="uc" id="unicode" className="form-control form-control-sm" />
                                                </div>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-sm-6 col-md-8 mt-4">
                                                <div className="row mt-1">
                                                    <div className="col-sm-4">
                                                        <div className="form-group">
                                                            <label htmlFor="uc_yes">Yes</label>
                                                            <input onBlur={handleDesAdd} type="text" data-parent="uc_obj" name="yes" id="uc_yes" className="form-control-sm form-control" />
                                                        </div>
                                                        <span className="text-danger error"></span>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="form-group">
                                                            <label htmlFor="uc_no">No</label>
                                                            <input onBlur={handleDesAdd} type="text" data-parent="uc_obj" name="no" id="uc_no" className="form-control-sm form-control" />
                                                        </div>
                                                        <span className="text-danger error"></span>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="form-group">
                                                            <label htmlFor="uc_default">Unicode defaultv value</label>
                                                            <input onBlur={handleDesAdd} type="text" data-parent="uc_obj" name="def" id="uc_default" className="form-control-sm form-control" />
                                                        </div>
                                                        <span className="text-danger error"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row custfieldcol a_custfieldcol ">
                                            <h4 className="text-danger">api custom data parameter</h4>
                                            {formValues.map((element, index) => {
                                                // console.log('ok', element);
                                               
                                                    return (
                                                        <div className="col-sm-6  custfieldcol1" key={index}>
                                                            <div className="row">
                                                                <div className="col-sm-5">
                                                                    <div className="form-group">
                                                                        <label htmlFor>Dynamic field</label>
                                                                        <input value={element.custLabel_1 || ""} onChange={e => handleChangew(index, e)} type="text" name="custLabel_1" id="cust_label" className="form-control form-control-sm custLabel" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-5">
                                                                    <div className="form-group">
                                                                        <label htmlFor>Dynamic field value</label>
                                                                        <input value={element.custField_1 || ""} onChange={e => handleChangew(index, e)} type="text" name="custField_1" id="cust_value" className="form-control form-control-sm custValue" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-2 d-flex align-items-center">
                                                                    {/* update.bind(null, props.x) */}
                                                                    <button type="button" onClick={(e) => removeFormFields(index, e)} className="btn btn-sm btn-danger">Remove</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                
                                            })
                                            }
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label htmlFor="apidlrType" className="mg-b-10">Api Dlr Type&nbsp; <sup className="text-danger">*</sup></label>
                                                <select onBlur={handleHttpColl} id="apidlrType" className="form-select form-select-sm" name="apidlrType" >
                                                    <option value=" ">Select One</option>
                                                    <option value="0" >Get</option>
                                                    <option value="1" >Recived</option>
                                                </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="url">Url</label>
                                                <input onChange={handleapidlr} type="text" className="form-control form-control-sm" name="url" id="url" placeholder="" />
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="method" className="mg-b-10">Method</label>
                                                <select onChange={handleapidlr} id="method" className="form-select form-select-sm" name="method" >
                                                    <option value="">Select One</option>
                                                    <option value="0" >Get</option>
                                                    <option value="1" >Post</option>
                                                </select>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="paramType" className="mg-b-10">ParamType</label>
                                                <select onChange={handleapidlr} id="paramType" className="form-select form-select-sm" name="paramType" >
                                                    <option value="">Select One</option>
                                                    <option value="0" >Quert</option>
                                                    <option value="1" >Data</option>
                                                    <option value="2" >JSON</option>
                                                </select>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="apiRespoType" className="mg-b-10">Api Response Type</label>
                                                <select onChange={handleHttpColl} id="apiRespoType" className="form-select form-select-sm" name="apiRespoType" >
                                                    <option value=" ">Select One</option>
                                                    <option value="0" >object</option>
                                                    <option value="1" >string</option>
                                                 </select>
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-3 mt-4 float-start">
                                                    <button onClick={(e) => addfileddrdata(e)} className="btn btn-success">Add morefiled</button>
                                                </div>
                                                {fields.map((element, index) => {
                                                    // console.log('ok', element);
                                                    if (true) {
                                                        return (
                                                            <div className="col-sm-6  custfieldcol1" key={index}>
                                                                <div className="row">
                                                                    <div className="col-sm-5">
                                                                        <div className="form-group">
                                                                            <label htmlFor="fieldname"> Field Name</label>
                                                                            <input value={element.fieldname || ""} onChange={e => handleChangew2(index, e)} type="text" name="fieldname" id="fieldname" className="form-control form-control-sm " />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-5">
                                                                        <div className="form-group">
                                                                            <label htmlFor="fieldvalue">Field Value</label>
                                                                            <input value={element.fieldvalue || ""} onChange={e => handleChangew2(index, e)} type="text" name="fieldvalue" id="fieldvalue" className="form-control form-control-sm " />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-2 d-flex align-items-center">
                                                                        {/* update.bind(null, props.x) */}
                                                                        <button type="button" onClick={(e) => removeFormFields2(index, e)} className="btn btn-sm btn-danger">Remove</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }

                                                })
                                                }
                                            </div>
                               </div>
                                        <h4 className="text-danger">Api Respones Pattern</h4>
                                        <div className="row">
                                            <div className="col-md-3 mt-4 ">
                                                <button onClick={(e) => { addApiDlrResObj(e) }} type="button" className="btn btn-success">Add morefiled</button>
                                            </div>
                                        </div>
                                        {/* dynamic dlr response  store start */}
                                        <div className="row">
                                            {hhtpCollection.apiRespo.map((item, index) => {
                                                return (
                                                    <div className="col-12 mt-2" key={index}>
                                                        <h5 className="text-warning">Response {index}</h5>
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <label htmlFor="succWord" className="mg-b-10">Success word</label>
                                                                <input type="text" value={item.succWord} onChange={(e) => { handleApiDlrResObjValue(e, index) }} className="form-control form-control-sm" name="succWord" id="succWord" placeholder="" />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor="errCode" className="mg-b-10"> Error Code </label>
                                                                <input type="errCode" value={item.errCode} onChange={(e) => { handleApiDlrResObjValue(e, index) }} className="form-control form-control-sm" name="errCode" id="errCode" placeholder="" />
                                                            </div>
                                                            <div className="col-md-4 mt-4">
                                                                <button type="button" onClick={(e) => { removeApiDlrResObj(e, index) }} className="btn btn-sm btn-danger">Remove</button>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <label htmlFor="param" className="mg-b-10">Message Id Parameter</label>
                                                                <input data-parent="msgId" value={item.msgId.param} onChange={(e) => { handleApiDlrResObjValue(e, index) }} type="text" className="form-control form-control-sm" name="param" id="param" placeholder="" />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor="spat" className="mg-b-10"> Message Start Pattern</label>
                                                                <input data-parent="msgId" value={item.msgId.spat} onChange={(e) => { handleApiDlrResObjValue(e, index) }} type="text" className="form-control form-control-sm" name="spat" id="spat" placeholder="" />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor="epat" className="mg-b-10"> Message End Pattern</label>
                                                                <input data-parent="msgId" value={item.msgId.epat} onChange={(e) => { handleApiDlrResObjValue(e, index) }} type="text" className="form-control form-control-sm" name="epat" id="epat" placeholder="" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <label htmlFor="param" className="mg-b-10">Status Id Parameter</label>
                                                                <input type="text" value={item.stat.param} onChange={(e) => { handleApiDlrResObjValue(e, index) }} data-parent="stat" className="form-control form-control-sm" name="param" id="param" placeholder="" />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor="spat" className="mg-b-10"> Status Start Pattern</label>
                                                                <input type="text" value={item.stat.spat} onChange={(e) => { handleApiDlrResObjValue(e, index) }} data-parent="stat" className="form-control form-control-sm" name="spat" id="spat" placeholder="" />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor="epat" className="mg-b-10"> Status End Pattern</label>
                                                                <input type="text" value={item.stat.epat} onChange={(e) => { handleApiDlrResObjValue(e, index) }} data-parent="stat" className="form-control form-control-sm" name="epat" id="epat" placeholder="" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <label htmlFor="param" className="mg-b-10">Error Id Parameter</label>
                                                                <input type="text" value={item.err.param} onChange={(e) => { handleApiDlrResObjValue(e, index) }} data-parent="err" className="form-control form-control-sm" name="param" id="param" placeholder="" />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor="spat" className="mg-b-10">Error Start Pattern</label>
                                                                <input type="text" value={item.err.spat} onChange={(e) => { handleApiDlrResObjValue(e, index) }} className="form-control form-control-sm" data-parent="err" name="spat" id="spat" placeholder="" />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor="epat" className="mg-b-10"> Error End Pattern</label>
                                                                <input type="text" value={item.err.epat} onChange={(e) => { handleApiDlrResObjValue(e, index) }} data-parent="err" className="form-control form-control-sm" name="epat" id="epat" placeholder="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        {/* dynamic dlr response store end */}
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label htmlFor="name">Name</label>
                                                <input onBlur={handleHttpColl} type="text" className="form-control form-control-sm" name="name" id="name" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="name">Company Name</label>
                                                <input onBlur={handleHttpColl} type="text" className="form-control form-control-sm" name="companyName" id="name" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="name">Email</label>
                                                <input onBlur={handleHttpColl} type="email" className="form-control form-control-sm" name="email" id="name" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="name">Support Number</label>
                                                <input onBlur={handleHttpColl} type="number" className="form-control form-control-sm" name="supportNo" id="name" placeholder="" />
                                                <span className="text-danger error"></span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3 mt-4 float-end">
                                                <input type="submit" className="text-white form-control form-control-sm  btn btn-info bg-primary border-secondary" value="Submit" />
                                            </div>
                                            <div className="col-md-3 mt-4 float-start">
                                                <button onClick={(e) => addFormFields(e)} className="btn btn-success">Add morefiled</button>
                                            </div>
                                            {/* <div className="col-md-3 mt-4">
                                                <button onClick={(e) => temp(e)} className="btn btn-success">temp</button>
                                            </div> */}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </React.Fragment>

    )
}

export default Vender_create
