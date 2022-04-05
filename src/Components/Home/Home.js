import React from 'react';
import { Link } from 'react-router-dom';
import { useReview } from '../../hooks/useReview';
import watch from '../../images/watch1.jpg'
import ReviewHome from '../ReviewHome/ReviewHome';


const Home = () => {
    const [reviews, setReviews] = useReview([]);
    return (
        <section>
            <div className='px-4 pt-10 pb-24 mx-auto max-w-7xl md:px-2'>
                <div className='grid md:grid-cols-3'>
                    <div className='md:col-span-2 flex flex-col items-start pt-20'>
                        <h1 className='text-6xl font-bold mb-3'>Explore Watch World</h1>
                        <h1 className='text-6xl font-bold mb-3 text-orange-500'>Find Best Watche'S</h1>
                        <p className='text-l pr-10 text-left text-slate-700'>Welcome to Watch World. Here you can find our exclusive collections of watches. We have Original Branded Watches for Gents, Ladies, Kids with Analog, Digital and Smartwatch variation. We have popular brands like- Fastrack, Casio, Fossil, Titan and so on. <strong>“Watch World”</strong> is with you for a long time with quality products & Excellent customer services. Customer Satisfaction is our Prime Goal.</p>

                        <Link to='/about'>
                            <button className='bg-gray-800 p-3 border rounded-r-lg rounded-l-lg text-white text-xl mt-3'>About US</button>
                        </Link>

                    </div>

                    <div className='flex sm:justify-center'>
                        <img className='border-2 border-orange-500 rounded-md' src={watch} alt='' />
                    </div>
                </div>
            </div>

            <div className='mt-5 mb-8'>
                <h1 className='text-4xl font-bold'>Our Valuable Customers Review</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center'>
                {
                    reviews.slice(0, 3).map((review) => (
                        <ReviewHome key={review.id} review={review}>
                        </ReviewHome>)
                    )
                }
            </div>

            <Link to='/reviews'>
                <div className='mt-5 mb-10'>
                    <button className='bg-black p-3 border rounded-r-lg rounded-l-lg text-white text-xl mt-3'>More Reviews</button>
                </div>
            </Link>
        </section>

    );
};

export default Home;