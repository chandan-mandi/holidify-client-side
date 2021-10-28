import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    // const activeStyle = {
    //     fontWeight: "bold",
    //     color: "red"
    // }
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Holidify</Navbar.Brand>
                    <Nav className="">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/donation">Donation</Nav.Link>
                        <Nav.Link as={Link} to="/events">Events</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        <Link to="/register">
                            <Button variant="primary" className="me-2">Register</Button>
                        </Link>
                        <Link to="/admin">
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