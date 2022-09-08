import React, { useState } from 'react'
import './Login.css'
import { Modal, Button } from 'react-bootstrap'

import {Nav}  from 'react-bootstrap';
// import Link from 'react-bootstrap';
import { Link } from "react-router-dom";


export function MyModal(props) {

  return (
    <>
   
    <Modal 
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          התחברות
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>הכנס שם משתמש וסיסמא</h4>
        <p>
        <label className='class' for='name'></label>
            <input id='name' type='text' placeholder='שם משתמש' />
          <br /><br />
             <label for='password'></label>
            <input id='password' type='password' placeholder='סיסמא' />
            <br /><br />
     
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={props.onHide}>enter</Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}

export function MyModal2(props) {
 const onHide=props.onHide;
 const [user,setuser]= useState({name:"",lastName:"",passwors:"",phone:"",emil:""});
 
 function update()
 {

 }
 
 function save()
  { 
  onHide();
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
};
fetch('localhost:3030/user/NewUser', requestOptions)
    .then(response => response.json())
    .then(data => this.setState({ postId: data.id }));
 
  }
  return (
    <Modal 
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          הירשם
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>הכנס פרטים אישיים</h4>
        <p>
        <label className='class' for='firstname'></label>
            <input id='firstname' type='text' placeholder='שם פרטי ' />
            <br /><br />
            <label  for='lastname'></label>
            <input id='lastname' type='text' placeholder='שם משפחה  ' />
            <br /><br />
             <label for='password' ></label>
            <input id='password' type='password' placeholder='צור סיסמא' />
            <br /><br />
            <label for='tel' ></label>
            <input id='tel' type='tel' placeholder='טלפון' />
            <br /><br />
            <label for='email' ></label>
            <input id='email' type='email' placeholder='הכנס איימיל' />
            <br /><br />
     
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={save}>enter</Button>
      </Modal.Footer>
    </Modal>
    
  );
}

export default function Login() {
  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);

  return (
    <>
      <Button   id="sarah" className="Modal" onClick={() => setModalShow1(true)}>
        התחברות
      </Button> &nbsp;
      <Button  className="Modal2" onClick={() => setModalShow2(true)}>
        הרשמה 
      </Button>

      <MyModal
        show={modalShow1}
        onHide={() => setModalShow1(false)}
      />

<MyModal2
        show={modalShow2}
        onHide={() => setModalShow2(false)}



        
      />
      <br></br><br></br>
       <button className='boton'>עובד</button>
       <nav>
       
       <Nav.Link ><Link to='/Employee' >עובד</Link> </Nav.Link>
     </nav>
    </>
    
  )
}



















    // קוד התחלתי שלנו
    //         <>
    //           <h1>  הירשם  התחברות</h1> 

    //         <label className='class' for='name'></label>
    //         <input id='name' type='text' placeholder='שם משתמש' />
    // <br />
    //         <label for='password'></label>
    //         <input id='password' type='text' placeholder='סיסמא' />
    //         <br />
    // <button>כניסה</button>
    //         </>
