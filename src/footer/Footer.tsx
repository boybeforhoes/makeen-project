import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <div className='w-full h-[18.75rem] bg-[#ffffff]'>
                <div className='flex flex-row'>
                    <div>
                        <div className='w-[17.125rem] h-[18.75rem] pt-[1.5rem] pr-[4.375rem]'>
                            <img className='w-[6.6875rem] h-[4.375rem] mr-[2.5rem]' src='/image/icon-footer.png' />
                            <span> در مارینا کیش شما میتوانید در کنار داشتن یک اقامت لوکس و بی نظیر در بهترین هتل جزیره کیش از سایر خدمات تفریحات و گشت های دریایی،رستوران ها و لانژ ساحلی مارینا نیز بهره مند شوید.</span>
                        </div>
                    </div>
                    <div>
                        <div className='w-[19.8125rem] h-[11.75rem] pt-[5rem] pr-[8.75rem]'>
                            <h3>ارتباط با ما</h3>
                            <div className='flex pt-[1.5rem]'>
                                <img className='w-[1.5rem] h-[1.5rem]' src='/image/location-icon.png' />
                                <span className='w-[17.875rem] h-[1.875rem] flex
                                '>کیش - بلوار مرجان - مرجان 7 - مارینا کیش</span>
                            </div>
                            <div className='flex pt-[1.5rem]'>
                                <img className='w-[1.5rem] h-[1.5rem]' src='/image/call-icon.png' />
                                <span>07644465386</span>
                            </div>
                            <div className='flex pt-[1.5rem]'>
                                <img className='w-[1.5rem] h-[1.5rem]' src='/image/sms-icon.png' />
                                <span>info@marina-kish.com</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='pt-[5rem] pr-[15.625rem]'>
                            <h3 className='text-[1rem]'>دسترسی سریع</h3>
                            <Link href="#" className='w-[6.875rem] h-[1.875rem] text-[1rem]'>
                                <div className='pt-[1.5rem]'>
                                    <span>صفحه اصلی</span>
                                </div>
                                <div className='pt-[1.5rem]'>
                                    <span>وبلاگ ها</span>
                                </div>
                                <div className='pt-[1.5rem]'>
                                    <span>قوانین و مقررات</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className='pr-[8.75rem] pt-[5rem]'>
                            <img src='/image/map.png' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;