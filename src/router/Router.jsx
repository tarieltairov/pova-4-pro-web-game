import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Header from '../components/Header/Header';
import Game from '../pages/Game/Game';
import Home from '../pages/Home/Home';
import Prize from '../pages/Prize/Prize';

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game" element={<Game />} />
                <Route path="/tecno" element={<Prize />} />
                <Route path="*" element={<p>There's nothing here: 404!</p>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;