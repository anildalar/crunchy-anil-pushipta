import React, { useState } from 'react'
import Layout from '../../component/Layout'
import { BreadCrumb } from '../../component/UI/BreadCrumb'

/**
* @author
* @function SMSReport
**/

export const SMSReport = (props) => {
    const[data,setData] = useState({
        "route":"",
        "startDate":"",
        "endDate":"",
        "reportType":""
    });

    const collectData =(e)=>{
        e.preventDefault();
        setData({...data,[e.target.name]:e.target.value});
       
    }
    const submit=(e)=>{
        e.preventDefault();
        console.log(data)
    }
    return (
        <Layout>
            <div className="main-content horizontal-content">
                {/* container opened */}
                <div className="container">
                    <BreadCrumb></BreadCrumb>
                    {/* row */}
                    {/* your work start here */}
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header bg-info">
                                    <h4 className="mb-0 text-white">Reports</h4>
                                </div>
                                <div className="card-body">
                                    <form >
                                        {/* anil */}
                                        <div className="row">
                                            <div className="col-3">
                                                <div className="form-group">
                                                    <label htmlFor="route">Route<sup className="text-danger">*</sup></label>
                                                    <select onChange={(e)=>{collectData(e)}} className="form-control form-control-sm" name="route" id="route" required="required">
                                                        <option value={29}>High Quality</option>
                                                    </select>
                                                    <div className="text-danger" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="form-group">
                                                    <label htmlFor="startDate">Start Date<sup className="text-danger">*</sup></label>
                                                    <input onChange={(e)=>{collectData(e)}} type="date" id="startDate" className="form-control form-control-sm" name="startDate" required="required"  />
                                                    <div className="text-danger" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="form-group">
                                                    <label htmlFor="route">End Date<sup className="text-danger">*</sup></label>
                                                    <input onChange={(e)=>{collectData(e)}} type="date" id="endDate" className="form-control form-control-sm" name="endDate" required="required"  />
                                                    <div className="text-danger" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="form-group">
                                                    <label htmlFor="reportType ">Report Type<sup className="text-danger">*</sup></label>
                                                    <select onChange={(e)=>{collectData(e)}} className="form-control form-control-sm" name="reportType" id="reportType" required="required">
                                                        <option value="ALL">All</option>
                                                        <option value="SCHEDULED">SCHEDULED</option>
                                                        <option value="ENROUTE">ENROUTE</option>
                                                        <option value="DELIVRD">DELIVRD</option>
                                                        <option value="EXPIRED">EXPIRED</option>
                                                        <option value="DELETED">DELETED</option>
                                                        <option value="UNDELIV">UNDELIV</option>
                                                        <option value="ACCEPTED">ACCEPTED</option>
                                                        <option value="UNKNOWN">UNKNOWN</option>
                                                        <option value="REJECTED">REJECTED</option>
                                                        <option value="SKIPPED">SKIPPED</option>
                                                    </select>
                                                    <div className="text-danger" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button onClick={(e)=>{submit(e)}} type="submit"  className="btn btn-success" >Save</button>
                                        </div>
                                    </form>
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


        </Layout >
    )

}