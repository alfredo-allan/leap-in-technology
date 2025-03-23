import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import AboutPage from '../Pages/AboutPage/AboutPage';

interface RoutesComponentProps { }

const RoutesComponent: React.FC<RoutesComponentProps> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesComponent;