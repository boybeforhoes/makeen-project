import Information from '@/componets/information';
import Navbar from '@/componets/mainpage/navbar';
import Footer from '@/footer/Footer';
import React from 'react';

const Page = () => {
    return (
        <div>
            <>
            <div className='pr-[70px] pl-[70px] '>
                <Navbar/>
                <Information/>
            </div>
            <Footer/>
            </>
        </div>
    );
}

export default Page;
