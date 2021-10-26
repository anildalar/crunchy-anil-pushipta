import React from 'react'
import Layout from '../../component/Layout'
import { BreadCrumb } from '../../component/UI/BreadCrumb'

/**
* @author
* @function SendSMS
**/

export const SendSMS = (props) => {
    return (
        <Layout>
            <div className="main-content horizontal-content">
                {/* container opened */}
                <div className="container">
                    <BreadCrumb></BreadCrumb>
                    {/* row */}
                    {/* your work start here */}
                    <div className="row row-sm">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header bg-info">
                                    <h4 className="mb-0 text-white">Send SMS</h4>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <div className="row ">
                                                <div className="col-sm-6">
                                                    <label htmlFor="route">Route&nbsp;<sup className="text-danger">*</sup></label>
                                                    <select className="form-control" name="route" id="route">
                                                        <option value>Select Route</option>
                                                        <option value="L2RGWGtjbkdWU3FSc2JUSE14d3diQT09">High Quality</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4" />
                                        <div className="col-sm-8">
                                            <div className="row mt-3">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="campaign_name">CAMPAIGN NAME</label>
                                                        <input type="text" name="campaign_name" id="campaign_name" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="converage">Coverage&nbsp;<sup className="text-danger">*</sup></label><br />
                                                        <select className="form-control select2" id="converage" name="converage" required="required" placehodler="anil">
                                                            <option value data-id>Select Coverage</option>
                                                            <option value={33} data-id={76}>France( +33 )</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <label htmlFor="sourceAddr">Sender ID<sup className="text-danger">*</sup></label>
                                                    <div id="senderFiels">
                                                        <input type="text" id="sourceAddr" list="sourceAddr" name="sourceAddr" className="form-control" required="required" />
                                                    </div>
                                                    <datalist id="sourceAddr">
                                                    </datalist>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4" />
                                        <div className="col-sm-8">
                                            <div className="form-group">
                                                <label htmlFor="destinationAddr">To&nbsp;<sup className="text-danger">*</sup></label>
                                                <textarea id="destinationAddr" name="destinationAddr" className="form-control" rows={3} placeholder=" 1234567890, 0123456789, 2548756255" required="required" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-sm-4" />
                                        <div className="col-sm-8">
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-sm-2"><strong>SMS Type</strong></div>
                                                    <div className="col-sm-2">
                                                        <div className="custom-control custom-radio">
                                                            <input className="custom-control-input" type="radio" id="option1" name="dataCoding" defaultValue={0} defaultChecked="checked" required="required" />
                                                            <label htmlFor="option1" className="custom-control-label">Plain</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <div className="custom-control custom-radio">
                                                            <input className="custom-control-input" type="radio" id="option2" name="dataCoding" defaultValue={8} required="required" />
                                                            <label htmlFor="option2" className="custom-control-label">Unicode</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mt-2">
                                                    <div className="col-sm-4">
                                                        <label htmlFor="message">Message&nbsp;<sup className="text-danger">*</sup></label>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <select id="languageDropDown" name="languageDropDown" className="form-control" disabled="disabled" style={{ display: 'none' }}>
                                                            <option value="hi">Hindi</option>
                                                            <option value="bn">Bengali</option>
                                                            <option value="fa">Persian</option>
                                                            <option value="gu">Gujarati</option>
                                                            <option value="kn">Kannada</option>
                                                            <option value="ml">Malayalam</option>
                                                            <option value="mr">Marathi</option>
                                                            <option value="ne">Nepali</option>
                                                            <option value="pa">Panjabi</option>
                                                            <option value="ta">Tamil</option>
                                                            <option value="te">Telugu</option>
                                                            <option value="ur">Urdu</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <textarea rows={4} id="message" name="message" className="form-control" required="required" defaultValue={""} />
                                                <div className="form-group">
                                                    <label htmlFor="Characters" className="control-label">Characters :</label>
                                                    <input type="text" id="txtcount" readOnly="readonly" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="collapse multi-collapse" id="collapseExample">
                                                <div className="card">
                                                    <div className="card-header bg-info py-0">SMS Count information</div>
                                                    <div className="card-body" id="smscounttext">
                                                        Text Message:<br />
                                                        160 Characters = 1 SMS,<br />
                                                        306 Characters = 2 SMS,<br />
                                                        ...,<br />
                                                        765 Characters = 5 SMS,
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <label htmlFor="inputEstimatedBudget">Is Flash SMS</label>
                                        <div className="row">
                                            <div className="col-sm-2">
                                                <div className="custom-control custom-radio">
                                                    <input className="custom-control-input" type="radio" id="flash1" name="flash" defaultValue={0} defaultChecked="checked" required="required" />
                                                    <label htmlFor="flash1" className="custom-control-label">No</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="custom-control custom-radio">
                                                    <input className="custom-control-input" type="radio" id="flash2" name="flash" defaultValue={1} required="required" />
                                                    <label htmlFor="flash2" className="custom-control-label">Yes</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4" />
                                    <div className="col-sm-8">
                                        <label htmlFor="inputSpentBudget">Time to Send SMS</label>
                                        <div className="row">
                                            <div className="col-sm-2">
                                                <div className="custom-control custom-radio">
                                                    <input className="custom-control-input" type="radio" id="customRadio1" name="sheduletype" defaultValue="now" defaultChecked="checked" required="required" />
                                                    <label htmlFor="customRadio1" className="custom-control-label">Now</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="custom-control custom-radio float-sm-right">
                                                    <input className="custom-control-input" type="radio" id="customRadio2" name="sheduletype" defaultValue="after" required="required" />
                                                    <label htmlFor="customRadio2" className="custom-control-label">Schedule</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mt-3">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text d-block h-100"><i className="far fa-calendar-alt mt-2" /></span>
                                                </div>
                                                <input type="datetime-local" id="sheduletime" name="sheduletime" className="form-control float-right" disabled="disabled" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-success submitBtn">Send SMS</button>
                                        </div>
                                    </div>
                                </div>
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