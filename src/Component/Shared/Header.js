import React from 'react';
import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import './Header.css';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div>
            <Navbar bg="dark" className="text-light" expand="lg">
                <Container className="div-style">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="150"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '} 
                     </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className="text-white cart-icon" >{cartIcon}</Nav.Link>
                            <Nav.Link href="#home" className="text-primary">Login</Nav.Link>

                            <Nav.Link href="#home" className="text-primary "><span class="badge rounded-pill bg-danger btn-style">Sing Up</span></Nav.Link>
                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;