import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from "react-i18next";
import { useHistory } from 'react-router-dom';
import { connect, useDispatch, } from 'react-redux';
import swal from 'sweetalert';
import $ from "jquery";


import loginAttempt from '../redux/actions/loginAttempt';
import i18n from '../i18n';


import GetDomain from '../serviceprovider/GetDomain';
import CountryDropDown from '../component/UI/CountryDropDown';
import { fetchOption, url } from '../url';




function Home(props) {

    const history = useHistory();
    const dispatch = useDispatch();
    const [userName, setUserName] = useState('crunchy@2021');//crunchy@2021
    const [error, setError] = useState("");
    const [password, setPassword] = useState('crunchy@admin');//'crunchy@admin'
    
    //i18n.changeLanguage(localStorage.getItem('lang'));
    useEffect(() => {
        GetDomain(); 
        const setLanguage = async () => {
            const language = await AsyncStorage.getItem("lang");
            i18n.changeLanguage(language)
        }
        setLanguage();
    }, [])

    function login(e) {
        e.preventDefault();

        let isValid = true;

        let data = {
            userName: userName,
            password: password,
            domainId: localStorage.getItem('domainId')
        }
    
        fetch(url+'/auth/login', {
            ...fetchOption,
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);

                if (data.msg === 'success') {

                    localStorage.setItem('jwt_token', data.token);
                    localStorage.setItem('email', data.data.user.email);
                    localStorage.setItem('role', data.data.user.role);
                    localStorage.setItem('userdata', JSON.stringify(data.data.user));
                    
                    window.location.href = data.data.user.role+'/dashboard';

                } else if(data.msg === 'invalid credentials') {
                    //alert(data.msg);
                    //$(selector).action();
                    swal("Oops!", data.msg , "error");
                    $('input').css('border',"1px solid red")
                }else{

                    console.log('my',data.errors);

                    data.errors.forEach(element => {
                        console.log(element.param);
                        //$(selector).action();
                        $('input[name='+element.param+']').css('border',"1px solid red").siblings('span.text-danger').html(element.msg);
                    });

                    swal("Oops!", 'Somer Errors' , "error");
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <div>
                <div className="page">
                    <div className="container-fluid">
                        <div className="row no-gutter">
                            {/* The image half */}
                            <div className="col-md-6 col-lg-6 col-xl-7 d-none d-md-flex bg-primary-transparent">
                                <div className="row wd-100p mx-auto text-center">
                                    <div className="col-md-12 col-lg-12 col-xl-12 my-auto mx-auto wd-100p">
                                        <img src={ localStorage.getItem('logoData') != null ?localStorage.getItem('logoData'):localStorage.getItem('logoData') } className="my-auto ht-xl-80p wd-md-100p wd-xl-80p mx-auto" alt="logo" />
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
                                                            <img src={ localStorage.getItem('logoData') != null ?localStorage.getItem('logoData'):localStorage.getItem('logoData') } width="292" className="sign-favicon-a" alt="logo" />
                                                            <img src={ localStorage.getItem('logoData') != null ?localStorage.getItem('logoData'):localStorage.getItem('logoData') } className="sign-favicon-b ht-40" alt="logo" />
                                                        </a>
                                                        <ul className="nav nav-item  navbar-nav-right ms-auto d-flex justify-content-center">
                                                            <CountryDropDown />
                                                        </ul>
                                                    </div>
                                                    <div className="card-sigin">
                                                        <div className="main-signup-header">
                                                            <h2>{t('Welcome')} {props.x}!</h2>
                                                            <h5 className="fw-semibold mb-4">{t('please sign in to continue')}</h5>
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

let mapStateToProps = (state) => {
    return {
        x: state.username
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        login: () => {
            alert('okok');
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);