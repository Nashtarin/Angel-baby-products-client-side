import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../../../images/logofinal.PNG'
import './Header.css'

const Header = () => {

    return (
        <div className='d-flex justify-content-between'>

            <img className="me-5" style={{ height: "120px", width: "200px" }} src={logo} alt="" />
               


            <div className="me-5 mt-4">
                <Navbar expand="lg">
                    <Container fluid>
                        {/* <Navbar.Brand ><i className='text-warning'>Sunshine Hospital</i></Navbar.Brand> */}
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link ><Link to='/home'>Home</Link></Nav.Link>
                               <Nav.Link ><Link to='/explore'>Explore</Link></Nav.Link>
                               <Nav.Link ><Link to='/dashboard'>Dashboard</Link></Nav.Link>
                               <Nav.Link ><Link to='/aboutus'>About Us</Link></Nav.Link>
                               


                                {/* {user.email ? <div><span>{user.displayName}  </span><Button onClick={logout} className='me-3' variant="primary">Logout</Button></div> :
                                    <Link to='/login'><Button className='me-3' variant="success">Login</Button></Link>} */}

                            </Nav>


                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;