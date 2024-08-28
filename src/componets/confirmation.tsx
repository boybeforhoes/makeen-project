import React from 'react';

const Confirmation = () => {
    return (
        <div>
            <div className='flex gap-[1rem]'>
                <div className='w-[46.875rem] h-[14.063rem]  bg-white'>
                    <div className='flex'>
                        <img src="/image/Rectangle 73.png" alt="" className=' pt-[1.5rem] pr-[1.5rem]' />
                        <div className='pt-[1.5rem] pr-[1.5rem] '>
                            <span className='pt-[1.5rem] pr-[1.5rem]  text-[1.25rem]'>
                                جت اسکی
                            </span>
                            <div className='flex pt-[1.5rem]  pr-[1.5rem] gap-[1rem]'>
                                <img src="/image/calendarblue.png" alt="" />
                                <span>
                                    20 مرداد 1403
                                </span>
                            </div>
                            <div className='flex pt-[1.5rem]  pr-[1.5rem] gap-[1rem]'>
                                <img src="/image/calendarblue.png" alt="" />
                                <span>
                                    سانس انتخاب شده 9:00
                                </span>
                            </div>
                            <div className='flex pt-[1.5rem]  pr-[1.5rem] gap-[1rem]'>
                                <img src="/image/calendarblue.png" alt="" />
                                <span>
                                    تعداد بلیت: 1
                                </span>
                            </div>
                        </div>
                        <div className='flex  pt-[10.625rem] pr-[12rem]'>
                            <button className='bg-[#0051A1] w-[7.813rem] h-[2rem] rounded-[0.625rem] text-white ' > ویرایش </button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='w-[33.375rem]   h-[14.063rem] bg-white'>
                        <div className='w-[8.125rem] pt-[1.25rem] pr-[1.5rem] h-[2.188rem] '>
                            <h3 className='text-[1.25rem]'>جزئیات پرداخت</h3>
                            {/* <a className='flex'>
                                <span className='text-[#023568] text-[0.875rem]'>
                                    مشاهده جزئیات بیشتر
                                </span>
                                <img src="/image/arrow-down.png" alt="" />
                            </a> */}
                        </div>
                    </div>

                </div>
            </div>
            <div className='pt-[1rem] flex  gap-[1rem]'>
                <div className='w-[46.875rem] h-[14.063rem] pt-[1.5rem] pr-[1.5rem]  bg-white'>
                    <h3 className='text-[1.5rem]'>نکته هایی در مورد خرید و رزرو بلیط جت اسکی کیش</h3>
                    <div className='text-[1.25rem]'>
                        <li>ساعت مراجعه: 9 الی 16 (طبق سانس انتخابی)
                        </li>
                        <li>پوشیدن جلیقه نجات الزامی است.
                        </li>
                        <li>کلوپ ها دارای دوش و رختکن می باشند.
                        </li>
                        <li>جت اسکی کیش قابل استفاده برای آقایان و بانوان است.به شرط تهیه بلیط می توانید دو نفره  <br />از یک جت اسکی استفاده کنید.
                        </li>
                    </div>
                </div>
                <div className='w-[33.375rem] h-[14.063rem] bg-white'>
                    baeikvbaikbao
                </div>
            </div>
        </div>
    );
}

export default Confirmation;

// نکته هایی در مورد خرید و رزرو بلیط جت اسکی کیش
//
//
// 
