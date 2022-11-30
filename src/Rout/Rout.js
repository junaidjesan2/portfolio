import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';
import HomeBody from '../Components/HomeBody/HomeBody';
import Resume from '../Components/Resume/Resume';
import Services from '../Components/Services/Services';
import Layout from '../Layout/Layout';

export const WebRouter=createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                path:'/',
                element:<HomeBody></HomeBody>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/resume',
                element:<Resume></Resume>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            }
        ]
    }
])

const Rout = () => {
    return (
        <div>
            
        </div>
    );
};

export default Rout;