import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark-900 border-t border-gray-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-bold brand-font text-white mb-4">PRIME ACRES</h2>
                        <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
                            Bangalore's premier real estate consultancy. Connecting luxury home seekers with India's finest developers.
                        </p>
                    </div>
                    <div id="contact">
                        <h4 className="text-white font-bold mb-4">Contact</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-start">
                                <i className="fas fa-phone mt-1 mr-2 text-gold-400"></i> +91 88618 87122
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-envelope mt-1 mr-2 text-gold-400"></i> primeacresforyou@gmail.com
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-map-marker-alt mt-1 mr-2 text-gold-400"></i> HSR Layout, Bangalore
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 text-center px-4">
                    <p className="text-gray-600 text-xs">© 2024 Prime Acres.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;