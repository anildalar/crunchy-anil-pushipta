import React from 'react'
import { useTranslation } from 'react-i18next';
import Layout from '../../component/Layout'
import { BreadCrumb } from '../../component/UI/BreadCrumb';


function Smsreports() {
    const { t } = useTranslation();
    return (
        <Layout>
            <div className="main-content horizontal-content">
                <div className="container">
                    <BreadCrumb></BreadCrumb>
                    <div className="row">
                        <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
                            <div className="card ">
                                <div className="card-header bg-info px-2 py-1">
                                    <h5 className="m-2 text-white">{t("Client Connection")}</h5>
                                </div>
                                <div className="card-body bg-white">
                                    <form className="was-validated" method="post">
                                        <input type="hidden" name="csrf_test_name" defaultValue="5541d44c2c7aa6decfd76a327fb0e84c" />
                                        <div className="row row-sm">
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label htmlFor="carrier_id">Carrier&nbsp;<sup className="text-danger">*</sup></label>
                                                    <select className="form-control" name="carrier_id" id="carrier_id" required="required">
                                                        <option value>Select Carrier</option>
                                                        <option value={2}>Alexandre Farias</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label htmlFor="product_id">Products&nbsp;<sup className="text-danger">*</sup></label>
                                                    <select className="form-control" name="product_id" id="product_id" required="required">
                                                        <option value>Select Product</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label htmlFor="startDate">Start Date</label>
                                                    <input type="date" name="startDate" id="startDate" defaultValue="2021-10-28" className=" form-control" />
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <label htmlFor="endDate">End Date</label>
                                                    <input type="date" name="endDate" id="endDate" defaultValue="2021-10-28" className=" form-control" />
                                                </div>
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <input type="submit" name="submit" defaultValue="Search" className="btn btn-success" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Smsreports
