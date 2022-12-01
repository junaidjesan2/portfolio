import React from 'react';
import { BsFacebook, BsFileEarmarkPdf, BsFillFileEarmarkPersonFill, BsGithub, BsLink, BsPerson } from 'react-icons/bs'
import { AiOutlineHome, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai'
import { CgDatabase } from 'react-icons/cg'
import { Link } from 'react-router-dom';
import image from '../../../images/junaid/junaid.png'

const Header = () => {
    return (
        <div>
            <div className="navbar glass justify-around ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'><AiOutlineHome /> Home</Link></li>
                            <li><Link to='/about'><BsPerson /> About</Link></li>
                            <li><Link to='/resume'><BsFileEarmarkPdf /> Resume</Link></li>
                            {/* <li><Link to='/portfolio'><BsFillFileEarmarkPersonFill/> Portfolio</Link></li> */}
                            <li><Link to='/services'><CgDatabase /> services</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center grid grid-cols-1">
                    <span className="font-semibold normal-case text-xl">Junaid Ahamed Jesan</span>
                    <span className="font-semibold normal-case text-xs">junaidjisan782@gmail</span>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="">
                            <div className=" justify-center items-center ">
                                <img className='h-7 w-7 rounded-full' src={image} alt="" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href="https://github.com/junaidjesan"><BsGithub />GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/junaidjesan2/"><AiOutlineLinkedin />LinkedIn</a></li>
                            <li><a href="https://www.facebook.com/junaidjesan2"><BsFacebook /> Facebook</a></li>
                            <li><a href="https://www.instagram.com/junaidjesan2/?next=%2F"><AiOutlineInstagram/> Instragram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;