import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import ClientConnections from '../pages/SystemAdmin/ClientConnections';
import TableData from '../pages/SystemAdmin/TableData';
import Domain from "./Domain"
import CountryDropDown from './UI/CountryDropDown';
function Header(props) {
  const history = useHistory();
  return (
    <React.Fragment>
      <div className="main-header nav nav-item hor-header">
        <div className="container">
          <div className="main-header-left ">
            <a className="animated-arrow hor-toggle horizontal-navtoggle">
              <span />
            </a>
            <NavLink className="header-brand" to={"/"+localStorage.getItem('role')+"/dashboard"}>
              <img
                src={ localStorage.getItem('logo') }
                className="desktop-dark"
              />
              <img
                src={ localStorage.getItem('logo') }
                className="desktop-logo"
              />
              <img
                src={ localStorage.getItem('logo') }
                className="desktop-logo-1"
              />
              <img
                src={ localStorage.getItem('logo') }
                className="desktop-logo-dark"
              />
            </NavLink>
            <div className="main-header-center  ms-4">
              <input
                className="form-control"
                placeholder="Search for anything..."
                type="search"
              />
              <button className="btn">
                <i className="fe fe-search" />
              </button>
            </div>
          </div>
          <div className="main-header-right">
            <ul className="nav">
              <CountryDropDown />
            </ul>
            <div className="nav nav-item  navbar-nav-right ms-auto">
              <div className="nav-link" id="bs-example-navbar-collapse-1">
                <form className="navbar-form" role="search">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <span className="input-group-btn">
                      <button type="reset" className="btn btn-default">
                        <i className="fas fa-times" />
                      </button>
                      <button
                        type="submit"
                        className="btn btn-default nav-link resp-btn"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="header-icon-svgs"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx={11} cy={11} r={8} />
                          <line x1={21} y1={21} x2="16.65" y2="16.65" />
                        </svg>
                      </button>
                    </span>
                  </div>
                </form>
              </div>
              <div className="dropdown nav-item main-header-message ">
                <a className="new nav-link" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="header-icon-svgs"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span className=" pulse-danger" />
                </a>
                <div className="dropdown-menu">
                  <div className="menu-header-content bg-primary text-start">
                    <div className="d-flex">
                      <h6 className="dropdown-title mb-1 tx-15 text-white fw-semibold">
                        Messages
                      </h6>
                      <span className="badge rounded-pill bg-warning ms-auto my-auto float-end">
                        Mark All Read
                      </span>
                    </div>
                    <p className="dropdown-title-text subtext mb-0 text-white op-6 pb-0 tx-12 ">
                      You have 4 unread messages
                    </p>
                  </div>
                  <div className="main-message-list chat-scroll">
                    <a href="#" className="p-3 d-flex border-bottom">
                      <div
                        className="  drop-img  cover-image  "
                        data-bs-image-src="../../assets/img/faces/3.jpg"
                      >
                        <span className="avatar-status bg-teal" />
                      </div>
                      <div className="wd-90p">
                        <div className="d-flex">
                          <h5 className="mb-1 name">Petey Cruiser</h5>
                        </div>
                        <p className="mb-0 desc">
                          I'm sorry but i'm not sure how to help you with
                          that......
                        </p>
                        <p className="time mb-0 text-start float-start ms-2 mt-2">
                          Mar 15 3:55 PM
                        </p>
                      </div>
                    </a>
                    <a href="#" className="p-3 d-flex border-bottom">
                      <div
                        className="drop-img cover-image"
                        data-bs-image-src="../../assets/img/faces/2.jpg"
                      >
                        <span className="avatar-status bg-teal" />
                      </div>
                      <div className="wd-90p">
                        <div className="d-flex">
                          <h5 className="mb-1 name">Jimmy Changa</h5>
                        </div>
                        <p className="mb-0 desc">
                          All set ! Now, time to get to you now......
                        </p>
                        <p className="time mb-0 text-start float-start ms-2 mt-2">
                          Mar 06 01:12 AM
                        </p>
                      </div>
                    </a>
                    <a href="#" className="p-3 d-flex border-bottom">
                      <div
                        className="drop-img cover-image"
                        data-bs-image-src="../../assets/img/faces/9.jpg"
                      >
                        <span className="avatar-status bg-teal" />
                      </div>
                      <div className="wd-90p">
                        <div className="d-flex">
                          <h5 className="mb-1 name">Graham Cracker</h5>
                        </div>
                        <p className="mb-0 desc">
                          Are you ready to pickup your Delivery...
                        </p>
                        <p className="time mb-0 text-start float-start ms-2 mt-2">
                          Feb 25 10:35 AM
                        </p>
                      </div>
                    </a>
                    <a href="#" className="p-3 d-flex border-bottom">
                      <div
                        className="drop-img cover-image"
                        data-bs-image-src="../../assets/img/faces/12.jpg"
                      >
                        <span className="avatar-status bg-teal" />
                      </div>
                      <div className="wd-90p">
                        <div className="d-flex">
                          <h5 className="mb-1 name">Donatella Nobatti</h5>
                        </div>
                        <p className="mb-0 desc">
                          Here are some products ...
                        </p>
                        <p className="time mb-0 text-start float-start ms-2 mt-2">
                          Feb 12 05:12 PM
                        </p>
                      </div>
                    </a>
                    <a href="#" className="p-3 d-flex border-bottom">
                      <div
                        className="drop-img cover-image"
                        data-bs-image-src="../../assets/img/faces/5.jpg"
                      >
                        <span className="avatar-status bg-teal" />
                      </div>
                      <div className="wd-90p">
                        <div className="d-flex">
                          <h5 className="mb-1 name">Anne Fibbiyon</h5>
                        </div>
                        <p className="mb-0 desc">
                          I'm sorry but i'm not sure how...
                        </p>
                        <p className="time mb-0 text-start float-start ms-2 mt-2">
                          Jan 29 03:16 PM
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="text-center dropdown-footer">
                    <a href="text-center">VIEW ALL</a>
                  </div>
                </div>
              </div>
              <div className="dropdown nav-item main-header-notification">
                <a className="new nav-link" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="header-icon-svgs"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                  <span className=" pulse" />
                </a>
                <div className="dropdown-menu">
                  <div className="menu-header-content bg-primary text-start">
                    <div className="d-flex">
                      <h6 className="dropdown-title mb-1 tx-15 text-white fw-semibold">
                        Notifications
                      </h6>
                      <span className="badge rounded-pill bg-warning ms-auto my-auto float-end">
                        Mark All Read
                      </span>
                    </div>
                    <p className="dropdown-title-text subtext mb-0 text-white op-6 pb-0 tx-12 ">
                      You have 4 unread Notifications
                    </p>
                  </div>
                  <div className="main-notification-list Notification-scroll">
                    <a className="d-flex p-3 border-bottom" href="#">
                      <div className="notifyimg bg-pink">
                        <i className="la la-file-alt text-white" />
                      </div>
                      <div className="ms-3">
                        <h5 className="notification-label mb-1">
                          New files available
                        </h5>
                        <div className="notification-subtext">
                          10 hour ago
                        </div>
                      </div>
                      <div className="ms-auto">
                        <i className="las la-angle-right text-end text-muted" />
                      </div>
                    </a>
                    <a className="d-flex p-3 border-bottom" href="#">
                      <div className="notifyimg bg-purple">
                        <i className="la la-gem text-white" />
                      </div>
                      <div className="ms-3">
                        <h5 className="notification-label mb-1">
                          Updates Available
                        </h5>
                        <div className="notification-subtext">2 days ago</div>
                      </div>
                      <div className="ms-auto">
                        <i className="las la-angle-right text-end text-muted" />
                      </div>
                    </a>
                    <a className="d-flex p-3 border-bottom" href="#">
                      <div className="notifyimg bg-success">
                        <i className="la la-shopping-basket text-white" />
                      </div>
                      <div className="ms-3">
                        <h5 className="notification-label mb-1">
                          New Order Received
                        </h5>
                        <div className="notification-subtext">1 hour ago</div>
                      </div>
                      <div className="ms-auto">
                        <i className="las la-angle-right text-end text-muted" />
                      </div>
                    </a>
                    <a className="d-flex p-3 border-bottom" href="#">
                      <div className="notifyimg bg-warning">
                        <i className="la la-envelope-open text-white" />
                      </div>
                      <div className="ms-3">
                        <h5 className="notification-label mb-1">
                          New review received
                        </h5>
                        <div className="notification-subtext">1 day ago</div>
                      </div>
                      <div className="ms-auto">
                        <i className="las la-angle-right text-end text-muted" />
                      </div>
                    </a>
                    <a className="d-flex p-3 border-bottom" href="#">
                      <div className="notifyimg bg-danger">
                        <i className="la la-user-check text-white" />
                      </div>
                      <div className="ms-3">
                        <h5 className="notification-label mb-1">
                          22 verified registrations
                        </h5>
                        <div className="notification-subtext">2 hour ago</div>
                      </div>
                      <div className="ms-auto">
                        <i className="las la-angle-right text-end text-muted" />
                      </div>
                    </a>
                    <a className="d-flex p-3 border-bottom" href="#">
                      <div className="notifyimg bg-primary">
                        <i className="la la-check-circle text-white" />
                      </div>
                      <div className="ms-3">
                        <h5 className="notification-label mb-1">
                          Project has been approved
                        </h5>
                        <div className="notification-subtext">4 hour ago</div>
                      </div>
                      <div className="ms-auto">
                        <i className="las la-angle-right text-end text-muted" />
                      </div>
                    </a>
                  </div>
                  <div className="dropdown-footer">
                    <a href="#">VIEW ALL</a>
                  </div>
                </div>
              </div>
              <div className="nav-item full-screen fullscreen-button">
                <a className="new nav-link full-screen-link" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="header-icon-svgs"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                  </svg>
                </a>
              </div>
              <div className="dropdown main-profile-menu nav nav-item nav-link">
                <a className="profile-user d-flex" href="#">
                  <img alt="" src="../../assets/img/faces/6.jpg" />
                </a>
                <div className="dropdown-menu">
                  <div className="main-header-profile bg-primary p-3">
                    <div className="d-flex wd-100p">
                      <div className="main-img-user">
                        <img
                          alt=""
                          src="../../assets/img/faces/6.jpg"
                          className=""
                        />
                      </div>
                      <div className="ms-3 my-auto">
                        <h6>Petey Cruiser</h6>
                        <span>Premium Member</span>
                      </div>
                    </div>
                  </div>
                  <a className="dropdown-item" href="#">
                    <i className="bx bx-user-circle" />
                    Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="bx bx-cog" /> Edit Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="bx bxs-inbox" />
                    Inbox
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="bx bx-envelope" />
                    Messages
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="bx bx-slider-alt" /> Account Settings
                  </a>
                  <a onClick={()=> { props.logout() }} className="dropdown-item" href="#">
                    <i className="bx bx-log-out" /> Sign Out
                  </a>
                </div>
              </div>
              <div className="dropdown main-header-message right-toggle">
                <a
                  className="nav-link pe-0"
                  data-bs-toggle="sidebar-right"
                  data-bs-target=".sidebar-right"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="header-icon-svgs"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1={3} y1={12} x2={21} y2={12} />
                    <line x1={3} y1={6} x2={21} y2={6} />
                    <line x1={3} y1={18} x2={21} y2={18} />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky">
        <div className="horizontal-main hor-menu clearfix side-header">
          <div className="horizontal-mainwrapper container clearfix">
            <nav className="horizontalMenu clearfix">
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
                    Custom{" "}
                    <i className="fe fe-chevron-down horizontal-icon" />
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
                      <NavLink  className="slide-item" to="/Domain">
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
                      <NavLink  className="" to="/pushpita">
                        Pushpita
                      </NavLink>
                      
                    </li>
                    <li>
                    <NavLink  className="" to="/group">
                        Groups
                      </NavLink>
                    </li>
                    <li>
                    <NavLink  className="" to="/importcontects">
                        ImportContects
                      </NavLink>
                    </li>
                    <li>
                    <NavLink  className="" to="/editcontect">
                        Export Contect
                      </NavLink>
                    </li>
                    <li>
                    <NavLink  className="" to="/smsreport">
                        SMS Report
                      </NavLink>
                    </li>
                    <li>
                    <NavLink  className="" to="/credit">
                       Credit
                      </NavLink>
                    </li>
                    <li>
                    <NavLink  className="" to="/sendsms">
                       Send SMS
                      </NavLink>
                    </li>
                    <li>
                    <NavLink  className="" to="/viewcredit">
                       View Credit
                      </NavLink>
                    </li>
                    <li>
                    <NavLink  className="" to="/datatable">
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
                    Antim{" "}
                    <i className="fe fe-chevron-down horizontal-icon" />
                  </a>
                  <ul className="sub-menu">
                    <li aria-haspopup="true">
                      <NavLink  className="" to="/Smmp">
                        SMMP
                      </NavLink>
                      <NavLink  className="" to="/Vendercreate">
                      Vendercreate
                      </NavLink>
                      <NavLink  className="" to="/Clinet_routing">
                      Clinet_routing
                      </NavLink>
                      <NavLink  className="" to="/SenderId_Rul">
                      SenderId_Rul
                      </NavLink>
                      <NavLink  className="" to="/Venders">
                      Venders
                      </NavLink>
                      <NavLink  className="" to="/smsreports">
                      Smsreports
                      </NavLink>
                      <NavLink  className="" to="/languages">
                      Languages
                      </NavLink>
                     
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}


let mapStateToProps = (state) => {
  return {
      ...state
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
      logout:(e)=>{ 
        alert('OKOK');
        e.preventDefault(); 
        var l = localStorage.getItem('lang')

        localStorage.clear();
        localStorage.setItem('lang',l);
        
        dispatch({ action: "LOGOUT" });
      }
  }
 
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);