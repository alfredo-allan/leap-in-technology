import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import styles from './ContactModal.module.css';

interface ContactModalProps {
    show: boolean;
    onHide: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ show, onHide }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const formatName = (value: string) => {
        return value
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    const formatPhone = (value: string) => {
        const digits = value.replace(/\D/g, '').slice(0, 11);
        if (digits.length <= 2) {
            return digits;
        } else if (digits.length <= 7) {
            return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
        } else {
            return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
        }
    };

    const handleSubmit = () => {
        const whatsappNumber = '5511912109424';
        const whatsappMessage = `Nome: ${name}\nTelefone: ${phone}\nEmail: ${email}\nMensagem: ${message}`;
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
        onHide();
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton className={styles.modalHeader}>
                <Modal.Title>Entre em contato  <br /> <b style={{ fontSize: '14px', fontWeight: 'bold' }}>Leap In Technology ©</b></Modal.Title>            </Modal.Header>
            <Modal.Body className={styles.modalContent}>
                <Form>
                    <Form.Group>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite seu nome"
                            value={name}
                            onChange={(e) => setName(formatName(e.target.value))}
                            className={styles.formControl}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control
                            type="tel"
                            placeholder="Digite seu telefone"
                            value={phone}
                            onChange={(e) => setPhone(formatPhone(e.target.value))}
                            className={styles.formControl}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={styles.formControl} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Mensagem</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Digite sua mensagem"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className={styles.formControl}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className={styles.modalContent}>
                <Button variant="secondary" onClick={onHide} className={styles.btnSecondary}>
                    Fechar
                </Button>
                <Button variant="primary" onClick={handleSubmit} className={styles.btnPrimary}>
                    Enviar para WhatsApp
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ContactModal;