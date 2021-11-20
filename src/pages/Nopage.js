import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import CheckLogin from '../component/CheckLogin';
import { useHistory } from 'react-router'
export default function Nopage() {
    const error= useSelector((state) => state.error);
    const msg=(error.msg!='')?error.msg:'Unkown error, please contact the support team.';
    const history= useHistory();
    const con =CheckLogin();
    const goBack=()=>{
        if(!con){
            history.push("/");
        }else{
            //history.back();
            window.history.back();
        }
    }
    return (
        <div className="page">
            <div className="main-error-wrapper  page page-h ">
                <img src={process.env.PUBLIC_URL + '/assets/img/404.png'}  className="error-page" alt="error"/>
                <h2>Your looking page not found</h2> 
                <h6>Technical error please con technical team.</h6>
                <button onClick={()=>goBack()} className="btn btn-info">Go To Back</button>
            </div>
        </div>
    )
}
