"use client"
import React from 'react';
import Link from 'next/link';
const Dashbord = () => {
    return (
        <>
            <div className='pr-[4.375rem] pl-[4.375rem]'>
                <div className='bg-white w-[12.5rem] h-[50rem] rounded-[1rem] mt-[1.5rem]'>
                    <div className='justify-center flex pt-[1rem]'>
                        <img src="/image/Frame 26087075.svg" alt="" />
                    </div>
                    <div className='w-[9.875rem] h-[40.625rem] mt-[2rem] text-black  flex flex-col pt-[0.75rem] mr-[1.313rem]'>
                        <Link href="Amusements">
                            <div>
                                <span className='flex gap-[1rem]  '>
                                    <img className='w-[1.5rem] h-[1.5rem]' src="/image/bookmark.svg" alt="" />
                                    تفریحات
                                </span>
                            </div>
                        </Link>
                        <div>
                            <span className='flex gap-[1rem]  pt-[2rem]'>
                                <img className='w-[1.5rem] h-[1.5rem]' src="/image/profile-2user.svg" alt="" />
                                کاربران
                            </span>
                        </div>
                        <div>
                            <span className='flex gap-[1rem]  pt-[2rem]'>
                                <img className='w-[1.5rem] h-[1.5rem]' src="/image/wallet-minus.svg" alt="" />
                                گزارشات
                            </span>
                        </div>
                        <div>
                            <span className='flex gap-[1rem]  pt-[2rem]'>
                                <img className='w-[1.5rem] h-[1.5rem]' src="/image/message.svg" alt="" />
                                نظرات
                            </span>
                        </div>
                        <div>
                            <span className='flex gap-[1rem]  pt-[2rem]'>
                                <img className='w-[1.5rem] h-[1.5rem]' src="/image/send-2.svg" alt="" />
                                تیکت ها
                            </span>
                        </div>
                        <div>
                            <span className='flex gap-[1rem]  pt-[2rem]'>
                                <img className='w-[1.5rem] h-[1.5rem]' src="/image/percentage-square.svg" alt="" />
                                تخفیفات
                            </span>
                        </div>
                        <div>
                            <span className='flex gap-[1rem]  pt-[2rem]'>
                                <img className='w-[1.5rem] h-[1.5rem]' src="/image/document.svg" alt="" />
                                سوالات متداول
                            </span>
                        </div>
                        <div>
                            <span className='flex gap-[1rem]  pt-[2rem]'>
                                <img className='w-[1.5rem] h-[1.5rem]' src="/image/clipboard-text.svg" alt="" />
                                بلاگ ها
                            </span>
                        </div>
                        <div>
                            <span className='flex gap-[1rem]  pt-[2rem]'>
                                <img className='w-[1.5rem] h-[1.5rem]' src="/image/security.svg" alt="" />
                                قوانین و مقررات
                            </span>
                        </div>
                        <div>
                            <span className='flex gap-[1rem]  pt-[2rem]'>
                                <img className='w-[1.5rem] h-[1.5rem]' src="/image/setting.svg" alt="" />
                                تنظیمات
                            </span>
                        </div>
                        <div className='pt-[2rem]'>
                            <img src="/image/Line 147.svg" alt="" />
                        </div>
                        <div>
                            <span className='flex gap-[1rem]  pt-[1.5rem]'>
                                <img className='w-[1.5rem] h-[1.5rem]' src="/image/login.svg" alt="" />
                                خروج از حساب
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashbord;
