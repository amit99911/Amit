import React from 'react';
import LeadForm from './LeadForm';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center hero-bg py-28 md:py-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between">
                
                {/* Text Content */}
                <div className="w-full md:w-5/12 text-center md:text-left mb-12 md:mb-0" data-aos="fade-right">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6 text-shadow-lg">
                        Bangalore's Most <br /> <span className="gold-gradient-text">Prestigious Address</span> <br /> Awaits You.
                    </h1>
                    <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-8 leading-relaxed px-2 md:px-0">
                        Connecting discerning buyers with Grade-A inventory from <strong>Sobha</strong> and <strong>Adarsh</strong>.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start px-4 md:px-0">
                        <a href="#featured" className="btn-primary text-dark-900 px-8 py-3 rounded-full font-bold text-center text-sm sm:text-base cursor-pointer">View Projects</a>
                        <button 
                            onClick={() => document.getElementById('lead-form-container')?.scrollIntoView({ behavior: 'smooth' })} 
                            className="border border-gold-400 text-white hover:bg-gold-400 hover:text-dark-900 px-8 py-3 rounded-full font-bold transition"
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>

                {/* Form Container */}
                <div className="w-full md:w-5/12" data-aos="fade-left" id="lead-form-container">
                    <div className="glass-panel p-5 md:p-8 rounded-2xl shadow-2xl relative mt-4 md:mt-0 mx-2 md:mx-0">
                        <div className="absolute -top-4 right-4 md:right-8 bg-gold-500 text-dark-900 font-bold px-3 py-1 text-xs md:text-sm rounded shadow-lg">VIP Access</div>
                        <h3 className="text-xl md:text-2xl font-bold mb-1 text-white brand-font">Book Site Visit</h3>
                        <p className="text-gray-400 text-xs mb-6">Verify your number to submit details.</p>
                        
                        <LeadForm id="hero-form" />
                        
                        <p className="text-gray-500 text-[10px] text-center mt-2">Verified leads only.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;