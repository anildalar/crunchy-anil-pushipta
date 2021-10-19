import React, { useEffect, useRef, useState } from 'react'
import Header from '../../component/Header'
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function SenderId_Rul() {
    const inputRef = useRef();
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    useEffect(() => {
        console.log(editorState);
    }, [editorState]);
    const addDynfield = () => {
        inputRef.current.classList.remove('d-none');
    }
    const removeDynfield = () => {
        inputRef.current.classList.add('d-none');
    }
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
                                                        <option value={1}>Afghanistan</option>
                                                        <option value={2}>Albania</option>
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
                                                    <div className="form-group mb-3" />
                                                    <span>Description</span>
                                                    <div style={{ border: "1px solid black", padding: '2px', minHeight: '300px' }}>
                                                        <Editor
                                                            editorState={editorState}
                                                            onEditorStateChange={setEditorState}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group mb-3">

                                                    <div className="text-danger" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group mb-3">
                                                    <button type="submit" className="btn btn-sm btn-info float-start" name="sumit">Save</button>
                                                    <button onClick={addDynfield} type="button" id="dynamic-fields" className="btn btn-sm btn-warning float-end rounded-circle" data-toggle="tooltip" data-original-title="Dynamic Fields"><i className="fas fa-plus" /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <div class="row">
                                <div className="col-sm-12 d-none" id="dynamic " ref={inputRef}>
                                    <form id="dynamicFieldHendler">
                                        <div className="card">
                                            <div className="card-header bg-info">
                                                <h4 className="mb-0 text-white">Dynamic Fields </h4>
                                            </div>
                                            <div className="card-body pb-0" id="dy-field">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="form-group mb-2">
                                                            <label htmlFor="label">Input Label&nbsp;<sup className="text-danger">*</sup></label>
                                                            <input type="text" name="label" id="label" required="required" className="form-control form-control-sm" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group mb-2">
                                                            <label htmlFor="input_name">Input Name&nbsp;<sup className="text-danger">*</sup></label>
                                                            <input type="text" name="input_name" id="input_name" required="required" className="form-control form-control-sm" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group mb-2">
                                                            <label htmlFor="input_type">Input Type&nbsp;<sup className="text-danger">*</sup></label>
                                                            <select className="form-control form-control-sm" id="input_type" name="input_type" required="required">
                                                                <option value="text" selected="selected">Text</option>
                                                                <option value="select">Select</option>
                                                                <option value="textarea">Textarea</option>
                                                                <option value="number">Number</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group mb-2">
                                                            <label htmlFor="value">Input Value&nbsp;<sup className="text-danger">*</sup></label>
                                                            <input type="text" name="value" id="value" className="form-control form-control-sm" />
                                                            <p className="mb-0">Value sparated by comma</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group mb-2">
                                                            <label htmlFor="required">Required&nbsp;<sup className="text-danger">*</sup></label>
                                                            <select className="form-control form-control-sm" id="required" name="required" required="required">
                                                                <option value={0}>No</option>
                                                                <option value={1}>Yes</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group mb-2">
                                                            <label htmlFor="column">Grid column&nbsp;<sup className="text-danger">*</sup></label>
                                                            <input type="number" min={1} max={12} name="column" id="column" defaultValue={12} className="form-control form-control-sm" />
                                                            <p className="mb-0">1-12</p>
                                                        </div>
                                                    </div>
                                                </div></div>
                                            <div className="form-group pe-3 mb-2">
                                                <button type="submit" className="btn btn-sm btn-info pe-2">Add</button>
                                                <button onClick={removeDynfield} type="button" id="hide-dynamic-field" className="btn btn-sm btn-warning">Clear</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
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
