import React, { useEffect, useRef, useState } from "react";
import Layout from "../../component/Layout";
import Select from 'react-select';
import TimePicker from 'react-time-picker';
import BreadCrumb from "../../component/UI/BreadCrumb";
import swal from "sweetalert";

import { url, fetchOption, SSLTypes, LogLevels, HTTP_DLR_Param_Types, HTTP_DLR_Method, HTTP_DLR_Type, HTTP_Response_Type, timeZone, Bill_Mode, yesNo, BindType, ChargeType} from "../../helpers/helper";
import { useTranslation } from "react-i18next";

import $ from "jquery";

function ClientConnections() {
  const [routeTypes, setRouteTypes] = useState([]);
  const [routesByType, setRoutesByType] = useState([]);
  const [currencies,setCurrencies ] = useState([]);
  const [isDisabled,setIsDisabled] = useState(true);

  const [submitData, setSubmitData] = useState({
                                    "routeType":"",
                                    "route":1,
                                    "billMode":1,
                                    "balance":"",
                                    "credits":"",
                                    "currency":"",
                                    "sslType":"",
                                    "addrTON":"",
                                    "addrNPI":"",
                                    "addrRange":"",
                                    "priority":"",
                                    "logLevel":"1",
                                    "sysType":"",
                                    "dsc":"",
                                    "smsCapacity":"",
                                    "active":1,
                                    "openTime":"",
                                    "closeTime":"",
                                    "chargeType":"0",
                                    "smppOn":1,
                                    "httpOn":1,
                                    "bindType":"TR",
                                    "port":"",
                                    "userName":"",
                                    "password":"",
                                    "isPayLoad":"0",
                                    "enqInterTime":"65446",
                                    "allowConn":"5",
                                    "windowSize":"",
                                    "wlistIp":"",
                                    "httpParamType":"",
                                    "httpAuth":"0= none & 1=bearer & 2= basic",
                                    "httpUserName":"",
                                    "httpPassword":"",
                                    "httpToken":"",
                                    "httpDlrType":"0=get & 1=revived",
                                    "httpDlrUrl":"",
                                    "httpDlrMeth":"1=post & 0=get",
                                    "httpDlrPramType":"0=query & 1= json & 2 =fromdata",
                                    "httpRespoType":"1=string/0=object"
                                  });

  const [value, onChange] = useState('07:00');

  const credits = useRef();
  const balance = useRef();
  const currency = useRef();

  const httpDlrPramType = useRef();

  useEffect(() => {
    //const setCurrencies
    
    //get Route Type
    fetch(url+'/master/route/getRouteType',{
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
    fetch(url+'/master/get/currencies',{
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
      fetch(url+'/master/route/routesByType',{
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
    $('span.error').html('').prev().css('border','1px solid #e1e5ef');
    try{  
      fetch(url+'/client/conn/create', {
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
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="main-content horizontal-content">
        <div className="container">
          <BreadCrumb  />
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
                                />
                                <span class="error currency"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{ t('Charge Type') }</p>
                                <Select 
                                  name="chargeType"
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
                                />
                                <span class="error userName"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('SMPP Password')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder={ t('SMPP Password') }
                                  type="number"
                                />
                                <span class="error password"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('Port')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder={ t('Port')}
                                  type="number"
                                />
                                <span class="error port"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('Bind Type')}</p>
                                <Select options={BindType} />
                                <span class="error bindType"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('System Type')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder={t('System Type')}
                                  type="text"
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
                                />
                                <span class="error addrNPI"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('addrRange')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder={t('Address Range')}
                                  type="number"
                                />
                                <span class="error addrRange"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('Priority')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder={t('Priority')}
                                  type="number"
                                />
                                <span class="error priority"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('Log Level')}</p>
                                <Select options={LogLevels} />
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
                                />
                                <span class="error dsc"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('SMS Capacity')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder={t('SMS Capacity')}
                                  type="number"
                                />
                                <span class="error smsCapacity"></span>
                              </div>
                              
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('Is PayLoad')}</p>
                                <Select options={yesNo} />

                                <span class="error isPayLoad"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('Allowed Connection')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder={ t('Allowed Connection') }
                                  type="number"
                                  value="10"
                                />
                                <span class="error allowConn"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('Window Size')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder={ t('Window Size') }
                                  type="number"
                                />
                                <span class="error windowSize"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('Whitelist IPs')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder={ t('Whitelist IPs') }
                                  type="text"
                                />
                                <span class="error wlistIp"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('Enquire Time')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder={ t('Enquire Time') }
                                  type="number"
                                  
                                />
                                <span class="error enqInterTime"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('SSL Type')}</p>
                                <Select options={SSLTypes} />
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
                                  name=""
                                />
                                <span class="error httpParamType"></span>                  
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('HTTP Auth')}</p> 
                                <input
                                  className="form-control form-control"
                                  placeholder={ t('HTTP Auth') }
                                  type="text"
                                  name=""
                                />
                                <span class="error httpAuth"></span>                  
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('HTTP Username')}</p>
                                
                                <input
                                  className="form-control form-control"
                                  placeholder={ t('HTTP Username') }
                                  type="text"
                                  name=""
                                />
                                <span class="error httpUserName"></span>                  
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('HTTP Password')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder={ t('HTTP Password') }
                                  type="text"
                                />
                                <span class="error httpPassword"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('HTTP TOKEN')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder={ t('HTTP TOKEN') }
                                  type="text"
                                />
                                <span class="error httpToken"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('HTTP DLR Method')}</p>
                                <Select options={HTTP_DLR_Method} />
                                <span class="error httpDlrMeth"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('HTTP DLR URL')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder={ t('https://example.com/dlr')}
                                  type="text"
                                />
                                <span class="error httpDlrUrl"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('HTTP DLR TYPE')}</p>
                                <Select name="httpDlrType" options={HTTP_DLR_Type} />
                                <span class="error httpDlrType"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('HTTP DLR Param Type')}</p>
                                <Select ref={ httpDlrPramType } options={HTTP_DLR_Param_Types} />
                                <span class="error httpDlrPramType"></span>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('HTTP Response Type')}</p>
                                <Select name="" options={HTTP_Response_Type} />
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
                          <Select options={yesNo} />
                          <span class="error smppOn"></span>
                      </div>
                      <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                          <p className="mg-b-10">HTTP ON</p>
                          <Select options={yesNo} />
                          <span class="error httpOn"></span>
                      </div>
                      <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                          <p className="mg-b-10">{t('TimeZone')}</p>
                          <Select options={timeZone} />
                          <span class="error"></span>
                      </div>
                      <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                          <p className="mg-b-10">{t('Start Time')}</p>
                          <TimePicker
                            onChange={onChange}
                            value={value}
                          />
                          <span class="error openTime"></span>
                      </div>
                      <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                          <p className="mg-b-10">{t('Close Time')}</p> 
                          <TimePicker
                            onChange={onChange}
                            value={value}
                          />
                          <span class="error closeTime"></span>
                      </div>
                      
                      
                      <div>
                        <button type="submit" className="btn btn-success me-2">Save</button>
                      </div>
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