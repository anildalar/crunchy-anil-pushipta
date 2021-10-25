import React, { useEffect, useRef } from "react";
import i18n from '../../i18n';

import $ from 'jquery';

import { useTranslation } from "react-i18next";

export default function CountryDropDown() {
  const changeLang = (e,l) => {
    console.log(e.target.getAttribute('src'));
    localStorage.setItem('initialLangImg',e.target.getAttribute('src'));
  }
  const changeLang2 = (e,l) => {
    i18n.changeLanguage(l);
    localStorage.setItem('lang',l);
    
    console.log(e.target.closest('a').querySelector('img').getAttribute('src'));
    localStorage.setItem('langImg',e.target.closest('a').querySelector('img').getAttribute('src'));
    a_mainFlagRef.current.setAttribute('src',localStorage.getItem('langImg'));
  }
 
  const a_mainFlagRef = useRef();

  const hiRef = useRef();
  const frRef = useRef();
  const deRef = useRef();
  const itRef = useRef();
  const ruRef = useRef();
  const esRef = useRef();
  
  useEffect(() => {
    localStorage.setItem('initialLangImg','/assets/img/flags/us_flag.jpg');
  }, []);


  const { t } = useTranslation();
  return (
      <li className="nav">
        <div className="dropdown nav-itemd-none d-md-flex">
          <a
            onClick={(e)=> changeLang(e,"en") }
            href="#"
            className="d-flex  nav-item country-flag1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="avatar country-Flag me-0 align-self-center bg-transparent">
              <img 
                ref={a_mainFlagRef}
                className="a_mainFlag"
                src={localStorage.getItem('langImg')?localStorage.getItem('langImg'):process.env.PUBLIC_URL+"/assets/img/flags/us_flag.jpg"}
                alt="img"
              />
            </span>
            <div className="my-auto">
              <strong className="me-2 ms-2 my-auto">{t('English')}</strong>
            </div>
          </a>
          <div
            className="dropdown-menu dropdown-menu-left dropdown-menu-arrow"
            x-placement="bottom-end"
          >
            <a
              onClick={(e)=> changeLang2(e,"hi") }
              href="#"
              className="dropdown-item d-flex "
            >
              <span className="avatar  me-3 align-self-center bg-transparent">
                <img ref={ hiRef } src={process.env.PUBLIC_URL+"/assets/img/flags/india_flag.jpg"} alt="img" />
              </span>
              <div className="d-flex">
                <span className="mt-2">{t('Hindi')}</span>
              </div>
            </a>
            <a
              onClick={(e)=> changeLang2(e,"fr")}
              href="#"
              className="dropdown-item d-flex "
            >
              <span className="avatar  me-3 align-self-center bg-transparent">
                <img ref={frRef} src={process.env.PUBLIC_URL+"/assets/img/flags/french_flag.jpg"} alt="img" />
              </span>
              <div className="d-flex">
                <span className="mt-2">{t('French')}</span>
              </div>
            </a>
            <a
              onClick={(e)=>changeLang2(e,"de")}
              href="#"
              className="dropdown-item d-flex"
            >
              <span className="avatar  me-3 align-self-center bg-transparent">
                <img ref={deRef} src={process.env.PUBLIC_URL+"/assets/img/flags/germany_flag.jpg"} alt="img" />
              </span>
              <div className="d-flex">
                <span className="mt-2">{t('Germany')}</span>
              </div>
            </a>
            <a
              onClick={(e)=>changeLang2(e,"it")}
              href="#"
              className="dropdown-item d-flex"
            >
              <span className="avatar me-3 align-self-center bg-transparent">
                <img ref={itRef} src={process.env.PUBLIC_URL+"/assets/img/flags/italy_flag.jpg"} alt="img" />
              </span>
              <div className="d-flex">
                <span className="mt-2">{t('Italy')}</span>
              </div>
            </a>
            <a
              onClick={(e)=>changeLang2(e,"ru")}
              href="#"
              className="dropdown-item d-flex"
            >
              <span className="avatar me-3 align-self-center bg-transparent">
                <img ref={ruRef} src={process.env.PUBLIC_URL+"/assets/img/flags/russia_flag.jpg"} alt="img" />
              </span>
              <div className="d-flex">
                <span className="mt-2">{t('Russia')}</span>
              </div>
            </a>
            <a
              onClick={(e)=>changeLang2(e,"es")}
              href="#"
              className="dropdown-item d-flex"
            >
              <span className="avatar  me-3 align-self-center bg-transparent">
                <img ref={esRef} src={process.env.PUBLIC_URL+"/assets/img/flags/spain_flag.jpg"} alt="img" />
              </span>
              <div className="d-flex">
                <span className="mt-2">{t('Spain')}</span>
              </div>
            </a>
          </div>
        </div>
      </li>
  );
}
