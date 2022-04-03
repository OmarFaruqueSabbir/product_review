import React from 'react';
import { useReview } from '../../hooks/useReview';
import ReviewItem from '../ReviewItem/ReviewItem';

const Reviews = () => {
    const [reviews, setReviews] = useReview([]);
    return (
        <div className='grid grid-cols-1 md:grid-cols-3  gap-4 justify-items-center'>

            {
                reviews.map(review => <ReviewItem
                    key={review.id}
                    review={review}
                ></ReviewItem>)
            }
        </div>
    );
};

export default Reviews;