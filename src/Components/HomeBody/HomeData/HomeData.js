import React from 'react';
import cover from '../../../images/cover/cover.jpg'
import cover2 from '../../../images/cover/316826626_1202297204054161_298509763537578578_n.jpg'

const HomeData = () => {
    return (
        <div className='bg-gray-500'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${cover2})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content grid grid-cols-1 text-center text-neutral-content">
                    <div className="flex items-end">
                        <h1 className="mb-5 text-5xl font-bold">Junaid Ahamed Jesan</h1>
                        <small className='text-xl text-start text-clip '>(Junaid Jesan)</small>
                    </div>
                    <br />
                    <div>
                        <h1  className='text-4xl text-start'>Web Developer/</h1>
                        <h1  className='text-4xl text-start'>Front-End Developer/</h1>
                        <h1  className='text-4xl text-start'>UX/UI Developer/</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeData;