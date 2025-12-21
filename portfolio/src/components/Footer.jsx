import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [isMobile, setIsMobile] = useState(() =>
        typeof window !== "undefined" ? window.innerWidth <= 768 : false
    );

    useEffect(() => {
        function onResize() {
            setIsMobile(window.innerWidth <= 768);
        }
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const footer = {
        background: "#0b1220",
        color: "#ffffff",
        padding: isMobile ? "40px 20px 20px" : "60px 80px 30px",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    };

    const container = {
        maxWidth: 1200,
        margin: "0 auto",
    };

    const topSection = {
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        gap: isMobile ? 40 : 60,
        paddingBottom: 40,
        borderBottom: "1px solid rgba(255,255,255,0.1)",
    };

    const column = {
        flex: "1",
    };

    const columnTitle = {
        fontSize: 18,
        fontWeight: 700,
        marginBottom: 20,
        color: "#ffffff",
    };

    const columnText = {
        fontSize: 14,
        lineHeight: 1.8,
        color: "rgba(255,255,255,0.7)",
        margin: "0 0 16px 0",
    };

    const linkList = {
        listStyle: "none",
        padding: 0,
        margin: 0,
    };

    const linkItem = {
        marginBottom: 12,
    };

    const link = {
        color: "rgba(255,255,255,0.7)",
        textDecoration: "none",
        fontSize: 14,
        transition: "color 0.3s ease",
    };

    const socialContainer = {
        display: "flex",
        gap: 16,
        marginTop: 20,
    };

    const socialBtn = {
        width: 40,
        height: 40,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
        cursor: "pointer",
        border: "1px solid rgba(255,255,255,0.2)",
    };

    const bottomSection = {
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 30,
        gap: 16,
    };

    const copyright = {
        fontSize: 14,
        color: "rgba(255,255,255,0.5)",
        margin: 0,
    };

    const bottomLinks = {
        display: "flex",
        gap: 24,
        flexWrap: "wrap",
        justifyContent: isMobile ? "center" : "flex-end",
    };

    const bottomLink = {
        color: "rgba(255,255,255,0.5)",
        textDecoration: "none",
        fontSize: 14,
        transition: "color 0.3s ease",
    };

    return (
        <footer style={footer}>
            <div style={container}>
                <div style={topSection}>
                    {/* About Column */}
                    <div style={column}>
                        <h3 style={columnTitle}>Kiruthick</h3>
                        <p style={columnText}>
                            FullStack Developer passionate about creating beautiful, functional web experiences.
                            Specializing in MERN stack and modern web technologies.
                        </p>
                        <div style={socialContainer}>
                            <a
                                href="https://github.com/Kiruthick-07"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={socialBtn}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                                    e.currentTarget.style.transform = "translateY(-3px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}
                                aria-label="GitHub"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.29 3.43 9.77 8.2 11.36.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.74.08-.74 1.21.09 1.85 1.25 1.85 1.25 1.08 1.86 2.82 1.33 3.51 1.02.11-.8.42-1.33.76-1.64-2.66-.3-5.46-1.33-5.46-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013.01-.41c1.02.01 2.05.14 3.01.41 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.61-5.47 5.9.43.37.81 1.11.81 2.24 0 1.62-.015 2.92-.015 3.32 0 .32.21.69.82.57C20.57 22.27 24 17.79 24 12.5 24 5.87 18.63.5 12 .5z" />
                                </svg>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/kiruthick-r-%E2%9A%A1-803291293/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={socialBtn}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                                    e.currentTarget.style.transform = "translateY(-3px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}
                                aria-label="LinkedIn"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.5c0 1.11.88 2 1.98 2h.02C6.08 7.5 7 6.62 7 5.5 7 4.38 6.12 3.5 4.98 3.5zM3.5 8.98h3v11.52h-3V8.98zM9.5 8.98h2.86v1.57h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2.01 3.6 4.63v6.88h-3V15.7c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85v5.9h-3V8.98z" />
                                </svg>
                            </a>

                            <a
                                href="mailto:rkiruthick55@gmail.com"
                                style={socialBtn}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                                    e.currentTarget.style.transform = "translateY(-3px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}
                                aria-label="Email"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </a>

                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div style={column}>
                        <h3 style={columnTitle}>Quick Links</h3>
                        <ul style={linkList}>
                            <li style={linkItem}>
                                <a
                                    href="#home"
                                    style={link}
                                    onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"}
                                    onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}
                                >
                                    Home
                                </a>
                            </li>
                            <li style={linkItem}>
                                <a
                                    href="#about"
                                    style={link}
                                    onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"}
                                    onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}
                                >
                                    About
                                </a>
                            </li>
                            <li style={linkItem}>
                                <a
                                    href="#skills"
                                    style={link}
                                    onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"}
                                    onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}
                                >
                                    Skills
                                </a>
                            </li>
                            <li style={linkItem}>
                                <a
                                    href="#projects"
                                    style={link}
                                    onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"}
                                    onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}
                                >
                                    Projects
                                </a>
                            </li>
                            <li style={linkItem}>
                                <a
                                    href="#contact"
                                    style={link}
                                    onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"}
                                    onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info Column */}
                    <div style={column}>
                        <h3 style={columnTitle}>Get In Touch</h3>
                        <p style={columnText}>
                            <strong style={{ color: "#fff" }}>Email:</strong><br />
                            rkiruthick55@gmail.com
                        </p>
                        <p style={columnText}>
                            <strong style={{ color: "#fff" }}>Phone:</strong><br />
                            +91 9597424158
                        </p>
                        <p style={columnText}>
                            <strong style={{ color: "#fff" }}>Location:</strong><br />
                            Erode, Tamil Nadu, India
                        </p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div style={bottomSection}>
                    <p style={copyright}>
                        © {new Date().getFullYear()} Kiruthick. All rights reserved.
                    </p>
                        
                </div>
            </div>
        </footer>
    );
};

export default Footer;