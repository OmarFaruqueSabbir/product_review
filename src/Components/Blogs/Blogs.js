import React from 'react';
import bulb from '../../images/bulb.jpg'
import it from '../../images/it.jpg'

const Blogs = () => {
    return (
        <section>
            <div className='px-4 pt-10 pb-24 mx-auto max-w-7xl md:px-2'>
                <div className='grid md:grid-cols-3'>

                    <div className='flex sm:justify-center'>
                        <img className='border-2 border-orange-500 rounded-md h-[300px] w-[400px] ' src={bulb} alt='' />
                    </div>

                    <div className='md:col-span-2 flex flex-col items-center justify-center pl-5'>
                        <h1 className='text-6xl text-orange-500 font-bold mb-3'>What is Context API?</h1>
                        <p className='text-l pr-10 text-justify text-slate-700'>A React app can use the React Context API to generate global variables that can be passed around. This is an alternative to "prop drilling," which entails passing props from grandparent to child to parent and so on. Context is also marketed as a simpler, lighter way to Redux state management.Context API is a (sort of) new feature in React 16.3 that allows you to easily and lightly communicate state across the entire project (or part of it).To get started with the Context API, we'll need to first build a context with React's createContext method. </p>


                    </div>


                </div>
            </div>

            <div className='px-4 pt-10 pb-24 mx-auto max-w-7xl md:px-2'>
                <div className='grid md:grid-cols-3'>

                    <div className='md:col-span-2 flex flex-col items-center justify-center pl-5'>
                        <h1 className='text-6xl text-cyan-900 font-bold mb-3'>What is Semantic Tags?</h1>
                        <p className='text-l pr-10 text-justify text-slate-700'>Semantic HTML tags allow you to add meaning to your markup so that it may be understood by search engines, screen readers, and web browsers.When a user agent sees your material, it does not grasp the context or meaning by default.Structured content can be served to visitors using semantic HTML tags, which is very useful for on-page SEO and accessibility.The HTML5 specifications added a number of additional semantic components to the grammar, both at the block and inline levels.Section,Header,Article,Nav,Aside,Footer etc. are new html5 semantics. </p>
                    </div>

                    <div className='flex sm:justify-center'>
                        <img className='border-2 border-cyan-700 rounded-md h-[300px] w-[400px]' src={it} alt='' />
                    </div>


                </div>
            </div>
        </section>


    );
};

export default Blogs;