import React from "react";
import Layout from "../../component/Layout";

export default function ClientConnections() {
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
              <div className="pe-1  mb-xl-0">
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
                <div className="card-header">
                  
                </div>
                <div className="card-body pt-0">
                  <form className="form-horizontal">
                    <div className="row row-sm">
                      <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                        <p className="mg-b-10">Route Type</p>
                        <select className="form-control form-control-sm select2-no-search">
                          <option label="Choose one"></option>
                          <option value="Firefox">Firefox</option>
                          <option value="Chrome">Chrome</option>
                          <option value="Safari">Safari</option>
                          <option value="Opera">Opera</option>
                          <option value="Internet Explorer">
                            Internet Explorer
                          </option>
                        </select>
                      </div>
                      <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                        <p className="mg-b-10">Route</p>
                        <select className="form-control form-control-sm select2-no-search">
                          <option label="Choose one"></option>
                          <option value="Firefox">Firefox</option>
                          <option value="Chrome">Chrome</option>
                          <option value="Safari">Safari</option>
                          <option value="Opera">Opera</option>
                          <option value="Internet Explorer">
                            {" "}
                            Internet Explorer{" "}
                          </option>
                        </select>
                      </div>
                      <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                        <p className="mg-b-10">Bill Mode</p>
                        <select className="form-control form-control-sm select2-no-search">
                          <option label="Choose one"></option>
                          <option value="Firefox">Firefox</option>
                          <option value="Chrome">Chrome</option>
                          <option value="Safari">Safari</option>
                          <option value="Opera">Opera</option>
                          <option value="Internet Explorer">
                            {" "}
                            Internet Explorer{" "}
                          </option>
                        </select>
                      </div>
                      <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                        <p className="mg-b-10">Balance</p>
                        <input
                          className="form-control form-control"
                          placeholder="Balance"
                          type="text"
                        />
                      </div>
                      <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                        <p className="mg-b-10">Credits</p>
                        <input
                          className="form-control form-control"
                          placeholder="Credits"
                          type="text"
                        />
                      </div>
                      <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                        <p className="mg-b-10">Currency</p>
                        <select className="form-control form-control-sm select2-no-search">
                          <option label="Choose one"></option>
                          <option value="Firefox">Firefox</option>
                          <option value="Chrome">Chrome</option>
                          <option value="Safari">Safari</option>
                          <option value="Opera">Opera</option>
                          <option value="Internet Explorer">
                            {" "}
                            Internet Explorer{" "}
                          </option>
                        </select>
                      </div>
                      <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                        <p className="mg-b-10">SSL Type</p>
                        <select className="form-control form-control-sm select2-no-search">
                          <option label="Choose one"></option>
                          <option value="Firefox">Firefox</option>
                          <option value="Chrome">Chrome</option>
                          <option value="Safari">Safari</option>
                          <option value="Opera">Opera</option>
                          <option value="Internet Explorer">
                            {" "}
                            Internet Explorer{" "}
                          </option>
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
                    <div className="form-group mb-0 mt-3 justify-content-end">
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
