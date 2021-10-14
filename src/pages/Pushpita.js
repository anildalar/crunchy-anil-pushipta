import React from 'react'
import Layout from "../component/Layout";
import Sidebar from "../component/Sidebar";
/**
* @author
* @function Pushpita
**/

const Pushpita = (props) => {
  return (
    <Layout>
      <div className="main-content horizontal-content">
        {/* container opened */}
        <div className="container">
          {/* breadcrumb */}
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
          {/* row */}
          {/* your work start here */}
          <div className="row row-sm">
            
          </div>
          {/* your work end here */}
          {/* row close */}
        </div>
        {/* Container closed */}
      </div>

      <Sidebar></Sidebar>
    </Layout>

  )

}
export default Pushpita;