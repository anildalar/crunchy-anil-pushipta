import React from 'react'
import Layout from '../../component/Layout'
import { BreadCrumb } from '../../component/UI/BreadCrumb'

/**
* @author
* @function Credit
**/

export const Credit = (props) => {
    return (
        <Layout>
            <div className="main-content horizontal-content">
        {/* container opened */}
            <div className="container">
            <BreadCrumb></BreadCrumb>
        {/* row */}
        {/* your work start here */}
          <div classname="row row-sm">
  <div className="col-md-12">
    <div className="card">
      <div className="card-header bg-info">
        <h4 className="card-title" />
      </div>
      <div className="card-body">
        <form id="creditForm" >
          <div className="row">
            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="user_id">Users&nbsp; <sup className="text-danger">*</sup></label>
                <select className="select2 form-control custom-select" style={{width: '100%'}} required="required" id="user_id" name="user_id">
                  <option value />
                </select>
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="route">Route&nbsp; <sup className="text-danger">*</sup></label>
                <select className="form-control" id="route" name="route_id">
                  <option value>Select Route</option>
                </select>
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="inputEstimatedBudget">Action&nbsp; <sup className="text-danger">*</sup></label>
                <br />
                <div className="row">
                  <div className="col-2">
                    <div className="custom-control custom-radio">
                      <input className="custom-control-input" type="radio" id="option1" name="opration" defaultValue={0} defaultChecked="checked" required="required" />
                      <label htmlFor="option1" className="custom-control-label">Add</label>
                    </div>
                  </div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <div className="col-2">
                    <div className="custom-control custom-radio">
                      <input className="custom-control-input" type="radio" id="option2" name="opration" defaultValue={1} required="required" />
                      <label htmlFor="option2" className="custom-control-label" />
                    </div>
                  </div>
                </div>
                <div className="text-danger" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="inputEstimatedBudget">Update&nbsp; <sup className="text-danger">*</sup></label>
                <br />
                <div className="row">
                  <div className="col-2">
                    <div className="custom-control custom-radio">
                      <input className="custom-control-input" type="radio" id="option11" name="type" defaultValue={0} defaultChecked="checked" required="required" />
                      <label htmlFor="option11" className="custom-control-label">Credits</label>
                    </div>
                  </div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <div className="col-2">
                    <div className="custom-control custom-radio">
                      <input className="custom-control-input" type="radio" id="option22" name="type" defaultValue={1} required="required" />
                      <label htmlFor="option22" className="custom-control-label">Balance</label>
                    </div>
                  </div>
                </div>
                <div className="text-danger" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="amount">Amount&nbsp; <sup className="text-danger">*</sup></label>
                <input id="amount" type="number" min={0} step="any" name="amount" className="form-control" required="required" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="amount">&nbsp; </label>
                <input id="credits" type="number" className="form-control" readOnly="true" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label htmlFor="amount">&nbsp; </label>
                <input id="balance" type="text" className="form-control" readOnly="true" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <input type="submit" id="tbn" defaultValue="Save" className="btn btn-info" />
          </div>
        </form>
      </div>
      {/* /.card-body*/}
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