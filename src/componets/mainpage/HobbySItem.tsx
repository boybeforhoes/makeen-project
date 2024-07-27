
import React from 'react';
import Link from 'next/link';

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
{
    "image": "/image/diveing.png",
    "title": "جت اسکی",
    duration: 40,
    rating: 4.1,
    price: 10000
}, {
    "image": "/image/diveing.png",
    "title": "جت اسکی",
    duration: 40,
    rating: 4.1,
    price: 10000
}, {
    "image": "/image/diveing.png",
    "title": "جت اسکی",
    duration: 40,
    rating: 4.1,
    price: 10000
}, {
    "image": "/image/diveing.png",
    "title": "جت اسکی",
    duration: 40,
    rating: 4.1,
    price: 10000
}, {
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
const HobbySItem = () => {
    return (
        <>
            <div className='w-[1300px] h-[1090px]  justify-center items-center '>
                <div className='pt-[37px] gap-6 flex flex-row flex-wrap '>
                    {dataHobby.map((item) => (
                        <div className='w-[23%] h-[331px]'>
                            <div className='bg-[#ffffff]  justify-center flex rounded-2xl '>
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

                        </div>
                    ))}
                </div >
            </div>

        </>
    );
}


export default HobbySItem;
