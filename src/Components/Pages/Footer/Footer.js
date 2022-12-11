import React from 'react';
import { AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import image from '../../../images/junaid/junaid2.jpg'

const Footer = () => {
    return (
            <footer className="footer hover:text-purple-700 bg-inherit justify-evenly p-10 bg-neutral text-neutral-content">
                <div>
                    <img className='h-20 mx-auto rounded-full w-20' src={image} alt="" />
                    <p>Junaid Ahamed Jesan<br />Frontend Developer</p>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <li><a href="https://github.com/junaidjesan"><BsGithub />GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/junaidjesan2/"><AiOutlineLinkedin />LinkedIn</a></li>
                        <li><a href="https://www.facebook.com/junaidjesan2"><BsFacebook /> Facebook</a></li>
                        <li><a href="https://www.instagram.com/junaidjesan2/?next=%2F"><AiOutlineInstagram /> Instragram</a></li>
                    </div>
                </div>
            </footer>
    );
};

export default Footer;