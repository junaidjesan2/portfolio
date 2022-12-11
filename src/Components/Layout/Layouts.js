import React from 'react';
import Header from '../Pages/Header/Header';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../Pages/Footer/Footer';

const Layouts = () => {
    return (
            <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
                className='mx-auto'>
                <div>
                    <Header></Header>
                </div>
                <div className='w-5/6  py-10 min-h-screen mx-auto px-8 bg-cover '>
                    <Outlet></Outlet>
                </div>
                <div className='glass'>
                    <Footer></Footer>
                </div>
            </motion.div>
    );
};

export default Layouts;