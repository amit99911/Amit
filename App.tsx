import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Spotlight from './components/Spotlight';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BrochureModal from './components/BrochureModal';

function App() {
    const [modalState, setModalState] = useState({
        isOpen: false,
        projectName: '',
        pdfUrl: ''
    });

    useEffect(() => {
        AOS.init({ once: true, offset: 100, duration: 800, disable: 'mobile' });
    }, []);

    const openModal = (projectName: string, brochureUrl: string) => {
        setModalState({
            isOpen: true,
            projectName: projectName,
            pdfUrl: brochureUrl
        });
    };

    const closeModal = () => {
        setModalState(prev => ({ ...prev, isOpen: false }));
    };

    return (
        <>
            <Navbar />
            
            <main>
                <Hero />
                <Featured onOpenModal={openModal} />
                <Spotlight />
                <Testimonials />
            </main>
            
            <Footer />

            <BrochureModal 
                isOpen={modalState.isOpen} 
                onClose={closeModal} 
                projectName={modalState.projectName} 
                pdfUrl={modalState.pdfUrl} 
            />

            <a 
                href="https://wa.me/918861887122?text=Hi,%20I%20am%20interested%20in%20Sobha/Adarsh%20Properties." 
                className="whatsapp-float group" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <i className="fab fa-whatsapp"></i>
                <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-dark-900 px-3 py-1.5 rounded-lg shadow-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none hidden md:block">
                    Chat on WhatsApp
                </span>
            </a>
        </>
    );
}

export default App;