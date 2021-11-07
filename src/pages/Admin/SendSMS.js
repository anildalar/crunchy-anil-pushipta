import React, { useRef, useState } from "react";
import Layout from "../../component/Layout";
import { BreadCrumb } from "../../component/UI/BreadCrumb";
import { Collapse } from "bootstrap";
import { useTranslation } from "react-i18next";
// import axios from "axios";
// import translate from "translate";

/**
 * @author
 * @function SendSMS
 **/

export const SendSMS = (props) => {
  const [charCount, setCharCount] = useState(0);
  const [messageText, setMessageText] = useState("");

  let showInput = useRef();
  const enableInput = (e) => {
    e.preventDefault();
    // alert("okay");
    document.getElementById("sheduletime").disabled = false;
  };
  const showinputblock = (e) => {
    e.preventDefault();
    showInput.current.style.display = "block";
    document.getElementById("languageDropDown").disabled = false;
    const x = new Collapse(document.getElementById("collapseExample"), {
      toggle: true,
    });
    x.show();
  };
  const hideInputBlock = () => {
    showInput.current.style.display = "none";
  };
  const disbleInput = (e) => {
    e.preventDefault();
    document.getElementById("sheduletime").disabled = true;
  };
  const msgCount = (e) => {
    e.preventDefault();
    const x = new Collapse(document.getElementById("collapseExample"), {
      toggle: true,
    });
    x.show();
  };
  const selectlang = (e) => {
    e.preventDefault();
    localStorage.setItem("currentLang", showInput.current.value);
    //console.log(showInput.current.value);
  };

  const checkSms = (charCount) => {
    // commented code is for the sms count information box , can be used if needed

    //  if (charCount <= 160) {
    //    return Math.ceil(charCount / 160);
    //  } else if (charCount > 160 && charCount < 306) {
    //    return Math.ceil(charCount / 160);
    //  } else if (charCount > 306 && charCount < 765) {
    //    return Math.ceil((charCount * 2) / 306);
    //  } else if (charCount > 765) {
    //    return Math.ceil((charCount * 5) / 765);
    //  }

    if (charCount < 160) return 1;
    return Math.floor(charCount / 160);
  };

  const { t } = useTranslation();
  return (
    <Layout>
      <div className="main-content horizontal-content">
        {/* container opened */}
        <div className="container">
          <BreadCrumb></BreadCrumb>
          {/* row */}
          {/* your work start here */}
          <div className="row row-sm">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header bg-info">
                  <h4 className="mb-0 text-white">{t("Send SMS")}</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-8">
                      <div className="row ">
                        <div className="col-sm-6">
                          <label htmlFor="route">
                            {t("Route")}&nbsp;
                            <sup className="text-danger">*</sup>
                          </label>
                          <select
                            className="form-control"
                            name="route"
                            id="route"
                          >
                            <option value>{t("Select Route")}</option>
                            <option value="L2RGWGtjbkdWU3FSc2JUSE14d3diQT09">
                              {t("High Quality")}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4" />
                    <div className="col-sm-8">
                      <div className="row mt-3">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor="campaign_name">
                              {t("CAMPAIGN NAME")}
                            </label>
                            <input
                              type="text"
                              name="campaign_name"
                              id="campaign_name"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor="converage">
                              {t("Coverage")}&nbsp;
                              <sup className="text-danger">*</sup>
                            </label>
                            <br />
                            <select
                              className="form-control select2"
                              id="converage"
                              name="converage"
                              required="required"
                              placehodler="anil"
                            >
                              <option value data-id>
                                {t("Select Coverage")}
                              </option>
                              <option value={33} data-id={76}>
                                {t("France( +33 )")}
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <label htmlFor="sourceAddr">
                            {t("Sender ID")}
                            <sup className="text-danger">*</sup>
                          </label>
                          <div id="senderFiels">
                            <input
                              type="text"
                              id="sourceAddr"
                              list="sourceAddr"
                              name="sourceAddr"
                              className="form-control"
                              required="required"
                            />
                          </div>
                          <datalist id="sourceAddr"></datalist>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4" />
                    <div className="col-sm-8">
                      <div className="form-group">
                        <label htmlFor="destinationAddr">
                          {t("To")}&nbsp;<sup className="text-danger">*</sup>
                        </label>
                        <textarea
                          id="destinationAddr"
                          name="destinationAddr"
                          className="form-control"
                          rows={3}
                          placeholder=" 1234567890, 0123456789, 2548756255"
                          required="required"
                          value={messageText}
                          onChange={(e) => setMessageText(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-4" />
                    <div className="col-sm-8">
                      <div className="form-group">
                        <div className="row">
                          <div className="col-sm-2">
                            <strong>{t("SMS Type")}</strong>
                          </div>
                          <div className="col-sm-2">
                            <div className="custom-control custom-radio">
                              <input
                                onChange={(e) => {
                                  hideInputBlock(e);
                                }}
                                className="custom-control-input"
                                type="radio"
                                id="option1"
                                name="dataCoding"
                                defaultValue={0}
                                defaultChecked="checked"
                                required="required"
                              />
                              <label
                                htmlFor="option1"
                                className="custom-control-label"
                              >
                                {t("Plain")}
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="custom-control custom-radio">
                              <input
                                onChange={(e) => {
                                  showinputblock(e);
                                }}
                                className="custom-control-input"
                                type="radio"
                                id="option2"
                                name="dataCoding"
                                defaultValue={8}
                                required="required"
                              />
                              <label
                                htmlFor="option2"
                                className="custom-control-label"
                              >
                                {t("Unicode")}
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-sm-4">
                            <label htmlFor="message">
                              {t("Message")}&nbsp;
                              <sup className="text-danger">*</sup>
                            </label>
                          </div>
                          <div className="col-sm-8">
                            <select
                              onChange={(e) => {
                                selectlang(e);
                                //   this api for change language is not working !!

                                //   fetch(
                                //     "https://google-translate1.p.rapidapi.com/language/translate/v2/detect",
                                //     {
                                //       method: "POST",
                                //       url: "https://google-translate1.p.rapidapi.com/language/translate/v2/detect",
                                //       headers: {
                                //         "content-type":
                                //           "application/x-www-form-urlencoded",
                                //         "accept-encoding": "application/json",
                                //         "x-rapidapi-host":
                                //           "google-translate1.p.rapidapi.com",
                                //         "x-rapidapi-key":
                                //           "7081be0e04msh7ceffc38ed82922p17a226jsna73c26bcae39",
                                //       },
                                //       data: {
                                //         q: "English is hard, but detectably so",
                                //       },
                                //     }
                                //   );
                              }}
                              ref={showInput}
                              id="languageDropDown"
                              name="languageDropDown"
                              className="form-control"
                              disabled="disabled"
                              style={{ display: "none" }}
                            >
                              <option value="hi">{t("Hindi")}</option>
                              <option value="bn">{t("Bengali")}</option>
                              <option value="fa">{t("Persian")}</option>
                              <option value="gu">{t("Gujarati")}</option>
                              <option value="kn">{t("Kannada")}</option>
                              <option value="ml">{t("Malayalam")}</option>
                              <option value="mr">{t("Marathi")}</option>
                              <option value="ne">{t("Nepali")}</option>
                              <option value="pa">{t("Panjabi")}</option>
                              <option value="ta">{t("Tamil")}</option>
                              <option value="te">{t("Telugu")}</option>
                              <option value="ur">{t("Urdu")}</option>
                            </select>
                          </div>
                        </div>
                        {/* onChange={(e)=>{setCharCount(e.target.value.length)}} */}
                        <textarea
                          onChange={(e) => {
                            setCharCount(e.target.value.length);
                          }}
                          onClick={(e) => msgCount(e)}
                          rows={4}
                          id="message"
                          name="message"
                          className="form-control"
                          required="required"
                        />

                        <div className="form-group">
                          <label htmlFor="Characters" className="control-label">
                            {t("Characters")} :
                          </label>
                          <input
                            value={`${charCount} : ${checkSms(
                              charCount
                            )}  SMS Message(s)`}
                            type="text"
                            id="txtcount"
                            readOnly="readonly"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div
                        className="collapse multi-collapse"
                        id="collapseExample"
                      >
                        <div className="card">
                          <div className="card-header bg-info py-0">
                            {t("SMS Count information")}
                          </div>
                          <div className="card-body" id="smscounttext">
                            Text Message:
                            <br />
                            160 Characters = 1 SMS,
                            <br />
                            306 Characters = 2 SMS,
                            <br />
                            ...,
                            <br />
                            765 Characters = 5 SMS,
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <label htmlFor="inputEstimatedBudget">
                      {t("Is Flash SMS")}
                    </label>
                    <div className="row">
                      <div className="col-sm-2">
                        <div className="custom-control custom-radio">
                          <input
                            className="custom-control-input"
                            type="radio"
                            id="flash1"
                            name="flash"
                            defaultValue={0}
                            defaultChecked="checked"
                            required="required"
                          />
                          <label
                            htmlFor="flash1"
                            className="custom-control-label"
                          >
                            {t("No")}
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-2">
                        <div className="custom-control custom-radio">
                          <input
                            className="custom-control-input"
                            type="radio"
                            id="flash2"
                            name="flash"
                            defaultValue={1}
                            required="required"
                          />
                          <label
                            htmlFor="flash2"
                            className="custom-control-label"
                          >
                            {t("Yes")}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4" />
                  <div className="col-sm-8">
                    <label htmlFor="inputSpentBudget">
                      {t("Time to Send SMS")}
                    </label>
                    <div className="row">
                      <div className="col-sm-2">
                        <div className="custom-control custom-radio">
                          <input
                            onChange={(e) => {
                              disbleInput(e);
                            }}
                            className="custom-control-input"
                            type="radio"
                            id="customRadio1"
                            name="sheduletype"
                            defaultValue="now"
                            defaultChecked="checked"
                            required="required"
                          />
                          <label
                            htmlFor="customRadio1"
                            className="custom-control-label"
                          >
                            {t("Now")}
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-2">
                        <div className="custom-control custom-radio float-sm-right">
                          <input
                            onChange={(e) => {
                              enableInput(e);
                            }}
                            className="custom-control-input"
                            type="radio"
                            id="customRadio2"
                            name="sheduletype"
                            defaultValue="after"
                            required="required"
                          />
                          <label
                            htmlFor="customRadio2"
                            className="custom-control-label"
                          >
                            {t("Schedule")}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text d-block h-100">
                            <i className="far fa-calendar-alt mt-2" />
                          </span>
                        </div>
                        <input
                          type="datetime-local"
                          id="sheduletime"
                          name="sheduletime"
                          className="form-control float-right"
                          disabled="disabled"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-success submitBtn"
                      >
                        {t("Send SMS")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* your work end here */}
          {/* row close */}
        </div>
        {/* Container closed */}
      </div>
    </Layout>
  );
};
