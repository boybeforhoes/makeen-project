"use client"
import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

interface Data {
    image: string,
    name: string,
    rating: number,
    tittle: string,
    disciption: string,
}

type CommentsTourist = Data[];

const commentsTourist: CommentsTourist = [
    {
        "image": "/image/profile-1.png",
        name: "زری الهی",
        rating: 4.2,
        tittle: "جت اسکی",
        disciption: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز."
    },
    {
        "image": "/image/profile-1.png",
        name: "زری الهی",
        rating: 4.2,
        tittle: "جت اسکی",
        disciption: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز."
    },
    {
        "image": "/image/profile-1.png",
        name: "زری الهی",
        rating: 4.2,
        tittle: "جت اسکی",
        disciption: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز."
    },
    {
        "image": "/image/profile-1.png",
        name: "زری الهی",
        rating: 4.2,
        tittle: "جت اسکی",
        disciption: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز."
    },
    {
        "image": "/image/profile-1.png",
        name: "زری الهی",
        rating: 4.2,
        tittle: "جت اسکی",
        disciption: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز."
    },
]



const CommentsTourist = () => {
    return (
        <div>
            <div>
                <div className='w-full flex pr-[70px] pl-[70px]  justify-between items-center pt-[110px]'>
                    <div className=''>
                        <h1 className='text-[24px]'>
                            پیشنهاد مارینا به شما
                            <img className='' src='/image/line 14.png' />
                        </h1>
                    </div>
                    <div className=' flex w-[140px] justify-end'>
                        <Link href="#" className='text[15px]  '>
                            مشاهده بیشتر
                        </Link>
                        <img className='h-[24px]' src='/image/arrow-left.png' />

                    </div>
                </div>
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper flex flex-row w-[1380px] h-[256px]"
                slidesPerView={3}>

                {commentsTourist.map((item) => (
                    <SwiperSlide>
                        <div className='pt-[56px]  '>
                            <div className='bg-red-700 w-[420px] h-[2rem] rounded-2xl flex  '>

                            </div>
                        </div>
                    </SwiperSlide>
                ))},
            </Swiper>
        </div>
    );
}
// 

export default CommentsTourist;
