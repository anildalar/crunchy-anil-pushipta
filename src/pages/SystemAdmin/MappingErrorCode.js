import React from 'react'
import Layout from '../../component/Layout'
import { BreadCrumb } from '../../component/UI/BreadCrumb'

/**
* @author
* @function MappingErrorCode
**/

export const MappingErrorCode = (props) => {
    return (
        <Layout>
            <div className="main-content horizontal-content">
                {/* container opened */}
                <div className="container">
                    {/* breadcrumb */}
                    <BreadCrumb></BreadCrumb>
                    {/* breadcrumb */}
                    {/* row */}
                    {/* your work start here */}
                    <div className="row row-sm">
                        <div className="col-xl-5">
                            <div className="card">
                                <div className="card-header bg-info">
                                    <h4 className="mb-0 text-white card-title">Mapping Error Code</h4>
                                </div>
                                <form id="">
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="vender">Vender</label>
                                            <select className="form-control" name="vender" id="vender" required="required">
                                                <option value="">Select One</option>
                                                <option value="0">hello</option>
                                                <option value="1">hello1</option>
                                                <option value="2">hello2</option>
                                            </select>
                                            <span className="text-danger error"></span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="vendererrorcode">Vender Error Code</label>
                                            <select className="form-control" name="vendererrorcode" id="vendererrorcode" required="required">
                                                <option value="">Select One</option>
                                                <option value="0">hello</option>
                                                <option value="1">hello1</option>
                                                <option value="2">hello2</option>
                                            </select>
                                            <span className="text-danger error"></span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="sysvencode">System vender Code</label>
                                            <select className="form-control" name="sysvencode" id="sysvencode" required="required">
                                                <option value="">Select One</option>
                                                <option value="0">hello</option>
                                                <option value="1">hello1</option>
                                                <option value="2">hello2</option>
                                            </select>
                                            <span className="text-danger error"></span>
                                        </div>

                                    </div>
                                </form>
                            </div>
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