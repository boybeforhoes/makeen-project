import React from 'react';

const Information = () => {
    return (
        <div>
            <div>
                <h3 className='text-[20px]'>مشخصات گردشگران</h3>
            </div>
            <div className='flex justify-end gap-5 '>
                <button className='pl-6'>
                    <span className='text-[#024282] flex gap-2'>
                        <img className='w-6 h-6' src='/image/profile.png' />
                        انتخاب گردشگران سابق
                    </span>
                </button>
                <button>
                    <span className='text-[#E20000] flex gap-2'>
                        <img className='w-6 h-6' src='/image/trash.png' />
                        حذف
                    </span>
                </button>
                
            </div>
            <div>
                <input type="text" placeholder='نام و نام خانوادگی'  className='bg-[#EDEDED]'/>
            </div>
        </div>
    );
}

export default Information;
