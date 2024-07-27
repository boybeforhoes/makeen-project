import HobbySItem from '@/componets/mainpage/HobbySItem';
import Navbar from '@/componets/mainpage/navbar';
import Footer from '@/footer/Footer';
import React from 'react';

const Intertament = () => {
    return (
        <>
            <div className='pr-[70px] pl-[70px]'>
                <Navbar />
                <HobbySItem />
            </div>
            <Footer />
        </>
    );
}

export default Intertament;
