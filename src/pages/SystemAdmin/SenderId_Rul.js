import React, { useEffect, useRef, useState } from 'react'

import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Layout from '../../component/Layout';
import BreadCrumb from '../../component/UI/BreadCrumb';
import TableData from './TableData';


function SenderId_Rul() {
    const inputRef = useRef();
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    const [hdleFld, setHdleFld] = useState([{
        "label": "",
        "input_name": "",
        "input_type": "",
        "value": "",
        "required": "",
        "column": ""
    }])
     let data = []
    const [dataTable, setDataTable] = useState([])
    useEffect(() => {
        console.log(editorState);
    }, [editorState]);
    const addDynfield = () => {
        inputRef.current.classList.remove('d-none');
    }
    const removeDynfield = () => {
        inputRef.current.classList.add('d-none');
    }
    const addField = (e) => {
        e.preventDefault();
        // alert("hello")
        setHdleFld({ ...hdleFld, [e.target.name]: e.target.value })
        console.log((hdleFld));
    }
    const addDataTable = (e) => {
        e.preventDefault();
        // setTableData({...hdleFld})
        // console.log(dataTbale)
       
        data.push(hdleFld )
        setDataTable(data)
        //console.log(dataTable)
    }

    return (
        <Layout>
            <div className="main-content horizontal-content">
                <div className="container">
                    <BreadCrumb></BreadCrumb>
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
                                                    <select className="form-control " id="country_id" name="country_id" required="required">
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
                                                    <select className="form-control form-control-lg" id="senderid_setting" name="senderid_setting" required="required">
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
                                                    <button type="submit" className="btn btn-info float-start" name="sumit">Save</button>
                                                    <button onClick={addDynfield} type="button" id="dynamic-fields" className="btn btn-warning float-end rounded-circle" data-toggle="tooltip" data-original-title="Dynamic Fields"><i className="fas fa-plus" /></button>
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
                                    <form onSubmit={addDataTable} id="dynamicFieldHendler">
                                        <div className="card">
                                            <div className="card-header bg-info">
                                                <h4 className="mb-0 text-white">Dynamic Fields </h4>
                                            </div>
                                            <div className="card-body pb-0" id="dy-field">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="form-group mb-2">
                                                            <label htmlFor="label">Input Label&nbsp;<sup className="text-danger">*</sup></label>
                                                            <input onChange={e => addField(e)} type="text" name="label" id="label" required="required" className="form-control form-control-lg" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group mb-2">
                                                            <label htmlFor="input_name">Input Name&nbsp;<sup className="text-danger">*</sup></label>
                                                            <input onChange={e => addField(e)} type="text" name="input_name" id="input_name" required="required" className="form-control form-control-lg" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group mb-2">
                                                            <label htmlFor="input_type">Input Type&nbsp;<sup className="text-danger">*</sup></label>
                                                            <select onChange={e => addField(e)} className="form-control form-control-lg" id="input_type" name="input_type" required="required">
                                                            <option value="">Select one</option>
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
                                                            <input onChange={e => addField(e)} type="text" name="value" id="value" className="form-control form-control-lg" />
                                                            <p className="mb-0">Value sparated by comma</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group mb-2">
                                                            <label htmlFor="required">Required&nbsp;<sup className="text-danger">*</sup></label>
                                                            <select onChange={e => addField(e)} className="form-control form-control-lg" id="required" name="required" required="required">
                                                            <option value="">Select one</option>
                                                                <option value={0}>No</option>
                                                                <option value={1}>Yes</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group mb-2">
                                                            <label htmlFor="column">Grid column&nbsp;<sup className="text-danger">*</sup></label>
                                                            <input onChange={e => addField(e)} type="number" min={1} max={12} name="column" id="column" defaultValue={12} className="form-control form-control-lg" />
                                                            <p className="mb-0">1-12</p>
                                                        </div>
                                                    </div>
                                                </div></div>
                                            <div className="form-group pe-3 mb-2">
                                                <button type="submit" className="btn btn-info pe-2">Add</button>
                                                <button onClick={removeDynfield} type="button" id="hide-dynamic-field" className="btn btn-warning">Clear</button>
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
                                                <button type="submit" class="btn btn-info">Add</button>
                                                <button type="button" id="hide-dynamic-field" class="btn btn-warning">Clear</button>
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
                                             {dataTable.map((e, index) => {
                                                                        
                                                            return( 
                                                            <tr>
                                                                <td> Input Label-{e.label}</td>
                                                                <td>Input_name-{e.input_name}</td>
                                                                <td>Input Type-{e.input_type}</td>
                                                                <td>Input Value-{e.value}</td>
                                                                <td>Required-{e.required}</td>
                                                                <td>Grid column-{e.column}</td>
                                                            </tr>)
                                                        })}


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
        </Layout>
    )
}

export default SenderId_Rul
