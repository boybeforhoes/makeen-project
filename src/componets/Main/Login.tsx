
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
const Login = () => {
    

    return (
        <div>
            <div className='w-[1.5rem] h-[1.5rem]'>
                <img src='/image/arrow-right.svg' className='mt-[1rem] mr-[1rem]' />
            </div>
            <div className='w-[24.375rem] h-[26rem] mr-[5rem] mt-[2.5rem]'>
                <h3 className='text-[1.25rem] text-black'>
                    اگر در مارینا کیش حساب کاربری دارید، وارد شوید.
                </h3>
                <div className='pt-[1.5rem] '>
                    <label className="input input-bordered flex bg-[#EDEDED] items-center gap-2">
                        <img src='/image/password-check.svg' />
                        <input type="text" className="grow" placeholder="کد ملی" />
                    </label>
                </div>
                <div className='pt-[1.5rem] '>
                    <label className="input input-bordered flex bg-[#EDEDED] items-center gap-2">
                        <img src='/image/lock.svg' />
                        <input type="password" className="grow" placeholder="رمز عبور" />
                    </label>
                </div>
                <div>
                    <Link className='pt-[1rem]' href='reset-pasword'>
                        رمز عبور خود را فراموش کردید؟
                    </Link>
                </div>
                <div>
                    <button className='bg-[#EDEDED] text-black w-[24.375rem] h-[2.5rem] mt-[1rem] rounded-[8px]'> ورود</button>
                </div>
                <div className='flex mt-[3rem] justify-center items-center'>
                    <h3 className='text-black'>اگر حساب کاربری ندارید، ثبت نام کنید.</h3>
                    <button className='w-[6.5rem] h-[2.5rem] rounded-[8px] text-white mr-[3.375rem] bg-[#0051A1] '>ایجاد حساب </button>
                </div>
                <div className='mt-[2rem]'>
                    <h3 className='text-[0.90rem]'>*ورود یا ثبت نام در سایت مارینا کیش به منزله قبول  <span className='text-[red] text-[0.90 rem]'>قوانین و مقررات</span> است.</h3>
                </div>
            </div>
        </div>
    );
}

export default Login;