import React from "react";
import Layout from "../../component/Layout";

export default function ClientConnections() {
  return (
    <Layout>
      <div className="main-content horizontal-content">
        <div className="container">
          <div className="breadcrumb-header justify-content-between">
            <div className="my-auto">
              <div className="d-flex">
                <h4 className="content-title mb-0 my-auto">Client</h4>
                <span className="text-muted mt-1 tx-13 ms-2 mb-0">
                  / Connections
                </span>
              </div>
            </div>
            <div className="d-flex my-xl-auto right-content">
              <div className="pe-1  mb-xl-0">
                <button
                  type="button"
                  className="btn btn-info btn-icon me-2 btn-b"
                >
                  <i className="mdi mdi-filter-variant" />
                </button>
              </div>
              <div className="pe-1  mb-xl-0">
                <button type="button" className="btn btn-danger btn-icon me-2">
                  <i className="mdi mdi-star" />
                </button>
              </div>
              <div className="mb-xl-0">
                <button
                  type="button"
                  className="btn btn-warning  btn-icon me-2"
                >
                  <i className="mdi mdi-refresh" />
                </button>
              </div>
              <div className="mb-xl-0">
                <div className="btn-group dropdown">
                  <button type="button" className="btn btn-primary">
                    14 Aug 2019
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                    id="dropdownMenuDate"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle Dropdown</span>
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="dropdownMenuDate"
                    x-placement="bottom-end"
                  >
                    <a className="dropdown-item" href="#">
                      2015
                    </a>
                    <a className="dropdown-item" href="#">
                      2016
                    </a>
                    <a className="dropdown-item" href="#">
                      2017
                    </a>
                    <a className="dropdown-item" href="#">
                      2018
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-sm">
            <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
              <div className="card  box-shadow-0">
                <div className="card-header">
                  <h4 className="card-title mb-1">Default Form</h4>
                  <p className="mb-2">
                    It is Very Easy to Customize and it uses in your website
                    apllication.
                  </p>
                </div>
                <div className="card-body pt-0">
                  <form className="form-horizontal">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail3"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword3"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group mb-0 justify-content-end">
                      <div className="checkbox">
                        <div className="custom-checkbox custom-control">
                          <input
                            type="checkbox"
                            data-checkboxes="mygroup"
                            className="custom-control-input"
                            id="checkbox-2"
                          />
                          <label
                            htmlFor="checkbox-2"
                            className="custom-control-label mt-1"
                          >
                            Check me Out
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-0 mt-3 justify-content-end">
                      <div>
                        <button type="submit" className="btn btn-primary">
                          Sign in
                        </button>
                        <button type="submit" className="btn btn-secondary">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="main-content-label mg-b-5">
                    Form Input &amp; Textarea
                  </div>
                  <p className="mg-b-20">
                    It is Very Easy to Customize and it uses in your website
                    apllication.
                  </p>
                  <div className="row row-sm">
                    <div className="col-lg">
                      <input
                        className="form-control"
                        placeholder="Input box"
                        type="text"
                      />
                    </div>
                    <div className="col-lg mg-t-10 mg-lg-t-0">
                      <input
                        className="form-control"
                        placeholder="Input box (readonly)"
                        readOnly
                        type="text"
                      />
                    </div>
                    <div className="col-lg mg-t-10 mg-lg-t-0">
                      <input
                        className="form-control"
                        disabled
                        placeholder="Input box (disabled)"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="row row-sm mg-t-20">
                    <div className="col-lg">
                      <textarea
                        className="form-control"
                        placeholder="Textarea"
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-lg mg-t-10 mg-lg-t-0">
                      <textarea
                        className="form-control"
                        placeholder="Textarea (readonly)"
                        readOnly
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-lg mg-t-10 mg-lg-t-0">
                      <textarea
                        className="form-control"
                        disabled
                        placeholder="Texarea (disabled)"
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="main-content-label mg-b-5">
                    Form Input Sizes
                  </div>
                  <p className="mg-b-20">
                    It is Very Easy to Customize and it uses in your website
                    apllication.
                  </p>
                  <div className="row row-sm">
                    <div className="col-lg">
                      <input
                        className="form-control form-control-sm mg-b-20"
                        placeholder="Input sm box"
                        type="text"
                      />
                      <input
                        className="form-control mg-b-20"
                        placeholder="Input box"
                        type="text"
                      />
                      <input
                        className="form-control form-control-lg"
                        placeholder="Input lg box"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="main-content-label mg-b-5">
                    Valid State Input
                  </div>
                  <p className="mg-b-20">
                    It is Very Easy to Customize and it uses in your website
                    apllication.
                  </p>
                  <form className="needs-validation was-validated">
                    <div className="row row-sm">
                      <div className="col-lg-6">
                        <div className="form-group has-success mg-b-0">
                          <input
                            className="form-control"
                            placeholder="Input box (success state)"
                            required
                            type="text"
                            defaultValue="This is input"
                          />
                          <textarea
                            className="form-control mg-t-20"
                            placeholder="Textarea (success state)"
                            required
                            rows={3}
                            defaultValue={"This is textarea"}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 mg-t-20 mg-lg-t-0">
                        <div className="form-group has-danger mg-b-0">
                          <input
                            className="form-control"
                            placeholder="Input box (invalid state)"
                            required
                            type="text"
                          />
                          <textarea
                            className="form-control mg-t-20"
                            placeholder="Textarea (invalid state)"
                            required
                            rows={3}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="main-content-label mg-b-5">
                    Custom Checkboxes &amp; Radios
                  </div>
                  <p className="mg-b-20">
                    It is Very Easy to Customize and it uses in your website
                    apllication.
                  </p>
                  <div className="row">
                    <div className="col-lg-3">
                      <label className="ckbox">
                        <input type="checkbox" />
                        <span>Checkbox Unchecked</span>
                      </label>
                    </div>
                    <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                      <label className="ckbox">
                        <input defaultChecked type="checkbox" />
                        <span>Checkbox Checked</span>
                      </label>
                    </div>
                    <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                      <label className="ckbox">
                        <input disabled type="checkbox" />
                        <span>Checkbox Disabled</span>
                      </label>
                    </div>
                  </div>
                  <div className="row mg-t-10">
                    <div className="col-lg-3">
                      <label className="rdiobox">
                        <input name="rdio" type="radio" />{" "}
                        <span>Radio Unchecked</span>
                      </label>
                    </div>
                    <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                      <label className="rdiobox">
                        <input defaultChecked name="rdio" type="radio" />{" "}
                        <span>Radio Checked</span>
                      </label>
                    </div>
                    <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                      <label className="rdiobox">
                        <input disabled name="rdio" type="radio" />{" "}
                        <span>Radio Disabled</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="main-content-label mg-b-5">File Browser</div>
                  <p className="mg-b-20">
                    It is Very Easy to Customize and it uses in your website
                    apllication.
                  </p>
                  <div className="row row-sm">
                    <div className="col-sm-7 col-md-6 col-lg-4">
                      <div className="input-group file-browser">
                        <input
                          type="text"
                          className="form-control border-right-0 browse-file"
                          placeholder="choose"
                          readOnly
                        />
                        <label className="input-group-btn">
                          <span className="btn btn-default">
                            Browse{" "}
                            <input type="file" className="d-none" multiple />
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="main-content-label mg-b-5">
                    Toggle Switches
                  </div>
                  <p className="mg-b-20">
                    It is Very Easy to Customize and it uses in your website
                    apllication.
                  </p>
                  <div className="main-toggle-group-demo">
                    <div className="main-toggle">
                      <span />
                    </div>
                    <div className="main-toggle main-toggle-secondary">
                      <span />
                    </div>
                    <div className="main-toggle main-toggle-success">
                      <span />
                    </div>
                    <div className="main-toggle main-toggle-dark">
                      <span />
                    </div>
                  </div>
                  <div className="main-toggle-group-demo mg-t-10">
                    <div className="main-toggle on">
                      <span />
                    </div>
                    <div className="main-toggle main-toggle-secondary on">
                      <span />
                    </div>
                    <div className="main-toggle main-toggle-success on">
                      <span />
                    </div>
                    <div className="main-toggle main-toggle-dark on">
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="main-content-label mg-b-5">Input Groups</div>
                  <p className="mg-b-20">
                    It is Very Easy to Customize and it uses in your website
                    apllication.
                  </p>
                  <div className="row row-sm">
                    <div className="col-lg-4">
                      <div className="input-group mb-3">
                        <div className="input-group-text">
                          <span className="input-group-text" id="basic-addon1">
                            @
                          </span>
                        </div>
                        <input
                          aria-describedby="basic-addon1"
                          aria-label="Username"
                          className="form-control"
                          placeholder="Username"
                          type="text"
                        />
                      </div>
                      {/* input-group */}
                    </div>
                    <div className="col-lg-4">
                      <div className="input-group mb-3">
                        <input
                          aria-describedby="basic-addon2"
                          aria-label="Recipient's username"
                          className="form-control"
                          placeholder="Recipient's username"
                          type="text"
                        />
                        <div className="input-group-text">
                          <span className="input-group-text" id="basic-addon2">
                            @example.com
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="input-group mb-3">
                        <div className="input-group-text">
                          <span className="input-group-text">$</span>
                        </div>
                        <input
                          aria-label="Amount (to the nearest dollar)"
                          className="form-control"
                          type="text"
                        />
                        <div className="input-group-text">
                          <span className="input-group-text">.00</span>
                        </div>
                      </div>
                      {/* input-group */}
                    </div>
                  </div>
                  <div className="row row-sm">
                    <div className="col-lg-4">
                      <div className="input-group">
                        <div className="input-group-text">
                          <div className="input-group-text">
                            <label className="ckbox wd-16 mg-b-0">
                              <input className="mg-0" type="checkbox" />
                              <span />
                            </label>
                          </div>
                        </div>
                        <input
                          className="form-control"
                          placeholder="Text input with checkbox"
                          type="text"
                        />
                      </div>
                      {/* input-group */}
                    </div>
                    {/* col-4 */}
                    <div className="col-lg-4 mg-t-20 mg-lg-t-0">
                      <div className="input-group">
                        <div className="input-group-text">
                          <div className="input-group-text">
                            <label className="rdiobox wd-16 mg-b-0">
                              <input type="radio" />
                              <span />
                            </label>
                          </div>
                        </div>
                        <input
                          className="form-control"
                          placeholder="Text input with radiobox"
                          type="text"
                        />
                      </div>
                      {/* input-group */}
                    </div>
                    {/* col-4 */}
                    <div className="col-lg-4 mg-t-20 mg-lg-t-0">
                      <div className="input-group">
                        <input
                          className="form-control"
                          placeholder="Search for..."
                          type="text"
                        />{" "}
                        <span className="input-group-btn">
                          <button className="btn btn-primary" type="button">
                            <span className="input-group-btn">
                              <i className="fa fa-search" />
                            </span>
                          </button>
                        </span>
                      </div>
                      {/* input-group */}
                    </div>
                    {/* col-4 */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="main-content-label mg-b-5">Input Mask</div>
                  <p className="mg-b-20">
                    It is Very Easy to Customize and it uses in your website
                    apllication.
                  </p>
                  <div className="row row-sm">
                    <div className="col-lg-3">
                      <div className="input-group">
                        <div className="input-group-text">
                          <div className="input-group-text">Date:</div>
                        </div>
                        <input
                          className="form-control"
                          id="dateMask"
                          placeholder="MM/DD/YYYY"
                          type="text"
                        />
                      </div>
                      {/* input-group */}
                    </div>
                    {/* col-4 */}
                    <div className="col-lg-3 mg-t-20 mg-lg-t-0">
                      <div className="input-group">
                        <div className="input-group-text">
                          <div className="input-group-text">Phone:</div>
                        </div>
                        {/* input-group-text */}
                        <input
                          className="form-control"
                          id="phoneMask"
                          placeholder="(000) 000-0000"
                          type="text"
                        />
                      </div>
                      {/* input-group */}
                    </div>
                    <div className="col-lg-4 mg-t-20 mg-lg-t-0">
                      <div className="input-group">
                        <div className="input-group-text">
                          <div className="input-group-text">Phone + Ext.:</div>
                        </div>
                        {/* input-group-text */}
                        <input
                          className="form-control"
                          id="phoneExtMask"
                          placeholder="(000) 000-0000 ext 0000"
                          type="text"
                        />
                      </div>
                      {/* input-group */}
                    </div>
                    <div className="col-lg-2 mg-t-20 mg-lg-t-0">
                      <div className="input-group">
                        <div className="input-group-text">
                          <div className="input-group-text">SSN:</div>
                          {/* input-group-text */}
                        </div>
                        {/* input-group-text */}
                        <input
                          className="form-control"
                          id="ssnMask"
                          placeholder="000-00-0000"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="main-content-label mg-b-5">Color Picker</div>
                  <p className="mg-b-20">
                    It is Very Easy to Customize and it uses in your website
                    apllication.
                  </p>
                  <div>
                    <input id="colorpicker" type="text" />
                  </div>
                  <p className="mg-t-40 mg-b-10">
                    You can allow alpha transparency selection. Check out these
                    example.
                  </p>
                  <div>
                    <input id="showAlpha" type="text" />
                  </div>
                  <p className="mg-t-40 mg-b-10">
                    Show pallete only. If you'd like, spectrum can show the
                    palettes you specify, and nothing else.
                  </p>
                  <div>
                    <input id="showPaletteOnly" type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="main-content-label mg-b-5">
                    jQuery UI Date Picker
                  </div>
                  <p className="mg-b-20">
                    It is Very Easy to Customize and it uses in your website
                    apllication.
                  </p>
                  <div className="row row-sm mg-b-20">
                    <div className="input-group col-md-4">
                      <div className="input-group-text">
                        <div className="input-group-text">
                          <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6" />
                        </div>
                      </div>
                      <input
                        className="form-control fc-datepicker"
                        placeholder="MM/DD/YYYY"
                        type="text"
                      />
                    </div>
                  </div>
                  {/* wd-200 */}
                  <p className="mg-b-5">
                    Set the numberOfMonths option to an integer of 2 or more to
                    show multiple months in a single datepicker.
                  </p>
                  <div className="row row-sm mg-b-20">
                    <div className="input-group col-md-4">
                      <div className="input-group-text">
                        <div className="input-group-text">
                          <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6" />
                        </div>
                      </div>
                      <input
                        className="form-control"
                        id="datepickerNoOfMonths"
                        placeholder="MM/DD/YYYY"
                        type="text"
                      />
                    </div>
                  </div>
                  {/* wd-200 */}
                  <p className="mg-b-5">
                    Display the datepicker embedded in the page instead of in an
                    overlay.
                  </p>
                  <div className="fc-datepicker" />
                  <hr className="mg-y-30" />
                  <div className="main-content-label mg-b-5">
                    Datetimepicker
                  </div>
                  <p className="mg-b-20">
                    Datetimepicker style variant on top of AmazeUI
                    Datetimepicker.
                  </p>
                  <div className="row row-sm">
                    <div className="input-group col-md-4">
                      <div className="input-group-text">
                        <div className="input-group-text">
                          <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6" />
                        </div>
                      </div>
                      <input
                        className="form-control"
                        id="datetimepicker"
                        type="text"
                        defaultValue="2018-12-20 21:05"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="main-content-label mg-b-5">
                    Datetimepicker Style 2
                  </div>
                  <p className="mg-b-20">
                    It is Very Easy to Customize and it uses in your website
                    apllication.
                  </p>
                  <div className="row row-sm">
                    <div className="input-group col-md-4">
                      <div className="input-group-text">
                        <div className="input-group-text">
                          <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6" />
                        </div>
                      </div>
                      <input
                        className="form-control"
                        id="datetimepicker2"
                        type="text"
                        defaultValue="2018-12-20 21:05"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="main-content-label mg-b-5">
                    Datetimepicker Style 3
                  </div>
                  <p className="mg-b-20">
                    It is Very Easy to Customize and it uses in your website
                    apllication.
                  </p>
                  <div className="row row-sm">
                    <div className="wd-250 mg-b-20 col-md-4">
                      <div className="input-group">
                        <div className="input-group-text">
                          <div className="input-group-text">
                            <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6" />
                          </div>
                        </div>
                        <input
                          type="text"
                          defaultValue="January 20, 2019 09:00"
                          id="datetimepicker3"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="main-content-label mg-b-5">
                    Select<span className="tx-sserif">2</span>
                  </div>
                  <p className="mg-b-20">
                    It is Very Easy to Customize and it uses in your website
                    apllication.
                  </p>
                  <div className="row row-sm mg-b-20">
                    <div className="col-lg-4">
                      <p className="mg-b-10">Single Select</p>
                      <select className="form-control select2-no-search">
                        <option label="Choose one"></option>
                        <option value="Firefox">Firefox</option>
                        <option value="Chrome">Chrome</option>
                        <option value="Safari">Safari</option>
                        <option value="Opera">Opera</option>
                        <option value="Internet Explorer">
                          Internet Explorer
                        </option>
                      </select>
                    </div>
                    {/* col-4 */}
                    <div className="col-lg-4 mg-t-20 mg-lg-t-0">
                      <p className="mg-b-10">Single Select with Search</p>
                      <select className="form-control select2">
                        <option label="Choose one"></option>
                        <option value="Firefox">Firefox</option>
                        <option value="Chrome">Chrome</option>
                        <option value="Safari">Safari</option>
                        <option value="Opera">Opera</option>
                        <option value="Internet Explorer">
                          Internet Explorer
                        </option>
                      </select>
                    </div>
                    {/* col-4 */}
                    <div className="col-lg-4 mg-t-20 mg-lg-t-0">
                      <p className="mg-b-10">Single Select (Disabled)</p>
                      <select className="form-control select2" disabled>
                        <option label="Choose one"></option>
                        <option value="Firefox">Firefox</option>
                        <option value="Chrome">Chrome</option>
                        <option value="Safari">Safari</option>
                        <option value="Opera">Opera</option>
                        <option value="Internet Explorer">
                          Internet Explorer
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="row row-sm">
                    <div className="col-lg-4 mg-b-20 mg-lg-b-0">
                      <p className="mg-b-10">Multiple Select</p>
                      <select
                        className="form-control select2"
                        multiple="multiple"
                      >
                        <option value="Firefox">Firefox</option>
                        <option value="Chrome">Chrome</option>
                        <option value="Safari">Safari</option>
                        <option value="Opera">Opera</option>
                        <option value="Internet Explorer">
                          Internet Explorer
                        </option>
                      </select>
                    </div>
                    <div className="col-lg-4 mg-b-20 mg-lg-b-0">
                      <p className="mg-b-10">
                        Multiple Select with Pre-Filled Input
                      </p>
                      <select
                        className="form-control select2"
                        multiple="multiple"
                      >
                        <option selected value="Firefox">
                          Firefox
                        </option>
                        <option value="Chrome">Chrome</option>
                        <option value="Safari">Safari</option>
                        <option value="Opera">Opera</option>
                        <option value="Internet Explorer">
                          Internet Explorer
                        </option>
                      </select>
                    </div>
                    <div className="col-lg-4">
                      <p className="mg-b-10">Multiple Select (Disabled)</p>
                      <select
                        className="form-control select2-no-search"
                        disabled
                        multiple="multiple"
                      >
                        <option selected value="Firefox">
                          Firefox
                        </option>
                        <option value="Chrome">Chrome</option>
                        <option value="Safari">Safari</option>
                        <option value="Opera">Opera</option>
                        <option value="Internet Explorer">
                          Internet Explorer
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
