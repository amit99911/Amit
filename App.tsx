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
                className="whatsapp-float" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Chat on WhatsApp"
            >
                <i className="fab fa-whatsapp"></i>
            </a>
        </>
    );
}

export default App;