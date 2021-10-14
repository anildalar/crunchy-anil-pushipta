import React, { useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'
import { useHistory } from 'react-router-dom'

export default function Layout(props) {
    const history = useHistory();
    useEffect(() => {
        //alert('ok');
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
