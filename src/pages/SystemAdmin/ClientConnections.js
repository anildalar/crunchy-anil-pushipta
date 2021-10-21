import React, { useEffect, useRef, useState } from "react";
import Layout from "../../component/Layout";
import Select from 'react-select';
import TimePicker from 'react-time-picker';

import { url, fetchOption, SSLTypes } from "../../helpers/helper";
import { timeZone as options } from "../../helpers/helper2";

export default function ClientConnections() {
  const [routeTypes, setRouteTypes] = useState([{}]);
  const [routesByType, setRoutesByType] = useState([{}]);
  const [currencies,setCurrencies ] = useState([{}]);

  //const setCurrencies
  const balance = useRef();
  const credits = useRef();
  const currency = useRef();
  const myRef = useRef();

  const handleChange = (e)=>{
    //alert(myRef.current.selectedOptions[0].getAttribute('data-ssl'));

    console.log(e.target.name);
    console.log(e.target.value);
    if(e.target.value && e.target.name != 'billmode'){
      fetch(url+'/master/route/routesByType',{
        ...fetchOption,
        body: JSON.stringify({
                              "routeType":e.target.value
                            })
      })
      .then(response => response.json())
      .then(data => {
        //check if the data is availble
        if(data.data && data.data !=''){
          console.log('routesByType :123 ',data);
          setRoutesByType(data.data);
          console.log('routesByType  --',routesByType);
        }
      })
      .catch();
    }
    //if the billmode
    if( e.target.name == 'billmode' && e.target.value == 0){
      //Credit
      console.log(e.target.value); 
      console.log(credits.current);
      credits.current.removeAttribute('readonly');
      credits.current.removeAttribute('disabled');
      currency.current.setAttribute('readonly',"readonly");
      currency.current.setAttribute('disabled',"disabled");
      balance.current.setAttribute('readonly',"readonly");
      balance.current.setAttribute('readonly',"readonly");
    }
    if( e.target.name == 'billmode' && e.target.value == 1){
      //MCCMNC

      console.log(balance.current);
      credits.current.setAttribute('readonly',"readonly");
      credits.current.setAttribute('disabled',"disabled");
      balance.current.removeAttribute('readonly');
      balance.current.removeAttribute('disabled');
      currency.current.removeAttribute('readonly');
      currency.current.removeAttribute('disabled');
    }
    if( e.target.name == 'billmode' && e.target.value == ''){
      console.log(balance.current);
      credits.current.setAttribute('readonly',"readonly");
      credits.current.setAttribute('disabled',"disabled");
      balance.current.setAttribute('readonly',"readonly");
      balance.current.setAttribute('readonly',"readonly");
      currency.current.setAttribute('readonly',"readonly");
      currency.current.setAttribute('readonly',"readonly");
    }
  }


  useEffect(() => {
    //get Route Type
    fetch(url+'/master/route/getRouteType',{
      ...fetchOption
    })
    .then(response => response.json())
    .then(data => {
      //check if the data is availble
      if(data.data && data.data !=''){
        console.log('Success:123 ',data);

        //data.data.map
        setRouteTypes(data.data);

        console.log('inside',routeTypes);
      }
    })
    .catch();
    //get Route Type
    fetch(url+'/master/get/currencies',{
      ...fetchOption
    })
    .then(response => response.json())
    .then(data => {
      //check if the data is availble
      if(data.data && data.data != ''){
        console.log('currencies',data);
        setCurrencies(data.data);

      }
    })
    .catch();

  }, []);
  return (
    <Layout>
      <div className="main-content horizontal-content">
        <div className="container">
          <div className="breadcrumb-header justify-content-between">
            <div className="my-auto">
              <div className="d-flex">
                <h4 className="content-title mb-0 my-auto">Client</h4>
                <span className="text-muted mt-1 tx-13 ms-2 mb-0">
                  / Connections
                </span>
              </div>
            </div>
            <div className="d-flex my-xl-auto right-content">
              <div className="pe-1 mb-xl-0">
                <button
                  type="button"
                  className="btn btn-info btn-icon me-2 btn-b"
                >
                  <i className="mdi mdi-filter-variant" />
                </button>
              </div>
              <div className="pe-1  mb-xl-0">
                <button type="button" className="btn btn-danger btn-icon me-2">
                  <i className="mdi mdi-star" />
                </button>
              </div>
              <div className="mb-xl-0">
                <button
                  type="button"
                  className="btn btn-warning  btn-icon me-2"
                >
                  <i className="mdi mdi-refresh" />
                </button>
              </div>
              <div className="mb-xl-0">
                <div className="btn-group dropdown">
                  <button type="button" className="btn btn-primary">
                    14 Aug 2019
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                    id="dropdownMenuDate"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle Dropdown</span>
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="dropdownMenuDate"
                    x-placement="bottom-end"
                  >
                    <a className="dropdown-item" href="#">
                      2015
                    </a>
                    <a className="dropdown-item" href="#">
                      2016
                    </a>
                    <a className="dropdown-item" href="#">
                      2017
                    </a>
                    <a className="dropdown-item" href="#">
                      2018
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-sm">
            <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
              <div className="card  box-shadow-0">
                <div className="card-header tx-medium bd-0 tx-white bg-primary">
                  Client Connections
                </div>
                <div className="card-body">
                  <form className="form-horizontal">
                    <div className="panel panel-primary tabs-style-2">
                      <div className=" tab-menu-heading">
                        <div className="tabs-menu1">
                          <ul className="nav panel-tabs main-nav-line">
                            <li><a href="#tab4" className="nav-link active" data-bs-toggle="tab">SMPP</a></li>
                            <li><a href="#tab5" className="nav-link" data-bs-toggle="tab">HTTP</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="panel-body tabs-menu-body main-content-body-right border">
                        <div className="tab-content">
                          <div className="tab-pane active" id="tab4">
                            <div className="row row-sm">
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">Route Type</p>
                                <select name="routeid" className="form-control" onChange={handleChange}>
                                  <option value="">Select Route</option>
                                  { 
                                    routeTypes.map(function(currentValue,index,arr){
                                        return <option key={index} value={currentValue.id}>{currentValue.title}</option>
                                    })
                                  }
                                </select>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">Route</p>
                                <select name="routetype" className="form-control form-control-sm select2-no-search" onChange={handleChange}>
                                  <option value="">Select Route Type</option>
                                  { 
                                    routesByType.map(function(currentValue,index,arr){
                                        return <option key={index} value={currentValue.id}>{currentValue.title}</option>
                                    })
                                  }
                                </select>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">Bill Mode</p>
                                <select name="billmode" className="form-control form-control" onChange={handleChange}>
                                  <option value="" label="Choose one"></option>
                                  <option value="0">Credit</option>
                                  <option value="1">MCCMNC</option>
                                </select>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">Credits</p>
                                <input
                                  className="form-control form-control"
                                  placeholder="Credits"
                                  type="number"
                                  readOnly
                                  disabled
                                  ref={ credits }
                                />
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">Balance</p>
                                <input
                                  className="form-control form-control"
                                  placeholder="Balance"
                                  type="number"
                                  readOnly
                                  disabled
                                  ref={ balance }
                                />
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">Currency</p>
                                <select className="form-control form-control-sm select2" readOnly disabled ref={currency} onChange={handleChange}>
                                  <option label="Choose one"></option>
                                  { 
                                    currencies.map(function(currentValue,index,arr){
                                        return <option key={index} value={currentValue.currency_code}>{currentValue.currency_code}</option>
                                    })
                                  }
                                </select>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">SSL Type</p>
                                <select data-ssl="Anil" className="form-control" ref={myRef}>
                                <option label="Select ONe" data-ssl="1">Select One</option>
                                  {
                                    
                                    Object.keys(SSLTypes).map((key, index) => {
                                      return <option value={key}>{SSLTypes[key]}</option>
                                    })
                                  }
                                </select>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p
                                  className="mg-b-10"
                                  data-bs-placement="left"
                                  data-bs-toggle="tooltip"
                                  title="Address Type Of Number"
                                >
                                  addrTON
                                </p>
                                <input
                                  className="form-control form-control"
                                  placeholder="Credits"
                                  type="text"
                                />
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p
                                  className="mg-b-10"
                                  data-bs-placement="left"
                                  data-bs-toggle="tooltip"
                                  title="Address Numbering Plan Indicator"
                                >
                                  addrNPI
                                </p>
                                <input
                                  className="form-control form-control"
                                  placeholder="Credits"
                                  type="text"
                                />
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">addrRange</p>
                                <input
                                  className="form-control form-control"
                                  placeholder="Address Range"
                                  type="text"
                                />
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">Priority</p>
                                <input
                                  className="form-control form-control"
                                  placeholder="Priority"
                                  type="text"
                                />
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">logLevel</p>
                                <select className="form-control form-control-sm select2-no-search">
                                  <option label="Choose one"></option>
                                  <option value="Firefox">1</option>
                                  <option value="Chrome">2</option>
                                  <option value="Safari">3</option>
                                  <option value="Opera">Verbose</option>
                                </select>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">System Type</p>
                                <input
                                  className="form-control form-control"
                                  placeholder="System Type"
                                  type="text"
                                />
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p
                                  className="mg-b-10"
                                  data-bs-placement="left"
                                  data-bs-toggle="tooltip"
                                  title="Data Coding Scheme"
                                >
                                  DSC
                                </p>
                                <input
                                  className="form-control form-control"
                                  placeholder="DCS"
                                  type="text"
                                />
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">SMS Capacity</p>
                                <input
                                  className="form-control form-control"
                                  placeholder="SMS Capacity"
                                  type="text"
                                />
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">SMS Capacity</p>
                                <input
                                  className="form-control form-control"
                                  placeholder="SMS Capacity"
                                  type="text"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane" id="tab5">
                          <div className="row row-sm">
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">HTTP Username</p>
                                <input
                                  className="form-control form-control"
                                  placeholder="SMS Capacity"
                                  type="text"
                                />                  
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">HTTP Password</p>
                                <input
                                  className="form-control form-control"
                                  placeholder="HTTP Password"
                                  type="text"
                                />
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">HTTP TOKEN</p>
                                <input
                                  className="form-control form-control"
                                  placeholder="HTTP TOKEN"
                                  type="text"
                                />
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">HTTP DLR TYPE</p>
                                <select className="form-control form-control-sm select2-no-search">
                                  <option label="Choose one"></option>
                                  <option value="0">GET</option>
                                  <option value="1">RECIEVE</option>
                                </select>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">HTTP DLR URL</p>
                                <input
                                  className="form-control form-control"
                                  placeholder="https://example.com/dlr"
                                  type="text"
                                />
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">HTTP DLR Method</p>
                                <select className="form-control form-control-sm select2-no-search">
                                  <option label="Choose one"></option>
                                  <option value="0">GET</option>
                                  <option value="1">POST</option>
                                </select>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">HTTP DLR Param Type</p>
                                <select className="form-control form-control-sm select2-no-search">
                                  <option label="Choose one"></option>
                                  <option value="0">Query</option>
                                  <option value="1">JSON</option>
                                  <option value="2">FORM DATA</option>
                                </select>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">HTTP Response Type</p>
                                <select className="form-control form-control-sm select2-no-search">
                                  <option label="Choose one"></option>
                                  <option value="0">Object</option>
                                  <option value="1">String</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row mb-0 mt-3 justify-content-end">
                      <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                          <p className="mg-b-10">Start Time</p>
                          <TimePicker
                          />
                      </div>
                      <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                          <p className="mg-b-10">Close Time</p>    
                      </div>
                      <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                          <p className="mg-b-10">TimeZone</p>
                          <Select options={options} />
                      </div>
                      <div>
                        <button type="submit" className="btn btn-success me-2">
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
