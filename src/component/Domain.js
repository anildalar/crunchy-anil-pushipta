import React from 'react'
import Layout from "./Sidebar";
import Sidebar from "./Layout";

export default function Domain() {
    return (
    <Layout>
        <div className="main-content horizontal-content">
          <div className="container">
            
            
            <div className="row row-sm">
              <div className="col-xl-4 col-md-12 col-lg-12">
                
              </div>
              <div className="col-xl-4 col-md-12 col-lg-6">
                <div className="card">
                  <div className="card-header pb-1">
                    <h3 className="card-title mb-2">Sales Activity</h3>
                    <p className="tx-12 mb-0 text-muted">
                      Sales activities are the tactics that salespeople use to
                      achieve their goals and objective
                    </p>
                  </div>
                  <div className="product-timeline card-body pt-2 mt-1">
                    <ul className="timeline-1 mb-0">
                      <li className="mt-0" id="mrg-8">
                        {" "}
                        <i className="ti-pie-chart bg-primary-gradient text-white product-icon" />{" "}
                        <span className="fw-semibold mb-4 tx-14 ">
                          Total Products
                        </span>{" "}
                        <a href="#" className="float-end tx-11 text-muted">
                          3 days ago
                        </a>
                        <p className="mb-0 text-muted tx-12">
                          1.3k New Products
                        </p>
                      </li>
                      <li className="mt-0" id="mrg-8">
                        {" "}
                        <i className="mdi mdi-cart-outline bg-danger-gradient text-white product-icon" />{" "}
                        <span className="fw-semibold mb-4 tx-14 ">
                          Total Sales
                        </span>{" "}
                        <a href="#" className="float-end tx-11 text-muted">
                          35 mins ago
                        </a>
                        <p className="mb-0 text-muted tx-12">1k New Sales</p>
                      </li>
                      <li className="mt-0" id="mrg-8">
                        {" "}
                        <i className="ti-bar-chart-alt bg-success-gradient text-white product-icon" />{" "}
                        <span className="fw-semibold mb-4 tx-14 ">
                          Toatal Revenue
                        </span>{" "}
                        <a href="#" className="float-end tx-11 text-muted">
                          50 mins ago
                        </a>
                        <p className="mb-0 text-muted tx-12">
                          23.5K New Revenue
                        </p>
                      </li>
                      <li className="mt-0" id="mrg-8">
                        {" "}
                        <i className="ti-wallet bg-warning-gradient text-white product-icon" />{" "}
                        <span className="fw-semibold mb-4 tx-14 ">
                          Toatal Profit
                        </span>{" "}
                        <a href="#" className="float-end tx-11 text-muted">
                          1 hour ago
                        </a>
                        <p className="mb-0 text-muted tx-12">3k New profit</p>
                      </li>
                      <li className="mt-0" id="mrg-8">
                        {" "}
                        <i className="si si-eye bg-purple-gradient text-white product-icon" />{" "}
                        <span className="fw-semibold mb-4 tx-14 ">
                          Customer Visits
                        </span>{" "}
                        <a href="#" className="float-end tx-11 text-muted">
                          1 day ago
                        </a>
                        <p className="mb-0 text-muted tx-12">15% increased</p>
                      </li>
                      <li className="mt-0 mb-0" id="mrg-8">
                        {" "}
                        <i className="icon-note icons bg-primary-gradient text-white product-icon" />{" "}
                        <span className="fw-semibold mb-4 tx-14 ">
                          Customer Reviews
                        </span>{" "}
                        <a href="#" className="float-end tx-11 text-muted">
                          1 day ago
                        </a>
                        <p className="mb-0 text-muted tx-12">1.5k reviews</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-12 col-lg-6">
                <div className="card">
                  <div className="card-header pb-0">
                    <h3 className="card-title mb-2">Recent Orders</h3>
                    <p className="tx-12 mb-0 text-muted">
                      An order is an investor's instructions to a broker or
                      brokerage firm to purchase or sell
                    </p>
                  </div>
                  <div className="card-body sales-info ot-0 pt-0 pb-0">
                    <div id="chart" className="ht-150" />
                    <div className="row sales-infomation pb-0 mb-0 mx-auto wd-100p">
                      <div className="col-md-6 col">
                        <p className="mb-0 d-flex">
                          <span className="legend bg-primary brround" />
                          Delivered
                        </p>
                        <h3 className="mb-1">5238</h3>
                        <div className="d-flex">
                          <p className="text-muted ">Last 6 months</p>
                        </div>
                      </div>
                      <div className="col-md-6 col">
                        <p className="mb-0 d-flex">
                          <span className="legend bg-info brround" />
                          Cancelled
                        </p>
                        <h3 className="mb-1">3467</h3>
                        <div className="d-flex">
                          <p className="text-muted">Last 6 months</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card ">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="d-flex align-items-center pb-2">
                          <p className="mb-0">Total Sales</p>
                        </div>
                        <h4 className="fw-bold mb-2">$7,590</h4>
                        <div className="progress progress-style progress-sm">
                          <div
                            className="progress-bar bg-primary-gradient wd-80p"
                            role="progressbar"
                            aria-valuenow={78}
                            aria-valuemin={0}
                            aria-valuemax={78}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mt-4 mt-md-0">
                        <div className="d-flex align-items-center pb-2">
                          <p className="mb-0">Active Users</p>
                        </div>
                        <h4 className="fw-bold mb-2">$5,460</h4>
                        <div className="progress progress-style progress-sm">
                          <div
                            className="progress-bar bg-danger-gradient wd-75"
                            role="progressbar"
                            aria-valuenow={45}
                            aria-valuemin={0}
                            aria-valuemax={45}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-sm row-deck">
              <div className="col-md-12 col-lg-4 col-xl-4">
                <div className="card card-dashboard-eight pb-2">
                  <h6 className="card-title">Your Top Countries</h6>
                  <span className="d-block mg-b-10 text-muted tx-12">
                    Sales performance revenue based by country
                  </span>
                  <div className="list-group border-top-0">
                    <div className="list-group-item border-top-0" id="br-t-0">
                      <i className="flag-icon flag-icon-us flag-icon-squared" />
                      <p>United States</p>
                      <span>$1,671.10</span>
                    </div>
                    <div className="list-group-item">
                      <i className="flag-icon flag-icon-nl flag-icon-squared" />
                      <p>Netherlands</p>
                      <span>$1,064.75</span>
                    </div>
                    <div className="list-group-item">
                      <i className="flag-icon flag-icon-gb flag-icon-squared" />
                      <p>United Kingdom</p>
                      <span>$1,055.98</span>
                    </div>
                    <div className="list-group-item">
                      <i className="flag-icon flag-icon-ca flag-icon-squared" />
                      <p>Canada</p>
                      <span>$1,045.49</span>
                    </div>
                    <div className="list-group-item">
                      <i className="flag-icon flag-icon-in flag-icon-squared" />
                      <p>India</p>
                      <span>$1,930.12</span>
                    </div>
                    <div className="list-group-item border-bottom-0 mb-0">
                      <i className="flag-icon flag-icon-au flag-icon-squared" />
                      <p>Australia</p>
                      <span>$1,042.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-8 col-xl-8">
                <div className="card card-table-two">
                  <div className="d-flex justify-content-between">
                    <h4 className="card-title mb-1">
                      Your Most Recent Earnings
                    </h4>
                    <i className="mdi mdi-dots-horizontal text-gray" />
                  </div>
                  <span className="tx-12 tx-muted mb-3 ">
                    This is your most recent earnings for today's date.
                  </span>
                  <div className="table-responsive country-table">
                    <table className="table table-striped table-bordered mb-0 text-sm-nowrap text-lg-nowrap text-xl-nowrap">
                      <thead>
                        <tr>
                          <th className="wd-lg-25p">Date</th>
                          <th className="wd-lg-25p tx-right">Sales Count</th>
                          <th className="wd-lg-25p tx-right">Earnings</th>
                          <th className="wd-lg-25p tx-right">Tax Witheld</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>05 Dec 2019</td>
                          <td className="tx-right tx-medium tx-inverse">34</td>
                          <td className="tx-right tx-medium tx-inverse">
                            $658.20
                          </td>
                          <td className="tx-right tx-medium tx-danger">
                            -$45.10
                          </td>
                        </tr>
                        <tr>
                          <td>06 Dec 2019</td>
                          <td className="tx-right tx-medium tx-inverse">26</td>
                          <td className="tx-right tx-medium tx-inverse">
                            $453.25
                          </td>
                          <td className="tx-right tx-medium tx-danger">
                            -$15.02
                          </td>
                        </tr>
                        <tr>
                          <td>07 Dec 2019</td>
                          <td className="tx-right tx-medium tx-inverse">34</td>
                          <td className="tx-right tx-medium tx-inverse">
                            $653.12
                          </td>
                          <td className="tx-right tx-medium tx-danger">
                            -$13.45
                          </td>
                        </tr>
                        <tr>
                          <td>08 Dec 2019</td>
                          <td className="tx-right tx-medium tx-inverse">45</td>
                          <td className="tx-right tx-medium tx-inverse">
                            $546.47
                          </td>
                          <td className="tx-right tx-medium tx-danger">
                            -$24.22
                          </td>
                        </tr>
                        <tr>
                          <td>09 Dec 2019</td>
                          <td className="tx-right tx-medium tx-inverse">31</td>
                          <td className="tx-right tx-medium tx-inverse">
                            $425.72
                          </td>
                          <td className="tx-right tx-medium tx-danger">
                            -$25.01
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar />
    </Layout>
        // <div className="app-container">
        //     <table>
        //         <thead>
        //             <tr>
        //                 <th>IDID</th>
        //                 <th>Domin Url</th>
        //                 <th>Domin Title</th>
        //                 <th>Domin Type</th>
        //                 <th>Domin Logo</th>
        //                 <th>C</th>
                        
        //             </tr>
        //         </thead>
        //     </table>
        // </div >
    )
}
