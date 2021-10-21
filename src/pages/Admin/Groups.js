import React, { useState } from 'react'
import Layout from '../../component/Layout'
import { fetchOption, url } from '../../helpers/helper';

/**
* @author
* @function Groups
**/

export const Groups = (props) => {
    const [group, setGroup] = useState({
        "groupName": "",
        "desc": "",
        "status": ""
    });

    const groupDetails = (e) => {
        e.preventDefault();
        setGroup({ ...group, [e.target.name]: e.target.value });
        
    }

    const submit = (e) => {
        e.preventDefault();
        // console.log(group);
        console.log(group);
      
       
        fetch(url, {
            ...fetchOption,
            body: JSON.stringify(group),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                console.log(data.status);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <Layout>
            {/* main-content opened */}
            <div className="main-content horizontal-content">
                {/* container opened */}
                <div className="container">
                    {/* breadcrumb */}
                    <div className="breadcrumb-header justify-content-between">
                        <div className="my-auto">
                            <div className="d-flex">
                                <h4 className="content-title mb-0 my-auto">Pages</h4><span className="text-muted mt-1 tx-13 ms-2 mb-0">/ Empty</span>
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
                                    <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" id="dropdownMenuDate" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                    {/* breadcrumb */}
                    {/* row  your work start here */}
                    <div className="row">
                        <div className="col-xl-4">
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
                                        </div>
                                        <div className="form-group mb-0">
                                            <label htmlFor="desc">Description &nbsp;<sup className="text-danger">*</sup></label>
                                            <textarea  onChange={(e) => { groupDetails(e) }} className="form-control" name="desc" id="desc" required="required" rows={4} defaultValue={""} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="status">Status &nbsp;<sup className="text-danger">*</sup></label>
                                            <select onChange={(e) => { groupDetails(e) }} className="form-control" name="status" id="status " required="required">
                                                <option value>Select Status</option>
                                                <option value={1}>Active</option>
                                                <option value={0}>Inactive</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button onClick={submit} type="submit" className="btn btn-sm btn-info submitBtn">Save</button>
                                        <button type="reset" className="btn btn-sm btn-warning">Clear</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="card">
                                <div className="card-header bg-info">
                                    <h4 className="mb-0 text-white card-title">Create Group</h4>
                                </div>
                                <div className="card-body">
                                </div>
                            </div>


                        </div>


                    </div>
                    {/* row closed  end here*/}
                </div>
                {/* Container closed */}
            </div>
            {/* main-content closed */}
        </Layout >
    )

}