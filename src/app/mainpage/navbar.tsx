import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className='flex w-full h-[91px] '>
                <div className='flex w-full justify-between items-center px-4 text-base'>
                    <div className='flex'>
                        <img src="/image/mainlogo.png" className='h-10' />
                    </div>

                    <div>
                        <nav>
                            <ul className="flex space-x-4 space-x-reverse ">
                                <li><a href="#home" className="text-black">صفحه اصلی</a></li>
                                <li><a href="#hooby" className="text-black">تفریحات</a></li>
                                <li><a href="#services" className="text-black">وبلاگ ها</a></li>
                                <li><a href="#rulls" className="text-black">قوانین و مقررات</a></li>
                                <li><a href="#about" className="text-black">درباره ما</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <button className="flex  flex-row justify-center items-center  space-x-2 space-x-reverse w-[154px] h-[40px] text-[#024282] rounded-2xl	border-[1px] border-[#024282]">
                            <img src='/image/profile-circle.png' className='h-6 w-6' />
                            <span >ورود/ثبت نام</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;

