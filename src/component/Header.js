import React from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import CountryDropDown from "./UI/CountryDropDown";
import {reset as resetUser } from "../app/reducers/userSlice"
import { useDispatch, useSelector } from "react-redux";
import SystemadminAside from "../pages/aside/SystemadminAside";
import AdminAside from "../pages/aside/AdminAside";
import RetailerAside from "../pages/aside/RetailerAside";
import ResellerDashboard from "../pages/aside/ResellerDashboard";
import UserAside from "../pages/aside/UserAside";
export default function Header() {
  const history = useHistory();
  const dispatch=useDispatch();
  const role=useSelector((state) => state.user.role)
  const Logout = (e) => {
    e.preventDefault();
    var l = localStorage.getItem("lang");
    localStorage.clear();
    localStorage.setItem("lang", l);
    dispatch(resetUser())
    history.push("/");
  };
  const getAside=() => {
    switch(role){
      case 'systemadmin':
        return <SystemadminAside/>;
        break;
      case 'admin':
        return <AdminAside/>
        break;
      case 'retailer':
        return <RetailerAside/> 
        break;
      case 'reseller':
        return <ResellerDashboard />
        break;
      case 'user':
        return <UserAside/> 
        break;
      default:
        return '';
        break;
    }
  }
  return (
    <React.Fragment>
      <div className="main-header nav nav-item hor-header">
        <div className="container">
          <div className="main-header-left ">
            <a className="animated-arrow hor-toggle horizontal-navtoggle">
              <span />
            </a>
            <NavLink
              className="header-brand"
              to={"/" + localStorage.getItem("role") + "/dashboard"}
            >
              <img
                src={localStorage.getItem("logo")}
                className="desktop-dark"
              />
              <img
                src={localStorage.getItem("logo")}
                className="desktop-logo"
              />
              <img
                src={localStorage.getItem("logo")}
                className="desktop-logo-1"
              />
              <img
                src={localStorage.getItem("logo")}
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
                        <p className="mb-0 desc">Here are some products ...</p>
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
                        <div className="notification-subtext">10 hour ago</div>
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
                  <a onClick={Logout} className="dropdown-item" href="#">
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
              {getAside()}
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
