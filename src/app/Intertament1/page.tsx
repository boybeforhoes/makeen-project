import Navbar from '@/componets/mainpage/navbar';
import Footer from '@/footer/Footer';
import React from 'react';

const Page = () => {
    return (
        <>
            <div className='pr-[70px] pl-[70px]'>
                <Navbar />
            </div>
            <Footer />
        </>
    );
}

export default Page;
