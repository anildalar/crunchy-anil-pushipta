import React, { useEffect, useState } from 'react'
import Layout from '../../component/Layout'
import { BreadCrumb } from '../../component/UI/BreadCrumb'
import HelperHook from '../../custHook/HelperHook';
import { url, Toast } from '../../helpers/helper'
import { toast } from 'react-toastify'
/**
* @author
* @function GetConnection
**/

 const ClientConnections = (props) => {
    const helper = HelperHook();
    const[connection,setConnection]=useState([])
    useEffect(() => {
        try {
            fetch(url+'/client/conn/getConnection', {
                ...helper.fetchOption,
            }).then(response => response.json())
            .then(data => {
                // console.log('Success:', data);
                if(data.status==200){
                    //console.log('Success:', data.data);
                    setConnection(data.data)
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
                                                    <th >User Name</th>
                                                    <th >Route Name</th>
                                                    <th >Currency</th>
                                                    <th >Sms Capacity</th>
                                                    <th >Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    connection.map((element, index) => {
                                                        return (
                                                            <tr>
                                                                <td>{element.userName}</td>
                                                                <td>{element.routeName}</td>
                                                                <td>{element.currency}</td>
                                                                <td>{element.smsCapacity}</td>
                                                                <td>
                                                                    <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                                                        <button type="button" className="btn btn-success"><i className="fas fa-check"></i></button>
                                                                        <button type="button" className="btn btn-info"><i className="fas fa-pencil-alt"></i></button>
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

 export default ClientConnections;