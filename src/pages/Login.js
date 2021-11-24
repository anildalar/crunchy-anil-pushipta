import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from "react-i18next";
import { useNavigate} from 'react-router-dom';
import { useSelector, useDispatch, } from 'react-redux';
import $ from "jquery";
import i18n from '../i18n';
import CountryDropDown from '../component/UI/CountryDropDown';
import { toastOption, url } from '../helpers/helper';
import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
import {setConfig, setRole, setToken, setUser} from '.././app/reducers/userSlice'
import CheckLogin from '../component/CheckLogin';


function Login(props) {
    const navigate = useNavigate();
    const proError= useSelector((state) => state.error)
    if(CheckLogin()){
        navigate("/dashboard");
    }
    const dispatch = useDispatch();
    const domain=useSelector((state) => state.domain)
    const [userName, setUserName] = useState('crunchy@2021');//crunchy@2021
    const [error, setError] = useState(0);
    const [msg, setmsg] = useState("hello anil");
    const [password, setPassword] = useState('crunchy@admin');//'crunchy@admin'
    
    //i18n.changeLanguage(localStorage.getItem('lang'));
    useEffect(() => {
        const setLanguage = async () => {
            const language = await AsyncStorage.getItem("lang");
            i18n.changeLanguage(language)
        }
        setLanguage();
        if(proError.msg!=''){
            console.log(proError.err);
            toast.danger(proError.msg,toastOption);
        }
    }, [])

    function login(e) {
        e.preventDefault();
        let isValid = true;
        let data = {
            userName: userName,
            password: password,
            domainId:domain.data.domainId,
        }
        fetch(url+'/auth/login', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
        .then(data => {
            setError(0);
            $('[name]').css('border', '1px solid gray').siblings('.text-danger').html('');
            if (data.status=='200') {
                //toast.success('🦄 Wow so easy!',toastOption);
                localStorage.setItem('jwtToken', data.token);
                localStorage.setItem('user', JSON.stringify(data.data.user));
                localStorage.setItem('role', data.data.user.role);
                localStorage.setItem('config',JSON.stringify(data.data.user));
                dispatch(setToken(data.token))
                dispatch(setUser(data.data.user))
                dispatch(setConfig(data.data.config))
                dispatch(setRole(data.data.user.role))
                navigate("/dashboard");
                
            }else if(data.status=='400'){
                data.errors.forEach(element => {
                    $('input[name='+element.param+']').css('border',"1px solid red").siblings('span.text-danger').html(element.msg);
                });
            }else{
                setError(1);
                setmsg(data.msg);
            }
        }).catch((error) => {
            console.error('Error:', error);
        });
    }
    const { t } = useTranslation();
    const alertShow =()=>{
        if(error){
            return <div className="alert alert-danger" role="alert"><strong>Alert !</strong> { msg }</div>;
        }
        return '';
    }
    return (
        <React.Fragment>
            <div>
                <div className="page">
                    <div className="container-fluid">
                        <ToastContainer />
                        <div className="row no-gutter">
                            {/* The image half */}
                            <div className="col-md-6 col-lg-6 col-xl-7 d-none d-md-flex bg-primary-transparent">
                                <div className="row wd-100p mx-auto text-center">
                                    <div className="col-md-12 col-lg-12 col-xl-12 my-auto mx-auto wd-100p">
                                        <img src={ domain.logo} className="my-auto ht-xl-80p wd-md-100p wd-xl-80p mx-auto" alt="logo" />
                                    </div>
                                </div>
                            </div>
                            {/* The content half */}
                            <div className="col-md-6 col-lg-6 col-xl-5 bg-white">
                                <div className="login d-flex align-items-center py-2">
                                    {/* Demo content*/}
                                    <div className="container p-0">
                                        <div className="row">
                                            <div className="col-md-10 col-lg-10 col-xl-9 mx-auto">
                                                <div className="card-sigin">
                                                    <div className="mb-5 text-center">
                                                        <a href="#">
                                                            <img src={ domain.logo } width="292" className="sign-favicon-a" alt="logo" />
                                                            <img src={ domain.logo } className="sign-favicon-b ht-40" alt="logo" />
                                                        </a>
                                                        {/* <ul className="nav nav-item  navbar-nav-right ms-auto d-flex justify-content-center">
                                                            <CountryDropDown />
                                                        </ul> */}
                                                    </div>
                                                    <div className="card-sigin">
                                                        <div className="main-signup-header">
                                                            <h2>{t('Welcome')} {props.x}!</h2>
                                                            <h5 className="fw-semibold mb-4">{t('please sign in to continue')}</h5>
                                                            {alertShow()}
                                                            <form action="#" data-parsley-validate noValidate >
                                                                <div className="form-group">
                                                                    <label htmlFor="email">{t("Email")}</label> 
                                                                    <input value={userName} onChange={(e) => { setUserName(e.target.value); }} id="email" name="userName" className="form-control" placeholder={t("Enter your email")} type="text" required="required" />
                                                                    <span className="text-danger"></span>

                                                                </div>
                                                                <div className="form-group">
                                                                    <label htmlFor="password">{t('Password')}</label>
                                                                    <input value={password} onChange={(e) => { setPassword(e.target.value); }} id="password" name="password" className="form-control" placeholder={t("Enter your password")} type="password" required="required" />
                                                                    <span className="text-danger"></span>
                                                                </div>
                                                                <button type="button" onClick={login} className="btn btn-main-primary btn-block">{t('Sign In')}</button>
                                                                <div className="row row-xs">
                                                                    <div className="col-sm-6">
                                                                        <button className="btn btn-block"><i className="fab fa-facebook-f" /> {t('Signup with Facebook')}</button>
                                                                    </div>
                                                                    <div className="col-sm-6 mg-t-10 mg-sm-t-0">
                                                                        <button className="btn btn-info btn-block btn-b"><i className="fab fa-twitter" /> {t("Signup with Twitter")}</button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                            <div className="main-signin-footer mt-5">
                                                                <p><a href="#">{t("Forgot password")}?</a></p>
                                                                <p>{t("Don't have an account")}? <a href="page-signup.html">{t('Create an Account')}</a></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login;