import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { fetchOption, Toast, url } from "../../url";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Switch from "react-switch";

import { useTranslation } from "react-i18next";
import Layout from "../../component/Layout";
import { BreadCrumb } from "../../component/UI/BreadCrumb";
import swal from "sweetalert";
//import Toast from "../../component/Toast";

export default function Clinet_routing() {
    const { t } = useTranslation();
    const [client, setClient] = useState([]);
    const [Country, setCountry] = useState([]);
    const [productConn, setProductConn] = useState([]);
    const [tabdata, setTableData] = useState([])
    // const [updatTablDat, setUpdateTablDat] = useState({

    //    "id":""
    // })

    const clientRef = useRef("");
    const productRef = useRef("");
    const countriesRef = useRef("");
    const prefixref = useRef("");
    const contryrefmod = useRef("");
    const fixbalref = useRef("");
    const fixcreditref = useRef("");
    const prdtmodlref = useRef("");
    const isAllowref = useRef("");

    useEffect(() => {
        try {
            fetch(url + "/client/getClient", {
                ...fetchOption,
            }).then((response) => response.json())
                .then((data) => {
                    if (data.status === 200) {
                        console.log("Success:", data.data);
                        setClient(data.data);
                        //console.log(JSON.stringify(client))
                    } else {
                        toast(data.msg)
                    }
                }).catch((error) => {
                    console.error("Error:", error);
                });
        } catch (err) {
            toast.error("sever error",
                {
                    ...Toast,
                    position: "top-right"
                });
        }
        try {
            fetch(url + "/master/get/countries", {
                ...fetchOption,
            }).then((response) => response.json())
                .then((data) => {
                    console.log("Success +contries:", data);
                    setCountry(data.data);
                    //console.log(Country);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        } catch (err) {
            toast.error("sever error",
                {
                    ...Toast,
                    position: "top-right"
                }
            );
        }
    }, []);
    const handleChange = (e) => {
        e.preventDefault();
        let id = e.target.value;
        if (id != '') {
            setProductConn([]);
            fetch(url + "/client/conn/getConnbyClient", {
                ...fetchOption,
                body: JSON.stringify({ clientId: id }),
            }).then((response) => response.json())
                .then((data) => {
                    if (data.status == 200) {
                        // console.log("Success:", data);
                        setProductConn(data.data);
                        // console.log(productConn);
                    } else {
                        toast.error(data.msg,
                            {
                                ...Toast,
                                position: "top-right"
                            }
                        );
                    }
                }).catch((error) => {
                    console.error("Error:", error);
                });
        }
    };
    let submitData = (e) => {
        e.preventDefault();
        setTableData([])
        try {
            fetch(url + '/client/conn/routing/getByConn', {
                ...fetchOption,
                body: JSON.stringify({ "clientId": clientRef.current.value, "connId": productRef.current.value, "countyId": countriesRef.current.value }),
            }).then(response => response.json())
                .then(data => {
                    // console.log('Success:', data.data);
                    if (data.status == 200) {
                        // if (data.error) {
                        setTableData(data.data)
                        console.log(data.data)
                    } else if (data.status == 400) {
                        console.log("antim" + data.errors[0].msg)
                        toast.error(data.errors[0].msg,
                            {
                                ...Toast,
                                position: "top-right"
                            })
                    }
                }).catch((error) => {
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
    const editTable = (e) => {
        // prdtmodlref.current.value = e.target.closest("tr").querySelector('td:nth-child(1)').innerHTML
        // prefixref.current.value = e.target.closest("tr").querySelector('td:nth-child(2)').innerHTML
        // contryrefmod.current.value = e.target.closest("tr").querySelector('td:nth-child(3)').innerHTML
        // fixbalref.current.value = e.target.closest("tr").querySelector('td:nth-child(4)').innerHTML
        // fixcreditref.current.value = e.target.closest("tr").querySelector('td:nth-child(5)').innerHTML
        // isAllowref.current.value = e.target.closest("tr").querySelector('td:nth-child(8)').innerHTML
        // var uid = e.currentTarget.dataset.val

        // console.log(uid)
        // setUpdateTablDat({
        //     ...updatTablDat,
        //     "uuid": e.currentTarget.dataset.val,
        //     "connId": prdtmodlref.current.value,
        //     "countyId": contryrefmod.current.value,
        //     "code": prefixref.current.value,
        //     "credit": fixcreditref.current.value,
        //     "bal": fixbalref.current.value,
        //     "isAllow": isAllowref.current.value
        // })
        // //console.log(uid)
        // console.log(updatTablDat)
    }
    const tbleDataUpdt = (e) => {
        // e.preventDefault();
        // setUpdateTablDat({ ...updatTablDat, [e.target.name]: e.target.value })
        // console.log(updatTablDat)
    }
    const updateData = (e) => {
        // e.preventDefault();
        // fetch('http://192.168.1.52:3000/client/conn/routing/edit', {
        //     ...fetchOption,
        //     body: JSON.stringify(updatTablDat),
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('UPDATE Success:', data);
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
    }
    const editHandle = e => {
        e.preventDefault()
        let id = e.currentTarget.dataset.id
        let curval = e.currentTarget.dataset.value
        try {
            fetch(url + '/client/conn/routing/changeStatus', {
                ...fetchOption,
                body: JSON.stringify({ "id": id, "value": curval }),
            }).then(response => response.json())
                .then(data => {
                    console.log('UPDATE Success:', data);
                    if (data.status == 200) {
                        if (parseInt(curval)) {
                            e.target.closest('tr').querySelector('td.statusChg').querySelector('.badge.activeBtn').classList.remove('d-none')
                            e.target.closest('tr').querySelector('td.statusChg').querySelector('.badge.inactiveBtn').classList.add('d-none')
                            e.target.closest('td').querySelector('.btn-group .activeBtn').classList.add('d-none')
                            e.target.closest('td').querySelector('.btn-group .inactiveBtn').classList.remove('d-none')
                        } else {
                            e.target.closest('tr').querySelector('td.statusChg').querySelector('.badge.activeBtn').classList.add('d-none')
                            e.target.closest('tr').querySelector('td.statusChg').querySelector('.badge.inactiveBtn').classList.remove('d-none')
                            e.target.closest('td').querySelector('.btn-group .activeBtn').classList.remove('d-none')
                            e.target.closest('td').querySelector('.btn-group .inactiveBtn').classList.add('d-none')
                        }
                        toast.success(data.msg,
                            {
                                ...Toast,
                               position: "top-right",
                            });
                    } else if (data.status == 403) {
                        toast.error(data.error.msg,
                            {
                                ...Toast,
                                position: "top-right"
                            })
                    } else {
                        toast.error("Technical error : ",
                            {
                                ...Toast,
                                position: "top-right"
                            })
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
    }
    const deletHandle = e => {
        e.preventDefault();
        let id = e.currentTarget.dataset.uuid
        fetch(url + '/client/conn/routing/delete', {
            ...fetchOption,
            body: JSON.stringify({ "id": id }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.status == 200) {
                    //swal(data.msg);
                    toast.success(data.msg,
                        {
                            ...Toast,
                           position: "top-right"
                        });
                } else if (data.status == 404) {
                    toast.error(data.msg,
                        {
                            ...Toast,
                            position: "top-right"
                        });
                } else if (data.status == 400) {
                    toast.error(data.errors[0].msg,
                        {
                            ...Toast,
                            position: "top-right"
                        })
                }
            }).catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <Layout>
            {/* <!-- Modal --> */}
            <div className="modal fade d-none" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog d-none modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">SMPP Connection</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row row-sm">
                                <div className="col-12">
                                    <label htmlFor="connId">{t("Products")}&nbsp;<sup className="text-danger">*</sup></label>
                                    <select onChange={e => tbleDataUpdt(e)} ref={prdtmodlref} id="connId" className="form-control  tiggerRest" name="connId" >
                                        <option value="">{t("Select Product")}</option>
                                        {productConn.map((e, index) => {
                                            return (
                                                <option key={index} value={e.id}>{e.createdAt}</option>
                                            );
                                        })}
                                    </select>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="prefix">{t("Prefix")}&nbsp;<sup className="text-danger">*</sup></label>
                                    <input onChange={e => tbleDataUpdt(e)} ref={prefixref} type="number" min={0} name="code" className="form-control" id="prefix" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="country">{t("Countries")}</label>
                                    <select onChange={e => tbleDataUpdt(e)} ref={contryrefmod} className="form-control " id="country" name="countyId" >
                                        <option value="">{t("Select Countries")}</option>
                                        {
                                            Country.map((e, index) => {
                                                return (<option key={index} value={e.id}>{e.country_name}</option>)
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="fix_bal">{t("Fix Balance")}&nbsp;<sup className="text-danger">*</sup></label>
                                    <input onChange={e => tbleDataUpdt(e)} ref={fixbalref} type="number" step="any" min={0} name="bal" className="form-control" id="fix_bal" required />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="fix_credit">{t("Fix Credit")}&nbsp;<sup className="text-danger">*</sup></label>
                                    <input onChange={e => tbleDataUpdt(e)} ref={fixcreditref} type="number" step="any" min={0} name="credit" className="form-control" id="fix_credit" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="routing_is_allow">{t("Status")}&nbsp;<sup className="text-danger">*</sup></label>
                                    <select onChange={e => tbleDataUpdt(e)} ref={isAllowref} className="form-control" id="routing_is_allow" name="isAllow" required="required">
                                        <option value>{t("Select Status")}</option>
                                        <option value={1}>{t("Allow")}</option>
                                        <option value={0}>{t("Not Allow")}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-sm btn-danger" data-bs-dismiss="modal">{t("Close")}</button>
                            <button onClick={e => updateData(e)} type="button" className="btn btn-sm btn-primary">{t("Update")}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-content horizontal-content">
                <div className="container">
                    <BreadCrumb></BreadCrumb>
                    <div className="row">
                        <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
                            <div className="card ">
                                <div className="card-header bg-info px-2 py-1">
                                    <h5 className="m-2 text-white">{t("Client Connection")}</h5>
                                </div>
                                <div className="card-body bg-white">
                                    <form method="post" onSubmit={(e) => { submitData(e) }}>
                                        <ToastContainer />
                                        <input type="hidden" name="csrf_test_name" />
                                        <div className="row row-sm">
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <label htmlFor="carrier_id"> {t("Client")}&nbsp;<sup className="text-danger">*</sup> </label>
                                                    <select ref={clientRef} onChange={handleChange} className="form-control" name="carrier_id" data-target="product_idv" required="required" >
                                                        <option value="">{t("Select one")}</option>
                                                        {client.map((e, index) => {
                                                            return (<option key={index} value={e.userId}>{e.firstName}{e.lastName}</option>
                                                            );
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <label htmlFor="product_idv">{t("Products")}</label>
                                                    <select ref={productRef} className="form-control" id="product_idv" name="product_id" >
                                                        <option value="">{t("Select Product")}</option>
                                                        {productConn.map((e, index) => {
                                                            return (
                                                                <option key={index} value={e.id}>{e.createdAt}</option>
                                                            );
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <label htmlFor="country_id">{t("Countries")}</label>
                                                    <select ref={countriesRef} className="form-control" id="country_id" name="country_id" >
                                                        <option value="">{t("Select Countries")}</option>
                                                        {Country.map((e, index) => {
                                                            return (
                                                                <option key={index} value={e.id}>{e.country_name}</option>
                                                            );
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="form-group mt-1"> <input type="hidden" name="type" defaultValue="view" />
                                                    <button type="submit" className="btn btn-primary mt-4 me-1">{t("Search")}</button>
                                                    <input type="reset" className="btn btn-info mt-4" defaultValue="Reset" />
                                                    <Link to="/Add_field" className="btn btn-success mt-4 ms-1">{t("Add")}</Link>
                                                </div>
                                            </div>
                                            <div className="col-sm-12"></div>
                                        </div>
                                        <ToastContainer />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
                            <div className="card">
                                <div className="card-header bg-info px-2 py-1">
                                    <h5 className="m-2 text-white">{t("SMPP Connection")}</h5>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table text-md-nowrap" id="example1">
                                            <thead>
                                                <tr>
                                                    <th className="wd-15p border-bottom-0">{t("Products")}</th>
                                                    <th className="wd-15p border-bottom-0">{t("Prefix")}</th>
                                                    <th className="wd-20p border-bottom-0">{t("Country")}</th>
                                                    <th className="wd-15p border-bottom-0">{t("Balance")}</th>
                                                    <th className="wd-10p border-bottom-0">{t("Credit")}</th>
                                                    <th className="wd-25p border-bottom-0">{t("CreateAt")}</th>
                                                    <th className="wd-25p border-bottom-0">{t("Update")}</th>

                                                    <th className="wd-25p border-bottom-0">{t("Status")}</th>
                                                    <th className="wd-25p border-bottom-0">{t("Action")}</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    tabdata.map((e) => {
                                                        return (
                                                            <tr>
                                                                <td>{e.connId}</td>
                                                                <td>{e.code}</td>
                                                                <td>{e.countyId}</td>
                                                                <td>{e.bal}</td>
                                                                <td>{e.credit}</td>
                                                                <td>{e.createdAt}</td>
                                                                <td >{e.updateAt}</td>

                                                                <td className="statusChg"><span className={`badge rounded-pill bg-success activeBtn ${(e.isAllow == 1) ? '' : 'd-none'}`}>Active</span>
                                                                    <span className={`badge rounded-pill bg-warning inactiveBtn ${(e.isAllow == 1) ? 'd-none' : ''}`}>Inactive</span></td>
                                                                <td>
                                                                    <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                                                        <button onClick={(e) => editHandle(e)} type="button" className={`btn btn-success activeBtn ${(e.isAllow == 1) ? 'd-none' : ''}`} data-value="1" data-id={e.uuid}> <i className="fas fa-check"></i> </button >
                                                                        <button onClick={e => editHandle(e)} type="button" className={`btn btn-warning inactiveBtn ${(e.isAllow == 1) ? '' : 'd-none'}`} data-value="0" data-id={e.uuid}> <i className="fas fa-ban"></i></button>
                                                                        <button type="button" className="btn btn-primary"  ><i className="fas fa-pencil-alt"></i></button>
                                                                        {/*data-bs-toggle="modal" data-bs-target="#exampleModal"</div>*/}
                                                                        <button onClick={(e) => deletHandle(e)} data-uuid={e.uuid} type="button" className="btn btn-danger"><i className="fas fa-trash"></i></button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
