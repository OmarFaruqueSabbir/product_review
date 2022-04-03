import React from 'react';
import { useReview } from '../../hooks/useReview';
import watch from '../../images/watch1.jpg'

const Home = () => {
    const [reviews, setReviews] = useReview([]);
    return (
        <section>
            <div className='px-4 pt-10 pb-24 mx-auto max-w-7xl md:px-2'>
                <div className='grid md:grid-cols-3'>
                    <div className='md:col-span-2 flex flex-col items-start pt-20'>
                        <h1 className='text-6xl font-bold mb-3'>Explore Watch World</h1>
                        <h1 className='text-6xl font-bold mb-3 text-orange-500'>Find Best Watche'S</h1>
                        <p className='text-xl pr-10 text-left text-slate-700'>Welcome to Watch World. Here you can find our exclusive collections of watches. We have Original Branded Watches for Gents, Ladies, Kids with Analog, Digital and Smartwatch variation. We have popular brands like- Fastrack, Casio, Fossil, Titan and so on. “Watch World” is with you for a long time with quality products & Excellent customer services. Customer Satisfaction is our Prime Goal.</p>

                        <button className='bg-indigo-500 p-3 border rounded-r-lg rounded-l-lg text-white text-xl mt-3'>Live Demo</button>
                    </div>

                    <div className='flex sm:justify-center'>
                        <img className='border-2 border-orange-500 rounded-md' src={watch} alt='' />
                    </div>
                </div>
            </div>

            <h1 className='text-4xl font-bold'>Our Valuable Customers Review</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center'>
                {
                    reviews.slice(0, 3).map((review) => (
                        <div >
                            <div className='shadow-lg rounded-2xl w-[350px] bg-white p-4 mt-5'>
                                <div className='gap-4 flex flex-col justify-between items-center'>
                                    <div className='flex-shrink-0'>

                                        <img
                                            alt='profile'
                                            src={review.img}
                                            className='mx-auto object-cover rounded-full h-20 w-20 '
                                        />

                                    </div>
                                    <div className=' flex flex-col justify-end'>
                                        <h3 className='text-gray-600 text-xl font-medium'>{review.name}</h3>
                                        <h5 className='text-gray-600 text-l font-mono'>{review.reviewTtl}</h5>
                                        <span className='text-gray-400 text-xs text-left font-mono'>{review.comment}</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    ))
                }
            </div>
        </section>

    );
};

export default Home;