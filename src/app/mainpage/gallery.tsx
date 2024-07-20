import React from 'react';

const Gallery = () => {
    return (
        <div className='flex flex-col justify-start items-start gap-y-[6px] w-[648px] h-[574px] mr-[58px]'>
            <div className='flex relative w-[600px] h-[284px]  '>
                <img className='w-[246px] h-[264px] ml-[px]  mr-[16px]' src='/image/balon.png' alt='' />
                <img className='w-[313px] absolute top-[40px] left-0 h-[244px] mr-[2.25rem]' src='/image/yacht.png' alt='' />
            </div>
            <div className='flex relative  w-[600px] h-[284px]'>
                <img className='w-[339px] h-[244px] ml-[23px]' src='/image/diveing.png' alt='' />
                <img className='w-[246px] absolute top-[20px] left-0 h-[264px]' src='/image/para.png' alt='' />
            </div>
        </div>
    );
}

export default Gallery;
