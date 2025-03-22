import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import AboutContent from '../../Components/About/AboutContent'; // Importe AboutContent
import './AboutPage.module.css'

const AboutPage = () => {
    return (
        <div>
            <Header />
            <AboutContent /> {/* Renderize AboutContent */}
            <Footer />
        </div>
    );
};

export default AboutPage;