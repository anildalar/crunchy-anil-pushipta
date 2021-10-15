import React from 'react'
import Header from '../../component/Header'

export default function Clinet_routing() {
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
                            <div classname="card ">
                                <div className="card-header bg-info px-2 py-1">
                                    <h5 className="m-2 text-white">SMPP Connection</h5>
                                </div>
                               <div className="card-body bg-white">
                                    <form method="post">
                                        <input type="hidden" name="csrf_test_name" defaultValue="67b8a119df747fe7507eeb73ebf6ab81" />
                                        <div className="row row-sm">
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <label htmlFor="carrier_id">Carrier&nbsp;<sup className="text-danger">*</sup></label>
                                                    <select className="form-control form-control-sm" id="carrier_id" name="carrier_id" data-target="product_idv" required="required">
                                                        <option value={0}>None</option>
                                                        <option value={1}>TCL Admin</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <label htmlFor="product_idv">Products</label>
                                                    <select className="form-control form-control-sm" id="product_idv" name="product_id"><option value>Select Product</option><option value={2} data-type="MCCMNC" data-currency="EUR">Promotional( 100.00000-EUR) </option><option value={5} data-type="MCCMNC" data-currency="EUR">Premium( 10.00000-EUR) </option><option value={6} data-type="MCC" data-currency="null">High Quality( 100) </option></select>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <label htmlFor="country_id">Countries</label>
                                                    <select className="form-control form-control-sm" id="country_id" name="country_id">
                                                        <option value={0}>None</option>
                                                        <option value={1}>Afghanistan</option>
                                                        <option value={2}>Albania</option>
                                                        <option value={3}>Algeria</option>
                                                       </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="form-group mt-1">
                                                    <input type="hidden" name="type" defaultValue="view" />
                                                    <button type="submit" className="btn btn-success btn-sm mt-4 me-1">Search</button>
                                                    <input type="reset" className="btn btn-info btn-sm mt-4" defaultValue="Reset" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                            </div>
                                        </div>
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
