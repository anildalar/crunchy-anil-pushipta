import React, { useEffect } from "react";
import i18n from '../../i18n';

import $ from 'jquery';

export default function CountryDropDown() {
  const changeLang = (e,l) => {
    i18n.changeLanguage(l);
    localStorage.setItem('lang',l);
  }
 
  return (
    
      <li className="nav">
        <div className="dropdown  nav-itemd-none d-md-flex">
          <a
            onClick={(e)=> changeLang(e,"en") }
            href="#"
            className="d-flex  nav-item country-flag1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="avatar country-Flag me-0 align-self-center bg-transparent">
              <img className="a_mainFlag" src={process.env.PUBLIC_URL+"/assets/img/flags/us_flag.jpg"} alt="img" />
            </span>
            <div className="my-auto">
              <strong className="me-2 ms-2 my-auto">English</strong>
            </div>
          </a>
          <div
            className="dropdown-menu dropdown-menu-left dropdown-menu-arrow"
            x-placement="bottom-end"
          >
            <a
              onClick={(e)=> changeLang(e,"hi") }
              href="#"
              className="dropdown-item d-flex "
            >
              <span className="avatar  me-3 align-self-center bg-transparent">
                <img src={process.env.PUBLIC_URL+"/assets/img/flags/india_flag.jpg"} alt="img" />
              </span>
              <div className="d-flex">
                <span className="mt-2">Hindi</span>
              </div>
            </a>
            <a
              onClick={(e)=> changeLang(e,"fr")}
              href="#"
              className="dropdown-item d-flex "
            >
              <span className="avatar  me-3 align-self-center bg-transparent">
                <img src={process.env.PUBLIC_URL+"/assets/img/flags/french_flag.jpg"} alt="img" />
              </span>
              <div className="d-flex">
                <span className="mt-2">French</span>
              </div>
            </a>
            <a
              onClick={(e)=>changeLang(e,"de")}
              href="#"
              className="dropdown-item d-flex"
            >
              <span className="avatar  me-3 align-self-center bg-transparent">
                <img src={process.env.PUBLIC_URL+"/assets/img/flags/germany_flag.jpg"} alt="img" />
              </span>
              <div className="d-flex">
                <span className="mt-2">Germany</span>
              </div>
            </a>
            <a
              onClick={(e)=>changeLang(e,"it")}
              href="#"
              className="dropdown-item d-flex"
            >
              <span className="avatar me-3 align-self-center bg-transparent">
                <img src={process.env.PUBLIC_URL+"/assets/img/flags/italy_flag.jpg"} alt="img" />
              </span>
              <div className="d-flex">
                <span className="mt-2">Italy</span>
              </div>
            </a>
            <a
              onClick={(e)=>changeLang(e,"ru")}
              href="#"
              className="dropdown-item d-flex"
            >
              <span className="avatar me-3 align-self-center bg-transparent">
                <img src={process.env.PUBLIC_URL+"/assets/img/flags/russia_flag.jpg"} alt="img" />
              </span>
              <div className="d-flex">
                <span className="mt-2">Russia</span>
              </div>
            </a>
            <a
              onClick={(e)=>changeLang(e,"es")}
              href="#"
              className="dropdown-item d-flex"
            >
              <span className="avatar  me-3 align-self-center bg-transparent">
                <img src={process.env.PUBLIC_URL+"/assets/img/flags/spain_flag.jpg"} alt="img" />
              </span>
              <div className="d-flex">
                <span className="mt-2">spain</span>
              </div>
            </a>
          </div>
        </div>
      </li>
  );
}
