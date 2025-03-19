import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from './Header.module.css';

const Header = () => {
    return (
        <Navbar expand="lg" className={`${styles.header}`}>
            <Container>
                <Navbar.Brand href="/">Leap In Technology &copy;</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">Sobre</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;