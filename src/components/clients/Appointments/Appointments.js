import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import './Appointments.css'
import miss from '../../Images/miss.jpg'
import colorhier from '../../Images/colorhier.jpg'
import logo from '../../Images/logo.jpg'
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default function Buttons(props) {

  return (
    <>

      <div className="container">
        <div className="row">
   
         

          {/* כל התוכן */}
          <div className="col-8">

            <div className="container">
              <div className="row">
                <img className='images' src={logo} />
              </div>

              <div className="row">

                <div className=" col-lg-4 col-sm-6 detailDiv">
                  <img className='images' src={miss} /><br />
                  <button className='boton'>תספורת לגברים</button>

                </div>

                <div className=" col-lg-4 col-sm-6 detailDiv">
                  <img className='images' src={colorhier} /><br />
                  <button className='boton'><Nav.Link ><Link to='/Colorhier'>צבע לשיער</Link></Nav.Link></button>
                  <nav>  </nav>                   
                </div>

                <div className=" col-lg-4 col-sm-6 detailDiv">
                  <img className='images' src={colorhier} /><br />
                  <button className='boton'>החלקה</button>
                </div>

                <div className=" col-lg-4 col-sm-6 detailDiv">
                  <img className='images' src={colorhier} /><br />
                  <button className='boton'>תסרוקת</button>
                </div>

                <div className=" col-lg-4 col-sm-6 detailDiv">
                  <img className='images' src={colorhier} /><br />
                  <button className='boton'>גוונים</button>
                </div>

                <div className=" col-lg-4 col-sm-6 detailDiv">
                  <img className='images' src={colorhier} /><br />
                  <button className='boton'>תספורת נשים</button>
                </div>

               

              </div>

            </div>
          </div>
        </div>
      </div>
    </>

  )

}
















