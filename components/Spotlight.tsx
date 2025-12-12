import React from 'react';

const Spotlight: React.FC = () => {
    return (
        <section id="spotlight" className="relative py-32 townpark-bg">
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center">
                <div className="w-full md:w-2/3" data-aos="fade-up">
                    <div className="inline-block bg-gold-500 text-dark-900 font-bold px-4 py-1 mb-4 text-sm rounded uppercase tracking-wider">
                        Spotlight Project
                    </div>
                    <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight brand-font">
                        Live the <br /> <span className="text-gold-400">NYC Life</span> in Bangalore.
                    </h2>
                    
                    <div className="mb-8 inline-block">
                        <div className="bg-gradient-to-r from-gold-600/30 to-transparent border-l-4 border-gold-500 p-4 rounded-r-lg backdrop-blur-md">
                            <p className="text-white text-lg md:text-xl font-bold tracking-wide">
                                <span className="text-gold-400">20:80</span> Payment Plan 
                                <span className="mx-2 md:mx-4 text-gray-500">|</span> 
                                <span className="text-gold-400">2 Years</span> EMI Holiday
                            </p>
                        </div>
                    </div>

                    <p className="text-base md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                        Introducing <strong>Sobha Townpark</strong> - Bangalore's first integrated township themed after New York. Featuring architectural marvels like the Brooklyn Towers and Manhattan Pods.
                    </p>
                    <button 
                        onClick={() => document.getElementById('lead-form-container')?.scrollIntoView({behavior: 'smooth'})} 
                        className="bg-white text-dark-900 hover:bg-gold-400 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold transition duration-300 text-sm md:text-base"
                    >
                        Request Townpark Layout
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Spotlight;