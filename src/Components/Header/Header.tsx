import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from './Header.module.css';
import ContactModal from '../ContactModal/ContactModal';

const Header = () => {
    const [showContactModal, setShowContactModal] = useState(false);

    return (
        <Navbar expand="lg" className={`${styles.header}`}>
            <Container>
                <Navbar.Brand href="//leap-in-technology">Leap In Technology &copy;</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/leap-in-technology">Home</Nav.Link>
                        <Nav.Link href="/about">Sobre</Nav.Link>
                        <Nav.Link onClick={() => setShowContactModal(true)}>Entre em contato</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <ContactModal show={showContactModal} onHide={() => setShowContactModal(false)} />
        </Navbar>
    );
};

export default Header;