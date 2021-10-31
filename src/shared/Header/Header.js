import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/travels image/icon/holidify-logo.svg';

const Header = () => {
    const { user, logout } = useAuth();
    // const activeStyle = {
    //     fontWeight: "bold",
    //     color: "red"
    // }
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Nav className="">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/items">Items</Nav.Link>
                        <Nav.Link as={Link} to="/options">Options</Nav.Link>
                        <Nav.Link as={Link} to="/plans">Plans</Nav.Link>
                        
                        { !user.email ?
                            <Link to="/register">
                                <Button variant="primary" className="me-2">Register</Button>
                            </Link> :
                            <>
                            <Nav.Link as={Link} to="/orders">My Orders</Nav.Link>
                            <Button onClick={logout} variant="danger" className="me-2">Logout</Button>
                            </>
                        }
                        <Link to="/adminDashboard">
                            <Button variant="light">Admin</Button>
                        </Link>
                        {/* <NavLink to="/faq" style={activeStyle}>FAQs</NavLink> */}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;