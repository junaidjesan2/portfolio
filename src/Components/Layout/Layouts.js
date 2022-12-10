import React from 'react';
import Header from '../Pages/Header/Header';
import image from '../../images/junaid/316826626_1202297204054161_298509763537578578_n.jpg'
import { Outlet } from 'react-router-dom';

const Layouts = () => {
    return (
        <div className='mx-auto '>
            <div>
                <Header></Header>
            </div>
            <div className='w-5/6  py-10 min-h-screen mx-auto px-8 bg-cover '>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layouts;