import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-16 md:py-24 bg-dark-800 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 text-white brand-font">Client Stories</h2>
                    <p className="text-gray-400">Hear from those who found their dream home with us.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 md:px-0">
                    {TESTIMONIALS.map(item => (
                        <div key={item.id} className="bg-dark-900 p-8 rounded-xl border border-gray-700 relative">
                            <i className="fas fa-quote-left text-4xl text-gold-500/20 absolute top-6 left-6"></i>
                            <p className="text-gray-300 italic mb-6 relative z-10 text-sm md:text-base">"{item.text}"</p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center font-bold text-white">{item.initials}</div>
                                <div className="ml-4">
                                    <h4 className="text-white font-bold text-sm">{item.name}</h4>
                                    <p className="text-gold-400 text-xs">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;