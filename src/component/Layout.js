import React, { useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'
import { useHistory } from 'react-router-dom'
import i18n from '../i18n';
import Sidebar from './Sidebar';

import jwt_decode from "jwt-decode";


export default function Layout(props) {
    const history = useHistory();
    //i18n.changeLanguage(localStorage.getItem('lang'));
    useEffect(() => {
        try {
            var token = localStorage.getItem("jwt_token");
            var decoded = jwt_decode(token);

            console.log(decoded);   
            [
                '/assets/plugins/sidebar/sidebar-custom.js',
                '/assets/plugins/sidebar/sidebar.js',
                
            ].forEach(function(value,index){
                console.log(value);
                const script = document.createElement("script");
                script.src = value;
                script.async = true;
                //script.onload = () => this.scriptLoaded();
                document.body.appendChild(script);  
            });
            /*
            //object destructuring
            const  { exp  } = decoded;

            const expirationTime = (exp * 1000) - 60000;

            console.log('this',expirationTime);

            console.log(Date.now());

            if (Date.now() >= expirationTime) {
                
            }else{
               //history.push('/'); 
            }

            */
            
        } catch (error) {
            //history.push('/');
        }        
    }, []);
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
