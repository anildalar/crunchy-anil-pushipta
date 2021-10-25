import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../component/Header";
import { fetchOption, Toast, url } from "../../url";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BreadCrumb from "../../component/UI/BreadCrumb";
//import Toast from "../../component/Toast";

export default function Clinet_routing() {
    const [client, setClient] = useState([]);
    const [Country, setCountry] = useState([]);
    const [productConn, setProductConn] = useState([]);
    const [tabdata, setTableData] = useState([])
    const clientRef = useRef("");
    const productRef = useRef("");
    const countriesRef = useRef("");
    useEffect(() => {
        try {
            fetch(url + "/client/getClient", {
                ...fetchOption,
            }).then((response) => response.json())
                .then((data) => {
                    if (data.status === 200) {
                        // console.log("Success:", data);
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
    }, []);
    useEffect(() => {
        try {
            fetch(url + "/master/get/countries", {
                ...fetchOption,
            }).then((response) => response.json())
                .then((data) => {
                    console.log("Success +contries:", data);
                    setCountry(data.data);
                    console.log(Country);
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
                        console.log("Success:", data);
                        setProductConn(data.data);
                        console.log(productConn);
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
        try {
            fetch(url + '/client/conn/routing', {
                ...fetchOption,
                body: JSON.stringify({ "clientId": clientRef.current.value, "connId": productRef.current.value, "countyId": countriesRef.current.value }),
            }).then(response => response.json())
                .then(data => {
                    console.log('Success:', data.data);
                    if (data.error) {
                        toast.error(data.msg,
                            {
                                ...Toast,
                                position: "top-right"
                            })
                    } else {
                        setTableData(data.data)
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
    return (
        <React.Fragment>
            <Header />
            <div className="main-content horizontal-content">
                <div className="container">
                    <BreadCrumb></BreadCrumb>
                    <div className="row">
                        <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
                            <div className="card ">
                                <div className="card-header bg-info px-2 py-1">
                                    <h5 className="m-2 text-white">Client Connection</h5>
                                </div>
                                <div className="card-body bg-white">
                                    <form method="post" onSubmit={(e) => { submitData(e) }}>
                                        <ToastContainer />
                                        <input type="hidden" name="csrf_test_name" />
                                        <div className="row row-sm">
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <label htmlFor="carrier_id"> Client&nbsp;<sup className="text-danger">*</sup> </label>
                                                    <select ref={clientRef} onChange={handleChange} className="form-control" name="carrier_id" data-target="product_idv" required="required" >
                                                        <option value="">Select one</option>
                                                        {client.map((e, index) => {
                                                            return (<option key={index} value={e.userId}>{e.firstName}{e.lastName}</option>
                                                            );
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <label htmlFor="product_idv">Products</label>
                                                    <select ref={productRef} className="form-control" id="product_idv" name="product_id" >
                                                        <option value="">Select Product</option>
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
                                                    <label htmlFor="country_id">Countries</label>
                                                    <select ref={countriesRef} className="form-control" id="country_id" name="country_id" >
                                                        <option value="">Select Countries</option>
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
                                                    <button type="submit" className="btn btn-success mt-4 me-1"> Search </button>
                                                    <input type="reset" className="btn btn-info mt-4" defaultValue="Reset" />
                                                    <Link to="/Add_field" className="btn btn-success mt-4 ms-1"> Add </Link>
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
                                    <h5 className="m-2 text-white">SMPP Connection</h5>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table text-md-nowrap" id="example1">
                                            <thead>
                                                <tr>
                                                    <th className="wd-15p border-bottom-0">Connection</th>
                                                    <th className="wd-15p border-bottom-0">Code</th>
                                                    <th className="wd-20p border-bottom-0">Country</th>
                                                    <th className="wd-15p border-bottom-0">Balance</th>
                                                    <th className="wd-10p border-bottom-0">Credit</th>
                                                    <th className="wd-25p border-bottom-0">CreateAt</th>
                                                    <th className="wd-25p border-bottom-0">Update</th>
                                                    <th className="wd-25p border-bottom-0">Action</th>
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
                                                                <td>{e.updateAt}</td>
                                                                <td>
                                                                    <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                                                        <button type="button" class="btn btn-primary">Edit</button>
                                                                        <button type="button" class="btn btn-danger">Delete</button>
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
        </React.Fragment>
    );
}
