import React, { useEffect, useRef, useState } from "react";
import Header from "../../component/Header";
import { fetchOption, url } from "../../url";

export default function Clinet_routing() {
    const [client, setClient] = useState([]);
    const [Country, setCountry] = useState([]);
    const [CountClient, setcountClient] = useState([]);
    const [tabdata, setTableData] = useState([])
    console.log("antim" + tabdata)
    const clientRef = useRef("");
    const productRef = useRef("");
    const countriesRef = useRef("");
    useEffect(() => {
        fetch(url + "/client/getClient", {
            ...fetchOption,
        }).then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                setClient(data.data);
                //console.log(JSON.stringify(client))
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);
    useEffect(() => {
        fetch(url + "/master/get/countries", {
            ...fetchOption,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success +contries:", data);
                setCountry(data.data);
                console.log(Country);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);
    const handleChange = (e) => {
        e.preventDefault();
        let id = e.target.value;
        if (id) {
            // alert( e.target.value)
            fetch(url + "/client/conn/getConnbyClient", {
                ...fetchOption,
                body: JSON.stringify({ clientId: id }),
            })
                .then((response) => response.json())
                .then((data) => {
                    // if(data.status==200){
                    console.log("Success:", data);
                    setcountClient(data.data);
                    console.log(CountClient);
                    // }else{

                    // }

                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }

    };

    let submitData = (e) => {
        e.preventDefault();
        fetch(url + '/client/conn/routing', {
            ...fetchOption,
            body: JSON.stringify({ "clientId": clientRef.current.value, "connId": productRef.current.value, "countyId": countriesRef.current.value }),
        }).then(response => response.json())
            .then(data => {
                console.log('Success:', data.data);
                setTableData(data.data)
            })
            .catch((error) => {
                console.error('Error:', error);
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
                                <h4 className="content-title mb-0 my-auto">Forms</h4>
                                <span className="text-muted mt-1 tx-13 ms-2 mb-0"> / Form-Elements</span>
                            </div>
                        </div>
                        <div className="d-flex my-xl-auto right-content">
                            <div className="pe-1  mb-xl-0">
                                <button type="button" className="btn btn-info btn-icon me-2 btn-b" >  <i className="mdi mdi-filter-variant" /> </button>
                            </div>
                            <div className="pe-1  mb-xl-0">
                                <button type="button" className="btn btn-danger btn-icon me-2"> <i className="mdi mdi-star" />  </button>
                            </div>
                            <div className="mb-xl-0">
                                <button type="button" className="btn btn-warning  btn-icon me-2" >  <i className="mdi mdi-refresh" />  </button>
                            </div>
                            <div className="mb-xl-0">
                                <div className="btn-group dropdown">
                                    <button type="button" className="btn btn-primary">  14 Aug 2019  </button>
                                    <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" id="dropdownMenuDate" data-bs-toggle="dropdown" aria-expanded="false" >
                                        <span className="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuDate" x-placement="bottom-end" >
                                        <a className="dropdown-item" href="#">  2015  </a>
                                        <a className="dropdown-item" href="#">  2016 </a>
                                        <a className="dropdown-item" href="#"> 2017  </a>
                                        <a className="dropdown-item" href="#"> 2018 </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
                            <div className="card ">
                                <div className="card-header bg-info px-2 py-1">
                                    <h5 className="m-2 text-white">Client Connection</h5>
                                </div>
                                <div className="card-body bg-white">
                                    <form method="post" onSubmit={(e) => { submitData(e) }}>
                                        <input type="hidden" name="csrf_test_name" />
                                        <div className="row row-sm">
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <label htmlFor="carrier_id"> Client&nbsp;<sup className="text-danger">*</sup> </label>
                                                    <select ref={clientRef} onChange={handleChange} className="form-control form-control-sm" name="carrier_id" data-target="product_idv" required="required" >
                                                        <option value="">Select one</option>
                                                        {client.map((e, index) => {
                                                            return (<option key={index} value={e.userId}>  {e.firstName} {e.lastName}  </option>
                                                            );
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <label htmlFor="product_idv">Products</label>
                                                    <select ref={productRef} className="form-control form-control-sm" id="product_idv" name="product_id" >
                                                        <option value="">Select Product</option>
                                                        {CountClient.map((e, index) => {
                                                            return (
                                                                <option value={e.id}>{e.createdAt}</option>
                                                            );
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <label htmlFor="country_id">Countries</label>
                                                    <select ref={countriesRef} className="form-control form-control-sm" id="country_id" name="country_id" >
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
                                                    <button type="submit" className="btn btn-success btn-sm mt-4 me-1"> Search </button>
                                                    <input type="reset" className="btn btn-info btn-sm mt-4" defaultValue="Reset" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12"></div>
                                        </div>
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
                                                                    <a href="#" className="btn btn-sm btn-success">Edit</a>
                                                                    <a href="#" className="btn btn-sm btn-danger">Delete</a>
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
