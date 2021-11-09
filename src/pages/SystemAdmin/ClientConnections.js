import React, { useEffect, useRef, useState } from "react";
import Layout from "../../component/Layout";
import Select from 'react-select';
import TimePicker from 'react-time-picker';

import swal from "sweetalert";

import { url, fetchOption, SSLTypes, LogLevels, HTTP_DLR_Param_Types, HTTP_DLR_Method, HTTP_DLR_Type, HTTP_Response_Type, timeZone, Bill_Mode, yesNo, BindType, ChargeType} from "../../helpers/helper";
import { useTranslation } from "react-i18next";

import $ from "jquery";
import { BreadCrumb } from "../../component/UI/BreadCrumb";

function ClientConnections() {
  const [routeTypes, setRouteTypes] = useState([]);
  const [routesByType, setRoutesByType] = useState([]);
  const [currencies,setCurrencies ] = useState([]);
  const [isDisabled,setIsDisabled] = useState(true);

  const [submitData, setSubmitData] = useState({
                                    "routeType":"",
                                    "route":1,
                                    "billMode": "",
                                    "balance":"",
                                    "credits":"",
                                    "currency":"",
                                    "sslType":"",
                                    "addrTON":"",
                                    "addrNPI":"",
                                    "addrRange":"",
                                    "priority":"",
                                    "logLevel":"",
                                    "sysType":"",
                                    "dsc":"",
                                    "smsCapacity":"",
                                    "active":1,
                                    "openTime":"",
                                    "closeTime":"",
                                    "chargeType":"",
                                    "smppOn":1,
                                    "httpOn":1,
                                    "bindType":"",
                                    "port":"",
                                    "userName":"",
                                    "password":"",
                                    "isPayLoad":"",
                                    "enqInterTime":"",
                                    "allowConn":"",
                                    "windowSize":"",
                                    "wlistIp":"",
                                    "httpParamType":"",
                                    "httpAuth":"",
                                    "httpUserName":"",
                                    "httpPassword":"",
                                    "httpToken":"",
                                    "httpDlrType":"",
                                    "httpDlrUrl":"",
                                    "httpDlrMeth":"",
                                    "httpDlrPramType":"",
                                    "httpRespoType":""
                                  });

  const [value, onChange] = useState('07:00');

  const credits = useRef();
  const balance = useRef();
  const currency = useRef();

  const httpDlrPramType = useRef();

  useEffect(() => {
    //const setCurrencies
    
    //get Route Type
    fetch(url + '/master/route/getRouteType',{
      ...fetchOption
    })
    .then(response => response.json())
    .then(data => {
      //check if the data is availble
      if(data.data && data.data !=''){
        console.log('Success:123 ',data.data);
        setRouteTypes(data.data);

        console.log('inside',routeTypes);
      }
    })
    .catch();

    //get Route Type
    fetch(url + '/master/get/currencies',{
      ...fetchOption
    })
    .then(response => response.json())
    .then(data => {
      //check if the data is availble
      if(data.data && data.data != ''){
        //console.log('currencies',data);
        setCurrencies(data.data.map((currentValue,index,arr)=>{
          currentValue['label']=currentValue['currency_code'];
          currentValue['value']=currentValue['currency_code'];
          return currentValue;
        }));

        //console.log(currencies);
      }
    })
    .catch();

  }, []);
  const handleChange2 = (e)=>{
    console.log(e);
    if(e.label == 'MCCMNC'){
      //MCCMNC
      credits.current.setAttribute('disabled','disabled')
      credits.current.setAttribute('readonly','readonly');
      balance.current.removeAttribute('disabled')
      balance.current.removeAttribute('readonly')
      setIsDisabled(false);
    }else{
      //Credit
      credits.current.removeAttribute('disabled');
      credits.current.removeAttribute('readonly');
      balance.current.setAttribute('disabled','disabled')
      balance.current.setAttribute('readonly','readonly');
      setIsDisabled(true);
    }
  }

  const handleChange = (e)=>{
    if(e.target.value && e.target.name != 'billmode'){
      console.log(e.target.value);
      console.log(e.target.name);
      fetch(url +'/master/route/routesByType',{
        ...fetchOption,
        body: JSON.stringify({
                              "routeType":e.target.value
                            })
      })
      .then(response => response.json())
      .then(data => {
        //check if the data is availble
        if(data.data && data.data !=''){
          console.log('routesByType :123 ',data);
          setRoutesByType(data.data);
          console.log('routesByType  --',routesByType);
        }
      })
      .catch();
    }
  }

  const submit = (e)=>{
    e.preventDefault();
    $('span.error').html('').prev().css('border','1px solid transparent');
    try{  
      fetch(url +'/client/conn/create', {
        ...fetchOption,
        body: JSON.stringify(submitData),
      })
      .then(response => response.json())
      .then(data => {
        if(data.errors === ''){
          console.log('Success:', data);
          swal(t("Done!"), t("Client Created Successfully!"), "success");
        }else{
          console.log('Error block:', data);
          //data.errors.foreach
          data.errors.forEach((element,index,arr) => {
            console.log($('.'+element.param))
            $('.'+element.param).append(element.msg+'<br/>').prev().css('border','1px solid red');
              
          });
          swal(t("Error!"), t("Error!"), "error");
        }
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }catch(e){

    }
  }
  const collectdata=(e)=>{
    console.log(e.currentTarget.dataset.demo)
    setSubmitData({...submitData,[e.target.name]:e.target.value})
  }
  const onclick=(e)=>{

    e.preventDefault();
    console.log(submitData)
  }
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="main-content horizontal-content">
        <div className="container">
          <BreadCrumb></BreadCrumb>
          <div className="row row-sm">
            <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
              <div className="card  box-shadow-0">
                <div className="card-header tx-medium bd-0 tx-white bg-primary">
                  {t('Client')} {t('Connections')} 
                </div>
                <div className="card-body">
                  <form className="form-horizontal" onSubmit={submit}>
                    <div className="panel panel-primary tabs-style-2">
                      <div className=" tab-menu-heading">
                        <div className="tabs-menu1">
                          <ul className="nav panel-tabs main-nav-line">
                            <li><a href="#tab4" className="nav-link active" data-bs-toggle="tab">{t('SMPP')}</a></li>
                            <li><a href="#tab5" className="nav-link" data-bs-toggle="tab">{t('HTTP')}</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="panel-body tabs-menu-body main-content-body-right border">
                        <div className="tab-content">
                          <div className="tab-pane active" id="tab4">
                            <div className="row row-sm">
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('Route Type')}</p>
                                <select name="routeid" className="form-control" onChange={e => handleChange(e)}>
                                  <option value="">{t('Select Route')}</option>
                                  { 
                                    routeTypes.map(function(currentValue,index,arr){
                                        return <option key={index} value={currentValue.id}>{currentValue.title}</option>
                                    })
                                  }
                                </select>
                                <span class="error routeType"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('Route')}</p>
                                <select name="routetype" className="form-control select2" onChange={e => handleChange(e)}>
                                  <option value="">{t('Select Route Type')}</option>
                                  { 
                                    routesByType.map(function(currentValue,index,arr){
                                        return <option key={index} value={currentValue.id}>{currentValue.title}</option>
                                    })
                                  }
                                </select>
                                <span class="error route"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{ t('Bill Mode') }</p>
                                <Select 
                                  name="billmode"
                                  options={ Bill_Mode } 
                                  onChange={e => handleChange2(e)}
                                />
                                <span class="error billMode"></span>
                              </div>
                              
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('Credits')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder="Credits"
                                  type="number"
                                  ref={ credits }
                                  disabled
                                  readOnly
                                  name="credits"
                                  
                                />
                                <span class="error credits"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('Balance')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder={t('Balance')}
                                  type="number"
                                  ref={ balance }
                                  name="balance"
                                  onChange={e=>collectdata(e)}
                                  disabled
                                  readOnly
                                />
                                <span class="error balance"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('Currency')}</p>
                                <Select 
                                  ref={ currency } 
                                  options={currencies} 
                                  isDisabled={isDisabled}
                                  name="currency"
                                  onChange={e=>collectdata(e)}
                                />
                                <span class="error currency"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{ t('Charge Type') }</p>
                                <Select 
                                  // name="chargeType"
                               
                                  options={ ChargeType }

                                  onChange={e => handleChange2(e)}
                                />
                                <span class="error chargeType"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('SMPP Username')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder={t('Username')}
                                  type="number"
                                  name="username"
                                  onChange={e=>collectdata(e)}

                                />
                                <span class="error userName"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('SMPP Password')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder={ t('SMPP Password') }
                                  type="number"
                                  name="password"
                                  onChange={e=>collectdata(e)}
                                />
                                <span class="error password"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('Port')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder={ t('Port')}
                                  type="number"
                                  name="port"
                                  onChange={e=>collectdata(e)}
                                />
                                <span class="error port"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('Bind Type')}</p>
                                <Select options={BindType}
                                 data-set="demo"
                                onChange={e=>collectdata(e)}
                                 />
                                <span class="error bindType"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('System Type')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder={t('System Type')}
                                  type="text"
                                  name="sysType"
                                  onChange={e=>collectdata(e)}
                                />
                                <span class="error sysType"></span>
                              </div>
                              
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p
                                  className="mg-b-10"
                                  data-bs-placement="left"
                                  data-bs-toggle="tooltip"
                                  title="Address Type Of Number"
                                >
                                  {t('addrTON')}
                                </p>
                                <input
                                  className="form-control form-control"
                                  placeholder={ t('addrTON') }
                                  type="number"
                                  name="addrTON"
                                  onChange={e=>collectdata(e)}
                                />
                                <span class="error addrTON"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p
                                  className="mg-b-10"
                                  data-bs-placement="left"
                                  data-bs-toggle="tooltip"
                                  title="Address Numbering Plan Indicator"
                                >
                                  {t('addrNPI')}
                                </p>
                                <input
                                  className="form-control form-control"
                                  placeholder={ t('addrNPI') }
                                  type="number"
                                  name="addrNPI"
                                  onChange={e=>collectdata(e)}
                                />
                                <span class="error addrNPI"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('addrRange')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder={t('Address Range')}
                                  type="number"
                                  name="addrRange"
                                  onChange={e=>collectdata(e)}
                                />
                                <span class="error addrRange"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('Priority')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder={t('Priority')}
                                  type="number"
                                  name="priority"
                                  onChange={e=>collectdata(e)}
                                />
                                <span class="error priority"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('Log Level')}</p>
                                <Select options={LogLevels } 
                                //  name="logLevel"
                                 onChange={e=>collectdata(e)}
                                 />
                                <span class="error logLevel"></span>
                              </div>
                              
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p
                                  className="mg-b-10"
                                  data-bs-placement="left"
                                  data-bs-toggle="tooltip"
                                  title="Data Coding Scheme"
                                >
                                  {t('DSC')}
                                </p>
                                <input
                                  className="form-control form-control"
                                  placeholder={t('DCS')}
                                  type="number"
                                  name="dsc"
                                  onChange={e=>collectdata(e)}
                                />
                                <span class="error dsc"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('SMS Capacity')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder={t('SMS Capacity')}
                                  type="number"
                                  name="smsCapacity"
                                  onChange={e=>collectdata(e)}
                                />
                                <span class="error smsCapacity"></span>
                              </div>
                              
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('Is PayLoad')}</p>
                                <Select options={yesNo}
                                // name="isPayLoad"
                                onChange={e=>collectdata(e)}
                                />

                                <span class="error isPayLoad"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('Allowed Connection')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder={ t('Allowed Connection') }
                                  type="number"
                                  value="10"
                                  name="allowConn"
                                onChange={e=>collectdata(e)}
                                />
                                <span class="error allowConn"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('Window Size')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder={ t('Window Size') }
                                  type="number"
                                  name="windowSize"
                                  onChange={e=>collectdata(e)}
                                />
                                <span class="error windowSize"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('Whitelist IPs')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder={ t('Whitelist IPs') }
                                  type="text"
                                  name="wlistIp"
                                  onChange={e=>collectdata(e)}
                                />
                                <span class="error wlistIp"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('Enquire Time')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder={ t('Enquire Time') }
                                  type="number"
                                  regex="^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"
                                  name="enqInterTime"
                                  onChange={e=>collectdata(e)}
                               />
                                <span class="error enqInterTime"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('SSL Type')}</p>
                                <Select options={SSLTypes} 
                                // name="sslType"
                                onChange={e=>collectdata(e)}
                                />
                                <span class="error sslType"></span>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane" id="tab5">
                          <div className="row row-sm">
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('HTTP Param Type')}</p>
                                
                                <input
                                  className="form-control form-control"
                                  placeholder={t('HTTP Param Type')}
                                  type="text"
                                  name="httpParamType"
                                   onChange={e=>collectdata(e)}
                                />
                                <span class="error httpParamType"></span>                  
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('HTTP Auth')}</p> 
                                <input
                                  className="form-control form-control"
                                  placeholder={ t('HTTP Auth') }
                                  type="text"
                                  name="httpAuth"
                                  onChange={e=>collectdata(e)}
                                />
                                <span class="error httpAuth"></span>                  
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('HTTP Username')}</p>
                                
                                <input
                                  className="form-control form-control"
                                  placeholder={ t('HTTP Username') }
                                  type="text"
                                  name="httpUserName"
                                  onChange={e=>collectdata(e)}
                                />
                                <span class="error httpUserName"></span>                  
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('HTTP Password')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder={ t('HTTP Password') }
                                  type="text"
                                  name="httpPassword"
                                  onChange={e=>collectdata(e)}
                                />
                                <span class="error httpPassword"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('HTTP TOKEN')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder={ t('HTTP TOKEN') }
                                  type="text"
                                  name="httpToken"
                                  onChange={e=>collectdata(e)}
                                />
                                <span class="error httpToken"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('HTTP DLR Method')}</p>
                                <Select options={HTTP_DLR_Method}
                                //  name="httpDlrMeth"
                                 onChange={e=>collectdata(e)}
                                />
                                <span class="error httpDlrMeth"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('HTTP DLR URL')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder={ t('https://example.com/dlr')}
                                  type="text"
                                  name="httpDlrUrl"
                                  onChange={e=>collectdata(e)}
                                />
                                <span class="error httpDlrUrl"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('HTTP DLR TYPE')}</p>
                                <Select name="httpDlrType" options={HTTP_DLR_Type}
                                //  name="httpDlrType"
                                 onChange={e=>collectdata(e)}
                                />
                                <span class="error httpDlrType"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('HTTP DLR Param Type')}</p>
                                <Select ref={ httpDlrPramType } options={HTTP_DLR_Param_Types}
                                //  name="httpDlrPramType"
                                 onChange={e=>collectdata(e)}
                                />
                                <span class="error httpDlrPramType"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('HTTP Response Type')}</p>
                                <Select name="" options={HTTP_Response_Type} 
                                //  name="httpRespoType"
                                 onChange={e=>collectdata(e)}
                                />
                                <span class="error httpRespoType"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row mb-0 mt-3 justify-content-end">
                      <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                          <p className="mg-b-10">{t('SMPP ON')}</p>
                          <Select options={yesNo} 
                          //  name="smppOn"
                           onChange={e=>collectdata(e)}
                            />
                          <span class="error smppOn"></span>
                      </div>
                      <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                          <p className="mg-b-10">HTTP ON</p>
                          <Select options={yesNo}  
                          //  name="httpOn"
                           onChange={e=>collectdata(e)}
                           />
                          <span class="error httpOn"></span>
                      </div>
                      <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                          <p className="mg-b-10">{t('TimeZone')}</p>
                          <Select options={timeZone} 
                          //  name="smppOn"
                           onChange={e=>collectdata(e)}
                          />
                          <span class="error"></span>
                      </div>
                      <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                          <p className="mg-b-10">{t('Start Time')}</p>
                          <TimePicker
                            onChange={onChange}
                            value={value}
                            // name="openTime"
                            onChange={e=>collectdata(e)}
                          />
                          <span class="error openTime"></span>
                      </div>
                      <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                          <p className="mg-b-10">{t('Close Time')}</p> 
                          <TimePicker
                            onChange={onChange}
                            value={value}
                            // name="closeTime"
                            onChange={e=>collectdata(e)}
                          />
                          <span class="error closeTime"></span>
                      </div>
                      
                      
                      <div>
                        <button type="submit" className="btn btn-success me-2">Save</button>
                      </div>
                      <button onClick={onclick} className="btn btn-success me-2">check</button>

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ClientConnections;