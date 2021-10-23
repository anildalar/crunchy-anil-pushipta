import React, { useEffect, useRef, useState } from 'react'
import Header from '../../component/Header'
import { fetchOption, url } from '../../url';
import $ from 'jquery';
import swal from 'sweetalert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add_field() {
    const [client, setClient] = useState([]);
    const [Country, setCountry] = useState([]);
    const [code, setContryPrfix] = useState({});
    const [clientConn, setclientConn] = useState([]);
    const product = useRef('')
    const fix_credit = useRef('')
    const fix_bal = useRef('')
    const country = useRef('')
    const checke = useRef('')
    const [routing, setRouting] = useState({
        "clientId": "",
        "connId": "",
        "countyId": "",
        "code": "",
        "credit": "",
        "bal": "",
        "check": "",
        "isAllow": ""
    })
    useEffect(() => {
        console.log(routing)
        try {
            fetch(url + "/client/getClient", {
                ...fetchOption,
            }).then((response) => response.json())
                .then((data) => {
                    if (data.status === 200) {
                        console.log("Success:", data);
                        setClient(data.data);
                        // console.log(client)
                    } else {
                        toast(data.msg)
                        // console.log(data.msg)
                    }
                }).catch((error) => {
                    console.error("Error:", error);
                });
        } catch (err) {
            toast("srever error")
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
                }).catch((error) => {
                    console.error("Error:", error);
                });
        } catch (err) {
            toast("server error")
        }

    }, []);
    const handleChange = (e) => {
        e.preventDefault();
        setRouting({ ...routing, [e.target.name]: e.target.value })
        let id = e.target.value;
        if (id) {
            try {
                fetch(url + "/client/conn/getConnbyClient", {
                    ...fetchOption,
                    body: JSON.stringify({ clientId: id }),
                }).then((response) => response.json())
                    .then((data) => {
                        if (data.status === 200) {
                            console.log("Success:", data);
                            setclientConn(data.data);
                            console.log(clientConn);
                        } else {
                            toast(data.msg)
                          
                        }
                    }).catch((error) => {
                        console.error("Error:", error);
                    });
            } catch (err) {
                toast("server error");
            }
        }
    };
    const handleCountry = (e) => {
        e.preventDefault();
        let prfix = parseInt(country.current.selectedOptions[0].getAttribute("data-prefix"))
        setRouting({ ...routing, [e.target.name]: e.target.value,"code":prfix})
     }
    const handleProduct = (e) => {
        e.preventDefault();
        setRouting({ ...routing, [e.target.name]: e.target.value })
        let bill = product.current.selectedOptions[0].getAttribute("data-billmode")
        if (bill == 0) {
            fix_credit.current.disabled = "disabled"
        } else if (bill == 1) {
            fix_bal.current.disabled = "disabled"
            checke.current.disabled = "disabled"
        } else {
            fix_credit.current.disabled = "";
            fix_bal.current.disabled = "";
        }
    }
    const handleCheck = (e) => {
        setRouting({ ...routing, [e.target.name]: e.target.checked })
    }
    const handlerouting = (e) => {
        e.preventDefault();
        if (e.target.name == "code") {
            setContryPrfix(e.target.value)
        }
        setRouting({ ...routing, [e.target.name]: e.target.value })
    }
    const submit = (e) => {
        $('[name]').css('border', '1px solid gray').siblings('.text-danger').html('');
        e.preventDefault();
      try {
            fetch(url + '/client/conn/routing/create', {
                ...fetchOption,
                body: JSON.stringify(routing),
            }).then(response => response.json())
                .then(data => {
                    if (data.errors) {
                       // console.log('Error:', data.errors);
                        data.errors.forEach(function (arrayItem) {
                        $('[name=' + arrayItem.param + ']').css("border", "1px solid red").siblings('span.text-danger').html(arrayItem.msg);
                        });
                    } else {
                        //Sweet alrt
                        //console.log('Success:', data);
                        swal("Success!");
                        document.getElementById("myForm").reset();
                    }
                }).catch((error) => {
                    console.error('Error:', error);
                });
        } catch (err) {
            toast("server error");
        }
    }
    return (
        <React.Fragment>
            <Header />
            <div className="main-content horizontal-content">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
                            <div className="card ">
                                <div className="card-header bg-info px-2 py-1">
                                    <h5 className="m-2 text-white">Add Routing</h5>
                                </div>
                                <div className="card-body bg-white">
                                    <form onSubmit={submit} id="myForm">
                                        <div className="row row-sm">
                                            <div className="col-sm-6">
                                                <label htmlFor="carrierId">Client&nbsp;<sup className="text-danger">*</sup></label>
                                                <select onChange={handleChange} id="carrierId" className="form-control form-control-sm tiggerRest" name="clientId" required data-target="product_ida">
                                                    <option value="">Select one</option>
                                                    {client.map((e, index) => {
                                                        return (<option key={index} value={e.userId}>{e.firstName}{e.lastName}</option>
                                                        );
                                                    })}
                                                </select>

                                            </div>
                                            <div className="col-sm-6">
                                                <div>
                                                    <label htmlFor="connId">Connection&nbsp;<sup className="text-danger">*</sup></label>
                                                    <select ref={product} onChange={(e) => handleProduct(e)} id="connId" className="form-control form-control-sm tiggerRest" name="connId" >
                                                        <option value="">Select Product</option>
                                                        {clientConn.map((e, index) => {
                                                            return (
                                                                <option key={index} data-billmode={e.billMode} value={e.id}>{e.createdAt}</option>
                                                            );
                                                        })}
                                                    </select>
                                                    <span className="text-danger error"></span>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div>
                                                    <label htmlFor="country">Countries</label>
                                                    <select ref={country} onChange={handleCountry} className="form-control form-control-sm" id="country" name="countyId" >
                                                        <option value="">Select Countries</option>
                                                        {Country.map((e, index) => {
                                                            return (<option key={index} data-prefix={e.dial_code} value={e.id}>{e.country_name}</option>);
                                                        })}
                                                    </select>
                                                    <span className="text-danger error"></span>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <label htmlFor="prefix">Prefix&nbsp;<sup className="text-danger">*</sup></label>
                                                <input onChange={e => handlerouting(e)} value={routing.code} type="number" min={0} name="code" className="form-control form-control-sm" id="prefix" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-sm-6">
                                                <label htmlFor="fix_credit">Fix Credit&nbsp;<sup className="text-danger">*</sup></label>
                                                <input onChange={(e) => handlerouting(e)} ref={fix_credit} type="number" step="any" min={0} name="credit" className="form-control form-control-sm" id="fix_credit" />
                                                <span className="text-danger error"></span>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="row">
                                                    <div className="col-sm-8">
                                                        <label htmlFor="fix_bal">Fix Balance&nbsp;<sup className="text-danger">*</sup></label>
                                                        <input onChange={(e) => handlerouting(e)} ref={fix_bal} type="number" step="any" min={0} name="bal" className="form-control form-control-sm" id="fix_bal" required />
                                                        <span className="text-danger error"></span>
                                                    </div>
                                                    <div className="col-sm-4 p-4">
                                                        <input ref={checke} type="checkbox" onChange={(e) => handleCheck(e)} name="check" className="" id="" required />
                                                        <label className="form-check-label" htmlFor="flexCheckDefault">Default checkbox </label>
                                                        <span className="text-danger error"></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div>
                                                    <label htmlFor="routing_is_allow">Status&nbsp;<sup className="text-danger">*</sup></label>
                                                    <select onChange={(e) => handlerouting(e)} className="form-control form-control-sm tiggerRest" id="routing_is_allow" name="isAllow" required="required">
                                                        <option value>Select Status</option>
                                                        <option value={1}>Allow</option>
                                                        <option value={0}>Not Allow</option>
                                                    </select>
                                                    <span className="text-danger error"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row row-sm mt-3">
                                            <div className="col-sm-6">
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                        </div>
                                        <ToastContainer />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Add_field
