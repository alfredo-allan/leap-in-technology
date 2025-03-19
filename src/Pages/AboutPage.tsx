import React from 'react';
import Header from '../Components/Header/Header';
import ContentHeader from '../Components/ContentHeader/ContentHeader';
import Footer from '../Components/Footer/Footer';
import AboutContent from '../Components/About/AboutContent'; // Importe AboutContent

const AboutPage = () => {
    return (
        <div>
            <Header />
            <ContentHeader />
            <AboutContent /> {/* Renderize AboutContent */}
            <Footer />
        </div>
    );
};

export default AboutPage;