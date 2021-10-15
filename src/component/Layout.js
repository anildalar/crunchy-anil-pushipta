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
        [
            '/assets/plugins/horizontal-menu/horizontal-menu-2/horizontal-menu.js',
            '/assets/plugins/perfect-scrollbar/perfect-scrollbar.min.js',
            '/assets/plugins/perfect-scrollbar/p-scroll.js',
            '/assets/plugins/sidebar/sidebar-custom.js',
            '/assets/plugins/sidebar/sidebar.js',
            '/assets/js/sticky.js'
        ].forEach(function(value,index){
            console.log(value);
            const script = document.createElement("script");
            script.src = value;
            script.async = true;
            //script.onload = () => this.scriptLoaded();
            document.body.appendChild(script);  
        });
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
