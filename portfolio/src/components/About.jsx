import React, { useEffect, useState } from "react";


export default function AboutPage() {
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


    const page = {
        fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
        color: "#16202b",
        padding: isMobile ? "40px 20px" : "80px 60px",
        background: `radial-gradient(circle, rgba(0,0,0,0.08) 02px, transparent 1px), linear-gradient(180deg, #fafafa 0%, #ffffff 100%)`,
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
        marginTop: 20,
    };

    const leftCol = {
        flex: "1 1 55%",
        lineHeight: 1.8,
        fontSize: 16,
        color: "#344155",
    };

    const rightCol = {
        flex: "1 1 45%",
        display: "flex",
        flexDirection: "column",
        gap: 20,
    };

    const card = {
        border: "1px solid rgba(16,24,32,0.06)",
        borderRadius: 12,
        padding: isMobile ? "18px" : "26px",
        boxShadow: "0 6px 18px rgba(16,24,32,0.03)",
        display: "flex",
        gap: 18,
        alignItems: "center",
        background: "rgba(255,255,255,0.9)",
    };

    const iconWrap = {
        minWidth: 56,
        minHeight: 56,
        borderRadius: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid #0b1220",
    };

    const cardTitle = {
        margin: 0,
        fontWeight: 700,
        fontSize: 18,
    };

    const cardText = {
        margin: 0,
        color: "#475569",
        fontSize: 14,
        lineHeight: 1.5,
    };

    const spacer = { height: 8 };

    // ---------- CONTENT ----------
    return (
        <div style={page} id="about">
            <div style={container}>
                <header style={titleWrap}>
                    <h1 style={title}>About Me</h1>
                    <div style={underline} aria-hidden />
                </header>

                <section style={mainRow}>
                    {/* Left column: bio */}
                    <div style={leftCol}>
                        <p>
                            Entry-level Software Engineer skilled in the MERN
                            stack with a strong engineering foundation. Focused
                            on building scalable, user-centric web applications
                            using React, Node.js, and modern JavaScript. Eager
                            to contribute to a collaborative development team
                            with strong problem-solving skills.
                        </p>

                        <div style={spacer} />

                        <p>
                            When I'm not coding, you'll find me exploring new technologies,
                            contributing to open-source projects, or sharing knowledge with the
                            developer community. I believe in continuous learning and staying
                            curious — that keeps my work sharp and enjoyable.
                        </p>

                        <div style={{ height: 22 }} />

                        <p style={{ color: "#0b1220", fontWeight: 700 }}>
                            Core strengths:
                        </p>
                        <ul style={{ color: "#475569", lineHeight: 1.8 }}>
                            <li>Clean, maintainable JavaScript and TypeScript</li>
                            <li>Responsive UI design and accessibility</li>
                            <li>Backend services (Node.js, Express) and APIs</li>
                        </ul>
                    </div>

                    {/* Right column: feature cards */}
                    <div style={rightCol}>
                        <div style={card}>
                            <div style={iconWrap}>
                                {/* code icon */}
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                    <path d="M9 18L3 12L9 6" stroke="#0b1220" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15 6L21 12L15 18" stroke="#0b1220" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            <div style={{ flex: 1 }}>
                                <h3 style={cardTitle}>Clean Code</h3>
                                <p style={cardText}>
                                    Writing maintainable, scalable code that stands the test of time.
                                </p>
                            </div>
                        </div>

                        <div style={card}>
                            <div style={iconWrap}>
                                {/* paint icon */}
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                    <path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9c1.62 0 3-1.38 3-3 0-1.66 1.34-3 3-3s3-1.34 3-3c0-4.97-4.03-9-9-9z" stroke="#0b1220" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="9.5" cy="10.5" r="0.8" fill="#0b1220" />
                                </svg>
                            </div>

                            <div style={{ flex: 1 }}>
                                <h3 style={cardTitle}>Design Focus</h3>
                                <p style={cardText}>
                                    Bridging the gap between development and design for seamless UX.
                                </p>
                            </div>
                        </div>

                        <div style={card}>
                            <div style={iconWrap}>
                                {/* bolt icon */}
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                    <path d="M13 2L3 14h7l-1 8L21 10h-7l-0 0z" stroke="#0b1220" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            <div style={{ flex: 1 }}>
                                <h3 style={cardTitle}>Performance</h3>
                                <p style={cardText}>
                                    Optimized frontends and fast APIs — performance matters.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
