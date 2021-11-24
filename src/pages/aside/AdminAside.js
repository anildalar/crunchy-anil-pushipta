import React from 'react'
import { NavLink } from 'react-router-dom'
import Pushpita from './Pushpita'

function AdminAside() {
    return (
        <ul className="horizontalMenu-list">
            <li aria-haspopup="true">
                <NavLink to="/dashboard" className="">
                    <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24" >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z" opacity=".3" />
                        <path d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z" />
                    </svg>
                    Dashboard
                </NavLink>
            </li>
            
            {/* navigation start */}
            {/* reports */}
            <li aria-haspopup="true" >
                <a href="#" className="sub-icon">
                <i class="fas fa-book"></i>&nbsp;Reports
                    <i className="fe fe-chevron-down horizontal-icon" />
                </a>
                <ul className="sub-menu">
                    <li>
                        <NavLink className="py-1" to="/sms/reports">SMS Reports</NavLink>
                    </li>
                </ul>
            </li>
            {/* sms */}
            <li aria-haspopup="true" >
                <a href="#" className="sub-icon">
                <i class="far fa-envelope"></i>&nbsp;SMS
                    <i className="fe fe-chevron-down horizontal-icon" />
                </a>
                <ul className="sub-menu">
                    <li>
                        <NavLink className="py-1" to="/sms/send">Compose SMS</NavLink>
                    </li>
                </ul>
            </li>
            {/* phonebook */}
            <li aria-haspopup="true" >
                <a href="#" className="sub-icon">
                    <i class="far fa-address-book"></i>&nbsp;Phone Book
                    <i className="fe fe-chevron-down horizontal-icon" />
                </a>
                <ul className="sub-menu">
                    <li>
                        <NavLink className="py-1" to="/phonebook/groups">Groups</NavLink>
                    </li>
                    <li>
                        <NavLink className="py-1" to="/phonebook/import-contact">Import Contact</NavLink>
                    </li>
                    <li><NavLink className="py-1" to="/phonebook/export-contact">Export Contact</NavLink></li>
                </ul>
            </li>
            {/* navigation end */}

            <Pushpita/>
        </ul> 
    )
}

export default AdminAside
