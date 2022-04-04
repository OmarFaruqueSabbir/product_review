import React from 'react';
import { Link } from 'react-router-dom';
import errImg from '../../images/over.jpg'

const Error = () => {
    return (
        <section className='px-8 pt-10 mt-10 pb-24 mx-auto max-w-7xl md:px-2'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className=' flex flex-col items-center justify-center pl-5'>
                    <h1 className='text-6xl text-cyan-900 font-bold mb-3'>ERROR <span className='text-red-700'>404</span></h1>
                    <p className='text-2xl font-bold pr-10 text-justify text-slate-800'> You are in Wrong Place!! Input correct keyword in searchBox!! </p>

                    <Link   to="/">
                    <div className='mt-3 mb-3'>
                        <button className='bg-gray-800 p-3 border rounded-r-lg rounded-l-lg text-white text-xl mt-3'>Try Again</button>
                    </div>
                    </Link>

                </div>
                <div className='flex sm:justify-center'>
                    <img className='rounded-lg h-[400px] w-[400px]' src={errImg} alt="" />
                </div>
            </div>

        </section>
    );
};

export default Error;