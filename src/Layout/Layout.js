import React from 'react';
import { Outlet } from 'react-router-dom';
import MenuLeft from '../Components/MenuLeft/MenuLeft';

const Layout = () => {
    return (
        <div className='flex bg-slate-100'>
            <div className='fixed   h-screen w-3/12 bg-[#2c2f3f] pt-20'>
                <MenuLeft></MenuLeft>
            </div>
            <div className='ml-96 w-9/12'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;