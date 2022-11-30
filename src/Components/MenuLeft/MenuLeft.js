import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/junaid/junaid.png'
import { BsFacebook, BsFileEarmarkPerson, BsGithub, BsLinkedin } from 'react-icons/bs'
import { AiOutlineFilePdf, AiOutlineHome, AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import { CgDatabase } from 'react-icons/cg'

const MenuLeft = () => {
    return (
        <aside className=''>
            <div class="d-flex flex-column">

                <div class="profile">
                    <img src={image} alt="" class="rounded-full border-3 border-gray-700 mx-auto h-20 w-20" />
                    <h1 class="text-white font-bold text-3xl"><a href="index.html">Junaid Ahamed Jesan</a></h1>
                    <div class="flex gap-5 text-white justify-center mt-10">
                        <a href="https://github.com/junaidjesan"><BsGithub className='h-8 w-8' /></a>
                        <a href="https://www.linkedin.com/in/junaidjesan2/"><BsLinkedin className='h-8 w-8' /></a>
                        <a href="https://www.facebook.com/junaidjesan2"><BsFacebook className='h-8 w-8' /></a>
                    </div>
                </div>

                <nav id="" class="grid grid-cols-1 text-white px-8 mt-16 mx-auto">
                    <ul>
                        <li>
                            <Link to='/' className='flex gap-4 mb-4 text-2xl items-center'><AiOutlineHome className='h-7 w-7' /> Home</Link>
                        </li>
                        <li>
                            <Link to='/about' className='flex gap-4 mb-4 text-2xl items-center'><AiOutlineUser className='h-7 w-7' /> About</Link>
                        </li>
                        <li>
                            <Link to='/resume' className='flex gap-4 mb-4 text-2xl items-center'><AiOutlineFilePdf className='h-7 w-7' /> Resume</Link>
                        </li>
                        <li>
                            <Link className='flex gap-4 mb-4 text-2xl items-center'><BsFileEarmarkPerson className='h-7 w-7' /> Portfolio</Link>
                        </li>
                        <li>
                            <Link to='/services' className='flex gap-4 mb-4 text-2xl items-center'><CgDatabase className='h-7 w-7' /> Services</Link>
                        </li>
                        <li>
                            <Link to='/contact' className='flex gap-4 mb-4 text-2xl items-center'><AiOutlineMail className='h-7 w-7' /> Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

export default MenuLeft;