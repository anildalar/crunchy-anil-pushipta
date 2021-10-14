import React, { useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'
import { useHistory } from 'react-router-dom'
import i18n from '../i18n';

export default function Layout(props) {
    const history = useHistory();
    useEffect(() => {
        i18n.changeLanguage('hi');
        if(!localStorage.getItem("jwt_token")){
           history.push('/');
        }
    }, [])
    return (
        <React.Fragment>
            <div className="page">
                <Header />
                {props.children}
                <Footer /> 
            </div>
        </React.Fragment>
    )
}
