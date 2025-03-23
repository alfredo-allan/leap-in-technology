import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from './Header.module.css';
import ContactModal from '../ContactModal/ContactModal';
import menuIcon from '../../Assets/Img/menuIcon.png'; // Importe a imagem

const Header = () => {
    const [showContactModal, setShowContactModal] = useState(false);

    return (
        <Navbar expand="lg" className={`${styles.header}`}>
            <Container>
                <Navbar.Brand href="/">Leap In Technology &copy;</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: '#a33da3' }} >
                    <img src={menuIcon} alt="Menu" style={{ width: '32px', height: '32px' }} />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
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