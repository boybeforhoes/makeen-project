"use client"
import Link from 'next/link';
import { title } from 'process';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css/scrollbar';


interface Data {
    image: string;
    title: string;
    duration: number;
    rating: number;
    price: number;
}




type DataHobby = Data[];

const dataHobby: DataHobby = [{
    "image": "/image/diveing.png",
    "title": "جت اسکی",
    duration: 40,
    rating: 4.1,
    price: 100000

},
{
    "image": "/image/diveing.png",
    "title": "جت اسکی",
    duration: 40,
    rating: 4.1,
    price: 10000

},
{
    "image": "/image/diveing.png",
    "title": "جت اسکی",
    duration: 40,
    rating: 4.1,
    price: 10000

},
{
    "image": "/image/diveing.png",
    "title": "جت اسکی",
    duration: 40,
    rating: 4.1,
    price: 10000
},
{
    "image": "/image/diveing.png",
    "title": "جت اسکی",
    duration: 40,
    rating: 4.1,
    price: 10000
},





]
const Hobby = () => {

    return (

        <>

            <div className='w-full flex justify-between items-center pt-[6.875rem]'>
                <div className=''>
                    <h1 className='text-[1.5rem]'>
                        تفریحات پرطرفدار
                        <img className='' src='/image/line 14.png' />
                    </h1>
                </div>
                <div className='flex w-[8.75rem] justify-end'>
                    <Link href="/HobbySPage" className='text-[0.9375rem]'>
                        مشاهده بیشتر
                    </Link>
                    <img className='h-[1.5rem]' src='/image/arrow-left.png' />
                </div>
            </div>
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                slidesPerView={4.5}
                modules={[Scrollbar]}
                className="mySwiper"
            >
                {dataHobby.map((item) => (
                    <div className='w-[81.25rem] h-[23.5625rem]'>
                        <div className='pt-[2.3125rem] flex gap-6'>
                            <SwiperSlide>
                                <div className='bg-[#ffffff] w-[15.875rem] h-[20.6875rem] justify-center flex rounded-2xl'>
                                    <Link href='#' className=''>
                                        <img src={item.image} className='pt-[0.5rem] w-[14.875rem] h-[11.875rem]' />
                                        <div className='flex justify-between w-[14.875rem] h-[1.9375rem] gap-2 pt-2'>
                                            <h1>
                                                {item.title}
                                            </h1>
                                            <div className='gap-2 flex bg-light'>
                                                <span>{item.rating}</span>
                                                <img src='/image/star.png' className='w-[0.625rem] h-[1.5rem] pt-1' />
                                            </div>
                                        </div>
                                        <div className='flex flex-row pt-2'>
                                            <img className='gap-2' src="/image/timer.png" />
                                            <span className='text-[#909090]'>{item.duration}</span>
                                        </div>
                                        <div className='pt-[0.875rem] flex justify-between'>
                                            <span className='text-[1rem]'>
                                                {item.price}تومان
                                            </span>
                                            <img src='/image/arrow-down.png' />
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        </div>
                    </div>
                ))}
            </Swiper>


        </>
    );
}

export default Hobby;
