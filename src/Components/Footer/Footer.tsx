import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={`${styles.footer} ${styles.stickyFooter}`}> {/* Use sticky ou absolute */}
            <Container>
                <Row>
                    <Col className="text-center">
                        <p>&copy; {new Date().getFullYear()} Leap In Technology. Todos os direitos reservados.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;