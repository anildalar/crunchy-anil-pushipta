import React, { useState } from 'react'
import Layout from '../../component/Layout'
import { BreadCrumb } from '../../component/UI/BreadCrumb'
import * as XLSX from 'xlsx';
import swal from 'sweetalert';

/**
* @author
* @function VenderErrorCode
**/

export const VenderErrorCode = (props) => {
  const [files, setfiles] = useState();

  const excelFileRead = (e) => {
    e.preventDefault()
    var file = e.target.files[0];
    setfiles(files);
    switch (file.name.toLowerCase().split(".").pop()) {
      case "csv":
        if (file.name.toLowerCase().lastIndexOf(".csv") == -1) {
          swal('Warning !', 'Please select .csv file.', 'warning');
        } else {
          const csvReader = new FileReader();
          csvReader.onload = (e) => {
            const csv = e.target.result.split(/\r\n|\n/);
            console.log(csv)
          }
          csvReader.readAsText(file);
        }
        break;
      case "xlsx":
        if (file.name.toLowerCase().lastIndexOf(".xlsx") == -1) {
          swal('Warning !', 'Please select .xlsx file.', 'warning');
        } else {
          const excelreader = new FileReader();
          excelreader.onload = (evt) => {
            const bstr = evt.target.result
            const wb = XLSX.read(bstr, { type: 'binary' });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
            var xlexData = data.split(/\r\n|\n/);
            console.log(xlexData)
          };
          excelreader.readAsBinaryString(file);
        }
        break;
      default:
        break;
    }
  }
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
                  <h4 className="mb-0 text-white card-title">Vender Error Code</h4>
                </div>
                <div className="card-body">
                  <div className="form-group custom-file mb-3">
                    <input onChange={e => excelFileRead(e)} type="file" className="custom-file-input form-control-sm" id="priceList" name="priceList" required="required" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                    <label className="custom-file-label" htmlFor="priceList">Choose file</label>
                    <div className="text-danger" />
                  </div>
                  <button type="submit" className="btn btn-sm btn-info  me-2">Upload</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-sm">
            <div className="col-xl-5">
              <div className="card">
                <div className="card-header bg-info">
                  <h4 className="mb-0 text-white card-title">Vender Error Code</h4>
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