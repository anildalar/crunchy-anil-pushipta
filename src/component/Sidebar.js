import React from 'react'

export default function Sidebar() {
    return (
        <React.Fragment>
            <div className="sidebar sidebar-right sidebar-animate">
          <div className="panel panel-primary card mb-0 box-shadow">
            <div className="tab-menu-heading border-0 p-3">
              <div className="card-title mb-0">Notifications</div>
              <div className="card-options ms-auto">
                <a href="#" className="sidebar-remove">
                  <i className="fe fe-x" />
                </a>
              </div>
            </div>
            <div className="panel-body tabs-menu-body latest-tasks p-0 border-0">
              <div className="tabs-menu ">
                <ul className="nav panel-tabs">
                  <li className="">
                    <a href="#side1" className="active" data-bs-toggle="tab">
                      <i className="ion ion-md-chatboxes tx-18 me-2" /> Chat
                    </a>
                  </li>
                  <li>
                    <a href="#side2" data-bs-toggle="tab">
                      <i className="ion ion-md-notifications tx-18  me-2" />{" "}
                      Notifications
                    </a>
                  </li>
                  <li>
                    <a href="#side3" data-bs-toggle="tab">
                      <i className="ion ion-md-contacts tx-18 me-2" /> Friends
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <div className="tab-pane active " id="side1">
                  <div className="list d-flex align-items-center border-bottom p-3">
                    <div className="">
                      <span className="avatar bg-primary brround avatar-md">
                        CH
                      </span>
                    </div>
                    <a className="wrapper w-100 ms-3" href="#">
                      <p className="mb-0 d-flex ">
                        <b>New Websites is Created</b>
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <i className="mdi mdi-clock text-muted me-1" />
                          <small className="text-muted ms-auto">
                            30 mins ago
                          </small>
                          <p className="mb-0" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="list d-flex align-items-center border-bottom p-3">
                    <div className="">
                      <span className="avatar bg-danger brround avatar-md">
                        N
                      </span>
                    </div>
                    <a className="wrapper w-100 ms-3" href="#">
                      <p className="mb-0 d-flex ">
                        <b>Prepare For the Next Project</b>
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <i className="mdi mdi-clock text-muted me-1" />
                          <small className="text-muted ms-auto">
                            2 hours ago
                          </small>
                          <p className="mb-0" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="list d-flex align-items-center border-bottom p-3">
                    <div className="">
                      <span className="avatar bg-info brround avatar-md">
                        S
                      </span>
                    </div>
                    <a className="wrapper w-100 ms-3" href="#">
                      <p className="mb-0 d-flex ">
                        <b>Decide the live Discussion</b>
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <i className="mdi mdi-clock text-muted me-1" />
                          <small className="text-muted ms-auto">
                            3 hours ago
                          </small>
                          <p className="mb-0" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="list d-flex align-items-center border-bottom p-3">
                    <div className="">
                      <span className="avatar bg-warning brround avatar-md">
                        K
                      </span>
                    </div>
                    <a className="wrapper w-100 ms-3" href="#">
                      <p className="mb-0 d-flex ">
                        <b>Meeting at 3:00 pm</b>
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <i className="mdi mdi-clock text-muted me-1" />
                          <small className="text-muted ms-auto">
                            4 hours ago
                          </small>
                          <p className="mb-0" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="list d-flex align-items-center border-bottom p-3">
                    <div className="">
                      <span className="avatar bg-success brround avatar-md">
                        R
                      </span>
                    </div>
                    <a className="wrapper w-100 ms-3" href="#">
                      <p className="mb-0 d-flex ">
                        <b>Prepare for Presentation</b>
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <i className="mdi mdi-clock text-muted me-1" />
                          <small className="text-muted ms-auto">
                            1 day ago
                          </small>
                          <p className="mb-0" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="list d-flex align-items-center border-bottom p-3">
                    <div className="">
                      <span className="avatar bg-pink brround avatar-md">
                        MS
                      </span>
                    </div>
                    <a className="wrapper w-100 ms-3" href="#">
                      <p className="mb-0 d-flex ">
                        <b>Prepare for Presentation</b>
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <i className="mdi mdi-clock text-muted me-1" />
                          <small className="text-muted ms-auto">
                            1 day ago
                          </small>
                          <p className="mb-0" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="list d-flex align-items-center border-bottom p-3">
                    <div className="">
                      <span className="avatar bg-purple brround avatar-md">
                        L
                      </span>
                    </div>
                    <a className="wrapper w-100 ms-3" href="#">
                      <p className="mb-0 d-flex ">
                        <b>Prepare for Presentation</b>
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <i className="mdi mdi-clock text-muted me-1" />
                          <small className="text-muted ms-auto">
                            45 minutes ago
                          </small>
                          <p className="mb-0" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="list d-flex align-items-center p-3">
                    <div className="">
                      <span className="avatar bg-blue brround avatar-md">
                        U
                      </span>
                    </div>
                    <a className="wrapper w-100 ms-3" href="#">
                      <p className="mb-0 d-flex ">
                        <b>Prepare for Presentation</b>
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <i className="mdi mdi-clock text-muted me-1" />
                          <small className="text-muted ms-auto">
                            2 days ago
                          </small>
                          <p className="mb-0" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="tab-pane  " id="side2">
                  <div className="list-group list-group-flush ">
                    <div className="list-group-item d-flex  align-items-center">
                      <div className="me-3">
                        <span
                          className="avatar avatar-lg brround cover-image"
                          data-bs-image-src="../../assets/img/faces/12.jpg"
                        >
                          <span className="avatar-status bg-success" />
                        </span>
                      </div>
                      <div>
                        <strong>Madeleine</strong> Hey! there I' am
                        available....
                        <div className="small text-muted">3 hours ago</div>
                      </div>
                    </div>
                    <div className="list-group-item d-flex  align-items-center">
                      <div className="me-3">
                        <span
                          className="avatar avatar-lg brround cover-image"
                          data-bs-image-src="../../assets/img/faces/1.jpg"
                        />
                      </div>
                      <div>
                        <strong>Anthony</strong> New product Launching...
                        <div className="small text-muted">5 hour ago</div>
                      </div>
                    </div>
                    <div className="list-group-item d-flex  align-items-center">
                      <div className="me-3">
                        <span
                          className="avatar avatar-lg brround cover-image"
                          data-bs-image-src="../../assets/img/faces/2.jpg"
                        >
                          <span className="avatar-status bg-success" />
                        </span>
                      </div>
                      <div>
                        <strong>Olivia</strong> New Schedule Realease......
                        <div className="small text-muted">45 minutes ago</div>
                      </div>
                    </div>
                    <div className="list-group-item d-flex  align-items-center">
                      <div className="me-3">
                        <span
                          className="avatar avatar-lg brround cover-image"
                          data-bs-image-src="../../assets/img/faces/8.jpg"
                        >
                          <span className="avatar-status bg-success" />
                        </span>
                      </div>
                      <div>
                        <strong>Madeleine</strong> Hey! there I' am
                        available....
                        <div className="small text-muted">3 hours ago</div>
                      </div>
                    </div>
                    <div className="list-group-item d-flex  align-items-center">
                      <div className="me-3">
                        <span
                          className="avatar avatar-lg brround cover-image"
                          data-bs-image-src="../../assets/img/faces/11.jpg"
                        />
                      </div>
                      <div>
                        <strong>Anthony</strong> New product Launching...
                        <div className="small text-muted">5 hour ago</div>
                      </div>
                    </div>
                    <div className="list-group-item d-flex  align-items-center">
                      <div className="me-3">
                        <span
                          className="avatar avatar-lg brround cover-image"
                          data-bs-image-src="../../assets/img/faces/6.jpg"
                        >
                          <span className="avatar-status bg-success" />
                        </span>
                      </div>
                      <div>
                        <strong>Olivia</strong> New Schedule Realease......
                        <div className="small text-muted">45 minutes ago</div>
                      </div>
                    </div>
                    <div className="list-group-item d-flex  align-items-center">
                      <div className="me-3">
                        <span
                          className="avatar avatar-lg brround cover-image"
                          data-bs-image-src="../../assets/img/faces/9.jpg"
                        >
                          <span className="avatar-status bg-success" />
                        </span>
                      </div>
                      <div>
                        <strong>Olivia</strong> Hey! there I' am available....
                        <div className="small text-muted">12 minutes ago</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane  " id="side3">
                  <div className="list-group list-group-flush ">
                    <div className="list-group-item d-flex  align-items-center">
                      <div className="me-2">
                        <span
                          className="avatar avatar-md brround cover-image"
                          data-bs-image-src="../../assets/img/faces/9.jpg"
                        >
                          <span className="avatar-status bg-success" />
                        </span>
                      </div>
                      <div className="">
                        <div
                          className="fw-semibold"
                          data-bs-toggle="modal"
                          data-bs-target="#chatmodel"
                        >
                          Mozelle Belt
                        </div>
                      </div>
                      <div className="ms-auto">
                        <a
                          href="#"
                          className="btn btn-sm btn-light"
                          data-bs-toggle="modal"
                          data-bs-target="#chatmodel"
                        >
                          <i className="fab fa-facebook-messenger" />
                        </a>
                      </div>
                    </div>
                    <div className="list-group-item d-flex  align-items-center">
                      <div className="me-2">
                        <span
                          className="avatar avatar-md brround cover-image"
                          data-bs-image-src="../../assets/img/faces/11.jpg"
                        />
                      </div>
                      <div className="">
                        <div
                          className="fw-semibold"
                          data-bs-toggle="modal"
                          data-bs-target="#chatmodel"
                        >
                          Florinda Carasco
                        </div>
                      </div>
                      <div className="ms-auto">
                        <a
                          href="#"
                          className="btn btn-sm btn-light"
                          data-bs-toggle="modal"
                          data-bs-target="#chatmodel"
                        >
                          <i className="fab fa-facebook-messenger" />
                        </a>
                      </div>
                    </div>
                    <div className="list-group-item d-flex  align-items-center">
                      <div className="me-2">
                        <span
                          className="avatar avatar-md brround cover-image"
                          data-bs-image-src="../../assets/img/faces/10.jpg"
                        >
                          <span className="avatar-status bg-success" />
                        </span>
                      </div>
                      <div className="">
                        <div
                          className="fw-semibold"
                          data-bs-toggle="modal"
                          data-bs-target="#chatmodel"
                        >
                          Alina Bernier
                        </div>
                      </div>
                      <div className="ms-auto">
                        <a
                          href="#"
                          className="btn btn-sm btn-light"
                          data-bs-toggle="modal"
                          data-bs-target="#chatmodel"
                        >
                          <i className="fab fa-facebook-messenger" />
                        </a>
                      </div>
                    </div>
                    <div className="list-group-item d-flex  align-items-center">
                      <div className="me-2">
                        <span
                          className="avatar avatar-md brround cover-image"
                          data-bs-image-src="../../assets/img/faces/2.jpg"
                        >
                          <span className="avatar-status bg-success" />
                        </span>
                      </div>
                      <div className="">
                        <div
                          className="fw-semibold"
                          data-bs-toggle="modal"
                          data-bs-target="#chatmodel"
                        >
                          Zula Mclaughin
                        </div>
                      </div>
                      <div className="ms-auto">
                        <a
                          href="#"
                          className="btn btn-sm btn-light"
                          data-bs-toggle="modal"
                          data-bs-target="#chatmodel"
                        >
                          <i className="fab fa-facebook-messenger" />
                        </a>
                      </div>
                    </div>
                    <div className="list-group-item d-flex  align-items-center">
                      <div className="me-2">
                        <span
                          className="avatar avatar-md brround cover-image"
                          data-bs-image-src="../../assets/img/faces/13.jpg"
                        />
                      </div>
                      <div className="">
                        <div
                          className="fw-semibold"
                          data-bs-toggle="modal"
                          data-bs-target="#chatmodel"
                        >
                          Isidro Heide
                        </div>
                      </div>
                      <div className="ms-auto">
                        <a
                          href="#"
                          className="btn btn-sm btn-light"
                          data-bs-toggle="modal"
                          data-bs-target="#chatmodel"
                        >
                          <i className="fab fa-facebook-messenger" />
                        </a>
                      </div>
                    </div>
                    <div className="list-group-item d-flex  align-items-center">
                      <div className="me-2">
                        <span
                          className="avatar avatar-md brround cover-image"
                          data-bs-image-src="../../assets/img/faces/12.jpg"
                        >
                          <span className="avatar-status bg-success" />
                        </span>
                      </div>
                      <div className="">
                        <div
                          className="fw-semibold"
                          data-bs-toggle="modal"
                          data-bs-target="#chatmodel"
                        >
                          Mozelle Belt
                        </div>
                      </div>
                      <div className="ms-auto">
                        <a
                          href="#"
                          className="btn btn-sm btn-light"
                          data-bs-toggle="modal"
                          data-bs-target="#chatmodel"
                        >
                          <i className="fab fa-facebook-messenger" />
                        </a>
                      </div>
                    </div>
                    <div className="list-group-item d-flex  align-items-center">
                      <div className="me-2">
                        <span
                          className="avatar avatar-md brround cover-image"
                          data-bs-image-src="../../assets/img/faces/4.jpg"
                        />
                      </div>
                      <div className="">
                        <div
                          className="fw-semibold"
                          data-bs-toggle="modal"
                          data-bs-target="#chatmodel"
                        >
                          Florinda Carasco
                        </div>
                      </div>
                      <div className="ms-auto">
                        <a
                          href="#"
                          className="btn btn-sm btn-light"
                          data-bs-toggle="modal"
                          data-bs-target="#chatmodel"
                        >
                          <i className="fab fa-facebook-messenger" />
                        </a>
                      </div>
                    </div>
                    <div className="list-group-item d-flex  align-items-center">
                      <div className="me-2">
                        <span
                          className="avatar avatar-md brround cover-image"
                          data-bs-image-src="../../assets/img/faces/7.jpg"
                        />
                      </div>
                      <div className="">
                        <div
                          className="fw-semibold"
                          data-bs-toggle="modal"
                          data-bs-target="#chatmodel"
                        >
                          Alina Bernier
                        </div>
                      </div>
                      <div className="ms-auto">
                        <a
                          href="#"
                          className="btn btn-sm btn-light"
                          data-bs-toggle="modal"
                          data-bs-target="#chatmodel"
                        >
                          <i className="fab fa-facebook-messenger" />
                        </a>
                      </div>
                    </div>
                    <div className="list-group-item d-flex  align-items-center">
                      <div className="me-2">
                        <span
                          className="avatar avatar-md brround cover-image"
                          data-bs-image-src="../../assets/img/faces/2.jpg"
                        />
                      </div>
                      <div className="">
                        <div
                          className="fw-semibold"
                          data-bs-toggle="modal"
                          data-bs-target="#chatmodel"
                        >
                          Zula Mclaughin
                        </div>
                      </div>
                      <div className="ms-auto">
                        <a
                          href="#"
                          className="btn btn-sm btn-light"
                          data-bs-toggle="modal"
                          data-bs-target="#chatmodel"
                        >
                          <i className="fab fa-facebook-messenger" />
                        </a>
                      </div>
                    </div>
                    <div className="list-group-item d-flex  align-items-center">
                      <div className="me-2">
                        <span
                          className="avatar avatar-md brround cover-image"
                          data-bs-image-src="../../assets/img/faces/14.jpg"
                        >
                          <span className="avatar-status bg-success" />
                        </span>
                      </div>
                      <div className="">
                        <div
                          className="fw-semibold"
                          data-bs-toggle="modal"
                          data-bs-target="#chatmodel"
                        >
                          Isidro Heide
                        </div>
                      </div>
                      <div className="ms-auto">
                        <a
                          href="#"
                          className="btn btn-sm btn-light"
                          data-bs-toggle="modal"
                          data-bs-target="#chatmodel"
                        >
                          <i className="fab fa-facebook-messenger" />
                        </a>
                      </div>
                    </div>
                    <div className="list-group-item d-flex  align-items-center">
                      <div className="me-2">
                        <span
                          className="avatar avatar-md brround cover-image"
                          data-bs-image-src="../../assets/img/faces/11.jpg"
                        />
                      </div>
                      <div className="">
                        <div
                          className="fw-semibold"
                          data-bs-toggle="modal"
                          data-bs-target="#chatmodel"
                        >
                          Florinda Carasco
                        </div>
                      </div>
                      <div className="ms-auto">
                        <a
                          href="#"
                          className="btn btn-sm btn-light"
                          data-bs-toggle="modal"
                          data-bs-target="#chatmodel"
                        >
                          <i className="fab fa-facebook-messenger" />
                        </a>
                      </div>
                    </div>
                    <div className="list-group-item d-flex  align-items-center">
                      <div className="me-2">
                        <span
                          className="avatar avatar-md brround cover-image"
                          data-bs-image-src="../../assets/img/faces/9.jpg"
                        />
                      </div>
                      <div className="">
                        <div
                          className="fw-semibold"
                          data-bs-toggle="modal"
                          data-bs-target="#chatmodel"
                        >
                          Alina Bernier
                        </div>
                      </div>
                      <div className="ms-auto">
                        <a
                          href="#"
                          className="btn btn-sm btn-light"
                          data-bs-toggle="modal"
                          data-bs-target="#chatmodel"
                        >
                          <i className="fab fa-facebook-messenger" />
                        </a>
                      </div>
                    </div>
                    <div className="list-group-item d-flex  align-items-center">
                      <div className="me-2">
                        <span
                          className="avatar avatar-md brround cover-image"
                          data-bs-image-src="../../assets/img/faces/15.jpg"
                        >
                          <span className="avatar-status bg-success" />
                        </span>
                      </div>
                      <div className="">
                        <div
                          className="fw-semibold"
                          data-bs-toggle="modal"
                          data-bs-target="#chatmodel"
                        >
                          Zula Mclaughin
                        </div>
                      </div>
                      <div className="ms-auto">
                        <a
                          href="#"
                          className="btn btn-sm btn-light"
                          data-bs-toggle="modal"
                          data-bs-target="#chatmodel"
                        >
                          <i className="fab fa-facebook-messenger" />
                        </a>
                      </div>
                    </div>
                    <div className="list-group-item d-flex  align-items-center">
                      <div className="me-2">
                        <span
                          className="avatar avatar-md brround cover-image"
                          data-bs-image-src="../../assets/img/faces/4.jpg"
                        />
                      </div>
                      <div className="">
                        <div
                          className="fw-semibold"
                          data-bs-toggle="modal"
                          data-bs-target="#chatmodel"
                        >
                          Isidro Heide
                        </div>
                      </div>
                      <div className="ms-auto">
                        <a
                          href="#"
                          className="btn btn-sm btn-light"
                          data-bs-toggle="modal"
                          data-bs-target="#chatmodel"
                        >
                          <i className="fab fa-facebook-messenger" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        </React.Fragment>
    )
}
