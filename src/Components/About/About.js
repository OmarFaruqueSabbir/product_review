import React from 'react';

const About = () => {
    return (
        <div className='px-2 pt-2 pb-24 mx-auto max-w-7xl md:px-2'>

            <div className='flex flex-col items-start pt-20 mb-5'>
                <h1 className='text-6xl font-bold mb-3'>Watch World</h1>
                <h1 className='text-3xl font-bold mb-3 text-orange-500'>Know About Us</h1>
                <p className='text-l pr-10 text-justify text-slate-700'>Watch World has had a long history that they want to tell the world about. That is why they’ve created a clever interactive timeline that summarizes all the milestones the company has experienced in their About Us page. For instance when the company was rated #4 in the Bangladesh Customer Satisfaction Index for Customer Satisfaction in 2004, or when they became the first major company to accept bitcoin as a form of payment in 2014, or in 2018 when they introduced augmented reality to their shopping app for Android users using Google’s ARCore technology. <strong>Watch World</strong> family feels that their visitors want to consume this information and uses their About Us page for that.The interests of our customers are always top priority for us, so we hope you will enjoy our products as much as we enjoy making them available to you.</p>
            </div>
        </div>
    );
};

export default About;