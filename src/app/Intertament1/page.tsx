import Comment from '@/componets/mainpage/comment';
import Navbar from '@/componets/mainpage/navbar';
import Selection from '@/componets/mainpage/selection';
import Footer from '@/footer/Footer';
import React from 'react';

const Page = () => {
    return (
        <>
            <div className='pr-[70px] pl-[70px]'>
                <Navbar />
                <div className='pt-[165px]'>
                <Selection/>
                </div>
                <Comment/>
            </div>
            <Footer />
        </>
    );
}

export default Page;
