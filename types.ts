export interface ProjectImages {
    [key: string]: string[];
}

export interface ProjectDetails {
    id: string;
    name: string;
    tag: string;
    description: string;
    location: string;
    config: string;
    sqft: string;
    price: string;
    brochureUrl: string;
    images: string[];
}

export interface TestimonialData {
    id: number;
    text: string;
    initials: string;
    name: string;
    role: string;
}

export interface LeadFormData {
    name: string;
    phone: string;
    email: string;
    project: string;
    bhk?: string;
    budget?: string;
    visitDate?: string;
    pdfUrl?: string; // For brochure form
}