import React from 'react';
import { BsDownload, BsFileEarmarkPdf, BsPerson } from 'react-icons/bs'
import { AiOutlineHome } from 'react-icons/ai'
import { CgDatabase } from 'react-icons/cg'
import { MdOutlineEmail } from 'react-icons/md'
import { Link } from 'react-router-dom';
import resume from '../../../images/resume/Resume-Junaid_Ahamed_Jesan.pdf'

const Header = () => {
    const handleResumeDownload=()=>{
        fetch(resume).then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = resume;
                alink.click();
            })
        })
    }
    return (
        <div className='rounded-3xl' data-aos="zoom-in">
            <div className="flex bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-500 text-purple-800 justify-around h-32 items-center py-auto glass rounded-3xl pb-5 ">
                <div className="">
                    <div className="dropdown text-pink-500">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu rounded-2xl menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-52">
                            <li><Link to='/'><AiOutlineHome /> Home</Link></li>
                            <li><Link to='/about'><BsPerson /> About</Link></li>
                            <li><Link to='/resume'><BsFileEarmarkPdf /> Resume</Link></li>
                            {/* <li><Link to='/portfolio'><BsFillFileEarmarkPersonFill/> Portfolio</Link></li> */}
                            <li><Link to='/services'><CgDatabase /> services</Link></li>
                            <li><Link to='/contact'><MdOutlineEmail /> Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center grid grid-cols-1">
                    <span className="font-semibold normal-case text-xl">Junaid Ahamed Jesan</span>
                    <span className="font-semibold normal-case text-xs">junaidjisan782@gmail</span>
                </div>
                <div className=''>
                    <button onClick={handleResumeDownload} className='flex hover:text-pink-500 items-center gap-2 lg:gap-5 mx-auto'>
                        <BsDownload className='' /> <h1>Resume</h1>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;