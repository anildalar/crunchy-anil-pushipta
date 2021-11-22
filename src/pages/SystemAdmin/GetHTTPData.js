import React, { useEffect, useState } from 'react'
import Layout from '../../component/Layout'
import { BreadCrumb } from '../../component/UI/BreadCrumb'
import HelperHook from '../../custHook/HelperHook';
import { url, Toast } from '../../helpers/helper'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom';
/**
* @author
* @function GetHTTPData
**/

export const GetHTTPData = (props) => {
    const helper = HelperHook();
    const [httpdata, setHttpData] = useState([])
    useEffect(() => {
        try{
            fetch(url+'/vendor/conn/getConnection', {
                ...helper.fetchOption,
            })
                .then(response => response.json())
                .then(data => {
                    if(data.status==200){
                        console.log('Success:', data.data);
                        setHttpData(data.data.http)

                    }else{
                        toast.error(data.msg,
                            {
                                ...Toast,
                                position: "top-right"
                            });
                    }
                   
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }catch(err){
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
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header bg-info">
                                    <h4 className="mb-0 text-white card-title">Create Group</h4>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table align-middle">
                                            <thead>
                                                <tr>
                                                    <th >Active</th>
                                                    <th >Protocol</th>
                                                    <th >Allow Connection</th>
                                                    <th >Sms Capacity</th>
                                                    <th >Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    httpdata.map((element, index) => {
                                                        return (
                                                            <tr>
                                                                <td>{element.active}</td>
                                                                <td>{element.protocol}</td>
                                                                <td>{element.allowConn}</td>
                                                                <td>{element.smsCapacity}</td>
                                                                <td>
                                                                    <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                                                        <button type="button" className="btn btn-success"><i className="fas fa-check"></i></button>
                                                                        <NavLink to={'editvenderhttp/'+element.uuId} type="button" className="btn btn-info"><i className="fas fa-pencil-alt"></i></NavLink>
                                                                        <button type="button" className="btn btn-danger"><i className="fas fa-trash"></i></button>
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
        {/* your work end here */}
        {/* row close */}
      </div>
      {/* Container closed */}
    </div>

   
  </Layout>
   )

 }