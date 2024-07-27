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
        <div className='w-[100%] h-[380px] pt-[164px] flex content-center justify-center'>
            <div className='w-[253px] flex h-[380px]  bg-gradient-to-b from-[#3183D2] to-[#064F97] rounded-[24px]  border-dashed border-l-[6px]  border-[#ffffff]'>
                <div className='w-[147px] h-[82px]   flex pt-[17px] items-center '>
                    <span className='text-[#ffffff] size-[24px]  '>
                        تخفیفات ویژه
                        مارینـــــا
                    </span>
                </div>
            </div>
            <div className='w-[1053px] h-[380px] flex items-center pr-2  rounded-[24px] bg-gradient-to-b from-[#3183D2] to-[#064F97] '>
                <Swiper scrollbar={{
                    hide: true,

                }}
                    slidesPerView={4}
                    modules={[Scrollbar]}
                    className="mySwiper"
                >
                    {dataHobby.map((item) => (
                        <div className='w-[1300px] justify-center h-[377px] '>
                            <div className='pt-[37px]  flex gap-6 '>

                                return(
                                <SwiperSlide>
                                    <div className='bg-[#ffffff] w-[254px] h-[331px] justify-center flex rounded-2xl '>
                                        <Link href='#' className='   '>
                                            <img src={item.image} className=' pt-[8px] w-[238px] h-[190px]' />
                                            <div className='flex justify-between w-[238px] h-[31px] gap-2 pt-2'>
                                                <h1>
                                                    {item.title}
                                                </h1>
                                                <div className='gap-2 flex bg-light flex '>
                                                    <span>{item.rating}</span>
                                                    <img src='/image/star.png' className='w-[10px]  h-[24px] pt-1' />
                                                </div>
                                            </div>
                                            <div className='flex  flex-row pt-2'>
                                                <img className='gap-2' src="/image/timer.png" />
                                                <span className='text-[#909090]'>{item.duration}</span>
                                            </div>
                                            <div className='pt-[14px] flex justify-between'>
                                                <span className='text-[16px]'>
                                                    {item.price}تومان
                                                </span>
                                                <img src='/image/arrow-down.png' />
                                            </div>
                                        </Link>

                                    </div>
                                </SwiperSlide>
                                )
                            </div >
                        </div>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Tickets;
