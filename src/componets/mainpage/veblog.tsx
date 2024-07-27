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
const Veblog = () => {

    return (

        <>

            <div className='w-full flex  justify-between items-center pt-[110px]'>
                <div className=''>
                    <h1 className='text-[24px]'>
                    وبلاگ ها
                        <img className='w-[94.84px] h-[7.51px]' src='/image/line 14.png ' />
                    </h1>
                </div>
                <div className='flex w-[140px] justify-end'>
                    <Link href="#" className='text[15px]  '>
                        مشاهده بیشتر
                    </Link>
                    <img className='h-[24px]' src='/image/arrow-left.png' />

                </div>
            </div>
            <Swiper scrollbar={{
                hide: true,

            }}
                slidesPerView={4.5}
                modules={[Scrollbar]}
                className="mySwiper"
            >
                {dataHobby.map((item) => (
                    <div className='w-[1300px] h-[377px] '>
                        <div className='pt-[37px] flex gap-6 '>

                            return(
                            <SwiperSlide>
                                <div className='bg-[#ffffff] w-[254px] h-[331px] justify-center flex rounded-2xl '>
                                    <Link href='#' className=''>
                                        <img src={item.image} className=' pt-[8px] w-[238px] h-[190px] ' />
                                        <div className='flex justify-between w-[238px] h-[31px] gap-2 pt-2'>
                                            <h1>
                                                {item.title}
                                            </h1>
                                            <div className='gap-2 flex bg-light'>
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


        </>
    );
}

export default Veblog;
