import React from 'react';
import Link from 'next/link';
const Navbar = () => {
    return (
        <div>
            <div className='flex w-full h-[5.6875rem]'> {/* 91px to rem */}
                <div className='flex w-full justify-between items-center px-4 text-base'>
                    <div className='flex'>
                        <img src="/image/mainlogo.png" className='h-10' alt="Main Logo" />
                    </div>

                    <div className='hidden md:block'> {/* Hidden on small screens, visible on medium and up */}
                        <nav>
                            <ul className="flex space-x-4 space-x-reverse">
                                <li><a href="#home" className="text-black f-m">صفحه اصلی</a></li>
                                <li><a href="#hooby" className="text-black">تفریحات</a></li>
                                <li><a href="#services" className="text-black">وبلاگ ها</a></li>
                                <li><a href="#rulls" className="text-black">قوانین و مقررات</a></li>
                                <li><a href="#about" className="text-black">درباره ما</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <Link href="login">
                            <button className="flex flex-row justify-center items-center space-x-2 space-x-reverse w-[9.625rem] h-[2.5rem] text-[#024282] rounded-2xl border border-[#024282] hover:bg-[#024282] hover:text-white"> {/* 154px to rem, 40px to rem */}
                                <img src='/image/profile-circle.png' className='h-6 w-6' alt="Profile" />

                                <span>ورود/ثبت نام</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='md:hidden flex justify-center'>
                <button className="flex flex-row justify-center items-center space-x-2 space-x-reverse w-[9.625rem] h-[2.5rem] text-[#024282] rounded-2xl border border-[#024282] hover:bg-[#024282] hover:text-white"> {/* Duplicate button for small screens */}
                    <img src='/image/profile-circle.png' className='h-6 w-6' alt="Profile" />
                    <span>ورود/ثبت نام</span>
                </button>
            </div>
        </div>

    )
}
export default Navbar;

