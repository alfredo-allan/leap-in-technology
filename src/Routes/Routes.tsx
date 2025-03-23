import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import AboutPage from '../Pages/AboutPage/AboutPage'; // Importe o AboutPage

const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/leap-in-technology" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesComponent;