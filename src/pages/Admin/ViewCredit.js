import React from 'react'
import Layout from '../../component/Layout'
import { BreadCrumb } from '../../component/UI/BreadCrumb'

/**
* @author
* @function ViewCredit
**/

export const ViewCredit = (props) => {
    return (
        <Layout>
            <div className="main-content horizontal-content">
                {/* container opened */}
                <div className="container">
                    <BreadCrumb></BreadCrumb>
                    {/* row */}
                    {/* your work start here */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header bg-info">
                                    <h4 className="card-title" />
                                </div>
                                <div className="card-body">
                                    <form id="searchCredit" method="POST" action="https://messaging.oklabs.in/admin/credits/getCredit">
                                        <input type="hidden" name="csrf_test_name" defaultValue="f08db5407693e827532b0edb80128271" />
                                        <div className="row">
                                            <div className="col-3">
                                                <div className="form-group">
                                                    <label htmlFor="user_id">Users&nbsp;<sup className="text-danger">*</sup></label>
                                                    <select className="form-control" id="user_id" name="user_id" required="required">
                                                        <option value />
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="form-group">
                                                    <label htmlFor="user_id">Route&nbsp;<sup className="text-danger">*</sup></label>
                                                    <select className="form-control" id="route" name="route_id" required="required">
                                                        <option value>Select Route</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <label htmlFor="start_date">Start Date&nbsp;<sup className="text-danger">*</sup></label>
                                                <input type="date" name="start_date" id="start_date" required="required" className="form-control" defaultValue="2021-10-26" />
                                            </div>
                                            <div className="col-3">
                                                <div className="form-group">
                                                    <label htmlFor="end_date">End Date&nbsp;<sup className="text-danger">*</sup></label>
                                                    <input type="date" name="end_date" id="end_date" required="required" className="form-control" defaultValue="2021-10-26" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary btn-sm" />
                                        </div>
                                    </form>
                                </div>
                                {/* /.card-body */}
                            </div>
                            {/* /.card */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header bg-info">
                                    <h4 className="card-title" />
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-bordered text-center">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Route</th>
                                                    <th>Operation</th>
                                                    <th>Credits</th>
                                                    <th />
                                                    <th />
                                                </tr>
                                            </thead>
                                            <tbody id="creditsTable">
                                                <tr>
                                                    <td>hello</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {/* /.card-body */}
                            </div>
                            {/* /.card */}
                        </div>
                    </div>


                    {/* your work end here */}
                    {/* row close */}
                </div>
                {/* Container closed */}
            </div>


        </Layout>
    )

}