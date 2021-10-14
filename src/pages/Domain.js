import React from 'react'
import Layout from "../component/Layout";
import Sidebar from "../component/Sidebar";
export default function Domain() {
    let post = [{
        menu: "menu",
        icon: "icon",
        status: "status",
        submenu: {
            menu: "menu",
            icon: "icon",
            status: "status",
            submenu: {
                menu: "menu",
                icon: "icon",
                status: "status"
            }
        }
    }]

    return (
        
        <Layout>
            <div className="contanier-fluid">
                <div className="row">
                    <div className="col-5 ps-5 pe-5 pt-5 pb-5 text-align: center;">
                        <div className="card card-table-two ">
                            <div className="col-12">
                                <form >
                                    <div class="custom-file mb-3">
                                        <input type="file" class="custom-file-input" id="customFile" name="filename" />
                                        <label class="custom-file-label" for="customFile">Choose file</label>
                                    </div>
                                    <label for="exampleInputEmail1">Domain</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <label for="exampleInputEmail1">Domain Title</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <label for="exampleInputEmail1">Status</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                    <div class="mt-3 ps-center text-center Class">
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-7 ps-5 pe-5 pt-5 pb-5 text-align: center;">
                        <div className="card card-table-two ">
                            <div className=" table-responsive country-table">
                                <table className="table table-striped table-bordered mb-0 text-sm-nowrap text-lg-nowrap text-xl-nowrap">

                                    <thead>
                                        <tr>
                                            <th className="wd-lg-25p">Menu</th>
                                            <th className="wd-lg-25p tx-right">Icon</th>
                                            <th className="wd-lg-25p tx-right">Status</th>
                                            <th className="wd-lg-25p tx-right">Sub-Menu</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>05 Dec 2019</td>
                                            <td className="tx-right tx-medium tx-inverse">34</td>
                                            <td className="tx-right tx-medium tx-inverse">
                                                $658.20
                                            </td>
                                            <td className="tx-right tx-medium tx-danger">
                                                -$45.10
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>06 Dec 2019</td>
                                            <td className="tx-right tx-medium tx-inverse">26</td>
                                            <td className="tx-right tx-medium tx-inverse">
                                                $453.25
                                            </td>
                                            <td className="tx-right tx-medium tx-danger">
                                                -$15.02
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>07 Dec 2019</td>
                                            <td className="tx-right tx-medium tx-inverse">34</td>
                                            <td className="tx-right tx-medium tx-inverse">
                                                $653.12
                                            </td>
                                            <td className="tx-right tx-medium tx-danger">
                                                -$13.45
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>08 Dec 2019</td>
                                            <td className="tx-right tx-medium tx-inverse">45</td>
                                            <td className="tx-right tx-medium tx-inverse">
                                                $546.47
                                            </td>
                                            <td className="tx-right tx-medium tx-danger">
                                                -$24.22
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>09 Dec 2019</td>
                                            <td className="tx-right tx-medium tx-inverse">31</td>
                                            <td className="tx-right tx-medium tx-inverse">
                                                $425.72
                                            </td>
                                            <td className="tx-right tx-medium tx-danger">
                                                -$25.01
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Sidebar />
        </Layout >
    )
}
