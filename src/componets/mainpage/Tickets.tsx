"use client"
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
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
const Tickets = () => {
    return (
        <div className='w-[100%] h-[23.75rem] pt-[10.25rem] flex content-center justify-center'>
            <div className='w-[15.8125rem] flex h-[23.75rem] bg-gradient-to-b from-[#3183D2] to-[#064F97] rounded-[1.5rem] border-dashed border-l-[0.375rem] border-[#ffffff]'>
                <div className='w-[10rem] h-[5.125rem] flex  justify-center bottom-0  pt-[1.0625rem] items-center'>
                    <span className='text-[#ffffff] text-[1.5rem]'>
                        تخفیفات ویژه
                        مارینـــــا
                    </span>
                </div>
            </div>
            <div className='w-[65.8125rem] h-[23.75rem] flex items-center pr-2 rounded-[1.5rem] bg-gradient-to-b from-[#3183D2] to-[#064F97]'>
                <Swiper scrollbar={{
                    hide: true,
                }}
                    slidesPerView={4}
                    modules={[Scrollbar]}
                    className="mySwiper"
                >
                    {dataHobby.map((item) => (
                        <div className='w-[81.25rem] justify-center h-[23.5625rem]'>
                            <div className='pt-[2.3125rem] flex gap-6'>
                                return (
                                <SwiperSlide>
                                    <div className='bg-[#ffffff] w-[15.875rem] h-[20.6875rem] justify-center flex rounded-2xl'>
                                        <Link href='#'>
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
                                )
                            </div>
                        </div>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Tickets;
