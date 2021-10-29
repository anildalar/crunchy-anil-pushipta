import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import Layout from '../../component/Layout'
import { BreadCrumb } from '../../component/UI/BreadCrumb'

/**
* @author
* @function SMSReport
**/

export const SMSReport = (props) => {
    const[data,setData] = useState({
        "route":"",
        "startDate":"",
        "endDate":"",
        "reportType":""
    });

    const collectData =(e)=>{
        e.preventDefault();
        setData({...data,[e.target.name]:e.target.value});
       
    }
    const submit=(e)=>{
        e.preventDefault();
        console.log(data)
    }
    const { t } = useTranslation();
    return (
        <Layout>
            <div className="main-content horizontal-content">
                {/* container opened */}
                <div className="container">
                    <BreadCrumb></BreadCrumb>
                    {/* row */}
                    {/* your work start here */}
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header bg-info">
                                    <h4 className="mb-0 text-white">{t("Reports")}</h4>
                                </div>
                                <div className="card-body">
                                    <form >
                                        {/* anil */}
                                        <div className="row">
                                            <div className="col-3">
                                                <div className="form-group">
                                                    <label htmlFor="route">{t("Route")}<sup className="text-danger">*</sup></label>
                                                    <select onChange={(e)=>{collectData(e)}} className="form-control form-control-sm" name="route" id="route" required="required">
                                                        <option value={29}>{t("High Quality")}</option>
                                                    </select>
                                                    <div className="text-danger" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="form-group">
                                                    <label htmlFor="startDate">{t("Start Date")}<sup className="text-danger">*</sup></label>
                                                    <input onChange={(e)=>{collectData(e)}} type="date" id="startDate" className="form-control form-control-sm" name="startDate" required="required"  />
                                                    <div className="text-danger" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="form-group">
                                                    <label htmlFor="route">{t("End Date")}<sup className="text-danger">*</sup></label>
                                                    <input onChange={(e)=>{collectData(e)}} type="date" id="endDate" className="form-control form-control-sm" name="endDate" required="required"  />
                                                    <div className="text-danger" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="form-group">
                                                    <label htmlFor="reportType ">{t("Report Type")}<sup className="text-danger">*</sup></label>
                                                    <select onChange={(e)=>{collectData(e)}} className="form-control form-control-sm" name="reportType" id="reportType" required="required">
                                                        <option value="ALL">{t("All")}</option>
                                                        <option value="SCHEDULED">{t("SCHEDULED")}</option>
                                                        <option value="ENROUTE">{t("ENROUTE")}</option>
                                                        <option value="DELIVRD">{t("DELIVRD")}</option>
                                                        <option value="EXPIRED">{t("EXPIRED")}</option>
                                                        <option value="DELETED">{t("DELETED")}</option>
                                                        <option value="UNDELIV">{t("UNDELIV")}</option>
                                                        <option value="ACCEPTED">{t("ACCEPTED")}</option>
                                                        <option value="UNKNOWN">{t("UNKNOWN")}</option>
                                                        <option value="REJECTED">{t("REJECTED")}</option>
                                                        <option value="SKIPPED">{t("SKIPPED")}</option>
                                                    </select>
                                                    <div className="text-danger" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button onClick={(e)=>{submit(e)}} type="submit"  className="btn btn-success" >{t("Save")}</button>
                                        </div>
                                    </form>
                                </div>
                                {/* /.card-body */}
                            </div>
                            {/* /.card */}
                        </div>
                    </div>
                    {/* your work end here */}
                    {/* row close */}
                </div>
                {/* Container closed */}
            </div>


        </Layout >
    )

}