import React from "react";
import { Nav, Navbar, Container, NavDropdown, Form, FormControl, Button, } from 'react-bootstrap';
import colorhier from '../../Images/colorhier.jpg'
import "./Myqueues.css"
// const Myqueues= () => {
//     return (
//         <>
//             <div>
//                 <p>התורים שלי</p>
//             </div>
//             <div className="row cancellation">
//                 {/* <div className="col-3"> */}

//                 {/* </div> */}
//                 <div className="col-6 details">

//                     <p>שם התספרות</p>
//                     <p>שעה </p>
//                     <p>תאריך </p>
//                 </div>
//                 <div className="col-3">
//                     <img className='images' src={colorhier} />
//                 </div>
//             </div>








//         </>
//     )
// }
const Myqueues = () => {
    return (
        <div className="container-fluid">
            <div>
                <p>התורים שלי</p>
            </div>
            <div>

                <div className="row cancellation">
                    <div className="col-3">
                        <button className="button">בטל תור</button>
                        <button className="button">שנה תור </button>
                    </div>
                    <div className="col-6 details">
                        <p>שם התספרות</p>
                        <p>שעה </p>
                        <p>תאריך </p>
                    </div>
                    <div className="col-3">
                        <img className='images' src={colorhier} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Myqueues