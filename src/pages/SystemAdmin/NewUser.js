import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import Layout from '../../component/Layout'
import { BreadCrumb } from '../../component/UI/BreadCrumb'
import {  url, Toast } from '../../helpers/helper'
import { UserProfile } from './UserProfile'
import HelperHook from '../../custHook/HelperHook';

/**
* @author
* @function Users
**/

const Users = (props) => {
    const helper=HelperHook();
    const [usrData, setUsrData] = useState([])

    useEffect(() => {
        try {
            fetch(url + '/user/getUser', {
                ...helper.fetchOption,
            })
                .then(response => response.json())
                .then(data => {
                    if (data.status == 200) {
                        console.log('Pushpita:', data.data);
                        setUsrData(data.data)
                    } else {
                        toast.error(data.msg,
                            {
                                ...Toast,
                                position: "top-right"
                            });
                        // console.log(data.msg)
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        } catch (err) {
            toast.error("sever error",
                {
                    ...Toast,
                    position: "top-right"
                });
        }
    }, [])
  return(
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
                    <div className="card">
                        <div className="card-header bg-info">
                            <h4 className="mb-0 text-white">Users Lists</h4>
                        </div>
                        <div className="card-body">
                            <div className="row d-flex align-items-stretch">
                                {
                                    usrData.map((element, index) => {
                                        console.log(element.uuId)
                                        return (
                                            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 d-flex align-items-stretch">

                                                <div className="card bg-light">
                                                    <div className="card-header  border-bottom-0 bg-info p-2 text-white ">
                                                        {element.role}
                                                    </div>
                                                    <div className="card-body pt-2">
                                                        <div className="row">
                                                            <div className="col-7">
                                                                <h2 className="lead"><b>{element.firstName}</b></h2>
                                                                <p className="text-muted text-sm m-0"><b>About : </b>{element.role}</p>

                                                            </div>
                                                            <div className="col-5 text-center">
                                                                <img src="https://messaging.oklabs.in/assets/backend/images/users/2.jpg" alt className="rounded-circle img-fluid" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-footer p-2">
                                                        <div className="text-right">
                                                            <a href="#" className="btn btn-sm bg-warning me-2">
                                                                Active
                                                            </a>

                                                            <NavLink to={'userprofile/'+element.uuId}  className="btn btn-sm btn-primary me-2" data-uuid={element.uuId}>
                                                                <i className="fas fa-user" />
                                                            </NavLink>
                                                            <a href="" className="btn btn-sm bg-success" data-toggle="tooltip" title="View User's"><i className="fas fa-user" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )                                                                   
                                    })
                                }


                            </div>
                        </div>
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
export default Users