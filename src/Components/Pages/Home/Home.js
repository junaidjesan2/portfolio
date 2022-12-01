import React from 'react';
import image from '../../../images/junaid/cover.jpg'
import image1 from '../../../images/junaid/316826626_1202297204054161_298509763537578578_n.jpg'
import image2 from '../../../images/junaid/junaid4 (1).jpg'
import image3 from '../../../images/junaid/junaid2.jpg'
import image4 from '../../../images/junaid/junaid4 (2).jpg'

const Home = () => {
    return (
        <div className='lg:h-screen h-40 lg:w-full bg-cover bg-center' style={{ backgroundImage: `url("${image}")` }}>
            <h1 className='lg:text-start text-4xl lg:ml-32 flex mx-auto items-center'>Frontend Developer / Web Developer</h1>
            <div className='grid mt-16 lg:grid-cols-2 justify-center lg:mt-5 ml-16 grid-cols-1 gap-6 mx-auto md:w-1/3'>
                <img className='md:h-32 md:w-32 w-full mx-auto' src={image4} alt="" />
                <img className='md:h-32 md:w-32 w-full mx-auto' src={image1} alt="" />
                <img className='md:h-32 md:w-32 w-full mx-auto' src={image2} alt="" />
                <img className='md:h-32 md:w-32 w-full mx-auto' src={image3} alt="" />
            </div>
        </div>
    );
};

export default Home;