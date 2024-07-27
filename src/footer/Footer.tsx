import React from 'react';
import Link from 'next/link';
const Footer = () => {
    return (
        <>
            <div className='w-[100%] h-[300px] bg-[#ffffff] '>
                <div className='flex flex-row '>
                    <div>
                        <div className='w-[274px] h-[300px] pt-[24px]  pr-[70px]'>
                            <img className='w-[107px] h-[70px] mr-[40px]' src='/image/icon-footer.png' />
                            <span> در مارینا کیش شما میتوانید در کنار داشتن یک اقامت لوکس و بی نظیر در بهترین هتل جزیره کیش از سایر خدمات تفریحات و گشت های دریایی،رستوران ها و لانژ ساحلی مارینا نیز بهره مند شوید.</span>
                        </div>
                    </div>
                    <div>
                        <div className='w-[317px] h-[188px] pt-[80px] pr-[140px]'>
                            <h3>ارتباط با ما</h3>
                            <div className='flex pt-[24px]'>
                                <img className='w-6 h-6' src='/image/location-icon.png' />
                                <span>کیش - بلوار مرجان - مرجان 7 - مارینا کیش</span>
                            </div>
                            <div className='flex pt-[24px]'>
                                <img src='/image/call-icon.png' />
                                <span>07644465386</span>
                            </div>
                            <div className='flex pt-[24px]'>
                                <img src='/image/sms-icon.png' />
                                <span>info@marina-kish.com</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=' pt-[80px] pr-[250px] '>
                            <h3 className='text-[16px]'>دسترسی سریع</h3>
                            <Link href="#" className='w-[110px] h-[30px] text-[16px]'>
                                <div className='pt-[24px]'>
                                    <span>صفحه اصلی</span>
                                </div>
                                <div className='pt-[24px]'>
                                    <span>وبلاگ ها</span>
                                </div>
                                <div className='pt-[24px]'>
                                    <span>قوانین و مقررات</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className='pr-[140px] pt-[80px]'>
                            <img src='/image/map.png'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;