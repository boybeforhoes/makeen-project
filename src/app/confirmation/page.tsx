import Confirmation from '@/componets/confirmation';
import Navbar from '@/componets/mainpage/navbar';
import React from 'react';

const Page = () => {
    return (
        <>
            <div className='pr-[4.375rem] pl-[4.375rem] font-custom'>
                <Navbar />
                <div className='pt-[10.313rem]'>
                    <Confirmation />
                </div>
            </div>
        </>
    );
}

export default Page;
