import React, { useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'
import { useHistory } from 'react-router-dom'
import i18n from '../i18n';
import Sidebar from './Sidebar';

export default function Layout(props) {
    const history = useHistory();
    //i18n.changeLanguage(localStorage.getItem('lang'));
    useEffect(() => {
        if(!localStorage.getItem("jwt_token")){
           history.push('/');
        }
    }, [])
    return (
        <React.Fragment>
            <div className="page">
                <Header />
                {props.children}
                <Sidebar />
                <Footer /> 
            </div>
        </React.Fragment>
    )
}
