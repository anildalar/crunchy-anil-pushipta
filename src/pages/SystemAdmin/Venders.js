import React, { useEffect, useState } from 'react'
import Layout from '../../component/Layout'
import { BreadCrumb } from '../../component/UI/BreadCrumb'
import { fetchOption, url } from '../../url';

function Venders() {
    const [smpp, setSmpp] = useState([])
    useEffect(() => {
        fetch(url + '/vendor/conn/getConnection', {
            ...fetchOption
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data.data.smpp);
                setSmpp(data.data.smpp)
                console.log("hello" + JSON.stringify(smpp))
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])
    return (
        <Layout>
            <div className="main-content horizontal-content">
                <div className="container">
                    <BreadCrumb></BreadCrumb>
                    <div className="row">
                        <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
                            <div className="card">
                                <div className="card-header bg-info">
                                    <h4 className="mb-0 text-white">vender datatable</h4>
                                </div>
                                <div className="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th className="wd-15p border-bottom-0">Id</th>
                                                    <th className="wd-15p border-bottom-0">Protocol</th>
                                                    <th className="wd-20p border-bottom-0">UserName</th>
                                                    <th className="wd-15p border-bottom-0">Password</th>
                                                    <th className="wd-10p border-bottom-0">Hostname</th>
                                                    <th className="wd-25p border-bottom-0">Port </th>
                                                    <th className="wd-25p border-bottom-0">Active</th>
                                                    <th className="wd-25p border-bottom-0">Erorr</th>
                                                    <th className="wd-25p border-bottom-0">Status</th>
                                                    <th className="wd-25p border-bottom-0">Action</th>
                                                  </tr>
                                            </thead>
                                            <tbody id="dy-tbl">
                                            {smpp.map((e, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{e.id}</td>
                                                            <td>{e.protocol}</td>
                                                            <td>{e.userName}</td>
                                                            <td>{e.password}</td>
                                                            <td>{e.hostName}</td>
                                                            <td>{e.port}</td>
                                                            <td>{e.active}</td>
                                                            <td>{e.err}</td>
                                                            <td>{e.status}</td>

                                                            <tb> <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                                                <button type="button" className="btn-sm btn-success"><i className="fas fa-check"></i> </button >
                                                                <button type="button" className="btn-sm btn-warning"><i className="fas fa-ban"></i></button>
                                                                <button type="button" className="btn-sm btn-warning"><i className="fas fa-trash"></i></button>
                                                            </div>
                                                            </tb>
                                                        </tr>
                                                        )
                                                })}</tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Venders
