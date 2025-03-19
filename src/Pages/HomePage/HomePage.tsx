import React from 'react';
import Header from '../../Components/Header/Header';
import ContentHeader from '../../Components/ContentHeader/ContentHeader';
import Footer from '../../Components/Footer/Footer';
import { Container } from 'react-bootstrap';
import styles from './HomePage.module.css';


const HomePage = () => {
    return (
        <div className={styles.ContentHomePage}>
            <Header />
            <ContentHeader />
            <Container>
                {/* Adicione o conteúdo da sua página aqui */}
                <p>Conteúdo da página inicial...</p>
            </Container>
            <Footer />
        </div>
    );
};

export default HomePage;