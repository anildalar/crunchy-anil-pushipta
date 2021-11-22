import React from 'react'
import Layout from "../component/Layout";
import Sidebar from "../component/Sidebar";
import { BreadCrumb } from '../component/UI/BreadCrumb';
/**
* @author
* @function Pushpita
**/

const Pushpita = (props) => {
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
          <div className="row row-sm">
            
          </div>
          {/* your work end here */}
          {/* row close */}
        </div>
        {/* Container closed */}
      </div>

     
    </Layout>

  )

}
export default Pushpita;