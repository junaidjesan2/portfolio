import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { CgDatabase } from 'react-icons/cg';
import { IoLogoCss3 } from 'react-icons/io';
import { SiJavascript, SiReact, SiTailwindcss } from 'react-icons/si';
import { TbBrandBootstrap, TbBrandReactNative } from 'react-icons/tb';
import { BsBootstrapFill } from 'react-icons/bs';

const Services = () => {
    return (
        <div className='w-10/12 h-screen mx-auto pt-16'>
            <div className=''>
                <h1 className='text-5xl flex items-center gap-5 border-indigo-800 text-indigo-800 text-start'><CgDatabase className='h-7 w-7 hover:text-slate-800' /> Services
                </h1>
                <hr className='w-56 border-b-4 border-indigo-800' />
            </div>
            <div className='mt-20 text-justify'>
                <div>
                    <h1 className='text-3xl font-bold mb-10 flex items-center gap-5 border-indigo-800 text-indigo-800 text-start'>Front-end Development / Web Development</h1>
                    <div className='justify-start'>
                        <h1 className='flex gap-5 items-center text-xl font-semibold'><AiFillHtml5 className='h-8 w-6' /> HTML</h1>
                            <h1 className='flex gap-5 items-center text-xl font-semibold'><IoLogoCss3 className='h-8 w-6' /> CSS3</h1>
                        <div className='flex justify-evenly'>
                            <div>
                                <h1 className='flex gap-5 items-center text-xl font-semibold'><BsBootstrapFill className='h-8 w-6' /> Bootstrap</h1>
                                <h1 className='flex gap-5 items-center text-xl font-semibold'><TbBrandBootstrap className='h-8 w-6' /> React Bootstrap</h1>
                                <h1 className='flex gap-5 items-center text-xl font-semibold'><SiTailwindcss className='h-8 w-6' /> Tailwind css</h1>
                                <h1 className='flex gap-5 items-center text-xl font-semibold'><SiTailwindcss className='h-8 w-6' /> Daisy Ui</h1>
                                <h1 className='flex gap-5 items-center text-xl font-semibold'><SiTailwindcss className='h-8 w-6' /> Metarial Ui</h1>
                            </div>
                        </div>
                            <h1 className='flex gap-5 t-0 items-center text-xl font-semibold'><SiJavascript className='h-8 w-6' /> Javascript</h1>
                        <div className='flex justify-evenly mt-10'>
                            <div className=''>
                                <h1 className='flex gap-5 items-center text-xl font-semibold'><SiJavascript className='h-8 w-6' /> Es6</h1>
                                <h1 className='flex gap-5 items-center text-xl font-semibold'><SiReact className='h-8 w-6' /> React</h1>
                                <h1 className='flex gap-5 items-center text-xl font-semibold'><TbBrandReactNative className='h-8 w-6' /> React Native</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;