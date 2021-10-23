import React, { useEffect, useRef, useState } from "react";
import Layout from "../../component/Layout";
import Select from 'react-select';
import TimePicker from 'react-time-picker';
import BreadCrumb from "../../component/UI/BreadCrumb";
import swal from "sweetalert";

import { url, fetchOption, SSLTypes, LogLevels, HTTP_DLR_Param_Types, HTTP_DLR_Method, HTTP_DLR_Type, HTTP_Response_Type, timeZone, Bill_Mode} from "../../helpers/helper";
import { useTranslation } from "react-i18next";

function ClientConnections() {
  const { t } = useTranslation();
  const [routeTypes, setRouteTypes] = useState([]);
  const [routesByType, setRoutesByType] = useState([]);
  const [currencies,setCurrencies ] = useState([]);

  const [data, setData] = useState({
                                    "routeType":"1",
                                    "route":1,
                                    "billMode":1,
                                    "balance":"",
                                    "credits":"",
                                    "currency":"",
                                    "sslType":"1",
                                    "addrTON":"",
                                    "addrNPI":"",
                                    "addrRange":"",
                                    "priority":"",
                                    "logLevel":"1",
                                    "sysType":"",
                                    "dsc":"",
                                    "smsCapacity":"2000",
                                    "active":1,
                                    "openTime":"",
                                    "closeTime":"",
                                    "chargeType":"0",
                                    "smppOn":"1",
                                    "httpOn":1,
                                    "bindType":"TR",
                                    "port":"123",
                                    "userName":"twtt",
                                    "password":"trrt",
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

  

  const balance = useRef();
  const credits = useRef();
  const currency = useRef();

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
  const handleChange = (e)=>{
    console.log(e.value);

    /* if(e.target.value && e.target.name != 'billmode'){
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
    //if the billmode
    if( e.target.name == 'billmode' && e.target.value == 0){
      //Credit
      console.log(e.target.name); 
      console.log(e.target.value); 

      console.log(credits.current);
    }
    if( e.target.name == 'billmode' && e.target.value == 1){
      //MCCMNC
      console.log(balance.current);
    }
    if( e.target.name == 'billmode' && e.target.value == ''){
      console.log(balance.current);
    } */
  }

  const submit = (e)=>{
    e.preventDefault();
    try{  

      fetch(url+'/client/conn/create', {
        ...fetchOption,
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        swal("Done!", "Client Created Successfully!", "success");
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }catch(e){

    }
    swal("Done!", "Client Created Successfully!", "success");
  }
 
  return (
    <Layout>
      <div className="main-content horizontal-content">
        <div className="container">
          <BreadCrumb />
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
                                <select name="routeid" className="form-control" onChange={handleChange}>
                                  <option value="">{t('Select Route')}</option>
                                  { 
                                    routeTypes.map(function(currentValue,index,arr){
                                        return <option key={index} value={currentValue.id}>{currentValue.title}</option>
                                    })
                                  }
                                </select>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('Route')}</p>
                                <select name="routetype" className="form-control form-control-sm select2" onChange={handleChange}>
                                  <option value="">{t('Select Route Type')}</option>
                                  { 
                                    routesByType.map(function(currentValue,index,arr){
                                        return <option key={index} value={currentValue.id}>{currentValue.title}</option>
                                    })
                                  }
                                </select>
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('Bill Mode')}</p>
                                <Select 
                                  name="billmode"
                                  options={Bill_Mode} 
                                  onChange={e => handleChange(e)}
                                />
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('Credits')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder="Credits"
                                  type="number"
                                  ref={ credits }
                                />
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('Balance')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder="Balance"
                                  type="number"
                                  ref={ balance }
                                />
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('Currency')}</p>
                                <Select ref={ currency } options={currencies} />
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('SSL Type')}</p>
                                <Select options={SSLTypes} />
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
                                  placeholder="addrTON"
                                  type="number"
                                />
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
                                  placeholder="addrNPI"
                                  type="number"
                                />
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('addrRange')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder="Address Range"
                                  type="number"
                                />
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('Priority')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder="Priority"
                                  type="number"
                                />
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('Log Level')}</p>
                                <Select options={LogLevels} />
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('System Type')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder="System Type"
                                  type="text"
                                />
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
                                  placeholder="DCS"
                                  type="number"
                                />
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('SMS Capacity')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder="SMS Capacity"
                                  type="number"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane" id="tab5">
                          <div className="row row-sm">
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('HTTP Username')}</p>
                                
                                <input
                                  className="form-control form-control"
                                  placeholder="HTTP Username"
                                  type="text"
                                />                  
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('HTTP Password')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder="HTTP Password"
                                  type="text"
                                />
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('HTTP TOKEN')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder="HTTP TOKEN"
                                  type="text"
                                />
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('HTTP DLR TYPE')}</p>
                                <Select options={HTTP_DLR_Method} />
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('HTTP DLR URL')}</p>
                                <input
                                  className="form-control form-control"
                                  placeholder="https://example.com/dlr"
                                  type="text"
                                />
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('HTTP DLR Method')}</p>
                                <Select options={HTTP_DLR_Type} />
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('HTTP DLR Param Type')}</p>
                                <Select options={HTTP_DLR_Param_Types} />
                              </div>
                              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                                <p className="mg-b-10">{t('HTTP Response Type')}</p>
                                <Select options={HTTP_Response_Type} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row mb-0 mt-3 justify-content-end">
                      <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                          <p className="mg-b-10">Start Time</p>
                          <TimePicker
                            onChange={onChange}
                            value={value}
                          />
                      </div>
                      <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                          <p className="mg-b-10">Close Time</p> 
                          <TimePicker
                            onChange={onChange}
                            value={value}
                          />
                      </div>
                      <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 mb-3">
                          <p className="mg-b-10">TimeZone</p>
                          <Select options={timeZone} />
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