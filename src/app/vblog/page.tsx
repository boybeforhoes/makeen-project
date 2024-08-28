import BlogS from '@/componets/mainpage/blog\'s';
import Navbar from '@/componets/mainpage/navbar';
import Footer from '@/footer/Footer';
import React from 'react';


const Page = () => {
    return (
        <>
         <Navbar/>
            <div className='pr-[4.375rem] pl-[4.375rem] font-custom'>
                <BlogS />
                
            </div>
            <Footer/>
        </>

    );
}

export default Page;
