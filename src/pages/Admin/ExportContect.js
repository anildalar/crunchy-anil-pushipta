import React, { useState } from 'react'
import Layout from '../../component/Layout'
import { BreadCrumb } from '../../component/UI/BreadCrumb'

/**
* @author
* @function ExportContect
**/

export const ExportContect = (props) => {
   const [data,setData] = useState(
       {
           "group_id":"",
           "search":""
       }
   );
   const collectData =(e)=>{
    e.preventDefault();
    setData({...data,[e.target.name]:e.target.value});
   }

   const submit=(e)=>{
    e.preventDefault();
   
    console.log(data);
   }
    return (
        <Layout>
            <div className="main-content horizontal-content">
                {/* container opened */}
                <div className="container">
                    <BreadCrumb></BreadCrumb>
                    {/* row */}
                    {/* your work start here */}
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header bg-info">
                                            <h4 className="mb-0 text-white card-title">Export Contact</h4>
                                        </div>
                                        <div className="card-body">
                                            <form >
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <div className="form-group mb-2">
                                                            <label htmlFor="groups">Groups&nbsp;<sup className="text-danger">*</sup> : </label>
                                                            <select onChange={(e)=>{collectData(e)}} className="form-control" name="group_id" id="groups" required="required">
                                                                <option value>Select Groups</option>
                                                                <option value={3}>aa</option>
                                                                <option value={4}>a</option>
                                                                <option value={5}>aadd</option>
                                                                <option value={6}>sdf</option>
                                                            </select>
                                                            <div className="text-danger" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="form-group mb-2">
                                                            <label htmlFor="search">Search by:</label>
                                                            <input onChange={(e)=>{collectData(e)}} type="text" name="search" id="search" placeholder="search by mobile,name or email" className="form-control"  />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="form-group mb-2 pt-1">
                                                            <button onClick={(e)=>{submit(e)}} type="submit" className="btn btn-info mt-4 submitBtn">Search</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
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