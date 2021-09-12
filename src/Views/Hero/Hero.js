import React from 'react';
import {Link} from "react-router-dom";

const Hero = () => {
    return (
        <div className="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center container">
            <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">
                Bringing Hollywood to your home
            </span>
                </h2>
                <p className="mt-4 text-gray-400">
                    The best view of Hollywood is from here. Celebrate your day with us. Customer satisfaction is our primary goal.
                    Don’t waste your time, come here! Enjoy your movie with us!
                </p>
                <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className="mt-12 inline-flex rounded-md shadow">
                        <Link to={`/movies/:id`}
                                className="py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Get started
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-8 p-8 lg:p-24">
                <img src="https://images.unsplash.com/photo-1623375428145-4d276c83ce5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=662&q=80" className="rounded-lg w-72" alt="Tree"/>
                <div>
                    <img src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1349&q=80" className="rounded-lg mb-16 pb-5" alt="Tree"/>
                    <img src="https://images.unsplash.com/photo-1460881680858-30d872d5b530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" className="rounded-lg" alt="Tree"/>
                </div>
            </div>
        </div>
    );
};

export default Hero;