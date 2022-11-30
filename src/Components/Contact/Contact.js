import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
    return (
        <div className='w-10/12 h-screen mx-auto pt-16'>
            <div className=''>
                <h1 className='text-5xl flex items-center gap-5 border-indigo-800 text-indigo-800 text-start'><AiOutlineMail className='h-7 w-7 hover:text-slate-800' /> Contact
                </h1>
                <hr className='w-56 border-b-4 border-indigo-800' />
            </div>
            <div className='mt-20 text-justify'>
                <h1 className='flex items-center gap-5 text-xl'><AiOutlineMail className='h-8 w-8' /> junaidjisan782@gmail.com</h1>
            </div>
        </div>
    );
};

export default Contact;