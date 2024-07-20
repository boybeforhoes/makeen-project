import React from 'react';

const Header = () => {
    return (
        <div className='flex flex-col'>
            
                <div className='flex flex-row justify-start items-center gap-[8px]  '>
                    <img src="/image/booat.png" alt="" />
                    <span className=' text-[#FF5C00]  text-[10px] w-[83px] h-[17px] '>
                        دریا را با ما بگردید...
                    </span>
                </div>
            
            <div className='w-[500px] text-[36px] text-right leading-[62.18px] h-[139.21px] '>
                <span className="block">با ما لحظاتی فراموش نشدنی </span>
                در اعماق
                آب های آرام بپیمایید!
            </div>
            <div>
                <span className='w-[480px] h-[137px] text-[18px]'>
                    شادی و هیجان در آب های آرام! با ما در دنیای تفریحات دریایی
                    <br />
                    شگفت‌انگیز لحظاتی فراموش‌ناپذیر را تجربه کنید. خرید بلیت
                    <br />
                    تفریحات و تور های دریایی را با قیمتی مناسب از مارینا کیش
                    <br />
                    سریع و آسان تجربه کنید.
                </span>
            </div>
            <div className='w-[662px] h-[64px] pl-[214px]'>
                <form className="max-w-md mx-auto">
                    <label form="default-search" className="mb-2 text-sm font-medium sr-only dark:text-white">جستجو کنید</label>
                    <div className="relative h-full"> 
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none rounded-xl shadow-2xl	">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="/image/search-normal.png" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="mt-[64px] w-[662px] h-[64px] block p-4 ps-10 text-sm text-gray-900  rounded-lg bg-[#fffff]" placeholder="دنبال چی میگردی؟" required />
                        <button type="submit" className="text-white w-[118px] h-[44px] absolute end-[-12.375rem] bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">جستجو کنید</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Header;
