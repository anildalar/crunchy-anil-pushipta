import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Errorpage() {
    const error= useSelector((state) => state.error);
    const msg=(error.msg!='')?error.msg:'Unkown error, please contact the support team.';
    return (
        <div className="page">
            <div className="main-error-wrapper  page page-h ">
                <img src={process.env.PUBLIC_URL + '/assets/img/404.png'}  className="error-page" alt="error"/>
                <h2>{error.msg}</h2>
                <h6>Technical error please con technical team.</h6>
            </div>
        </div>
    )
}
