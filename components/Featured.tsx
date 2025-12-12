import React, { useState } from 'react';
import { PROJECTS } from '../constants';

interface FeaturedProps {
    onOpenModal: (projectName: string, brochureUrl: string) => void;
}

const Featured: React.FC<FeaturedProps> = ({ onOpenModal }) => {
    // State to track the current image index for each project
    const [sliderIndices, setSliderIndices] = useState<{ [key: string]: number }>(
        PROJECTS.reduce((acc, project) => ({ ...acc, [project.id]: 0 }), {})
    );

    const changeSlide = (projectId: string, direction: number) => {
        setSliderIndices(prev => {
            const project = PROJECTS.find(p => p.id === projectId);
            if (!project) return prev;
            
            const count = project.images.length;
            const currentIndex = prev[projectId];
            let newIndex = currentIndex + direction;

            if (newIndex >= count) newIndex = 0;
            if (newIndex < 0) newIndex = count - 1;

            return { ...prev, [projectId]: newIndex };
        });
    };

    return (
        <section id="featured" className="py-16 md:py-24 bg-dark-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-gradient-text">Curated Collections</h2>
                    <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
                    <p className="text-gray-400 mt-4">5 Exclusive Projects Available</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 md:px-0 justify-center">
                    {PROJECTS.map((project) => (
                        <div key={project.id} className="bg-dark-800 rounded-2xl overflow-hidden property-card border border-gray-800" data-aos="fade-up">
                            <div className="relative h-64 overflow-hidden group">
                                <div className="absolute top-4 left-4 bg-gold-500 text-dark-900 text-xs font-bold px-3 py-1 rounded shadow-lg z-10">{project.tag}</div>
                                <img 
                                    src={project.images[sliderIndices[project.id]]} 
                                    alt={project.name}
                                    className="w-full h-full object-cover transition duration-500" 
                                    loading="lazy"
                                />
                                <button 
                                    onClick={() => changeSlide(project.id, -1)} 
                                    className="slider-btn slider-btn-left hover:bg-gold-400 hover:text-black"
                                >
                                    <i className="fas fa-chevron-left"></i>
                                </button>
                                <button 
                                    onClick={() => changeSlide(project.id, 1)} 
                                    className="slider-btn slider-btn-right hover:bg-gold-400 hover:text-black"
                                >
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-1">{project.name}</h3>
                                <p className="text-gold-400 text-xs mb-3">{project.description}</p>
                                <p className="text-gray-400 text-sm mb-1">
                                    <i className="fas fa-map-marker-alt mr-2 text-gold-400"></i>
                                    {project.location}
                                </p>
                                
                                <div className="flex justify-between items-center mt-4 border-t border-gray-700 pt-4">
                                    <div>
                                        <p className="text-gray-400 text-xs">{project.config}</p>
                                        <p className="text-white text-xs font-bold">{project.sqft}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-gray-500">Starting From</p>
                                        <p className="text-xl font-bold text-white">{project.price}</p>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => onOpenModal(project.name, project.brochureUrl)}
                                    className="w-full mt-4 border border-gold-400 text-gold-400 px-4 py-2 rounded text-sm hover:bg-gold-400 hover:text-black transition font-bold"
                                >
                                    Download Brochure
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Featured;