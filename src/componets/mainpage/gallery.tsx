import React from 'react';

const Gallery = () => {
    return (
        <div className='flex flex-col justify-start items-start gap-y-[0.375rem] w-full max-w-[40rem] h-[35.875rem] pr-[2.5rem]'>
            <div className='flex relative w-full max-w-[37.5rem] h-[17.75rem]'>
                <img className='w-[15.375rem] h-[16.5rem] ml-0 mr-[1.3125rem]' src='/image/balon.png' alt='' />
                <img className='w-[19.5625rem] absolute top-[2.5rem] left-0 h-[15.25rem] mr-[1.5rem]' src='/image/yacht.png' alt='' />
            </div>
            <div className='flex relative w-full max-w-[37.5rem] h-[17.75rem]'>
                <img className='w-[21.1875rem] h-[15.25rem] ml-[1.4375rem]' src='/image/diveing.png' alt='' />
                <img className='w-[15.375rem] absolute top-[1.25rem] left-0 h-[16.5rem]' src='/image/para.png' alt='' />
            </div>
        </div>
    );
}

export default Gallery;
