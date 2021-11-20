import React from 'react'
import { NavLink } from 'react-router-dom'

function Pushpita() {
    return (
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
            </svg>
            Pushpita
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
    )
}

export default Pushpita
