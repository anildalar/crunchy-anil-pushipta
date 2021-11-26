import React, { useEffect, useRef, useState } from 'react'
import Layout from '../../component/Layout'
import { fetchOption, url } from '../../helpers/helper';
import swal from 'sweetalert';
import $ from "jquery"
import { BreadCrumb } from '../../component/UI/BreadCrumb';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toast from '../../helpers/helper'
import { Modal } from 'bootstrap'
import HelperHook from '../../custHook/HelperHook';

/**
* @author
* @function Groups
**/

export const Groups = (props) => {
    const helper = HelperHook();
    const [group, setGroup] = useState({
        "groupName": "",
        "desc": "",
        "status": ""
    });
    const [tbldata, setTbldata] = useState([]);
    const [editdata, setEditData] = useState({
        "groupName": "",
        "desc": ""
    });

    


    useEffect(() => {
        try {
            fetch(url + '/admin/phonebook/group/get', {
                ...helper.fetchOption
            }).then(response => response.json())
                .then(data => {
                    if (data.status == 200) {
                        (data.status == 200) ? setTbldata(data.data) : setTbldata([]);
                    } else {
                        toast.error(data.msg,
                            {
                                ...Toast,
                                position: "top-right"
                            });
                    }

                }).catch((error) => {
                    console.error('Error:', error);
                });
        } catch (err) {
            toast.error("sever error",
                {
                    ...Toast,
                    position: "top-right"
                });
        }

    }, []);

    const groupDetails = (e) => {
        e.preventDefault();
        setGroup({ ...group, [e.target.name]: e.target.value });
        setEditData({ ...editdata, [e.target.name]: e.target.value });
    }
    const submit = (e) => {
        e.preventDefault();
        $('[name]').css('border', '1px solid gray').siblings('.text-danger').html('');
        fetch(url + '/admin/phonebook/group/create', {
            ...helper.fetchOption,
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
                    document.getElementById('cantactForm').reset();
                }
            }).catch((error) => {
                console.error('Error:', error);
            });
    }

    const deleteGroup = (e) => {
        // console.log(e.currentTarget.dataset.id);
        let currentId = e.currentTarget.dataset.id
        let sendData = {
            "id": currentId
        }

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    try {
                        //console.log(JSON.stringify(sendData))
                        fetch(url + '/admin/phonebook/group/delete', {
                            ...helper.fetchOption,
                            body: JSON.stringify(sendData),
                        })
                            .then(response => response.json())
                            .then(data => {
                                if (data.status == 200) {
                                    swal("success", data.msg, "success");
                                    e.target.closest('tr').classList.add('d-none');
                                } else if (data.status == 400) {
                                    //console.log("pushpita" + data.errors[0].msg)
                                    toast.error(data.errors[0].msg,
                                        {
                                            ...Toast,
                                            position: "top-right"
                                        })
                                } else if (data.status == 404) {
                                    toast.error(data.msg);
                                }

                            })
                            .catch((error) => {
                                console.error('Error:', error);
                            });
                    } catch (err) {
                        toast.error("server error",
                            {
                                ...Toast,
                                position: "top-right"
                            })
                    }

                }
            });
    }
    const editStatus = (e) => {
        let id = e.currentTarget.dataset.id
        let currentValue = parseInt(e.currentTarget.dataset.value);
        let value = Number(!currentValue)
        const data = {
            "id": id,
            "value": value
        };
        try {
            fetch(url + '/admin/phonebook/group/changeStatus', {
                ...helper.fetchOption,
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    if (data.status == 200) {
                        // swal("success", data.msg, "success");
                        toast.success(data.msg)

                        if (currentValue) {
                            e.target.closest('td').querySelector('.btn-group .activeBtn').classList.add('d-none')
                            e.target.closest('td').querySelector('.btn-group .inactiveBtn').classList.remove('d-none')
                            e.target.closest('tr').querySelector('.pushpita .activeBadge').classList.remove('d-none')
                            e.target.closest('tr').querySelector('.pushpita .inactiveBadge').classList.add('d-none')
                        } else {
                            e.target.closest('td').querySelector('.btn-group .activeBtn').classList.remove('d-none')
                            e.target.closest('td').querySelector('.btn-group .inactiveBtn').classList.add('d-none')
                            e.target.closest('tr').querySelector('.pushpita .activeBadge').classList.add('d-none')
                            e.target.closest('tr').querySelector('.pushpita .inactiveBadge').classList.remove('d-none')
                        }
                    }
                    else if (data.status == 400) {
                        toast.error(data.errors[0].msg,
                            {
                                ...Toast,
                                position: "top-right"
                            })
                    } else if (data.status == 404) {
                        toast.error(data.msg);
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        } catch (err) {
            toast.error("server error",
                {
                    ...Toast,
                    position: "top-right"
                })
        }


    }

    const editGrpDetail = (e) => {
        let editdataObj = e.currentTarget.dataset.uuid;
        let edit = {
            "id": editdataObj
        }
        fetch(url + '/admin/phonebook/group/getRecord', {
            ...helper.fetchOption,
            body: JSON.stringify(edit),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                //console.log(data.data.groupName);
                setEditData({ ...editdata, ...data.data })
                console.log("pushpita", editdata)
                var myModal = new Modal(document.getElementById('exampleModal'), {
                    keyboard: false
                })
                myModal.show();

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    const updateData = (e) => {
        e.preventDefault();
        const updateData = {
            "id": editdata.uuid,
            "groupName": editdata.groupName,
            "desc": editdata.desc
        }
        try {
            $('[name]').css('border', '1px solid gray').siblings('.text-danger').html('');
            fetch(url + '/admin/phonebook/group/update', {
                ...helper.fetchOption,
                body: JSON.stringify(updateData),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    if (data.status == 200) {
                        fetch(url + '/admin/phonebook/group/get', {
                            ...helper.fetchOption
                        }).then(response => response.json())
                            .then(data => {
                                console.log('Success:', data);
                                (data.status == 200) ? setTbldata(data.data) : setTbldata([]);
                                //toast("Wow so easy!") 

                            }).catch((error) => {
                                console.error('Error:', error);
                            });
                            document.getElementById('closebtn').click();

                    } else if (data.status == 400) {
                        data.errors.forEach(function (arrayItem) {
                            $('[name=' + arrayItem.param + ']').css("border", "1px solid red").siblings('span.text-danger').html(arrayItem.msg);
                        })
                    } else if (data.status == 404) {
                        toast.error(data.msg);
                    }

                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        } catch (err) {
            toast.error("server error",
                {
                    ...Toast,
                    position: "top-right"
                })
        }


    }
    const { t } = useTranslation();
    return (
        <Layout>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Group Detail</h5>
                            <button type="button" id="closebtn" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form id="">
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="groupName">{t("Group Name")}&nbsp;<sup className="text-danger">*</sup></label>
                                        <input defaultValue={editdata.groupName} onChange={(e) => { groupDetails(e) }} type="text" className="form-control" name="groupName" id="groupName" required="required" />
                                        <span className="text-danger error"></span>
                                    </div>
                                    <div className="form-group mb-0">
                                        <label htmlFor="desc">{t("Description")} &nbsp;<sup className="text-danger">*</sup></label>
                                        <textarea defaultValue={editdata.desc} onChange={(e) => { groupDetails(e) }} className="form-control" name="desc" id="desc" required="required" rows={4} />
                                    </div>

                                </div>
                                <div className="card-footer">
                                    <button onClick={e => updateData(e)} type="submit" className="btn btn-sm btn-info submitBtn me-2">{t("Save")}</button>
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
                                    <ToastContainer />
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
                                    <ToastContainer />
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
                                                <tr >
                                                    <th >Group User ID</th>
                                                    <th >Group Name</th>
                                                    <th >Description</th>
                                                    <th >Created At</th>
                                                    <th >State</th>
                                                    <th >Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    tbldata.map((element, index) => {
                                                        return (
                                                            <tr key={index} >
                                                                <td>{element.uuid}</td>
                                                                <td>{element.groupName}</td>
                                                                <td>{element.desc}</td>
                                                                <td>{element.createdAt}</td>
                                                                {/* <td>{(element.status == 1) ? <span className="badge rounded-pill bg-success">Active</span> : <span className="badge rounded-pill bg-warning">Inactive</span>}</td> */}
                                                                <td className="pushpita">
                                                                    <div>
                                                                        <span onClick={e => editStatus(e)} className={`badge rounded-pill bg-success activeBadge ${(element.status == 1) ? '' : 'd-none'}`} data-value="1">Active</span>
                                                                        <span onClick={e => editStatus(e)} className={`badge rounded-pill bg-warning inactiveBadge ${(element.status == 1) ? 'd-none' : ''}`} data-value="0">Inactive</span>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                    <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                                                        {/* {(element.status == 1) ? <button onClick={editStatus} type="button" className="btn btn-success"> <i className="fas fa-check"></i> </button > : <button onClick={editStatus} type="button" className="btn btn-warning"> <i className="fas fa-ban"></i></button>} */}
                                                                        <button onClick={e => editStatus(e)} type="button" className={`btn btn-success activeBtn ${(element.status == 1) ? 'd-none' : ''}`} data-id={element.uuid} data-value="1" > <i className="fas fa-check"></i> </button >
                                                                        <button onClick={e => editStatus(e)} type="button" className={`btn btn-warning inactiveBtn ${(element.status == 1) ? '' : 'd-none'}`} data-id={element.uuid} data-value="0" > <i className="fas fa-ban"></i></button>
                                                                        <button type="button" className="btn btn-info" data-uuid={element.uuid} onClick={(e) => { editGrpDetail(e) }}><i className="fas fa-pencil-alt"></i></button>
                                                                        <button onClick={deleteGroup} type="button" className="btn btn-danger" data-id={element.uuid}><i className="fas fa-trash"></i></button>
                                                                    </div>
                                                                </td>

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