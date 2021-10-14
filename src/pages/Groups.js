import React from 'react'
import Layout from '../component/Layout'

/**
* @author
* @function Groups
**/

export const Groups = (props) => {
  return(
    <Layout>
            {/* main-content opened */}
            <div className="main-content horizontal-content">
                {/* container opened */}
                <div className="container">
                    {/* breadcrumb */}
                    <div className="breadcrumb-header justify-content-between">
                        <div className="my-auto">
                            <div className="d-flex">
                                <h4 className="content-title mb-0 my-auto">Pages</h4><span className="text-muted mt-1 tx-13 ms-2 mb-0">/ Empty</span>
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
                    {/* breadcrumb */}
                    {/* row  your work start here */}
                    <div className="row">
                        <div className="col-3">
                            <div className="card">
                                <div className="card-header p-2 text-white rounded-0" style={{ background: "#03a9f3" }}>
                                <h5>Create Group</h5>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="group" className="form-label">Group Name  *</label>
                                            <input type="text" className="form-control" id="group" aria-describedby="emailHelp" />

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="Description" className="form-label">Description  *</label>
                                            <textarea type="password" className="form-control" id="exampleInputPassword1" ></textarea>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="Description" className="form-label">Status  *</label>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>select status</option>

                                                <option value="" >active</option>
                                                <option value="">inactive</option>
                                            </select>
                                        </div>

                                        <button type="button" className="btn " style={{ background: "#03a9f3" }}>Save</button>
                                        <button type="button" className="btn  ms-2" style={{ background: "#dea701" }}>clear</button>
                                    </form>

                                </div>
                            </div>


                        </div>
                        <div className="col-9">
                            <div className="card">
                                <div className="card-header text-white p-2 rounded-0" style={{ background: "#03a9f3" }}>
                                    <h5>Create Group</h5>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* row closed  end here*/}
                </div>
                {/* Container closed */}
            </div>
            {/* main-content closed */}
        </Layout>
   )

 }