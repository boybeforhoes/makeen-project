import React from 'react';

const Header = () => {
    return (
        <div className='flex flex-col p-4'>
            <div className='flex flex-row justify-start items-center gap-[0.5rem]'>
                <img src="/image/booat.png" alt="" />
                <span className='text-[#FF5C00] text-[0.625rem] w-[5.1875rem] h-[1.0625rem]'>
                    دریا را با ما بگردید...
                </span>
            </div>
            <div className='w-full lg:w-[31.25rem] text-[2.25rem] text-right leading-[3.88625rem] h-[8.700625rem] mt-4'>
                <span className="block">با ما لحظاتی فراموش نشدنی</span>
                در اعماق آب های آرام بپیمایید!
            </div>
            <div className='mt-4'>
                <span className='block w-full lg:w-[30rem] h-[8.5625rem] text-[1.125rem] leading-relaxed'>
                    شادی و هیجان در آب های آرام! با ما در دنیای تفریحات دریایی
                    <br />
                    شگفت‌انگیز لحظاتی فراموش‌ناپذیر را تجربه کنید. خرید بلیت
                    <br />
                    تفریحات و تور های دریایی را با قیمتی مناسب از مارینا کیش
                    <br />
                    سریع و آسان تجربه کنید.
                </span>
            </div>
            <div className='w-full lg:w-[41.375rem] h-[4rem] pl-[13.375rem] mt-4'>
                <form className="max-w-md mx-auto">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only dark:text-white">جستجو کنید</label>
                    <div className="relative h-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none rounded-xl shadow-2xl">
                            {/* <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="/image/search-normal.png" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg> */}
                        </div>
                        <div className='flex flex-row'>
                            <div className=' flex flex-row '>
                                <input type="search" className="shadow-lg  justify-center items-center w-full lg:w-[26.5625rem] h-[4rem] block p-4 ps-10 text-sm text-gray-900 rounded-3xl bg-[#fffff]" placeholder="دنبال چی میگردی؟" required />
                                <button type="submit" className="text-white  h-[1.25rem] mb-[2rem] ml-[14rem]  absolute end-[-12.375rem] bottom-2.5  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "><img src="/image/blue-searchC.png" /></button>
                                <button className=' flex justify-center items-center w-[12rem] gap-[1rem] mr-[1rem] h-[3.5rem] pr-[2rem] bg-[#0051A1] text-white rounded-3xl text-right '>  همین حالا بلیت بگیر! <img src="/image/arrow-right.png" alt="" /></button>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Header;
