import React from 'react';
import Header from '../Pages/Header/Header';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../Pages/Footer/Footer';

const Layouts = () => {
    return (
            <div
                className='mx-auto'>
                <div>
                    <Header></Header>
                </div>
                <div className='py-10 min-h-screen px-8 bg-cover '>
                    <Outlet></Outlet>
                </div>
                <div className='glass'>
                    <Footer></Footer>
                </div>
            </div>
    );
};

export default Layouts;