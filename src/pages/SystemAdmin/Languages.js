import React from 'react'
import { useTranslation } from 'react-i18next';
import Layout from '../../component/Layout'
import { BreadCrumb } from '../../component/UI/BreadCrumb';


function Languages() {
    const { t } = useTranslation();
    return (
        <Layout>
            <div className="main-content horizontal-content">
                <div className="container">
                    <BreadCrumb></BreadCrumb>
                    <div className="row">
                        <div className="col-sm-4">
                        <div className="row">
                        <div className="col-md-12 col-xl-12 col-xs-12 col-sm-12">
                            <div className="card ">
                                <div className="card-header bg-info px-2 py-1">
                                    <h5 className="m-2 text-white">{t("Client Connection")}</h5>
                                </div>
                                <div className="card-body bg-white">
                                    <form method="post">
                                        <div>
                                            <input type="hidden" name="csrf_test_name" defaultValue="5541d44c2c7aa6decfd76a327fb0e84c" />
                                            <div className="form-group">
                                                <label htmlFor="country_id">Country&nbsp;<sup className="text-danger">*</sup></label>
                                                <select className="form-control" id="country_id" name="country_id">
                                                    <option value>Select Country</option>
                                                    <option value={1}>Afghanistan</option>
                                                   
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="language">Language <sup className="text-danger">*</sup></label>
                                                <input id="language" type="text" className="form-control form-control-sm" name="lang_name" required="required" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="lang_key">Language Key<sup className="text-danger">*</sup></label>
                                                <input id="lang_key" type="text" className="form-control form-control-sm" name="lang_key" required="required" readOnly="true" />
                                            </div>
                                            <div className="form-group">
                                                <input type="submit" className="btn btn-sm btn-info" name="save" defaultValue="Save" />
                                            </div>
                                        </div>
                                   </form>
                                </div>

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

export default Languages
