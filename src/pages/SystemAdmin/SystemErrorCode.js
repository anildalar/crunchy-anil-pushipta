import React from 'react'
import { useTranslation } from 'react-i18next';
import Layout from '../../component/Layout'
import { BreadCrumb } from '../../component/UI/BreadCrumb'

/**
* @author
* @function SystemErrorCode
**/

export const SystemErrorCode = (props) => {
    const { t } = useTranslation();
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
                                    <h4 className="mb-0 text-white card-title">System Error Code</h4>
                                </div>
                                <form id="">
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="commands">Commands &nbsp;<sup className="text-danger">*</sup></label>
                                            <select className="form-control" name="commands" id="commands " required="required">
                                                <option value="">Select One</option>
                                                <option value="0">hello</option>
                                                <option value="1">hello1</option>
                                                <option value="2">hello2</option>
                                            </select>
                                            <span className="text-danger error"></span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="codetype">Code Type &nbsp;<sup className="text-danger">*</sup></label>
                                            <select className="form-control" name="codetype" id="codetype " required="required">
                                                <option value="">Select One</option>
                                                <option value="0">hello</option>
                                                <option value="1">hello1</option>
                                                <option value="2">hello2</option>
                                            </select>
                                            <span className="text-danger error"></span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="statuscode">Status Code</label>
                                            <input type="text" className="form-control" name="statuscode" id="statuscode" required="required" />
                                            <span className="text-danger error"></span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="errorcode">Error Code</label>
                                            <input type="number" className="form-control" name="errorcode" id="errorcode" required="required" />
                                            <span className="text-danger error"></span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="description">Description</label>
                                            <input type="text" className="form-control" name="description" id="description" />
                                            <span className="text-danger error"></span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="retry">ReTry</label>
                                            <select className="form-control" name="retry" id="retry" required="required">
                                                <option selected value="0">No</option>
                                                <option value="1">Yes</option>
                                            </select>
                                            <span className="text-danger error"></span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="refund">Refund</label>
                                            <select className="form-control" name="refund" id="refund" required="required">
                                                <option selected value="0">No</option>
                                                <option value="1">Yes</option>
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