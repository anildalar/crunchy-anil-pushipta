import React, { useEffect, useState } from 'react'
import Layout from '../../component/Layout'
import Sidebar from '../../component/Sidebar'
import MultiSelect from 'react-select';
import Select from 'react-select'
import $ from 'jquery';
import { ToastContainer, toast } from 'react-toastify';
import { fetchOption, url, Toast,  langauges } from '../../helpers/helper';
import swal from 'sweetalert';
import HelperHook from '../../custHook/HelperHook';
/**
* @author
* @function NewCreateUser
**/

const CreateUsers = (props) => {
    const helper=HelperHook();
    const [domain, setDomain] = useState([]);
    const [roles, setRoles] = useState([]);
    const [domains, setDomains] = useState([]);
    const [domOption, setDomOption] = useState([]);
    const [user, setUser] = useState({
        "firstName": "",
        "lastName": "",
        "email": "",
        "userName": "",
        "password": "",
        "roleId": "",
        "userType": "",
        "lang": "",
        "status": "",
        "alert": {
            "invoice": "0",
            "rate": "0",
            "alarms": "0"
        },
    });


    useEffect(() => {
        try {
            fetch(url + "/user/create/data", {
                ...helper.fetchOption
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    if (data.status == 200) {
                        setDomain(data.domain);
                        setDomains(data.domains);
                        setRoles(data.roles);
                        let dom = data.domains;
                        let handleOption = domOption;
                        dom.forEach((item, index) => {
                            let op = { "label": item.domain, "value": item.domainId }
                            handleOption.push(op);
                        });
                        setDomOption(handleOption);

                    } else {
                        toast.error(data.msg,
                            {
                                ...Toast,
                                position: "top-right"
                            });
                    }

                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        } catch (err) {
            toast.error("sever error",
                {
                    ...Toast,
                    position: "top-right"
                });
        }

    }, [])

    const handleSelect = (e, name) => {
        console.log(e.value)
        let nam = name
        setUser({ ...user, [nam]: e.value });
        console.log(user)
    }

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        var check = e.target.checked
        console.log(check)
        if (check) {
            setUser({
                ...user,
                "alert": {
                    ...user.alert,
                    [e.target.name]: Number(e.target.checked),
                }

            })
        }
    }

    const handleChange1 = (e) => {
        e.preventDefault();
        let userType = e.target.value
        setUser({ ...user, [e.target.name]: e.target.value });
        if (userType == "whitelable") {
            $('.whitlabeShow').removeClass('d-none')
        } else {
            $('.whitlabeShow').addClass('d-none')
        }
    }
    const createUser = (e) => {
        e.preventDefault();
        $('[name]').css('border', '1px solid gray').siblings('.text-danger').html('');
        try {
            fetch(url + '/user/createUser', {
                ...helper.fetchOption,
                body: JSON.stringify(user),
            })
                .then(response => response.json())
                .then(data => {
                    //console.log('Success:', data);
                    if (data.status == 200) {
                        swal("success", data.msg, "success")
                        document.getElementById('userForm').reset();
                    } else if (data.status == 400) {
                        data.errors.forEach(function (arrayItem) {
                            $('[name=' + arrayItem.param + ']').css("border", "1px solid red").siblings('span.text-danger').html(arrayItem.msg);
                        })
                    } else if (data.status == 404) {
                        toast.warning(data.msg);

                    } else {
                        toast.error(data.msg,
                            {
                                ...Toast,
                                position: "top-right"
                            });
                    }

                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        } catch (err) {
            toast.error("server error",
                {
                    ...Toast,
                    position: "top-right"
                })
        }

    }
    const handleChange4 = (e) => {
        setUser(Array.isArray(e) ? e.map(x => x.value) : []);
    };
    return(
        <Layout>
            <div className="main-content horizontal-content">
                <div className="container" data-select2-id={27}>
                    <div className="breadcrumb-header justify-content-between">
                        <div className="my-auto">
                            <div className="d-flex">
                                <h4 className="content-title mb-0 my-auto">User</h4><span className="text-muted mt-1 tx-13 ms-2 mb-0">/ Table</span>
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
                                    <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" id="dropdownMenuDate" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                    <form id="userForm" /* action="form-validation.html" data-parsley-validate */>
                        <div className="row row-sm">
                            <div className="col-lg-9 col-xl-9 col-md-8 col-sm-12">
                                <div className="card box-shadow-0">
                                    <div className="card-header bg-primary px-3 py-3">
                                        <h4 className="card-title text-white mb-2">Create User</h4>
                                    </div>
                                    <div className="card-body p-2">
                                        <div className="row row-sm ps-2 pe-2 pt-2">
                                            <div className="col-3">
                                                <div className="form-group mg-b-0">
                                                    <label htmlFor="firstName" className="form-label">First Name: <span className="tx-danger">*</span></label>
                                                    <input onChange={e => handleChange(e)} type="text" className="form-control form-control-sm" name="firstName" required />
                                                    <span className="text-danger error"></span>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="form-group">
                                                    <label className="form-label">Last Name: <span className="tx-danger">*</span></label>
                                                    <input onChange={e => handleChange(e)} className="form-control form-control-sm" name="lastName" required type="text" />
                                                    <span className="text-danger error"></span>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="form-group mg-b-0">
                                                    <label className="form-label">Email: <span className="tx-danger">*</span></label>
                                                    <input onChange={e => handleChange(e)} className="form-control form-control-sm" htmlFor="email" name="email" required />
                                                    <span className="text-danger error"></span>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="form-group">
                                                    <label className="form-label">User Name: <span className="tx-danger">*</span></label>
                                                    <input onChange={e => handleChange(e)} className="form-control form-control-sm" name="userName" required type="text" />
                                                    <span className="text-danger error"></span>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="form-group">
                                                    <label className="form-label">Password: <span className="tx-danger">*</span></label>
                                                    <input onChange={e => handleChange(e)} type="password" className="form-control form-control-sm" name="password" required />
                                                    <span className="text-danger error"></span>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="form-group">
                                                    <label>Role</label>
                                                    <select onChange={e => handleChange(e)} name="roleId" id="roleId" className="form-control form-control-sm">
                                                        <option value="">Select Role</option>
                                                        {
                                                            roles.map((item, index) => {
                                                                return (
                                                                    <option id={index} value={item.id}>{item.role}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="form-group">
                                                    <label for="userType">User Type</label>
                                                    <select onChange={handleChange1} name="userType" id="userType" className="form-control form-control-sm">
                                                        <option value="">select user type</option>
                                                        <option value="whitelable">Whitelable</option>
                                                        <option value="normal">Normal</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-3 d-none whitlabeShow">
                                                <div className="form-group">
                                                    <label htmlFor="predomain"> Pre Domains <span className="tx-danger">*</span></label>
                                                    <select id="preDomain" name="preDomain" className="form-control form-control-sm">
                                                        <option id="" value="">select user type</option>

                                                        {
                                                            domain.map((item, index) => {
                                                                return (
                                                                    <option id={index} value={item.domainId}>{item.domain}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-3 d-none whitlabeShow">
                                                <div className="form-group">
                                                    <label className="form-label" >Domains: <span className="tx-danger">*</span></label>

                                                    <div  >
                                                        <MultiSelect isMulti options={domOption} onChange={handleChange4}>

                                                        </MultiSelect>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="form-group mg-b-0">
                                                    <label className="form-label">Status: <span className="tx-danger">*</span></label>
                                                    <select onChange={e => handleChange(e)} className="form-control form-control-sm " required name="status" id="status">
                                                        <option selected value="0">Inactive</option>
                                                        <option value="1">Active</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="form-group mg-b-0">
                                                    <label className="form-label">Modile No: <span className="tx-danger">*</span></label>
                                                    <input className="form-control form-control-sm" onChange={e => handleChange(e)} name="mob" required type="text" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div  >
                                                    <label className="form-label"> Language <span className="tx-danger">*</span></label>
                                                    <Select options={langauges} onChange={e => handleSelect(e, 'lang')} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer p-2 mt-3">
                                            <button onClick={(e) => { createUser(e) }} className="btn btn-main-primary" type="submit">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-xl-3 col-md-4 col-sm-12">
                                <div className="card box-shadow-0">
                                    <div className="card-header bg-primary px-3 py-3">
                                        <h4 className="card-title text-white mb-2">Alert</h4>
                                    </div>
                                    <div className="card-body ps-2 pe-2">
                                        <div className="form-group">
                                            <div className="row row-sm" >
                                                <div className="col-12" >
                                                    <div className="pt-1">
                                                        <label className="ckbox pt-1" ><input onChange={e => handleChange(e)} className="rate" name="rate" type="checkbox" value=" " /><span>Send Rate Changes</span></label>
                                                    </div>
                                                    <div className="pt-1">
                                                        <label className="ckbox pt-1" ><input name="invoice" className="invoice" onChange={e => handleChange(e)} type="checkbox" value="" /><span>Send Invoices</span></label>
                                                    </div>
                                                    <div className="pt-1">
                                                        <label className="ckbox pt-1" ><input name="alarms" className="alarms" onChange={e => handleChange(e)} type="checkbox" value="" /><span>Send Alarms</span></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ToastContainer />
                    </form>
                </div>
            </div>
            <Sidebar />
        </Layout >
    )

 }

 export default CreateUsers
