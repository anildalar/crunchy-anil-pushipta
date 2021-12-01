import React, { useState } from 'react'
import Layout from '../../component/Layout'
import { BreadCrumb } from '../../component/UI/BreadCrumb'
import * as XLSX from 'xlsx';
import swal from 'sweetalert';

/**
* @author
* @function ImportRateEditor
**/

export const ImportRateEditor = (props) => {
    const [files, setfiles] = useState();
    const [exceldata, setExcelData] = useState([]);
    const [excelheader, setExcelHeader] = useState([]);


    const handleInput = (e) => {
        e.preventDefault()


        // let val = e.target.value;
        // if (val == "insert") {
        //     document.getElementById("close_date").disabled = false;
        //     document.getElementById("effective_start_date").disabled = true;
        // } else if (val == "update") {
        //     document.getElementById("close_date").disabled = true;
        //     document.getElementById("effective_start_date").disabled = false;
        // } else {
        //     document.getElementById("close_date").disabled = false;
        //     document.getElementById("effective_start_date").disabled = false;
        // }
    }

    const excelFileRead = (e) => {
        e.preventDefault()
        var file = e.target.files[0];
        setfiles(files);
        //console.log(file)
        if (file.name.toLowerCase().lastIndexOf(".xlsx") == -1) {
            swal('Warning !', 'Please select .xlsx file.', 'warning');
            document.getElementById('priceList').value = ''
        } else {
            const excelreader = new FileReader();
            excelreader.onload = (evt) => {
                const bstr = evt.target.result
                const wb = XLSX.read(bstr, { type: 'binary' });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
                var xlexData = data.split(/\r\n|\n/);
                var filedata = [...xlexData]
                console.log("hello", filedata)
                setExcelData(filedata)
                console.log("hello", xlexData)
                let newExceldata = xlexData.splice(0, 1)
                let header = newExceldata.toString().split(",")
                setExcelHeader(header)

            };
            excelreader.readAsBinaryString(file);
            document.querySelector('.field_card').classList.remove('d-none')
        }
    }
    const submit = (e) => {
        e.preventDefault()
        console.log(excelheader)
        console.log(exceldata)
    }

    var opt = [];
    opt = exceldata.map((element, index) => {
        return (
            <option>{element}</option>
        )
    });
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
                        <div className="col-md-12">
                            <div className="card" style={{ background: 'none' }}>
                                <div className="card-header bg-info">
                                    <h4 className="mb-0 text-white">Import Rates</h4>
                                </div>
                                <div className="card-body">
                                    <form className action="http://192.168.1.47/smppsw/systemadmin/rate-editor/import-rates" method="post" encType="multipart/form-data">
                                        <input type="hidden" name="csrf_test_name" defaultValue="888c83a1daa610aff61c8ec7fea351e2" />
                                        <div className="row">
                                            <div className="col-sm-12 col-md-6 pr-4">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-sm-5">
                                                                <label htmlFor="header_row">header row:&nbsp;<sup className="text-danger">*</sup></label>
                                                            </div>
                                                            <div className="col-sm-7">
                                                                <input type="number" name="header_row" id="header_row" required="required" className="form-control form-control-sm" defaultValue={0} min={0} />
                                                                <div className="text-danger" />
                                                            </div>
                                                        </div>
                                                        <div className="row mt-3">
                                                            <div className="col-sm-5">
                                                                <label htmlFor="priceList">Price List File&nbsp;<sup className="text-danger">*</sup></label>
                                                            </div>
                                                            <div className="col-sm-7">
                                                                <div className="custom-file mb-3">
                                                                    <input onChange={e => excelFileRead(e)} type="file" className="custom-file-input form-control-sm" id="priceList" name="priceList" required="required" onchange="return excelFileProcess();" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                                                                    <label className="custom-file-label" htmlFor="priceList">Choose file</label>
                                                                </div>
                                                                <div className="text-danger" />
                                                            </div>
                                                        </div>
                                                        <div className="row my-3">
                                                            <div className="col-sm-5">
                                                                <label htmlFor="carrier_id">Carrier&nbsp;<sup className="text-danger">*</sup></label>
                                                            </div>
                                                            <div className="col-sm-7">
                                                                <div className="from-group">
                                                                    <select className="form-control form-control-sm" id="carrier_id" name="carrier_id" required="required">
                                                                        <option value>Select Carrier</option>
                                                                        <option value={2}>testc1 - Client</option><option value={1}>testv1 - Vendor</option>														</select>
                                                                    <div className="text-danger" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row my-3">
                                                            <div className="col-sm-5">
                                                                <label htmlFor="product_id">Product&nbsp;<sup className="text-danger">*</sup></label>
                                                            </div>
                                                            <div className="col-sm-7">
                                                                <div className="from-group">
                                                                    <select className="form-control form-control-sm" id="product_id" name="product_id" required="required">
                                                                        <option value>Select Product</option>
                                                                    </select>
                                                                    <div className="text-danger" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row my-3">
                                                            <div className="col-sm-5">
                                                                <label htmlFor="close_type">Close Type&nbsp;<sup className="text-danger">*</sup></label>
                                                            </div>
                                                            <div className="col-sm-7">
                                                                <div className="from-group">
                                                                    <select onChange={e => handleInput(e)} className="form-control form-control-sm" id="close_type" name="close_type" required="required">
                                                                        <option value>Select Close Type</option>
                                                                        <option value="insert">Close all rates existing by</option>
                                                                        <option value="update">Updates only rates for fully matching breakouts</option>
                                                                    </select>
                                                                    <div className="text-danger" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row my-3">
                                                            <div className="col-sm-5">
                                                                <label htmlFor="start_date">Start Date &amp; Time</label>
                                                            </div>
                                                            <div className="col-sm-7">
                                                                <div className="input-group">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text  input-group-sm d-block h-100"><i className="far fa-calendar-alt mt-2" /></span>
                                                                    </div>
                                                                    <input type="datetime-local" id="start_date" name="start_date" className="form-control form-control-sm float-right" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row my-3">
                                                            <div className="col-sm-5">
                                                                <label htmlFor="end_date">End Date &amp; Time</label>
                                                            </div>
                                                            <div className="col-sm-7">
                                                                <div className="input-group">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text  input-group-sm d-block h-100"><i className="far fa-calendar-alt mt-2" /></span>
                                                                    </div>
                                                                    <input type="datetime-local" id="end_date" name="end_date" className="form-control form-control-sm float-right" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row my-3">
                                                            <div className="col-sm-5">
                                                                <label htmlFor="effective_start_date">Effective From Start Date</label>
                                                            </div>
                                                            <div className="col-sm-7">
                                                                <div className="input-group">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text  input-group-sm d-block h-100"><i className="far fa-calendar-alt mt-2" /></span>
                                                                    </div>
                                                                    <input type="datetime-local" id="effective_start_date" name="effective_start_date" className="form-control form-control-sm float-right" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row my-3">
                                                            <div className="col-sm-5">
                                                                <label htmlFor="effective_end_date">Effective From End Date</label>
                                                            </div>
                                                            <div className="col-sm-7">
                                                                <div className="input-group">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text  input-group-sm d-block h-100"><i className="far fa-calendar-alt mt-2" /></span>
                                                                    </div>
                                                                    <input type="datetime-local" id="effective_end_date" name="effective_end_date" className="form-control form-control-sm float-right" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6 pl-4">
                                                <div className="card d-none field_card" id="field_card">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-sm-5">
                                                                <label htmlFor="country">Country</label>

                                                            </div>
                                                            <div className="col-sm-7">
                                                                <select className="form-control form-control-sm commonField" data-title id="country" name="country">
                                                                    <option>none</option>
                                                                    {opt}
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row my-2">
                                                            <div className="col-sm-5">
                                                                <label htmlFor="operator">Operator</label>
                                                            </div>
                                                            <div className="col-sm-7">
                                                                <div className="from-group">
                                                                    <select className="form-control form-control-sm commonField" data-title id="operator" name="operator">
                                                                        <option>none</option>
                                                                        {opt}
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row my-2">
                                                            <div className="col-sm-5">
                                                                <label htmlFor="mcc">MCC&nbsp;<sup className="text-danger">*</sup></label>
                                                            </div>
                                                            <div className="col-sm-7">
                                                                <div className="from-group">
                                                                    <select className="form-control form-control-sm commonField" data-title id="mcc" name="mcc" required="required">
                                                                        <option>none</option>
                                                                        {opt}
                                                                    </select>
                                                                    <div className="text-danger" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row my-2">
                                                            <div className="col-sm-5">
                                                                <label htmlFor="mnc">MNC&nbsp;<sup className="text-danger">*</sup></label>
                                                            </div>
                                                            <div className="col-sm-7">
                                                                <div className="from-group">
                                                                    <select className="form-control form-control-sm commonField" data-title id="mnc" name="mnc" required="required">
                                                                        <option>none</option>
                                                                        {opt}
                                                                    </select>
                                                                    <div className="text-danger" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row my-2">
                                                            <div className="col-sm-5">
                                                                <label htmlFor="mccmnc">MCCMNC</label>
                                                            </div>
                                                            <div className="col-sm-7">
                                                                <div className="from-group">
                                                                    <select className="form-control form-control-sm commonField" data-title id="mccmnc" name="mccmnc">
                                                                        <option>none</option>
                                                                        {opt}
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row my-2">
                                                            <div className="col-sm-5">
                                                                <label htmlFor="dial_code">Dial Code&nbsp;<sup className="text-danger">*</sup></label>
                                                            </div>
                                                            <div className="col-sm-7">
                                                                <div className="from-group">
                                                                    <select className="form-control form-control-sm commonField" data-title id="dial_code" name="dial_code" required="required">
                                                                        <option>none</option>
                                                                        {opt}
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row my-2">
                                                            <div className="col-sm-5">
                                                                <label htmlFor="rate">Rate&nbsp;<sup className="text-danger">*</sup></label>
                                                            </div>
                                                            <div className="col-sm-7">
                                                                <div className="from-group">
                                                                    <select className="form-control form-control-sm commonField" data-title id="rate" name="rate" required="required">
                                                                        <option>none</option>
                                                                        {opt}
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cord-footer bg-white p-2">
                                            <button onClick={e => submit(e)} className="btn btn-sm btn-info" type="submit">Start Import</button>
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


        </Layout>
    )

}