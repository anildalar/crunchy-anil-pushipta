import React from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import ClientConnections from '../pages/SystemAdmin/ClientConnections';
import Domain from "./Domain"
export default function Header() {
  const history = useHistory();
  const Logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    history.push('/');
  }
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
                src="../../assets/img/brand/logo-white.png"
                className="desktop-dark"
              />
              <img
                src="../../assets/img/brand/logo.png"
                className="desktop-logo"
              />
              <img
                src="../../assets/img/brand/favicon.png"
                className="desktop-logo-1"
              />
              <img
                src="../../assets/img/brand/favicon-white.png"
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
              <li className="">
                <div className="dropdown  nav-itemd-none d-md-flex">
                  <a
                    href="#"
                    className="d-flex  nav-item nav-link pe-0 country-flag1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="avatar country-Flag me-0 align-self-center bg-transparent">
                      <img
                        src="../../assets/img/flags/us_flag.jpg"
                        alt="img"
                      />
                    </span>
                    <div className="my-auto">
                      <strong className="me-2 ms-2 my-auto">English</strong>
                    </div>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-left dropdown-menu-arrow"
                    x-placement="bottom-end"
                  >
                    <a href="#" className="dropdown-item d-flex ">
                      <span className="avatar  me-3 align-self-center bg-transparent">
                        <img
                          src="../../assets/img/flags/french_flag.jpg"
                          alt="img"
                        />
                      </span>
                      <div className="d-flex">
                        <span className="mt-2">French</span>
                      </div>
                    </a>
                    <a href="#" className="dropdown-item d-flex">
                      <span className="avatar  me-3 align-self-center bg-transparent">
                        <img
                          src="../../assets/img/flags/germany_flag.jpg"
                          alt="img"
                        />
                      </span>
                      <div className="d-flex">
                        <span className="mt-2">Germany</span>
                      </div>
                    </a>
                    <a href="#" className="dropdown-item d-flex">
                      <span className="avatar me-3 align-self-center bg-transparent">
                        <img
                          src="../../assets/img/flags/italy_flag.jpg"
                          alt="img"
                        />
                      </span>
                      <div className="d-flex">
                        <span className="mt-2">Italy</span>
                      </div>
                    </a>
                    <a href="#" className="dropdown-item d-flex">
                      <span className="avatar me-3 align-self-center bg-transparent">
                        <img
                          src="../../assets/img/flags/russia_flag.jpg"
                          alt="img"
                        />
                      </span>
                      <div className="d-flex">
                        <span className="mt-2">Russia</span>
                      </div>
                    </a>
                    <a href="#" className="dropdown-item d-flex">
                      <span className="avatar  me-3 align-self-center bg-transparent">
                        <img
                          src="../../assets/img/flags/spain_flag.jpg"
                          alt="img"
                        />
                      </span>
                      <div className="d-flex">
                        <span className="mt-2">spain</span>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
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
                        d="M19 5H5v14h14V5zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"
                        opacity=".3"
                      />
                      <path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm2 0h14v14H5V5zm2 5h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" />
                    </svg>{" "}
                    Charts
                    <i className="fe fe-chevron-down horizontal-icon" />
                  </a>
                  <ul className="sub-menu">
                    <li aria-haspopup="true">
                      <a href="chart-morris.html" className="slide-item">
                        Morris Charts
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="chart-flot.html" className="slide-item">
                        Flot Charts
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="chart-chartjs.html" className="slide-item">
                        ChartJS
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="chart-echart.html" className="slide-item">
                        Echart
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="chart-sparkline.html" className="slide-item">
                        Sparkline
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="chart-peity.html" className="slide-item">
                        {" "}
                        Chart-peity
                      </a>
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
                        d="M3.31 11l2.2 8.01L18.5 19l2.2-8H3.31zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                        opacity=".3"
                      />
                      <path d="M22 9h-4.79l-4.38-6.56c-.19-.28-.51-.42-.83-.42s-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM12 4.8L14.8 9H9.2L12 4.8zM18.5 19l-12.99.01L3.31 11H20.7l-2.2 8zM12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>{" "}
                    E-Commerce
                    <i className="fe fe-chevron-down horizontal-icon" />
                  </a>
                  <ul className="sub-menu">
                    <li aria-haspopup="true">
                      <a href="products.html" className="slide-item">
                        {" "}
                        Products
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="product-details.html" className="slide-item">
                        Product-Details
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="product-cart.html" className="slide-item">
                        Shopping Cart
                      </a>
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
                        d="M6.26 9L12 13.47 17.74 9 12 4.53z"
                        opacity=".3"
                      />
                      <path d="M19.37 12.8l-7.38 5.74-7.37-5.73L3 14.07l9 7 9-7zM12 2L3 9l1.63 1.27L12 16l7.36-5.73L21 9l-9-7zm0 11.47L6.26 9 12 4.53 17.74 9 12 13.47z" />
                    </svg>{" "}
                    Elements
                    <i className="fe fe-chevron-down horizontal-icon" />
                  </a>
                  <div className="horizontal-megamenu clearfix">
                    <div className="container">
                      <div className="mega-menubg hor-mega-menu">
                        <div className="row">
                          <div className="col-lg-3 col-md-12 col-xs-12 link-list">
                            <ul>
                              <li>
                                <h3 className="fs-14 fw-bold mb-1 mt-2">
                                  Elements
                                </h3>
                              </li>
                              <li aria-haspopup="true">
                                <a href="alerts.html" className="slide-item">
                                  Alerts
                                </a>
                              </li>
                              <li aria-haspopup="true">
                                <a href="avatar.html" className="slide-item">
                                  Avatar
                                </a>
                              </li>
                              <li aria-haspopup="true">
                                <a
                                  href="breadcrumbs.html"
                                  className="slide-item"
                                >
                                  Breadcrumbs
                                </a>
                              </li>
                              <li aria-haspopup="true">
                                <a href="buttons.html" className="slide-item">
                                  Buttons
                                </a>
                              </li>
                              <li aria-haspopup="true">
                                <a href="badge.html" className="slide-item">
                                  Badge
                                </a>
                              </li>
                              <li aria-haspopup="true">
                                <a
                                  href="dropdown.html"
                                  className="slide-item"
                                >
                                  Dropdown
                                </a>
                              </li>
                              <li aria-haspopup="true">
                                <a
                                  href="thumbnails.html"
                                  className="slide-item"
                                >
                                  Thumbnails
                                </a>
                              </li>
                              <li aria-haspopup="true">
                                <a href="images.html" className="slide-item">
                                  Images
                                </a>
                              </li>
                              <li aria-haspopup="true">
                                <a
                                  href="list-group.html"
                                  className="slide-item"
                                >
                                  List Group
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-3 col-md-12 col-xs-12 link-list">
                            <ul>
                              <li aria-haspopup="true">
                                <a
                                  href="navigation.html"
                                  className="slide-item"
                                >
                                  Navigation
                                </a>
                              </li>
                              <li aria-haspopup="true">
                                <a
                                  href="pagination.html"
                                  className="slide-item"
                                >
                                  Pagination
                                </a>
                              </li>
                              <li aria-haspopup="true">
                                <a href="popover.html" className="slide-item">
                                  Popover
                                </a>
                              </li>
                              <li aria-haspopup="true">
                                <a
                                  href="progress.html"
                                  className="slide-item"
                                >
                                  Progress
                                </a>
                              </li>
                              <li aria-haspopup="true">
                                <a
                                  href="spinners.html"
                                  className="slide-item"
                                >
                                  Spinners
                                </a>
                              </li>
                              <li aria-haspopup="true">
                                <a
                                  href="media-object.html"
                                  className="slide-item"
                                >
                                  Media Object
                                </a>
                              </li>
                              <li aria-haspopup="true">
                                <a
                                  href="typography.html"
                                  className="slide-item"
                                >
                                  Typography
                                </a>
                              </li>
                              <li aria-haspopup="true">
                                <a href="tooltip.html" className="slide-item">
                                  Tooltip
                                </a>
                              </li>
                              <li aria-haspopup="true">
                                <a href="toast.html" className="slide-item">
                                  Toast
                                </a>
                              </li>
                              <li aria-haspopup="true">
                                <a href="tags.html" className="slide-item">
                                  Tags
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-3 col-md-12 col-xs-12 link-list">
                            <ul>
                              <li aria-haspopup="true">
                                <a href="tabs.html" className="slide-item">
                                  Tabs
                                </a>
                              </li>
                              <li>
                                <h3 className="fs-14 fw-bold mb-1 mt-2">
                                  Apps
                                </h3>
                              </li>
                              <li aria-haspopup="true">
                                <a href="cards.html" className="slide-item">
                                  Cards
                                </a>
                              </li>
                              <li aria-haspopup="true">
                                <a
                                  href="draggablecards.html"
                                  className="slide-item"
                                >
                                  Draggablecards
                                </a>
                              </li>
                              <li aria-haspopup="true">
                                <a
                                  href="rangeslider.html"
                                  className="slide-item"
                                >
                                  Range-slider
                                </a>
                              </li>
                              <li aria-haspopup="true">
                                <a
                                  href="calendar.html"
                                  className="slide-item"
                                >
                                  Calendar
                                </a>
                              </li>
                              <li aria-haspopup="true">
                                <a
                                  href="contacts.html"
                                  className="slide-item"
                                >
                                  Contacts
                                </a>
                              </li>
                              <li aria-haspopup="true">
                                <a
                                  href="image-compare.html"
                                  className="slide-item"
                                >
                                  Image-compare
                                </a>
                              </li>
                              <li aria-haspopup="true">
                                <a
                                  href="notification.html"
                                  className="slide-item"
                                >
                                  Notification
                                </a>
                              </li>
                              <li aria-haspopup="true">
                                <a
                                  href="widget-notification.html"
                                  className="slide-item"
                                >
                                  Widget-notification
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-3 col-md-12 col-xs-12 link-list">
                            <ul>
                              <li aria-haspopup="true">
                                <a
                                  href="treeview.html"
                                  className="slide-item"
                                >
                                  Treeview
                                </a>
                              </li>
                              <li>
                                <h3 className="fs-14 fw-bold mb-1 mt-2">
                                  Icons{" "}
                                  <span className="badge bg-danger ">
                                    New
                                  </span>
                                </h3>
                              </li>
                              <li aria-haspopup="true">
                                <a href="icons.html" className="slide-item">
                                  Icons
                                </a>
                              </li>
                              <li>
                                <h3 className="fs-14 fw-bold mb-1 mt-2">
                                  Maps
                                </h3>
                              </li>
                              <li aria-haspopup="true">
                                <a
                                  href="map-leaflet.html"
                                  className="slide-item"
                                >
                                  Mapel Maps
                                </a>
                              </li>
                              <li aria-haspopup="true">
                                <a
                                  href="map-vector.html"
                                  className="slide-item"
                                >
                                  Vector Maps
                                </a>
                              </li>
                              <li>
                                <h3 className="fs-14 fw-bold mb-1 mt-2">
                                  Tables
                                </h3>
                              </li>
                              <li aria-haspopup="true">
                                <a
                                  href="table-basic.html"
                                  className="slide-item"
                                >
                                  Basic Tables
                                </a>
                              </li>
                              <li aria-haspopup="true">
                                <a
                                  href="table-data.html"
                                  className="slide-item"
                                >
                                  Data Tables
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li aria-haspopup="true">
                  <a href="#" className="sub-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="side-menu__icon"
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 0-1.38 1.12-2.5 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 10 6.5 10s1.5.67 1.5 1.5S7.33 13 6.5 13zm3-4C8.67 9 8 8.33 8 7.5S8.67 6 9.5 6s1.5.67 1.5 1.5S10.33 9 9.5 9zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9zm4.5 2.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z"
                        opacity=".3"
                      />
                      <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.21-.64-1.67-.08-.09-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9zm4 13h-1.77c-1.38 0-2.5 1.12-2.5 2.5 0 .61.22 1.19.63 1.65.06.07.14.19.14.35 0 .28-.22.5-.5.5-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.14 8 7c0 2.21-1.79 4-4 4z" />
                      <circle cx="6.5" cy="11.5" r="1.5" />
                      <circle cx="9.5" cy="7.5" r="1.5" />
                      <circle cx="14.5" cy="7.5" r="1.5" />
                      <circle cx="17.5" cy="11.5" r="1.5" />
                    </svg>{" "}
                    Advanced UI{" "}
                    <i className="fe fe-chevron-down horizontal-icon" />
                  </a>
                  <ul className="sub-menu">
                    <li aria-haspopup="true">
                      <a href="accordion.html" className="slide-item">
                        {" "}
                        Accordion
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="carousel.html" className="slide-item">
                        Carousel
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="collapse.html" className="slide-item">
                        Collapse
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="modals.html" className="slide-item">
                        Modals
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="timeline.html" className="slide-item">
                        Timeline
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="sweet-alert.html" className="slide-item">
                        Sweet Alert
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="rating.html" className="slide-item">
                        Ratings
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="counters.html" className="slide-item">
                        Counters
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="search.html" className="slide-item">
                        Search
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="userlist.html" className="slide-item">
                        {" "}
                        Userlist
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="blog.html" className="slide-item">
                        Blog
                      </a>
                    </li>
                    <li aria-haspopup="true" className="sub-menu-sub">
                      <a href="#">Submenu</a>
                      <ul className="sub-menu">
                        <li aria-haspopup="true">
                          <a href="#" className="slide-item">
                            Submenu-01
                          </a>
                        </li>
                        <li
                          aria-haspopup="true"
                          className="slide-item sub-menu-sub"
                        >
                          <a href="#">Submenu-02</a>
                          <ul className="sub-menu">
                            <li aria-haspopup="true">
                              <a href="#" className="slide-item">
                                SubmenuLevel-01
                              </a>
                            </li>
                            <li aria-haspopup="true">
                              <a href="#" className="slide-item">
                                SubmenuLevel-02
                              </a>
                            </li>
                            <li aria-haspopup="true">
                              <a href="#" className="slide-item">
                                SubmenuLevel-02
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li aria-haspopup="true">
                          <a href="form-layouts.html" className="slide-item">
                            Submenu-03
                          </a>
                        </li>
                      </ul>
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
                        d="M10.9 19.91c.36.05.72.09 1.1.09 2.18 0 4.16-.88 5.61-2.3L14.89 13l-3.99 6.91zm-1.04-.21l2.71-4.7H4.59c.93 2.28 2.87 4.03 5.27 4.7zM8.54 12L5.7 7.09C4.64 8.45 4 10.15 4 12c0 .69.1 1.36.26 2h5.43l-1.15-2zm9.76 4.91C19.36 15.55 20 13.85 20 12c0-.69-.1-1.36-.26-2h-5.43l3.99 6.91zM13.73 9h5.68c-.93-2.28-2.88-4.04-5.28-4.7L11.42 9h2.31zm-3.46 0l2.83-4.92C12.74 4.03 12.37 4 12 4c-2.18 0-4.16.88-5.6 2.3L9.12 11l1.15-2z"
                        opacity=".3"
                      />
                      <path d="M12 22c5.52 0 10-4.48 10-10 0-4.75-3.31-8.72-7.75-9.74l-.08-.04-.01.02C13.46 2.09 12.74 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10zm0-2c-.38 0-.74-.04-1.1-.09L14.89 13l2.72 4.7C16.16 19.12 14.18 20 12 20zm8-8c0 1.85-.64 3.55-1.7 4.91l-4-6.91h5.43c.17.64.27 1.31.27 2zm-.59-3h-7.99l2.71-4.7c2.4.66 4.35 2.42 5.28 4.7zM12 4c.37 0 .74.03 1.1.08L10.27 9l-1.15 2L6.4 6.3C7.84 4.88 9.82 4 12 4zm-8 8c0-1.85.64-3.55 1.7-4.91L8.54 12l1.15 2H4.26C4.1 13.36 4 12.69 4 12zm6.27 3h2.3l-2.71 4.7c-2.4-.67-4.35-2.42-5.28-4.7h5.69z" />
                    </svg>{" "}
                    Utilities{" "}
                    <i className="fe fe-chevron-down horizontal-icon" />
                  </a>
                  <ul className="sub-menu">
                    <li aria-haspopup="true">
                      <a href="background.html" className="slide-item">
                        Background
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="border.html" className="slide-item">
                        Border
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="display.html" className="slide-item">
                        Display
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="flex.html" className="slide-item">
                        Flex
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="height.html" className="slide-item">
                        Height
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="margin.html" className="slide-item">
                        Margin
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="padding.html" className="slide-item">
                        Padding
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="position.html" className="slide-item">
                        Position
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="width.html" className="slide-item">
                        Width
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="extras.html" className="slide-item">
                        Extras
                      </a>
                    </li>
                  </ul>
                </li>
                <li aria-haspopup="true">
                  <a href="#" className="sub-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 24 24"
                      className="side-menu__icon"
                      viewBox="0 0 24 24"
                    >
                      <g>
                        <rect fill="none" />
                      </g>
                      <g>
                        <g />
                        <g>
                          <path d="M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M3,18.5V7 c1.1-0.35,2.3-0.5,3.5-0.5c1.34,0,3.13,0.41,4.5,0.99v11.5C9.63,18.41,7.84,18,6.5,18C5.3,18,4.1,18.15,3,18.5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.34,0-3.13,0.41-4.5,0.99V7.49c1.37-0.59,3.16-0.99,4.5-0.99c1.2,0,2.4,0.15,3.5,0.5V18.5z" />
                          <path
                            d="M11,7.49C9.63,6.91,7.84,6.5,6.5,6.5C5.3,6.5,4.1,6.65,3,7v11.5C4.1,18.15,5.3,18,6.5,18 c1.34,0,3.13,0.41,4.5,0.99V7.49z"
                            opacity=".3"
                          />
                        </g>
                        <g>
                          <path d="M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.28,0-2.46,0.16-3.5,0.47v1.57 C14.99,10.69,16.18,10.5,17.5,10.5z" />
                          <path d="M17.5,13.16c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24c-1.28,0-2.46,0.16-3.5,0.47v1.57 C14.99,13.36,16.18,13.16,17.5,13.16z" />
                          <path d="M17.5,15.83c0.88,0,1.73,0.09,2.5,0.26v-1.52c-0.79-0.15-1.64-0.24-2.5-0.24c-1.28,0-2.46,0.16-3.5,0.47v1.57 C14.99,16.02,16.18,15.83,17.5,15.83z" />
                        </g>
                      </g>
                    </svg>
                    Pages <i className="fe fe-chevron-down horizontal-icon" />
                  </a>
                  <ul className="sub-menu">
                    <li aria-haspopup="true">
                      <a href="profile.html" className="slide-item">
                        Profile
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="editprofile.html" className="slide-item">
                        Edit-profile
                      </a>
                    </li>
                    <li aria-haspopup="true" className="sub-menu-sub">
                      <a href="#">Mail</a>
                      <ul className="sub-menu">
                        <li aria-haspopup="true">
                          <a href="mail.html" className="slide-item">
                            Mail-inbox
                          </a>
                        </li>
                        <li aria-haspopup="true">
                          <a href="mail-compose.html" className="slide-item">
                            Mail-compose
                          </a>
                        </li>
                        <li aria-haspopup="true">
                          <a href="mail-read.html" className="slide-item">
                            Mail-read
                          </a>
                        </li>
                        <li aria-haspopup="true">
                          <a href="mail-settings.html" className="slide-item">
                            Mail-settings
                          </a>
                        </li>
                        <li aria-haspopup="true">
                          <a href="chat.html" className="slide-item">
                            Chat
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li aria-haspopup="true" className="sub-menu-sub">
                      <a href="#">Forms</a>
                      <ul className="sub-menu">
                        <li aria-haspopup="true">
                          <a href="form-elements.html" className="slide-item">
                            Form Elements
                          </a>
                        </li>
                        <li aria-haspopup="true">
                          <a href="form-advanced.html" className="slide-item">
                            Advanced Forms
                          </a>
                        </li>
                        <li aria-haspopup="true">
                          <a href="form-layouts.html" className="slide-item">
                            Form Layouts
                          </a>
                        </li>
                        <li aria-haspopup="true">
                          <a
                            href="form-validation.html"
                            className="slide-item"
                          >
                            Form Validation
                          </a>
                        </li>
                        <li aria-haspopup="true">
                          <a href="form-wizards.html" className="slide-item">
                            Form Wizards
                          </a>
                        </li>
                        <li aria-haspopup="true">
                          <a href="form-editor.html" className="slide-item">
                            WYSIWYG Editor
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li aria-haspopup="true">
                      <a href="invoice.html" className="slide-item">
                        Invoice
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="todotask.html" className="slide-item">
                        Todotask
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="pricing.html" className="slide-item">
                        Pricing
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="gallery.html" className="slide-item">
                        Gallery
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="faq.html" className="slide-item">
                        Faqs
                      </a>
                    </li>
                    <li aria-haspopup="true">
                      <a href="empty.html" className="slide-item">
                        Empty Page
                      </a>
                    </li>
                  </ul>
                </li>
                <li aria-haspopup="true">
                  <a href="widgets.html" className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="side-menu__icon"
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path
                        d="M3.31 11l2.2 8.01L18.5 19l2.2-8H3.31zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                        opacity=".3"
                      />
                      <path d="M22 9h-4.79l-4.38-6.56c-.19-.28-.51-.42-.83-.42s-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM12 4.8L14.8 9H9.2L12 4.8zM18.5 19l-12.99.01L3.31 11H20.7l-2.2 8zM12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>{" "}
                    Widgets{" "}
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
                      <NavLink onClick={Domain} className="slide-item" to="/Domain">
                        Domain
                      </NavLink>
                    </li>
                    <li aria-haspopup="true">
                      <NavLink onClick={ClientConnections} className="slide-item" to="/ClientConnections">
                        Client Connections
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
