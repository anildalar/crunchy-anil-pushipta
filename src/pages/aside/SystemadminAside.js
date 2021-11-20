import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Pushpita from './Pushpita'

function SystemadminAside() {
    return (
        <ul className="horizontalMenu-list">
            <li aria-haspopup="true">
                <Link to="/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="side-menu__icon"
                        viewBox="0 0 24 24"
                    >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                        d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z"
                        opacity=".3"
                        />
                        <path d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z" />
                    </svg>
                    Dashboard
                </Link>
            </li>
            {/* navigation start  */}
            <li aria-haspopup="true" >
                <a href="#" className="sub-icon">
                    <i class="fas fa-rss"></i>&nbsp;Vendor
                    <i className="fe fe-chevron-down horizontal-icon" />
                </a>
                <ul className="sub-menu">
                    <li><h3 className="fs-14 fw-bold mb-1 mt-2 text-body"><i className="fas fa-link"></i>&nbsp;&nbsp;Connections</h3></li>
                    <li>
                        <NavLink className="py-1" to="/vendor/smpp">SMPP Connection</NavLink>
                    </li>
                    <li>
                        <NavLink className="py-1" to="/vendor/http">HTTP Connection</NavLink>
                    </li>
                    <li><h3 className="fs-14 fw-bold mb-1 mt-2 text-body"><i className="fas fa-wifi"></i>&nbsp;&nbsp;Create Connections</h3></li>
                    <li>
                        <NavLink to="/vendor/smpp/create" className="py-1">SMPP Connection</NavLink>
                    </li>
                    <li>
                        <NavLink to="/vendor/http/create" className="py-1">HTTP Connection</NavLink>
                    </li>
                </ul>
            </li>
            {/* navigtion closed */}
            <Pushpita/>
            <li aria-haspopup="true">
                <a href="#" className="sub-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="side-menu__icon"
                    viewBox="0 0 24 24"
                >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                    d="M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"
                    opacity=".3"
                    />
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                </svg>{" "}
                Antim <i className="fe fe-chevron-down horizontal-icon" />
                </a>
                <ul className="sub-menu">
                <li aria-haspopup="true">
                    <NavLink className="" to="/Smmp">
                    SMMP
                    </NavLink>
                    <NavLink className="" to="/Vendercreate">
                    Vendercreate
                    </NavLink>
                    <NavLink className="" to="/Clinet_routing">
                    Clinet_routing
                    </NavLink>
                    <NavLink className="" to="/SenderId_Rul">
                    SenderId_Rul
                    </NavLink>
                    <NavLink className="" to="/smsreports">
                    Smsreports
                    </NavLink>
                    <NavLink className="" to="/languages">
                    Languages
                    </NavLink>
                </li>
                </ul>
            </li>
            <li aria-haspopup="true">
                <a href="#" className="sub-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="side-menu__icon"
                    viewBox="0 0 24 24"
                >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                    d="M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"
                    opacity=".3"
                    />
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                </svg>{" "}
                Krishna <i className="fe fe-chevron-down horizontal-icon" />
                </a>
                <ul className="sub-menu">
                <li aria-haspopup="true">
                    <NavLink className="" to="/Smmp">
                    SMMP
                    </NavLink>
                </li>
                </ul>
            </li>
        </ul> 
    )
}

export default SystemadminAside
