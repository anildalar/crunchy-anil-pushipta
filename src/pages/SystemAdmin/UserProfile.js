import React, { useEffect, useState } from 'react'
import Layout from '../../component/Layout'
import { BreadCrumb } from '../../component/UI/BreadCrumb'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router';
import { fetchOption, url, Toast, countries, langauges } from '../../helpers/helper'
import { toast, ToastContainer } from 'react-toastify'
import Select from 'react-select'
import swal from 'sweetalert'
import $ from "jquery"
import HelperHook from '../../custHook/HelperHook';

/**
* @author
* @function UserProfile
**/

export const UserProfile = (props) => {
  const helper = HelperHook();
  let p = useParams();
  const [data, setData] = useState({
    "firstName": "",
    "lastName": "",
    "mob": "",
    "email": "",
    "password": "",
    "lang": "",
    "alert": {
      "invoice": "0",
      "rate": "0",
      "alarms": "0"
    },
  })
  const [alert, setAlert] = useState({})
  const [anil, setAnil] = useState(true);
  const changeAnil = () => {
    setAnil(!anil)
  }

  useEffect(() => {
    let uuid = {
      "id": p.uuid
    }
    fetch(url + '/user/getUserByid', {
      ...helper.fetchOption,
      body: JSON.stringify(uuid),
    })
      .then(response => response.json())
      .then(data => {
        if (data.status == 200) {
          setData({ ...data, ...data.data })
          setAlert({ ...alert, ...data.data.alert })
          console.log(data)
          console.log(JSON.stringify(alert))

        } else {
          toast.error(data.msg,
            {
              ...Toast,
              position: "top-right"
            });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [])

  const handleCheckBox = (e) => {
    e.preventDefault();
    var check = e.target.checked
    console.log(check)
    if (check) {
      setData({
        ...data,
        "alert": {
          ...data.alert,
          [e.target.name]: Number(e.target.checked),
        }

      })
    }
    console.log(data.alert)
    let updatealert = {
      "id": p.uuid,
      "alertName": e.target.name,
      "value": Number(e.target.checked)
    }
    fetch(url + '/user/update/changeAlert', {
      ...helper.fetchOption,
      body: JSON.stringify(updatealert),
    }).then(response => response.json())
      .then(data => {
        if (data.status == 200) {
          toast.success(data.msg,
            {
              ...Toast,
              position: "top-right"
            })
        } else if (data.status == 400) {
          toast.error(data.errors[0].msg,
            {
              ...Toast,
              position: "top-right"
            });
        } else if (data.status == 404) {
          toast.error(data.msg);
        }

      }).catch((error) => {
        console.error('Error:', error);
      });
  }

  const handleCredentials = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const submitData = (e) => {
    e.preventDefault();
    console.log(data)
    let update = {
      "id": p.uuid,
      "firstName": data.firstName,
      "lastName": data.lastName,
      "mob": data.mob,
      "email": data.email
    }
    $('[name]').css('border', '1px solid gray').siblings('.text-danger').html('');
    fetch(url + '/user/update/changeProfile', {
      ...helper.fetchOption,
      body: JSON.stringify(update),
    })
      .then(response => response.json())
      .then(data => {
        //console.log('Success:', data);
        if (data.status == 200) {
          swal("success", data.msg, "success")
        } else if (data.status = 400) {
          data.errors.forEach(function (arrayItem) {
            $('[name=' + arrayItem.param + ']').css("border", "1px solid red").siblings('span.text-danger').html(arrayItem.msg);
          })
        } else if (data.status = 404) {
          toast.error(data.msg);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  const changeCredentials = (e) => {
    console.log(data.plainPass)
    e.preventDefault();
    let uuid = {
      "id": p.uuid,
      "password": data.password
    }
    $('[name]').css('border', '1px solid gray').siblings('.text-danger').html('');
    fetch(url + '/user/updateUserPassword', {
      ...helper.fetchOption,
      body: JSON.stringify(uuid),
    })
      .then(response => response.json())
      .then(data => {
        if (data.status == 200) {
          // console.log(data.plainPass)
          swal("success", data.msg, "success")
        } else if (data.status == 400) {
          data.errors.forEach(function (arrayItem) {
            $('[name=' + arrayItem.param + ']').css("border", "1px solid red").siblings('span.text-danger').html(arrayItem.msg);
          })
        } else if (data.status == 404) {
          toast.error(data.msg);
        }

      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  const showButton = () => {
    document.querySelector('.submit').classList.remove('d-none')
    document.querySelector('.edit').classList.add('d-none')
    document.getElementById("fieldset").disabled = false;
  }
  const pushpita = (e) => {
    e.preventDefault()
    setAlert(!(alert))

  }

  const langUpdate = (e, name) => {
    //console.log(e.value);
    let nam = name
    setData({ ...data, [nam]: e.value });
    try {
      let changlang = {
        "id": p.uuid,
        "lang": e.value
      }
      fetch(url + '/user/update/changeLang', {
        ...helper.fetchOption,
        body: JSON.stringify(changlang),
      })
        .then(response => response.json())
        .then(data => {
          if (data.status == 200) {
            toast.success(data.msg)
          } else if (data.status == 400) {
            toast.error(data.errors[0].msg,
              {
                ...Toast,
                position: "top-right"
              })
          } else if (data.status == 404) {
            toast.warning(data.msg)
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } catch (err) {
      toast.error("server error",
        {
          ...Toast,
          position: "top-right"
        })
    }

  }
  const keys = Object.keys(data.alert);
  console.log("komal", keys);
  console.log("pushpita", data.alert);
  return (
    <Layout>
      <div className="main-content horizontal-content">
        {/* container opened */}
        <div className="container">
          {/* breadcrumb */}
          <BreadCrumb></BreadCrumb>
          {/* breadcrumb */}
          {/* row */}
          {/* your work start here */}
          <div className="card">
            <div className="card-header bg-info">
              <h4 className="mb-0 text-white">Users Profile</h4>
            </div>
            <div className="card-body">
              <div className="container">
                <div className="main-body">
                  <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex flex-column align-items-center text-center">
                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                            <div className="mt-3">
                              <h4>{data.firstName} {data.lastName}</h4>
                              <p className="text-secondary mb-1">Full Stack Developer</p>
                              <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                              <button className="btn btn-sm btn-primary me-2">Follow</button>
                              <button className="btn btn-sm btn-outline-primary">Message</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-body">
                          <div className="mb-2">
                            <label className="form-label"> Language <span className="tx-danger">*</span></label>
                            <Select options={langauges} onChange={e => langUpdate(e, 'lang')} />
                          </div>
                        </div>
                      </div>

                      <div className="card mt-3 p-2">
                        <form>
                          <div className="mb-3">
                            <label htmlFor="userName" className="form-label">User Name</label>
                            <input defaultValue={data.userName} type="text" className="form-control form-control-sm" id="userName" name="userName" disabled />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input onChange={e => handleCredentials(e)} defaultValue={data.plainPass} type="text" className="form-control form-control-sm" id="password" name="password" />
                            <span className="text-danger error"></span>
                          </div>
                          <button onClick={e => changeCredentials(e)} type="submit" className="btn btn-primary">Change</button>
                        </form>

                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card mb-3">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-7">
                              <form >
                                <fieldset id="fieldset" disabled>
                                  <div className="mb-2">
                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                    <input onChange={e => handleCredentials(e)} defaultValue={data.firstName} type="text" className="form-control form-control-sm" id="firstName" name="firstName" />
                                    <span className="text-danger error"></span>
                                  </div>
                                  <div className="mb-2">
                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                    <input onChange={e => handleCredentials(e)} defaultValue={data.lastName} type="text" className="form-control form-control-sm" id="lastName" name="lastName" />
                                    <span className="text-danger error"></span>
                                  </div>
                                  <div className="mb-2">
                                    <label htmlFor="mob" className="form-label">Mobile</label>
                                    <input onChange={e => handleCredentials(e)} defaultValue={data.mob} type="text" className="form-control form-control-sm" id="mob" name="mob" aria-describedby="emailHelp" />
                                    <span className="text-danger error"></span>
                                  </div>
                                  <div className="mb-2">
                                    <label htmlFor="email" className="form-label">Email </label>
                                    <input onChange={e => handleCredentials(e)} defaultValue={data.email} type="email" className="form-control form-control-sm" id="email" name="email" aria-describedby="emailHelp" />
                                    <span className="text-danger error"></span>
                                  </div>

                                </fieldset >

                                <button onClick={e => submitData(e)} type="submit" className="btn btn-sm btn-primary submit d-none">Submit</button>
                                <button onClick={showButton} type="button" className="btn btn-sm btn-primary edit">Edit</button>
                              </form>
                            </div>
                            <div className="col-5">
                              <div className="card box-shadow-0">
                                <div className="card-header bg-primary p-2">
                                  <h4 className="card-title text-white mb-2">Alert</h4>
                                </div>
                                <div className="card-body ps-2 pe-2">
                                  <div className="form-group">
                                    {/* <fieldset id="fieldset2" disabled> */}
                                    <div className="row row-sm" >
                                      <div className="col-12" >
                                        {

                                          keys.map((element, index) => {
                                            console.log(element)
                                            return (
                                              <div key={index} className="pt-1">
                                                <label className="ckbox pt-1" >
                                                  <input onChange={e => handleCheckBox(e)} name={element} type="checkbox" value="" /><span> Send {element}</span>
                                                </label>
                                              </div>
                                            )
                                          })
                                        }
                                      </div>
                                    </div>
                                    <ToastContainer />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row gutters-sm">
                        <div className="col-sm-6 mb-3">
                          <div className="card h-100">
                            <div className="card-body">
                              <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                              <small>Web Design</small>
                              <div className="progress mb-3" style={{ height: 5 }}>
                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                              <small>Website Markup</small>
                              <div className="progress mb-3" style={{ height: 5 }}>
                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                              <small>One Page</small>
                              <div className="progress mb-3" style={{ height: 5 }}>
                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '89%' }} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                              <small>Mobile Template</small>
                              <div className="progress mb-3" style={{ height: 5 }}>
                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                              <small>Backend API</small>
                              <div className="progress mb-3" style={{ height: 5 }}>
                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '66%' }} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 mb-3">
                          <div className="card h-100">
                            <div className="card-body">
                              <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                              <small>Web Design</small>
                              <div className="progress mb-3" style={{ height: 5 }}>
                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                              <small>Website Markup</small>
                              <div className="progress mb-3" style={{ height: 5 }}>
                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                              <small>One Page</small>
                              <div className="progress mb-3" style={{ height: 5 }}>
                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '89%' }} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                              <small>Mobile Template</small>
                              <div className="progress mb-3" style={{ height: 5 }}>
                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                              <small>Backend API</small>
                              <div className="progress mb-3" style={{ height: 5 }}>
                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '66%' }} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
  )

}