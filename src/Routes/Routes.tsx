import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import AboutPage from '../Pages/AboutPage'; // Importe o AboutPage

const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} /> {/* Adicione a rota para AboutPage */}
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesComponent;