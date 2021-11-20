import React from 'react'
import { NavLink } from 'react-router-dom'

function RetailerAside() {
    return (
        <ul className="horizontalMenu-list">
        <li aria-haspopup="true">
            <a href="index.html" className="">
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
            </a>
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
            Custom <i className="fe fe-chevron-down horizontal-icon" />
            </a>
            <ul className="sub-menu">
            <li aria-haspopup="true">
                <a href="signin.html" className="slide-item">
                Sign In
                </a>
            </li>
            <li aria-haspopup="true">
                <a href="signup.html" className="slide-item">
                Sign Up
                </a>
            </li>
            <li aria-haspopup="true">
                <a href="forgot.html" className="slide-item">
                Forgot Password
                </a>
            </li>
            <li aria-haspopup="true">
                <a href="reset.html" className="slide-item">
                Reset Password
                </a>
            </li>
            <li aria-haspopup="true">
                <a href="lockscreen.html" className="slide-item">
                Lock screen
                </a>
            </li>
            <li aria-haspopup="true">
                <a href="underconstruction.html" className="slide-item">
                UnderConstruction
                </a>
            </li>
            <li aria-haspopup="true">
                <NavLink className="slide-item" to="/Domain">
                Domain
                </NavLink>
            </li>
            <li aria-haspopup="true">
                <NavLink className="slide-item" to="/ClientConnections">
                Client Connections
                </NavLink>
            </li>
            <li aria-haspopup="true">
                <NavLink className="slide-item" to="/TableData">
                Data Table
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
            Pushpita{" "}
            <i className="fe fe-chevron-down horizontal-icon" />
            </a>
            <ul className="sub-menu">
            <li aria-haspopup="true">
                <NavLink className="" to="/pushpita">
                Pushpita
                </NavLink>
            </li>
            <li>
                <NavLink className="" to="/group">
                Groups
                </NavLink>
            </li>
            <li>
                <NavLink className="" to="/importcontects">
                ImportContects
                </NavLink>
            </li>
            <li>
                <NavLink className="" to="/editcontect">
                Export Contect
                </NavLink>
            </li>
            <li>
                <NavLink className="" to="/smsreport">
                SMS Report
                </NavLink>
            </li>
            <li>
                <NavLink className="" to="/credit">
                Credit
                </NavLink>
            </li>
            <li>
                <NavLink className="" to="/sendsms">
                Send SMS
                </NavLink>
            </li>
            <li>
                <NavLink className="" to="/viewcredit">
                View Credit
                </NavLink>
            </li>
            <li>
                <NavLink className="" to="/datatable">
                Datatable
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

export default RetailerAside
