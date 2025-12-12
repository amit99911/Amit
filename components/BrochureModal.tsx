import React, { useEffect } from 'react';
import LeadForm from './LeadForm';

interface BrochureModalProps {
    isOpen: boolean;
    onClose: () => void;
    projectName: string;
    pdfUrl: string;
}

const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose, projectName, pdfUrl }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
             document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm transition-all duration-300">
            <div className="bg-dark-900 w-full max-w-md rounded-xl p-8 border border-gold-500 m-4 relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                    <i className="fas fa-times text-xl"></i>
                </button>
                <h2 className="text-2xl font-bold text-white mb-2 text-center">Verify to Download</h2>
                <p className="text-center text-gold-400 text-sm mb-6 font-bold">{projectName}</p>
                
                <LeadForm 
                    id="brochure-form" 
                    isModal 
                    projectName={projectName} 
                    pdfUrl={pdfUrl} 
                    onSuccess={onClose}
                />
            </div>
        </div>
    );
};

export default BrochureModal;