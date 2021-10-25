import React, { useState } from 'react'
import Layout from '../../component/Layout';
import { BreadCrumb } from '../../component/UI/BreadCrumb';
import {  useParams } from 'react-router-dom';;
/**
* @author
* @function EditGroup
**/

export const EditGroup = () => {
    let p= useParams();

    const [group, setGroup] = useState({
        "groupName": "",
        "desc": "",
        "status": ""
    });
    const groupDetails = (e) => {
        e.preventDefault();
        setGroup({ ...group, [e.target.name]: e.target.value });

    }
    const editdata = () => {

        console.log(group);
    }

    

    return (
        <Layout>
            <BreadCrumb></BreadCrumb>
            <div className="container">
            
                <div className="row">
                    <div className="col-xl-4 offset-4 mt-5">
                        <div className="card">
                            <div className="card-header bg-info">
                                <h4 className="mb-0 text-white card-title">Create Group</h4>
                            </div>
                            <form id="groupfrom">
                                <input type="hidden" name="csrf_test_name" />
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="groupName">Group Name &nbsp;<sup className="text-danger">*</sup></label>
                                        <input onChange={(e) => { groupDetails(e) }} type="text" className="form-control" name="groupName" id="groupName" required="required" />
                                        <span className="text-danger error"></span>
                                    </div>
                                   
                                    <div className="form-group mb-0">
                                        <label htmlFor="desc">Description &nbsp;<sup className="text-danger">*</sup></label>
                                        <textarea onChange={(e) => { groupDetails(e) }} className="form-control" name="desc" id="desc" required="required" rows={4} defaultValue={""} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="status">Status &nbsp;<sup className="text-danger">*</sup></label>
                                        <select onChange={(e) => { groupDetails(e) }} className="form-control" name="status" id="status " required="required">
                                            <option value>Select Status</option>
                                            <option value={1}>Active</option>
                                            <option value={0}>Inactive</option>
                                        </select>
                                        <span className="text-danger error"></span>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button onClick={editdata} type="button" className="btn btn-sm btn-info submitBtn">Edit</button>
                                    <button type="reset" className="btn btn-sm btn-warning">Clear</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </Layout>
    )

}