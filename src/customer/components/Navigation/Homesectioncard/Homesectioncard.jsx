import React from 'react';

const Homesectioncard = () => {
    return (
        <div className='cursor-pointer flex flex-col items-center  bg-white rounded-lg shadow-lg 
        overflow-hidden w-[15rem] mx-3'>

            <div className='h-[12rem] w-[10rem] mt-4'>
                <img className="h-full w-full object-contain object-top" src="https://m.media-amazon.com/images/I/61bM6+0+GDL._AC_UL320_.jpg" alt="sectionimg" >
                </img>

            </div>
            <div className='flex flex-col items-center justify-center mt-2'>
                <h1 className='text-[1.2rem] font-semibold'>Amazon Brand</h1>
                <p className='text-[0.8rem] text-gray-500'>Shop from a wide range of products</p>
            </div>
        </div>
    );
}   