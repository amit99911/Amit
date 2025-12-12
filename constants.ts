import { ProjectImages, ProjectDetails, TestimonialData } from './types';

export const PROJECT_IMAGES: ProjectImages = {
    townpark: [
        "https://i.postimg.cc/G9fJrzZ2/townpark1.jpg",
        "https://i.postimg.cc/S2v8SNt8/townpark2.jpg",
        "https://i.postimg.cc/LqygD8SB/townpark3.jpg",
        "https://i.postimg.cc/ppNhq7Nt/townpark4.jpg"
    ],
    neopolis: [
        "https://i.postimg.cc/CRh4LCyB/neopolis1.jpg",
        "https://i.postimg.cc/PPk40s2b/neopolis2.jpg",
        "https://i.postimg.cc/87pbPd8j/neopolis3.jpg",
        "https://i.postimg.cc/TKdcYj8y/neopolis4.jpg"
    ],
    magnus: [
        "https://i.postimg.cc/bDcgP7pR/magnus1.jpg",
        "https://i.postimg.cc/qhVwrP4j/magnus2.jpg",
        "https://i.postimg.cc/sQdmzksK/magnus3.jpg",
        "https://i.postimg.cc/JDVx8fMp/magnus4.jpg"
    ],
    ayana: [
        "https://i.postimg.cc/5XWkbQg3/ayana1.jpg",
        "https://i.postimg.cc/MnJrqf5N/ayana2.jpg",
        "https://i.postimg.cc/LJF02gDc/ayana3.jpg",
        "https://i.postimg.cc/0z1HPKnL/ayana4.jpg"
    ],
    tropica: [
        "https://i.postimg.cc/6495kpSs/Adarsh-1.jpg",
        "https://i.postimg.cc/kRnX0gH0/Adarsh-2.jpg",
        "https://i.postimg.cc/k6NgYbjM/Adarsh-3.jpg",
        "https://i.postimg.cc/ft7Rq9HN/Adarsh-4.webp"
    ]
};

export const PROJECTS: ProjectDetails[] = [
    {
        id: 'townpark',
        name: 'Sobha Townpark',
        tag: 'NYC THEME',
        description: 'New York - Themed Luxury Apartments',
        location: 'Near Electronic City',
        config: '2, 3 & 4 BHK',
        sqft: '1240 - 2846 sq. ft.',
        price: '₹ 1.8 Cr*',
        brochureUrl: 'https://drive.google.com/file/d/1mFVAgKGpQlbPS8FiLGSgei7FNBvsXZqt/view?usp=drive_link',
        images: PROJECT_IMAGES.townpark
    },
    {
        id: 'neopolis',
        name: 'Sobha Neopolis',
        tag: 'GREEK',
        description: 'Greek-Themed Luxury Apartments',
        location: 'Panathur, Off Marathahalli',
        config: '3 & 4 BHK',
        sqft: '1611 - 2481 Sq.ft',
        price: '₹ 2.3 Cr*',
        brochureUrl: 'https://drive.google.com/file/d/1LgHFowsyLjm3Jb_nH-TOJs9Hj_uETMhI/view?usp=drive_link',
        images: PROJECT_IMAGES.neopolis
    },
    {
        id: 'magnus',
        name: 'Sobha Magnus',
        tag: 'ECO-LUXE',
        description: 'Eco-luxe Homes',
        location: 'Bannerghatta Main Road',
        config: '3 & 4 BHK',
        sqft: '1856 – 2578 sq. ft.',
        price: '₹ 3.4 Cr*',
        brochureUrl: 'https://drive.google.com/file/d/1F5yZlr2KAF7_ts4xoGnDed8nXEzVyGdW/view?usp=drive_link',
        images: PROJECT_IMAGES.magnus
    },
    {
        id: 'ayana',
        name: 'Sobha Ayana',
        tag: 'TROPICAL',
        description: 'Modern Tropical Apartments',
        location: 'Panathur, Off Marathahalli',
        config: '3 BHK',
        sqft: '1553 - 1789 sq. ft.',
        price: '₹ 2.3 Cr*',
        brochureUrl: 'https://drive.google.com/file/d/1jpFpT0zJdsbU_E1TKm5WMzCpJKFDsH-q/view?usp=drive_link',
        images: PROJECT_IMAGES.ayana
    },
    {
        id: 'tropica',
        name: 'Adarsh Tropica',
        tag: 'LIFESTYLE',
        description: 'Premium Lifestyle Apartments',
        location: 'Off Sarjapur Road',
        config: '2.5 & 3 BHK',
        sqft: '1385 - 1610 Sq.Ft.',
        price: '₹ 1.5 Cr*',
        brochureUrl: 'https://drive.google.com/file/d/1z0kC0sIJHwHrlSL1mxrk06n1HVhl5h05/view?usp=drive_link',
        images: PROJECT_IMAGES.tropica
    }
];

export const TESTIMONIALS: TestimonialData[] = [
    {
        id: 1,
        text: "I was looking for a 4BHK in Sobha Neopolis. Prime Acres not only got me a unit with a pool view but also negotiated a price that was lower than what the sales office initially quoted.",
        initials: "RJ",
        name: "Rahul Jain",
        role: "IT Director"
    },
    {
        id: 2,
        text: "Transparency was refreshing. No hidden charges. They arranged a site visit to Adarsh Tropica within 2 hours of my enquiry. The entire process was seamless.",
        initials: "SM",
        name: "Sneha Menon",
        role: "Doctor"
    },
    {
        id: 3,
        text: "The team at Prime Acres understands the luxury segment very well. Their advice on Sobha Magnus was spot on and helped me make a quick decision.",
        initials: "VS",
        name: "Vikram Singh",
        role: "Entrepreneur"
    },
    {
        id: 4,
        text: "Got a great deal on Sobha Townpark thanks to them. The team is very professional and handled all the documentation smoothly.",
        initials: "PS",
        name: "Priya Sharma",
        role: "Architect"
    },
    {
        id: 5,
        text: "Honest and transparent. That's rare in this industry. Highly recommended for NRI investors looking for safe bets in Bangalore.",
        initials: "AV",
        name: "Ankit Verma",
        role: "NRI Investor"
    },
    {
        id: 6,
        text: "The download process and site visit scheduling was instant. Very efficient use of technology and great customer service.",
        initials: "RG",
        name: "Dr. Rakesh G.",
        role: "Surgeon"
    }
];

// Configuration for Google Sheets Integration
// Replace this URL with your deployed Google Apps Script Web App URL
export const SHEET_API_URL = "https://script.google.com/macros/s/AKfycbx_YOUR_SCRIPT_ID_HERE/exec";