"use client"
import React, { useState } from 'react';

const Selection = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };
    return (
        <>
            <div>
                <div className='w-full h-[450px]  flex gap-5'>
                    <div className='w-[470px] h-full  '>
                        <div className='w-[240px] h-[335px] '>
                            <h3>جت اسکی</h3>
                            <div className='flex gap-1 pt-6 '>
                                <img className='w-[24px] h-[24px]' src='/image/timer-blue.png' />
                                <span>مدت زمان: 30 دقیقه</span>
                            </div>
                            <div className='pt-6 flex gap-1'>
                                <img src='/image/user-minus.png' />
                                <span>محدودیت سنی: 12+</span>
                            </div>
                            <div className='pt-6 flex gap-1'>
                                <img src='/image/blue-star.png' />
                                <span>4.8</span>
                            </div>
                            <div className='pt-6 flex gap-1'>
                                <img src='/image/messages.png' />
                                <span>10 دیدگاه</span>
                            </div>
                            <div className='pt-6 flex gap-1'>
                                <img src='/image/ticket.png' />
                                <span>100.000 تومان</span>
                            </div>
                            <div className='pt-6'>
                                <span  >تعداد بلیت:</span>
                                <button className='gap-3 bg-[#24609B] w-[24px] h-[24px] rounded-md text-white' onClick={increment}>+</button>
                                <span className=' pr-[16px] pl-[16px]'> {count}</span>
                                <button className=' bg-[#24609B] w-[24px] h-[24px] rounded-md text-white' onClick={decrement}>-</button>
                            </div>
                        </div>
                        <div className='bg-[#0051A1] w-[470px] h-[56px] mt-[41px] rounded-[5px] flex justify-center'>
                            <button className='text-[#ffffff] text-[20px]'>انتخاب سانس</button>
                        </div>

                    </div>
                    <div>
                        <img src='/image/jetski.png' />

                    </div>
                </div>
                <div>
                    <h1 className='text-[24px]'>
                        جت اسکی مارینا کیش
                        <img className='' src='/image/line 14.png' />
                    </h1>
                    <p className='w-[1300px]  h-[283px] text-[18px] leading-[3.5rem]'>از هیجانات سفر به شهرهای ساحلی حرکت بر روی آب دریا به وسیله قایق های موتوری و جت‌ اسکی است. تجربه سرعت و مانور هیجان انگیز با جت‌اسکی می تواند لذت سفر

                        شما را دو چندان کند. یکی از جذابترین مناطق برای استفاده از جت‌اسکی جزیره زیبای کیش است که پیش از این به مدت چند سال در جزیره ممنوع بوده و اخیرا مجوز آن در

                        برخی سواحل جزیره کیش مجددا صادر شده است.

                        بنابراین در حال حاضر گردشگران کیش می توانند از جت اسکی کیش بر روی آبهای شفاف خلیج فارس لذت ببرند. جت اسکی در کیش بر روی آب های شفاف و زلال خلیج فارس

                        یکی از بهترین تفریحات مارینا کیش حسوب می شود که سالیانه نظر هزاران گردشگر ایرانی و خارجی را به خود جلب می کند.
                    </p>
                </div>
                <div>
                    <h3 className='text-[26px]'>
                        نکات لازم برای استفاده از جت اسکی
                        <img src='/image/line 16.png' />
                    </h3>
                    <p className='leading-[3.5rem]'>جت اسکی در کیش بر خلاف ظاهر پر هیجان و جذاب خود از جمله تفریحات مارینا کیش است که در هنگام استفاده باید حتما به نکات ایمنی توجه ویژه کنید. از نکاتی که در

                        هنگام استفاده از جت اسکی در کیش به عنوان یکی از تفریحات کیش باید رعایت کرد میتوان به موارد زیر اشاره کرد:

                        1.به دلیل نداشتن سیستم کاهش سرعت در دستگاه در هنگام پیچ ها سرعت خود را کاهش دهید. همچنین در هنگام دور و نزدیک شدن به اسکله در زمان استفاده از جت

                        اسکی در کیش نیز از سرعت خود بکاهید تا باعث ایجاد سوانح نشوید.

                        2.در هنگام استفاده از جت اسکی در کیش و در کل تفریحات آبی کیش حتما از جلیقه نجات استفاده کنید.

                        3.به آموزش های مربی در هنگام استفاده از جت اسکی در کیش گوش بدهید.

                        4.به هر گروه یا خانواده بیش تر از ۱ دستگاه داده نمیشود.

                        5.هر دستگاه جت اسکی در کیش قابلیت حمل دو نفر را دارد ولی افراد بالای ۱۰۰ کیلوگرم باید به تنهایی سوار شوند.

                        6.از خارج کردن دستگاه از محدوده تعریف شده جدا خودداری نمایید.

                        7.در هنگام واژگون شدن دستگاه، دسته ها را رها کنید تا بعد از رها شدن به حالت اولیه برگردد.

                        8.از سوار شدن خردسالان به دلیل تامین امنیت آنان جلوگیری می شود.</p>
                </div>
              
            </div>
        </>
    );
}

export default Selection;
