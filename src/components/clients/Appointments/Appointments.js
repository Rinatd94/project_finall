import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import './Appointments.css'
import miss from '../../Images/miss.jpg'
import colorhier from '../../Images/colorhier.jpg'
import logo from '../../Images/logo.jpg'

// export default function aaa(props){

// }

export default function Buttons(props) {

  return (
    <>

      <div className="container">
        <div className="row">
          {/* ניתוב צדדי  */}
          <div className="col-4">
            <ul class="sidenav">
              <li><a class="active" href="#home">דף הבית</a></li>
              <li><a href="#news">התורים שלי</a></li>
              <li><a href="#contact">איזור אישי</a></li>
              <li><a href="#about">אודות הסטודיו</a></li>
              <li><a href="#about"> המוצרים שלנו</a></li>
              <li><a href="#about"> ביטול תור</a></li>
            </ul>

          </div>

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
                  <button className='boton'>צבע לשיער</button>
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
















