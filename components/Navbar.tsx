import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinkClasses = "hover:text-gold-400 transition px-3 py-2 rounded-md text-sm font-medium text-white cursor-pointer";
    const mobileLinkClasses = "text-gray-300 hover:text-gold-400 block px-3 py-3 cursor-pointer";

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel border-b border-gray-700/50' : 'bg-transparent border-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <span className="text-xl sm:text-2xl font-bold brand-font gold-gradient-text tracking-wider">PRIME ACRES</span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#home" className={navLinkClasses}>Home</a>
                            <a href="#featured" className={navLinkClasses}>Collections</a>
                            <a href="#spotlight" className={navLinkClasses}>Spotlight</a>
                            <a href="#process" className={navLinkClasses}>Process</a>
                            <a href="#contact" className="bg-gold-500 text-dark-900 hover:bg-gold-400 px-5 py-2 rounded-full font-bold transition duration-300 text-sm">Contact Expert</a>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gold-400 hover:text-white focus:outline-none bg-dark-800/50">
                            <i className="fas fa-bars text-2xl"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Mobile Menu */}
            <div className={`md:hidden bg-dark-900 border-t border-gray-800 absolute w-full left-0 shadow-2xl transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="px-4 pt-4 pb-6 space-y-2 text-center">
                    <a href="#home" onClick={toggleMenu} className={mobileLinkClasses}>Home</a>
                    <a href="#featured" onClick={toggleMenu} className={mobileLinkClasses}>Collections</a>
                    <a href="#spotlight" onClick={toggleMenu} className={mobileLinkClasses}>Spotlight</a>
                    <a href="#contact" onClick={toggleMenu} className="text-gold-400 font-bold block px-3 py-3 bg-dark-800 mt-2 rounded">Contact Us</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;