import React from 'react'
import Header from '../../component/Header'

function SenderId_Rul() {
    return (
        <React.Fragment>
            <Header />
            <div className="main-content horizontal-content">
                <div className="container">
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
                                    <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" id="dropdownMenuDate" data-bs-toggle="dropdown"
                                        aria-expanded="false">
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
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-header bg-info">
                                    <h4 className="mb-0 text-white">Sender Id Rules </h4>
                                </div>
                                <div className="card-body">
                                    <form id="realform" method="post">
                                        <input type="hidden" name="csrf_test_name" defaultValue="8c5e4dbc0d371c9fbf96a58ef3655be7" />
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="country_id">Country&nbsp;<sup className="text-danger">*</sup></label>
                                                    <select className="form-control form-control-sm" id="country_id" name="country_id" required="required">
                                                        <option value>Select Country</option>
                                                        <option value={1}>Afghanistan</option>";
                                                        <option value={2}>Albania</option>";
                                                    </select>
                                                    <div className="text-danger" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="senderid_setting">Sender id setting&nbsp;<sup className="text-danger">*</sup></label>
                                                    <select className="form-control form-control-sm" id="senderid_setting" name="senderid_setting" required="required">
                                                        <option value={0}>Dynamic</option>
                                                        <option value={1}>Verification</option>
                                                    </select>
                                                    <div className="text-danger" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group mb-3">

                                                    <div className="text-danger" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group mb-3">
                                                    <button type="submit" className="btn btn-sm btn-info float-left" name="sumit">Save</button>
                                                    <button type="button" id="dynamic-fields" className="btn btn-sm btn-warning float-right rounded-circle" data-toggle="tooltip" data-original-title="Dynamic Fields"><i className="fas fa-plus" /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                
                            </div>

                       
                        </div>
                        <div class="col-sm-8">
				<div class="row">
					<div class="col-sm-12 d-none" id="dynamic">
						<form id="dynamicFieldHendler">
							<div class="card">
								<div class="card-header bg-info">
				                    <h4 class="mb-0 text-white">Dynamic Fields </h4>
				                </div>
								<div class="card-body pb-0" id="dy-field">
								</div>
								<div class="form-group pl-3 mb-2">
									<button type="submit" class="btn btn-sm btn-info">Add</button>
									<button type="button" id="hide-dynamic-field" class="btn btn-sm btn-warning">Clear</button>
								</div>
							</div>
						</form>
					</div>
					<div class="col-sm-12">
						<div class="card">
							<div class="card-header bg-info">
								<h4 class="mb-0 text-white">Dynamic Fields </h4>
		              		</div>
							<div class="card-body">
								<div class="table-responsive">
									<table class="table table-striped">
										<tbody id="dy-tbl">
											
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SenderId_Rul
