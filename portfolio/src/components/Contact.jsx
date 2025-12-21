import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [isMobile, setIsMobile] = useState(() =>
        typeof window !== "undefined" ? window.innerWidth <= 768 : false
    );

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Loading state for form submission

    useEffect(() => {
        function onResize() {
            setIsMobile(window.innerWidth <= 768);
        }
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setFormStatus('');


        const serviceID = 'service_0eb02du';
        const templateID = 'template_f15fr9g';
        const publicKey = 'x3EhzBWLL0F_P_yGI';

        // Send email using EmailJS
        emailjs.send(serviceID, templateID, {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: 'rkiruthick55@gmail.com',
        }, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setFormStatus('Message sent successfully! I\'ll get back to you soon.');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setIsLoading(false);
                setTimeout(() => setFormStatus(''), 5000);
            })
            .catch((error) => {
                console.error('FAILED...', error);
                setFormStatus('Failed to send message. Please try again or email me directly.');
                setIsLoading(false);
                setTimeout(() => setFormStatus(''), 5000);
            });
    };

    const page = {
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
        color: "#16202b",
        padding: isMobile ? "40px 20px" : "80px 60px",
        background: `radial-gradient(circle, rgba(0,0,0,0.08) 2px, transparent 1px), linear-gradient(180deg, #fafafa 0%, #ffffff 100%)`,
        backgroundSize: "32px 32px, 100% 100%",
        minHeight: "100vh",
        boxSizing: "border-box",
    };

    const container = {
        maxWidth: 1100,
        margin: "0 auto",
    };

    const titleWrap = {
        textAlign: "center",
        marginBottom: 24,
    };

    const title = {
        fontSize: isMobile ? 32 : 48,
        fontWeight: 800,
        letterSpacing: "-1px",
        margin: 0,
    };

    const underline = {
        height: 6,
        width: 90,
        background: "#0b1220",
        margin: "14px auto 0",
        borderRadius: 2,
    };

    const mainRow = {
        display: "flex",
        gap: 40,
        alignItems: "flex-start",
        flexDirection: isMobile ? "column" : "row",
        marginTop: 40,
    };

    const leftCol = {
        flex: "1 1 40%",
        width: isMobile ? "100%" : "auto",
        display: "flex",
        flexDirection: "column",
        gap: 24,
    };

    const rightCol = {
        flex: "1 1 60%",
        width: isMobile ? "100%" : "auto",
    };

    const contactCard = {
        border: "1px solid rgba(16,24,32,0.06)",
        borderRadius: 12,
        padding: isMobile ? "18px" : "24px",
        boxShadow: "0 6px 18px rgba(16,24,32,0.03)",
        display: "flex",
        gap: 18,
        alignItems: "flex-start",
        background: "rgba(255,255,255,0.9)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
    };

    const iconWrap = {
        minWidth: 48,
        minHeight: 48,
        borderRadius: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid #0b1220",
        background: "#fff",
    };

    const contactTitle = {
        margin: "0 0 6px 0",
        fontWeight: 700,
        fontSize: 16,
        color: "#16202b",
    };

    const contactText = {
        margin: 0,
        color: "#475569",
        fontSize: 14,
        lineHeight: 1.6,
    };

    const formContainer = {
        border: "1px solid rgba(16,24,32,0.06)",
        borderRadius: 12,
        padding: isMobile ? "24px" : "32px",
        boxShadow: "0 6px 18px rgba(16,24,32,0.03)",
        background: "rgba(255,255,255,0.9)",
    };

    const formGroup = {
        marginBottom: 20,
    };

    const label = {
        display: "block",
        marginBottom: 8,
        fontWeight: 600,
        fontSize: 14,
        color: "#16202b",
    };

    const input = {
        width: "100%",
        padding: "12px 16px",
        border: "2px solid rgba(16,24,32,0.1)",
        borderRadius: 8,
        fontSize: 14,
        fontFamily: "inherit",
        transition: "border-color 0.3s ease",
        boxSizing: "border-box",
        outline: "none",
    };

    const textarea = {
        ...input,
        minHeight: 150,
        resize: "vertical",
    };

    const button = {
        width: "100%",
        padding: "14px 24px",
        background: "#0b1220",
        color: "#fff",
        border: "none",
        borderRadius: 8,
        fontSize: 16,
        fontWeight: 600,
        cursor: "pointer",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        boxShadow: "0 4px 12px rgba(11,18,32,0.2)",
    };

    const successMessage = {
        marginTop: 16,
        padding: 12,
        background: "#d4edda",
        color: "#155724",
        borderRadius: 8,
        fontSize: 14,
        textAlign: "center",
    };

    return (
        <div style={page} id="contact">
            <div style={container}>
                <header style={titleWrap}>
                    <h1 style={title}>Get In Touch</h1>
                    <div style={underline} aria-hidden />
                </header>

                <section style={mainRow}>
                    {/* Left column: Contact Details */}
                    <div style={leftCol}>
                        <div
                            style={contactCard}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 8px 24px rgba(16,24,32,0.08)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 6px 18px rgba(16,24,32,0.03)';
                            }}
                        >
                            <div style={iconWrap}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#0b1220" />
                                </svg>
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3 style={contactTitle}>Email</h3>
                                <p style={contactText}>rkiruthick55@gmail.com</p>
                            </div>
                        </div>

                        <div
                            style={contactCard}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 8px 24px rgba(16,24,32,0.08)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 6px 18px rgba(16,24,32,0.03)';
                            }}
                        >
                            <div style={iconWrap}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="#0b1220" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3 style={contactTitle}>Phone</h3>
                                <p style={contactText}>+91 9597424158</p>
                            </div>
                        </div>

                        <div
                            style={contactCard}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 8px 24px rgba(16,24,32,0.08)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 6px 18px rgba(16,24,32,0.03)';
                            }}
                        >
                            <div style={iconWrap}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="#0b1220" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="12" cy="10" r="3" stroke="#0b1220" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3 style={contactTitle}>Location</h3>
                                <p style={contactText}>Erode, Tamil Nadu, India</p>
                            </div>
                        </div>

                        <div
                            style={contactCard}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 8px 24px rgba(16,24,32,0.08)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 6px 18px rgba(16,24,32,0.03)';
                            }}
                        >
                            <div style={iconWrap}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" fill="#0b1220" />
                                    <circle cx="4" cy="4" r="2" fill="#0b1220" />
                                </svg>
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3 style={contactTitle}>LinkedIn</h3>
                                <p style={contactText}>linkedin.com/in/kiruthick</p>
                            </div>
                        </div>
                    </div>

                    {/* Right column: Contact Form */}
                    <div style={rightCol}>
                        <div style={formContainer}>
                            <h2 style={{ marginTop: 0, marginBottom: 24, fontSize: 24, fontWeight: 700 }}>Send a Message</h2>
                            <form onSubmit={handleSubmit}>
                                <div style={formGroup}>
                                    <label style={label} htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        style={input}
                                        onFocus={(e) => e.target.style.borderColor = '#0b1220'}
                                        onBlur={(e) => e.target.style.borderColor = 'rgba(16,24,32,0.1)'}
                                    />
                                </div>

                                <div style={formGroup}>
                                    <label style={label} htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        style={input}
                                        onFocus={(e) => e.target.style.borderColor = '#0b1220'}
                                        onBlur={(e) => e.target.style.borderColor = 'rgba(16,24,32,0.1)'}
                                    />
                                </div>

                                <div style={formGroup}>
                                    <label style={label} htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        style={input}
                                        onFocus={(e) => e.target.style.borderColor = '#0b1220'}
                                        onBlur={(e) => e.target.style.borderColor = 'rgba(16,24,32,0.1)'}
                                    />
                                </div>

                                <div style={formGroup}>
                                    <label style={label} htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        style={textarea}
                                        onFocus={(e) => e.target.style.borderColor = '#0b1220'}
                                        onBlur={(e) => e.target.style.borderColor = 'rgba(16,24,32,0.1)'}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    style={{
                                        ...button,
                                        opacity: isLoading ? 0.7 : 1,
                                        cursor: isLoading ? 'not-allowed' : 'pointer',
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isLoading) {
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                            e.currentTarget.style.boxShadow = '0 6px 16px rgba(11,18,32,0.3)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(11,18,32,0.2)';
                                    }}
                                >
                                    {isLoading ? 'Sending...' : 'Send Message'}
                                </button>

                                {formStatus && (
                                    <div style={successMessage}>
                                        {formStatus}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;