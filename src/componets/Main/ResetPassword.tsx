import React from 'react';

const ResetPassword = () => {
    return (
        <div>
            <div className='w-[37.5rem] h-[22.125rem] bg-[#ffffff]'>
                <h1 className='text-center text-[1.25rem] text-black pt-[3rem]'>فراموشی رمز عبور</h1>
                <img src="/image/Line 146.svg" className='justify-center items-center flex pr-[7.313rem] pt-[1rem]' />
                <span className='pr-[7.313rem] mt-[2rem] flex text-black text-[1.25rem]'>شماره موبایل خود را وارد کنید.</span>
                <input type="text" className='bg-[#EDEDED] justify-center items-center flex mr-[7.313rem] rounded-lg mt-[2.5rem] w-[22.938rem] h-[3rem]' />
                <button className='bg-[#0051A1] justify-center items-center flex mr-[7.313rem] rounded-lg mt-[2.5rem] w-[22.938rem] h-[3rem] text-[1rem] text-white'>بازیابی رمز عبور</button>
            </div>
        </div>
    );
}

export default ResetPassword;
