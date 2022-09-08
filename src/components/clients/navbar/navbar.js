import React from "react"
import { Nav, Navbar, Container, NavDropdown, Form, FormControl, Button, Toast } from 'react-bootstrap';
import { Link } from "react-router-dom";

const NavbarClient = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">

                    <Navbar bg="light" expand="lg" >
                        <Container fluid id="navbarScroll" >

                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav

                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav.Link><Link to=''>דף הבית</Link></Nav.Link>
                                    <Nav.Link ><Link to='/Appointments'> אפציות שלנו</Link></Nav.Link>
                                    <Nav.Link ><Link to='/Myqueues'> התורים שלי</Link></Nav.Link>
                                    {/* <Nav.Link ><Link to='/Cancellation'> ביטול תורים</Link></Nav.Link> */}
                                    {/* <Nav.Link ><Link to='/Changing'> שינוי תור</Link></Nav.Link> */}
                                    <Nav.Link ><Link to='/Shop'> המוצרים שלנו</Link></Nav.Link>
                                    <Nav.Link ><Link to='/About'> אודות הסטודיו</Link></Nav.Link>
                                    <Nav.Link ><Link to='/Hairsylist'> הספרים שלנו</Link></Nav.Link>
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
        </div>
    )
}




export default NavbarClient


