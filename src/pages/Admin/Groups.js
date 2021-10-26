import React, { useEffect, useRef, useState } from 'react'
import Layout from '../../component/Layout'
import { fetchOption,  url } from '../../helpers/helper';
import swal from 'sweetalert';
import $ from "jquery"
import { NavLink } from 'react-router-dom';
import { BreadCrumb } from '../../component/UI/BreadCrumb';
import { useTranslation } from 'react-i18next';


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
    const [tbldata, setTbldata] = useState([]);
    const groupName = useRef();
    const desc = useRef();

    useEffect(() => {
        fetch(url + '/admin/phonebook/group/get', {
            ...fetchOption
        }).then(response => response.json())
            .then(data => {
                (data.status == 200) ? setTbldata(data.data) : setTbldata([]);
            }).catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const groupDetails = (e) => {
        e.preventDefault();
        setGroup({ ...group, [e.target.name]: e.target.value });

    }

    const submit = (e) => {
        e.preventDefault();
        $('[name]').css('border', '1px solid gray').siblings('.text-danger').html('');

        fetch(url + '/admin/phonebook/group/create', {
            ...fetchOption,
            body: JSON.stringify(group),
        }).then(response => response.json())
            .then(data => {

                if (data.status == 200) {
                    swal("success", data.msg, "success");
                    let mydata = tbldata;
                    mydata.push({ ...group, ...data.data });
                    setTbldata(mydata => [...mydata]);
                    document.getElementById('groupfrom').reset();
                } else if (data.status == 400) {
                    data.errors.forEach(function (arrayItem) {
                        $('[name=' + arrayItem.param + ']').css("border", "1px solid red").siblings('span.text-danger').html(arrayItem.msg);
                    })
                } else if (data.status == 403) {
                    swal("warning", data.msg, "warning");
                }
            }).catch((error) => {
                console.error('Error:', error);


            });
    }
    const deleteGroup = () => {
        // alert('delete group');
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }



    const editStatus = () => {
        alert('edit status')
    }

    const editGrpDetail = (e)=>{
        groupName.current.value=e.target.closest('tr').querySelector('td:nth-child(2)').innerHTML;
        desc.current.value=e.target.closest('tr').querySelector('td:nth-child(3)').innerHTML;
       
    }
    const { t } = useTranslation();
    return (
        <Layout>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Group Detail</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form id="">   
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="groupName">{t("Group Name ")}&nbsp;<sup className="text-danger">*</sup></label>
                                        <input ref={groupName} onChange={(e) => { groupDetails(e) }} type="text" className="form-control"  name="groupName" id="groupName" required="required"  />
                                        <span className="text-danger error"></span>
                                    </div>
                                    <div className="form-group mb-0">
                                        <label htmlFor="desc">{t("Description")} &nbsp;<sup className="text-danger">*</sup></label>
                                        <textarea ref={desc} onChange={(e) => { groupDetails(e) }} className="form-control" name="desc" id="desc" required="required" rows={4}  />
                                    </div>

                                </div>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-sm btn-info submitBtn me-2">{t("Save")}</button>
                                    <button type="reset" className="btn btn-sm btn-warning">{t("Clear")}</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>


            {/* main-content opened */}
            <div className="main-content horizontal-content">
                {/* container opened */}
                <div className="container">
                    <BreadCrumb></BreadCrumb>
                    {/* row  your work start here */}
                    <div className="row">
                        <div className="col-xl-3">
                            <div className="card">
                                <div className="card-header bg-info">
                                    <h4 className="mb-0 text-white card-title">{t("Create Group")}</h4>
                                </div>
                                <form id="groupfrom">
                                  
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="groupName">{t("Group Name ")}&nbsp;<sup className="text-danger">*</sup></label>
                                            <input onChange={(e) => { groupDetails(e) }} type="text" className="form-control" name="groupName" id="groupName" required="required" />
                                            <span className="text-danger error"></span>
                                        </div>
                                        <div className="form-group mb-0">
                                            <label htmlFor="desc">{t("Description")} &nbsp;<sup className="text-danger">*</sup></label>
                                            <textarea onChange={(e) => { groupDetails(e) }} className="form-control" name="desc" id="desc" required="required" rows={4} defaultValue={""} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="status">{t("Status")} &nbsp;<sup className="text-danger">*</sup></label>
                                            <select onChange={(e) => { groupDetails(e) }} className="form-control" name="status" id="status " required="required">
                                                <option value>{t("Select Status")}</option>
                                                <option value="1">{t("Active")}</option>
                                                <option value="0">{t("Inactive")}</option>
                                            </select>
                                            <span className="text-danger error"></span>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button onClick={submit} type="submit" className="btn btn-sm btn-info submitBtn me-2">{t("Save")}</button>
                                        <button type="reset" className="btn btn-sm btn-warning">{t("Clear")}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-9">
                            <div className="card">
                                <div className="card-header bg-info">
                                    <h4 className="mb-0 text-white card-title">Create Group</h4>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table text-md-nowrap" id="example1">
                                            <thead>
                                                <tr>
                                                    <th >Group User ID</th>
                                                    <th >Group Name</th>
                                                    <th >Description</th>
                                                    <th >State</th>
                                                    <th >Action</th>
                                                    <th >Created At</th>

                                                </tr>
                                            </thead>
                                            <tbody>

                                                {

                                                    tbldata.map((element, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{element.uuid}</td>
                                                                <td>{element.groupName}</td>
                                                                <td>{element.desc}</td>
                                                                <td>{(element.status == 1) ? <span className="badge rounded-pill bg-success">Active</span> : <span className="badge rounded-pill bg-warning">Inactive</span>}</td>
                                                                <td>
                                                                    <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                                                        {(element.status == 1) ? <button onClick={editStatus} type="button" className="btn btn-success"> <i className="fas fa-check"></i> </button > : <button onClick={editStatus} type="button" className="btn btn-warning"> <i className="fas fa-ban"></i></button>}
                                                                        <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={ (e)=>{ editGrpDetail(e) } }><i className="fas fa-pencil-alt"></i></button>
                                                                        <button onClick={deleteGroup} type="button" className="btn btn-danger"><i className="fas fa-trash"></i></button>
                                                                    </div>

                                                                </td>
                                                                <td>{element.createdAt}</td>


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
        </Layout >
    )

}