import React, { useState } from 'react';
import { FORM_API_URL } from '../constants';

interface LeadFormProps {
    id: string;
    isModal?: boolean;
    projectName?: string;
    pdfUrl?: string;
    onSuccess?: () => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ id, isModal, projectName, pdfUrl, onSuccess }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        project: projectName || '',
        bhk: '2 BHK',
        budget: '1.5 Cr+',
        visitDate: '',
        otp: ''
    });

    const [otpSent, setOtpSent] = useState(false);
    const [generatedOtp, setGeneratedOtp] = useState<string | null>(null);
    const [isSendingOtp, setIsSendingOtp] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [timer, setTimer] = useState(30);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSendOtp = () => {
        if (!/^[6-9]\d{9}$/.test(formData.phone)) {
            alert("Please enter a valid 10-digit Indian mobile number (starts with 6-9).");
            return;
        }

        setIsSendingOtp(true);

        setTimeout(() => {
            const otp = Math.floor(1000 + Math.random() * 9000).toString();
            setGeneratedOtp(otp);
            setIsSendingOtp(false);
            setOtpSent(true);
            
            alert(`REAL OTP VERIFICATION\n\nYour OTP for ${formData.phone} is: ${otp}\n\n(In a real app, this would come via SMS)`);

            // Start simple timer
            let timeLeft = 30;
            setTimer(30);
            const interval = setInterval(() => {
                timeLeft -= 1;
                setTimer(timeLeft);
                if (timeLeft <= 0) clearInterval(interval);
            }, 1000);
        }, 2000);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.otp !== generatedOtp) {
            alert("Invalid OTP. Please try again.");
            return;
        }

        setIsSubmitting(true);

        const payload = new FormData();
        Object.entries(formData).forEach(([key, value]) => payload.append(key, value));
        if (pdfUrl) payload.append('pdfUrl', pdfUrl);

        try {
            await fetch(FORM_API_URL, {
                method: "POST",
                body: payload,
                headers: { 'Accept': 'application/json' }
            });

            if (isModal && pdfUrl) {
                window.open(pdfUrl, '_blank');
                alert("Verification Successful! Brochure is opening...");
            } else {
                alert("Enquiry Verified & Sent Successfully!");
            }

            if (onSuccess) onSuccess();
            // Reset form
            setFormData({ 
                name: '', 
                phone: '', 
                email: '', 
                otp: '',
                project: projectName || '',
                bhk: '2 BHK',
                budget: '1.5 Cr+',
                visitDate: ''
            });
            setOtpSent(false);
            setGeneratedOtp(null);

        } catch (err) {
            alert("Network error. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const today = new Date().toISOString().split('T')[0];

    return (
        <form onSubmit={handleSubmit} className="space-y-3">
            {!isModal && (
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name" 
                        required 
                        className="w-full bg-dark-800/80 border border-gray-600 rounded px-3 py-3 text-white text-sm focus:outline-none focus:border-gold-400" 
                    />
                    <div className="relative">
                        <input 
                            type="tel" 
                            name="phone" 
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone (10 Digits)" 
                            required 
                            pattern="[6-9][0-9]{9}" 
                            className="w-full bg-dark-800/80 border border-gray-600 rounded px-3 py-3 text-white text-sm focus:outline-none focus:border-gold-400" 
                        />
                         <button 
                            type="button" 
                            onClick={handleSendOtp}
                            disabled={isSendingOtp || otpSent}
                            className={`absolute right-2 top-2 bg-gold-500 text-dark-900 text-[10px] px-2 py-1 rounded font-bold ${isSendingOtp || otpSent ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gold-400'}`}
                        >
                            {isSendingOtp ? '...' : otpSent ? 'Sent' : 'Get OTP'}
                        </button>
                    </div>
                 </div>
            )}

            {isModal && (
                <>
                    <input type="hidden" name="project" value={formData.project} />
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name" 
                        required 
                        className="w-full bg-dark-800 border border-gray-600 rounded px-4 py-2 text-white" 
                    />
                    <div className="relative">
                        <input 
                            type="tel" 
                            name="phone" 
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 Phone (10 Digits)" 
                            required 
                            pattern="[6-9][0-9]{9}" 
                            className="w-full bg-dark-800 border border-gray-600 rounded px-4 py-2 text-white" 
                        />
                         <button 
                            type="button" 
                            onClick={handleSendOtp}
                            disabled={isSendingOtp || otpSent}
                            className={`absolute right-2 top-1.5 bg-gold-500 text-dark-900 text-[10px] px-2 py-1 rounded font-bold ${isSendingOtp || otpSent ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gold-400'}`}
                        >
                            {isSendingOtp ? '...' : otpSent ? 'Sent' : 'Get OTP'}
                        </button>
                    </div>
                </>
            )}

            {otpSent && (
                <div className="transition-all duration-300">
                    <input 
                        type="text" 
                        name="otp" 
                        value={formData.otp}
                        onChange={handleChange}
                        placeholder="Enter 4-digit OTP" 
                        className={`w-full ${isModal ? 'bg-dark-800' : 'bg-dark-800/80'} border border-gold-500 rounded px-3 py-3 text-white text-sm focus:outline-none text-center tracking-widest`} 
                        style={{ borderColor: formData.otp.length === 4 ? (formData.otp === generatedOtp ? '#22c55e' : '#ef4444') : '#D4AF37' }}
                    />
                    <p className="text-gray-400 text-[10px] mt-1 text-right">
                        {timer > 0 ? `Resend in ${timer}s` : <span className="cursor-pointer text-gold-400" onClick={handleSendOtp}>Resend</span>}
                    </p>
                </div>
            )}

            <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address" 
                required 
                className={`w-full ${isModal ? 'bg-dark-800' : 'bg-dark-800/80'} border border-gray-600 rounded px-3 py-3 text-white text-sm focus:outline-none focus:border-gold-400`} 
            />

            {!isModal && (
                <>
                    <select 
                        name="project" 
                        value={formData.project}
                        onChange={handleChange}
                        className="w-full bg-dark-800/80 border border-gray-600 rounded px-3 py-3 text-gray-300 text-sm focus:outline-none focus:border-gold-400"
                    >
                        <option value="" disabled>Select Project</option>
                        <option value="Sobha Townpark">Sobha Townpark</option>
                        <option value="Sobha Neopolis">Sobha Neopolis</option>
                        <option value="Sobha Magnus">Sobha Magnus</option>
                        <option value="Sobha Ayana">Sobha Ayana</option>
                        <option value="Adarsh Tropica">Adarsh Tropica</option>
                    </select>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <select 
                            name="bhk" 
                            value={formData.bhk}
                            onChange={handleChange}
                            className="w-full bg-dark-800/80 border border-gray-600 rounded px-3 py-3 text-gray-300 text-sm focus:outline-none focus:border-gold-400"
                        >
                            <option value="2 BHK">2 BHK</option>
                            <option value="3 BHK">3 BHK</option>
                            <option value="4 BHK">4 BHK</option>
                        </select>
                        <select 
                            name="budget" 
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full bg-dark-800/80 border border-gray-600 rounded px-3 py-3 text-gray-300 text-sm focus:outline-none focus:border-gold-400"
                        >
                            <option value="1.5 Cr+">1.5 Cr+</option>
                            <option value="2 Cr+">2 Cr+</option>
                            <option value="3 Cr+">3 Cr+</option>
                        </select>
                    </div>

                    <div>
                        <input 
                            type="date" 
                            name="visitDate" 
                            value={formData.visitDate}
                            onChange={handleChange}
                            min={today}
                            className="w-full bg-dark-800/80 border border-gray-600 rounded px-3 py-3 text-gray-300 text-sm focus:outline-none focus:border-gold-400 uppercase"
                        />
                    </div>
                </>
            )}

            <button 
                type="submit" 
                disabled={!otpSent || formData.otp !== generatedOtp || isSubmitting}
                className={`w-full btn-primary text-dark-900 font-bold py-3 rounded-lg mt-2 uppercase tracking-wide text-sm shadow-lg hover:shadow-xl transform transition flex justify-center items-center gap-2 ${(!otpSent || formData.otp !== generatedOtp || isSubmitting) ? 'btn-disabled opacity-60' : 'hover:-translate-y-1'}`}
            >
                {isSubmitting ? (
                    <>
                        <i className="fas fa-spinner fa-spin"></i> Verifying...
                    </>
                ) : (
                    <>
                        {isModal ? <i className="fas fa-download text-lg"></i> : <i className="fas fa-check-circle text-lg"></i>} 
                        {isModal ? 'Download PDF' : 'Submit Enquiry'}
                    </>
                )}
            </button>
        </form>
    );
};

export default LeadForm;