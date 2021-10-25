import React, { useEffect, useState } from 'react'
import Layout from '../../component/Layout';
import Sidebar from '../../component/Sidebar';
import * as FileSaver from "file-saver";
import * as XLSX from 'xlsx';
import swal from 'sweetalert';
import { Collapse } from 'bootstrap'
import $ from 'jquery'
import { BreadCrumb } from '../../component/UI/BreadCrumb';
import { useTranslation } from 'react-i18next';
/**
* @author
* @function ImportContects
**/

export const ImportContects = (props) => {
    const [files, setfiles] = useState();
    const [tableData, setTable] = useState([]);
    const [tblBody, setTblBody] = useState([]);
    const [tblHeader, setTblHeader] = useState([]);
    const [grpdata,setGrpData] = useState({
        "groups":"",
        "mobile":"",
        "name":"",
        "email":""
    });
    const [impoFileDate, setImpoFileDate] = useState({
        "groupId": "",
        "fileType": "",
        "fileHeader": "0",
        "lineSpliter": "none",
        "rowSpliter": ",",
        "preView": ""
    });

    const handleGrpData=(e)=>{
        e.preventDefault();
        setGrpData({...grpdata,[e.target.name]:e.target.value});
    }
    const showgrpData =(e)=>{
        e.preventDefault();
        console.log(grpdata);
    }
    
    const submit = (e) => {
        e.preventDefault()
    }

    const fileRead = (e) => {
        var file = e.target.files[0];
        setfiles(files);
        if (impoFileDate.preView) {
            switch (impoFileDate.fileType) {
                case "text":
                    if (file.name.toLowerCase().lastIndexOf(".text") == -1) {
                        swal('Warning !', 'Please select .xlsx file.', 'warning');
                        document.getElementById('importFile').value = ''
                    } else {
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            const textResult = e.target.result;
                            if (impoFileDate.lineSpliter == 'none') {
                                if (impoFileDate.rowSpliter == 'none') {
                                    swal('Alert', "We couldn't process unsorted file with current Splitter", 'warning');
                                } else {
                                    let rowResult = textResult.split(impoFileDate.rowSpliter);
                                    if (rowResult.length > 1) {
                                        setTable(rowResult);
                                    } else {
                                        swal('Alert', "Please enter correct Column splitter.", 'warning');
                                    }
                                }
                            } else {
                                let lineResult = textResult.split(/\r\n|\n/);
                                if (lineResult.length > 1) {
                                    setTable(lineResult);
                                } else {
                                    swal('Alert', "We couldn't process unsorted file with current Splitter", 'warning');
                                }
                            }
                        }
                        reader.readAsText(file);
                    }

                    break;
                case "csv":
                    if (file.name.toLowerCase().lastIndexOf(".csv") == -1) {
                        swal('Warning !', 'Please select .csv file.', 'warning');
                        document.getElementById('importFile').value = ''
                    } else {
                        const csvReader = new FileReader();
                        csvReader.onload = (e) => {
                            const csv = e.target.result.split(/\r\n|\n/);
                            //console.log(csv)
                            csv.splice(0,impoFileDate.fileHeader);
                            setTblHeader(csv.splice(0,1));
                            setTblBody(csv);
                            //console.log(csv)
                        }
                        csvReader.readAsText(file);
                    }
                    break;
                case "excel":
                    if (file.name.toLowerCase().lastIndexOf(".xlsx") == -1) {
                        swal('Warning !', 'Please select .xlsx file.', 'warning');
                        document.getElementById('importFile').value = ''
                    } else {
                        const excelreader = new FileReader();
                        excelreader.onload = (evt) => {
                            const bstr = evt.target.result
                            const wb = XLSX.read(bstr, { type: 'binary' });
                            const wsname = wb.SheetNames[0];
                            const ws = wb.Sheets[wsname];
                            const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
                            var xlexData = data.split(/\r\n|\n/);
                            setTable(xlexData);
                        };

                        excelreader.readAsBinaryString(file);
                    }
                    break;
                default:
                    setTable([]);
                    break;
            }
        }
    }

    const processData = (e) => {
        e.preventDefault();
        console.log(tableData);
    }

    const handleFileType = (e) => {
        e.preventDefault();
        const dempC = new Collapse(document.getElementById('demo'), { toggle: false })
        dempC.hide();
        const csvC = new Collapse(document.getElementById('csv'), { toggle: false })
        csvC.hide();
        const textC = new Collapse(document.getElementById('text'), { toggle: false })
        textC.hide();
        switch (e.target.value) {
            case "csv":
                csvC.show();
                break;
            case "excel":
                dempC.show();
                break;
            case "text":
                textC.show();
                break;
            default:
                break;
        }
        setImpoFileDate({ ...impoFileDate, [e.target.name]: e.target.value })
        return true;
    }
    const handleData = (e) => {
        e.preventDefault();
        setImpoFileDate({ ...impoFileDate, [e.target.name]: e.target.value })

    }
    const checkValue = (e) => {
        e.preventDefault()
        setImpoFileDate({ ...impoFileDate, [e.target.name]: e.target.checked })
    }
    const check = (e) => {
        e.preventDefault();
        console.log(tblHeader,tblBody);
    }
    function downloadXsxl() {
        var wb = XLSX.utils.book_new();
        wb.Props = {
            Title: "sample file",
            Subject: "sample file",
            Author: "d",
            CreatedDate: new Date()
        };
        wb.SheetNames.push("sample file");
        var ws_data = [['mobile *', 'name', 'email'], ['911234567890', 'test', 'test@gmail.com']];
        var ws = XLSX.utils.json_to_sheet(ws_data);
        wb.Sheets["sample file"] = ws;
        var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

        function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }
        FileSaver.saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), 'sample file.xlsx');

    }

    function downloadCSV() {
        const rows = [
            ["mobile *", "name", "email"], ['911234567890', 'test', 'test@gmail.com'],
        ];

        let csvContent = "data:.csv;charset=utf-8," + rows.map(e => e.join(",")).join("\n");
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "sample file.csv");
        document.body.appendChild(link); // Required for FF
        link.click(); // This will download
    }
    function saveTextFile() {
        let content = 'mobile *,name,email\n911234567890,test,test@gmail.com'
        var atag = document.createElement("a");
        var file = new Blob([content], { type: 'text/plain' });
        atag.href = URL.createObjectURL(file);
        atag.download = "sample file.txt";
        atag.click();
    }
    const rowSpliter=(impoFileDate.fileType=='text')?impoFileDate.rowSpliter:',';                                         
    const { t } = useTranslation();
    return (
        <Layout>
            {/* main-content opened */}
            <div className="main-content horizontal-content">
                {/* container opened */}
                <div className="container">
                  <BreadCrumb></BreadCrumb>
                    {/* row  your work start here */}
                    <div classname="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header bg-info">
                                    <h4 className="mb-0 text-white card-title">{t("Import Contacts")}</h4>
                                </div>
                                <div className="card-body">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" data-bs-toggle="tab" href="#home">{t("Add Contact")}</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-bs-toggle="tab" href="#menu1">{t("Import Contacts")}</a>
                                        </li>
                                    </ul>
                                    {/* Tab panes */}
                                    <div className="tab-content">
                                        <div id="home" className="container tab-pane active mx-0"><br />
                                            <div className="row">
                                                <div className="col-xl-4">
                                                    <form id="cantactForm" >
                                                        <input type="hidden" name="csrf_test_name" />
                                                        <div className="form-group mb-2">
                                                            <label htmlFor="groups">{t("Groups")}&nbsp;<sup className="text-danger">*</sup> : </label>
                                                            <select onChange={(e)=>handleGrpData(e)} className="form-control" name="groups" id="groups" required>
                                                                <option value>{t("Select Groups")}</option>
                                                                <option value={3}>anil tessta</option>
                                                                <option value={4}>fsdafd</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group mb-2">
                                                            <label htmlFor="mobile">{t("Mobile")}&nbsp;<sup className="text-danger">*</sup> : </label>
                                                            <input onChange={(e)=>handleGrpData(e)} type="number"  name="mobile" id="mobile" className="form-control" required />
                                                            <div className="text-danger">{t("Add prefix first")}</div>
                                                        </div>
                                                        <div className="form-group mb-2">
                                                            <label htmlFor="name">{t("Name")} : </label>
                                                            <input onChange={(e)=>handleGrpData(e)} type="text" name="name" id="name" className="form-control" />
                                                        </div>
                                                        <div className="form-group mb-2">
                                                            <label htmlFor="email">{t("Email")} : </label>
                                                            <input onChange={(e)=>handleGrpData(e)} type="email" name="email" id="email" className="form-control" />
                                                        </div>
                                                        <div className="form-group mb-2">
                                                            <button onClick={showgrpData} type="submit" className="btn btn-info btn-sm submitBtn">{t("Save")}</button>
                                                            <button type="reset" className="btn btn-warning btn-sm">{t("Reset")}</button>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="col-xl-8" />
                                            </div>
                                        </div>
                                        <div id="menu1" className="container tab-pane fade mx-0"><br />
                                            <form id="uploadfiles"   >
                                                <button className="btn btn-success" onClick={(e) => { check(e) }}>{t("check")}</button>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <label htmlFor="groupId">{t("Groups")}&nbsp;<sup className="text-danger">*</sup> : </label>
                                                            <select onBlur={(e) => { handleData(e) }} className="form-control" name="groupId" id="groupId" required>
                                                                <option value>{t("Select Groups")}</option>
                                                                <option value={3}>anil tessta</option>
                                                                <option value={4}>fsdafd</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-2">
                                                    <div className="form-check">
                                                        <label htmlFor="preView" className="form-check-label ms-1">
                                                            <input onChange={(e) => { checkValue(e) }} type="checkbox" name="preView" id="preView"   className="form-check-input " />File Preview (for better parformance preview file)										</label>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    {/* excel file */}
                                                    <div className="col-sm-4 col-md-2">
                                                        <div className="form-group mb-2 ">
                                                            <div className="input-group rounded-start">
                                                                <label htmlFor="excelfile" className=" btn btn-info bg-info ps-4">
                                                                    <input onChange={(e) => { handleFileType(e) }} type="radio" name="fileType" data-col="#demo" id="excelfile" className="form-check-input " value="excel" />
                                                                    {t("Excell File")}
                                                                </label>
                                                                <span className="input-group-text rounded-end bg-info border-0 ps-4 " style={{ height: '39px' }} href="#demo" data-bs-toggle="collapse"><i className="fas fa-cog" /></span>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* csv file */}
                                                    <div className="col-sm-4 col-md-2">
                                                        <div className="form-group mb-2">
                                                            <div className="input-group  mb-3  rounded-start">
                                                                <label htmlFor="csvfile" className=" btn btn-warning bg-warning ps-4 ">
                                                                    <input onChange={(e) => { handleFileType(e) }} type="radio" name="fileType" data-col="#csv" id="csvfile" value="csv" className="form-check-input "  />
                                                                    {t("CSV File")}
                                                                </label>
                                                                <span className="input-group-text rounded-end bg-warning border-0 ps-4 " style={{ height: '39px' }} href="#csv" data-bs-toggle="collapse"><i className="fas fa-cog" /></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* text file */}
                                                    <div className="col-sm-4 col-md-2">
                                                        <div className="form-group mb-2">
                                                            <div className="input-group mb-3 rounded-start">
                                                                <label htmlFor="textfile" className=" btn btn-primary bg-primary ps-4 ">
                                                                    <input onChange={(e) => { handleFileType(e) }} type="radio" name="fileType" data-col="#text" id="textfile" className="form-check-input  " value="text"  required />
                                                                 {t("Text File")}
                                                                </label>
                                                                <span className=" input-group-text bg-primary rounded-end border-0 ps-4 " style={{ height: '39px' }} href="#text" data-bs-toggle="collapse"><i className="fas fa-cog" /></span>


                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <div id="demo" className="collapse pt-2">
                                                            <div className="row">
                                                                <div className="col-sm-3">
                                                                    <div className="form-group mb-2">
                                                                        <label htmlFor="fileHeader">{t("header row")}:</label>
                                                                        <input type="number" min={0} name="fileHeader" id="fileHeader" value={impoFileDate.fileHeader} onChange={(e) => { handleData(e) }} className="form-control form-control-sm"  />
                                                                    </div>
                                                                    <button onClick={downloadXsxl} type="button" id="button-a" className="btn btn-warning m-1  btn-sm">{t("Download Sample file")}</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="csv" className="collapse pt-2">
                                                            <div className="row">
                                                                <div className="col-sm-3">
                                                                    <div className="form-group mb-2">
                                                                        <label htmlFor="fileHeader">{t("header row")}:</label>
                                                                        <input value={impoFileDate.fileHeader} onChange={(e) => { handleData(e) }} type="number" min={0} name="fileHeader" id="fileHeader" className="form-control form-control-sm"  />
                                                                    </div>
                                                                    <button type="button" onClick={downloadCSV} className="btn btn-warning m-1  btn-sm">{t("Download Sample file")}</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="text" className="collapse pt-2">
                                                            <div className="row">
                                                                <div className="col-sm-3">
                                                                    <div className="form-group mb-2">
                                                                        <label htmlFor="fileHeader">{t("header row")}:</label>
                                                                        <input value={impoFileDate.fileHeader} onChange={(e) => { handleData(e) }} type="number" min={0} name="fileHeader" id="fileHeader" className="form-control"  />
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-4">
                                                                    <div className="form-group mb-2">
                                                                        <label htmlFor="lineSpliter">{t("line Splitter")}</label>
                                                                        <select value={impoFileDate.lineSpliter} onChange={(e) => { handleData(e) }} className="form-control" name="lineSpliter" id="lineSpliter">
                                                                            <option value="line">{t("Line")}</option>
                                                                            <option value="none">{t("None")}</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-4">
                                                                    <div className="form-group mb-2">
                                                                        <label htmlFor="rowSpliter">{t("Row Splitter")}</label>
                                                                        <input value={impoFileDate.rowSpliter} onChange={(e) => { handleData(e) }} type="text" min={0} name="rowSpliter" id="rowSpliter" className="form-control"  />
                                                                        <div className="text-danger">{t("Use (none) in case empty column splitter")}</div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-4">
                                                                    <button type="button" onClick={saveTextFile} className="btn btn-warning m-1  btn-sm">{t("Download Sample file")}</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="form-group my-2">
                                                            <div className="input-group py-2">
                                                                <div className="custom-file">
                                                                    <input onChange={(e) => { fileRead(e) }} type="file" name="importFile" className="custom-file-input" id="importFile" required accept=".txt,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                                                                    <label className="custom-file-label" htmlFor="importFile">{t("Choose File")}</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <button onClick={processData} className="btn btn-info btn-sm mt-3" id="checkfile">{t("Process one's")}</button>
                                                    </div>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <button onClick={submit} type="submit" className="btn btn-sm btn-info submitBtn  ">{t("Upload")}</button>
                                                </div>

                                                <div className="progress d-none">
                                                    <div id="filebar" className="progress-bar" style={{ width: '70%' }}>{t("70%")}</div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header bg-info">
                                    <h4 className="mb-0 text-white card-title">{t("Import Contacts")}</h4>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        {/* {console.log(table)} */}
                                        <table className="table text-md-nowrap" id="example1">
                                            <thead>
                                                {
                                                    tblHeader.map((item,index)=>{
                                                        let rowColumns=item.split(rowSpliter);
                                                        return (
                                                            <tr key={index}>
                                                                {
                                                                    rowColumns.map((element,seconIndex)=>{
                                                                        return(
                                                                            <th>{element}</th>
                                                                        )
                                                                    })
                                                                }
                                                            </tr>
                                                        )
                                                        
                                                    })
                                                }
                                            </thead>
                                            <tbody>
                                                {
                                                    tblBody.map((item,index)=>{
                                                        let rowColumns=item.split(rowSpliter);
                                                        return (
                                                            <tr key={index}>
                                                                {
                                                                    rowColumns.map((element,seconIndex)=>{
                                                                        return(
                                                                            <th>{element}</th>
                                                                        )
                                                                    })
                                                                }
                                                            </tr>
                                                        )
                                                        
                                                    }) 
                                                }
                                            </tbody>       
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* row closed  end here*/}
                </div>
                {/* Container closed */}
            </div>
            {/* main-content closed */}
            <Sidebar />
        </Layout>
    )

}