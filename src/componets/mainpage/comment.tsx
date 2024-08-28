import React from 'react';

const Comment = () => {
    return (
        <div>
            <div className='pt-[100px]'>
                <h3 className='text-[24px]'>دیدگاه
                    <img src='/image/line 18.png' />
                </h3>
                <div className=' flex pt-[20px]'>
                    <span >4.8 از 5</span>
                </div>
                <span className='text-[16px]'>شما هم دیدگاه خود را با ما به اشتراک بگذارید.</span>
                <div className='pt-5 '>
                    <button className='bg-white border-[1px] border-[#0051A1] text-[#0051A1] rounded-md  w-[288px] h-[48px]'>ارسال نظر</button>
                </div>
            </div>
            {/* <div className='bg-white w-[930px] h-[165px] flex'> */}

            {/* </div> */}
        </div>
    );
}

export default Comment;
