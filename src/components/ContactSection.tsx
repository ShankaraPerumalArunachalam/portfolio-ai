import React, { useEffect, useRef, useState } from 'react';

// A dedicated component for the contact modal popup.
// This makes the code cleaner and easier to manage.
const ContactModal = ({ isOpen, onClose }) => {
    // This effect handles closing the modal when the 'Escape' key is pressed.
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);

        // Cleanup function to remove the event listener when the component unmounts.
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    // State to manage the form submission status and errors.
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null); // State to hold error messages

    // If the modal is not open, we render nothing.
    if (!isOpen) {
        return null;
    }

    // Handles the form submission logic.
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevents the default browser form submission.
        setIsSubmitting(true);
        setError(null); // Clear previous errors

        const formData = new FormData(event.target);
        
        try {
            // IMPORTANT: Replace with your Formspree endpoint.
            const response = await fetch("https://formspree.io/f/movlozrl", {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // If submission is successful, show the thank you message.
                setIsSubmitted(true);
            } else {
                // Handle server-side errors from Formspree.
                const data = await response.json();
                // Use hasOwnProperty for broader compatibility than Object.hasOwn
                if (data && data.hasOwnProperty('errors')) {
                    setError(data["errors"].map(error => error["message"]).join(", "));
                } else {
                    setError('Oops! There was a problem submitting your form.');
                }
            }
        } catch (err) {
            // Handle network errors.
            console.error('Submission error:', err);
            setError('Oops! There was a network error. Please try again.');
        } finally {
            // Reset the submitting state regardless of outcome.
            setIsSubmitting(false);
        }
    };

    return (
        // Modal overlay - covers the entire screen.
        <div 
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 transition-opacity duration-300"
            onClick={onClose} // Close modal if overlay is clicked.
        >
            <div 
                className="bg-white  shadow-2xl w-full max-w-md p-8 transform transition-transform duration-300 scale-100"
                onClick={(e) => e.stopPropagation()} // Prevents clicks inside the modal from closing it.
            >
                {/* Modal Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl text-black">Contact Me</h2>
                    <button onClick={onClose} className="text-black hover:text-gray-800 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                
                {/* Conditional rendering: show form or thank you message */}
                {!isSubmitted ? (
                    <form className="" onSubmit={handleSubmit}>
                        {/* Email Input */}
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Your Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                className="w-full px-4 py-3 bg-gray-50 border border-black  focus:ring-blue-500 focus:border-blue-500 transition-all" 
                                placeholder="you@example.com" 
                                required
                            />
                        </div>
                        {/* Message Textarea */}
                        <div className="mb-6">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-black">Message</label>
                            <textarea 
                                name="message" 
                                id="message" 
                               
                                className="w-full px-4 py-3 bg-gray-50 border border-black  focus:ring-blue-500 focus:border-blue-500 transition-all" 
                                placeholder="Your message..." 
                                required
                            ></textarea>
                        </div>

                        {/* Error Message Display */}
                        {error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3  relative mb-4" role="alert">
                                <span className="block sm:inline">{error}</span>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full  text-black bg-white border border-black hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-3 text-center transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                ) : (
                    <div className="text-center py-10">
                        <h3 className="text-3xl font-normal text-black mb-2">Thank You!</h3>
                        <p className="text-black">Your message has been sent successfully.</p>
                    </div>
                )}
            </div>
        </div>
    );
};


// Your original ContactSection component, now with modal integration.
const ContactSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Optional: stop observing after it's visible
                }
            },
            { threshold: 0.2 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <>
            <section id="contact" ref={sectionRef} className="py-24 pb-6 bg-gray-50 text-gray-800">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className={`text-3xl md:text-4xl font-light tracking-tight mb-4 ${
                            isVisible ? 'animate-slide-up' : 'opacity-0'
                        }`}>
                            CONTACT
                        </h2>
                        <div className={`w-16 h-px bg-black mx-auto ${
                            isVisible ? 'animate-scale-in animate-delay-200' : 'opacity-0 scale-x-0'
                        }`} />
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white p-8 md:p-12 shadow-lg  text-center">
                            <div className={`space-y-8 ${
                                isVisible ? 'animate-fade-in animate-delay-300' : 'opacity-0'
                            }`}>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Let's work together to create something amazing. 
                                    Feel free to reach out for opportunities or collaborations.
                                </p>
                                
                                <div className="space-y-6">
                                    {/* Email Info */}
                                    <div className={`${
                                        isVisible ? 'animate-slide-up animate-delay-400' : 'opacity-0'
                                    }`}>
                                        <h3 className="text-sm font-semibold tracking-wide text-gray-500 mb-2">
                                            EMAIL
                                        </h3>
                                        <a 
                                            href="mailto:idofshankar@gmail.com"
                                            className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200 tracking-wide"
                                        >
                                            idofshankar@gmail.com
                                        </a>
                                    </div>
                                    
                                    {/* LinkedIn Info */}
                                    <div className={`${
                                        isVisible ? 'animate-slide-up animate-delay-500' : 'opacity-0'
                                    }`}>
                                        <h3 className="text-sm font-semibold tracking-wide text-gray-500 mb-2">
                                            LINKEDIN
                                        </h3>
                                        <a 
                                            href="https://linkedin.com/in/shankara-perumal-arunachalam"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200 tracking-wide"
                                        >
                                            linkedin.com/in/shankara-perumal-arunachalam
                                        </a>
                                    </div>
                                </div>
                                
                                {/* Button to open the modal */}
                                <div className={`pt-8 ${
                                    isVisible ? 'animate-fade-in animate-delay-600' : 'opacity-0'
                                }`}>
                                    <button
                                        onClick={() => setIsModalOpen(true)} // This now opens the modal
                                        className="group inline-block px-8 py-4 bg-transparent border border-black text-black hover:bg-black hover:text-white transition-all duration-300 tracking-wide font-medium relative overflow-hidden "
                                    >
                                        <span className="relative z-10">SEND MESSAGE</span>
                                        <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Footer */}
                <div className="mt-20 pt-8 border-t border-gray-200">
                    <div className="text-center">
                        <p className="text-sm text-gray-500">
                            © 2025 Shankara Perumal Arunachalam. All rights reserved.
                        </p>
                    </div>
                </div>
            </section>

            {/* Render the modal component */}
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

// Assuming this is part of a larger React app, you would export it.
// For a standalone example, you might render it directly.
export default ContactSection;
