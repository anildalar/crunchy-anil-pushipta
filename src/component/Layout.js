import React, { useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar';

export default function Layout(props) {
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
