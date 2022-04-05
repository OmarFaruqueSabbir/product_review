import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewItem = ({ review }) => {
  const { name, img, reviewTtl, comment,rating } = review;

  return (
    <div className='shadow-lg rounded-2xl w-[350px] bg-white p-4 mt-3 mb-5'>
      <div className='gap-4 flex flex-col justify-between items-center'>
        <div className='flex-shrink-0'>

          <img
            alt='profile'
            src={img}
            className='mx-auto object-cover rounded-full h-20 w-20 '
          />

        </div>
        <div className=' flex flex-col justify-end'>
          <h3 className='text-gray-600 text-2xl font-bold'>{name}</h3>
          <h5 className='text-cyan-800 text-l font-semibold '>{reviewTtl}</h5>
          <span className='text-gray-600 text-xs text-left mt-2'>{comment}</span>
          <span className='text-gray-700 mt-1 text-l font-mono'>rating: <Rating
            initialRating={rating}
            emptySymbol={<FontAwesomeIcon icon={faStar} />}
            fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
            readonly
          ></Rating></span>

        </div>
      </div>
    </div>
  );
};

export default ReviewItem;