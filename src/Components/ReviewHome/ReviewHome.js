import React from 'react';

const ReviewHome = ({review}) => {
    const { name, img, reviewTtl, comment } = review;
    return (
        <div className='shadow-lg rounded-2xl w-[350px] bg-white p-4 mt-5'>
        <div className='gap-4 flex flex-col justify-between items-center'>
            <div className='flex-shrink-0'>

                <img
                    alt='profile'
                    src={img}
                    className='mx-auto object-cover rounded-full h-20 w-20 '
                />

            </div>
            <div className=' flex flex-col justify-end'>
                <h3 className='text-gray-600 text-xl font-medium'>{name}</h3>
                <h5 className='text-gray-600 text-l font-mono'>{reviewTtl}</h5>
                <span className='text-gray-400 text-xs text-left font-mono'>{comment}</span>
            </div>
        </div>
    </div>
    );
};

export default ReviewHome;