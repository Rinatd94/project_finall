import React from 'react';
import { Nav, Navbar, Container, NavDropdown, Form, FormControl, Button, } from 'react-bootstrap';
import "./cancellation.css"
import colorhier from '../../Images/colorhier.jpg'

const Aaa = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">

                    <Navbar bg="light" expand="lg" >
                        <Container fluid id="navbarScroll" >
                            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav

                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav.Link href="#action1">דף הבית</Nav.Link>
                                    <Nav.Link href="#action1">איזור אישי</Nav.Link>
                                    <Nav.Link href="#action2">התורים שלי</Nav.Link>
                                     <Nav.Link href="#action2">ביטול תורים</Nav.Link>
                                     <Nav.Link href="#action1">שינוי תור</Nav.Link>                             
                                    <Nav.Link href="#action1">המוצרים שלנו</Nav.Link>
                                    <Nav.Link href="#action2">אודות הסטודיו</Nav.Link>
                                    <Nav.Link href="#action2">Link</Nav.Link>
                                   
                                </Nav>
                                <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
            <div>
               
                    <div className="row cancellation">
                        <div className="col-3">
                            <button className="button">בטל תור</button>
                        </div>
                        <div className="col-6 details">
                                <p>ביטול תור</p>
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





export default Aaa








