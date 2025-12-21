import React, { useEffect, useState } from "react";

export default function PortfolioLanding() {
    const [width, setWidth] = useState(window.innerWidth);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth);
        const onScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("resize", onResize);
        window.addEventListener("scroll", onScroll);
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap";
        document.head.appendChild(link);
        return () => {
            window.removeEventListener("resize", onResize);
            window.removeEventListener("scroll", onScroll);
            document.head.removeChild(link);
        };
    }, []);


    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = ["FullStack Developer.", "IoT Enthusiast.", "Embedded-C Programmer.", "CAD Designer."];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1000); // Pause at end
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, roles]);

    const isMobile = width <= 768;

    // colors used in the design
    const colors = {
        bg: "#f6f6f6",
        textDark: "#0f1724",
        muted: "#6e7a85",
        circleDark: "#050505",
    };

    // base container
    const container = {
        minHeight: "100vh",
        width: "100%",
        background: `linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.07) 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: 'Montserrat, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
        color: colors.textDark,
        padding: isMobile ? "80px 16px 20px" : "120px 80px 36px",
        boxSizing: "border-box",
    };

    const header = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: isMobile ? "16px 20px" : "20px 80px",
        marginBottom: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        background: isScrolled
            ? "rgba(246, 246, 246, 0.7)"
            : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(12px)" : "none",
        boxShadow: isScrolled
            ? "0 2px 20px rgba(0, 0, 0, 0.08)"
            : "none",
    };

    const brand = {
        fontSize: isMobile ? "20px" : "28px",
        fontWeight: 800,
    };

    const nav = {
        display: isMobile ? "none" : "flex",
        gap: "28px",
        alignItems: "center",
        color: colors.muted,
        fontSize: "16px",
    };

    const heroWrap = {
        width: "100%",
        maxWidth: 980,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        paddingTop: isMobile ? "6px" : "0px",
    };

    const badge = {
        width: isMobile ? 92 : 140,
        height: isMobile ? 92 : 140,
        borderRadius: "50%",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: isMobile ? 28 : 40,
        fontWeight: 800,
        boxShadow: "0 12px 30px rgba(10,12,15,0.12)",
        border: "4px solid #000000",
        marginBottom: isMobile ? "10px" : "30px",
        overflow: "hidden",
    };

    const badgeImage = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
    };

    const nameStyle = {
        fontSize: isMobile ? "44px" : "70px",
        margin: 0,
        lineHeight: 1,
        fontWeight: 700,
        color: colors.textDark,
        letterSpacing: "-1px",
        color: "black",
    };

    const subtitle = {
        marginTop: isMobile ? "8px" : "6px",
        fontSize: isMobile ? "18px" : "26px",
        color: colors.muted,
        fontWeight: 500,
    };

    const paragraph = {
        marginTop: isMobile ? "14px" : "28px",
        maxWidth: 720,
        fontSize: isMobile ? "15px" : "20px",
        color: colors.muted,
        lineHeight: 1.8,
        padding: "0 8px",
    };

    const socials = {
        display: "flex",
        gap: "22px",
        marginTop: isMobile ? "18px" : "40px",
        alignItems: "center",
    };

    const socialBtn = {
        width: isMobile ? 48 : 64,
        height: isMobile ? 48 : 64,
        borderRadius: "50%",
        background: colors.circleDark,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 6px 16px rgba(10,12,15,0.08)",
    };

    const socialIcon = {
        width: isMobile ? 18 : 22,
        height: isMobile ? 18 : 22,
        fill: "white",
    };

    return (
        <div style={container}>
            <header style={header}>
                <div style={brand}>Portfolio</div>
                <nav style={nav}>
                    <div className="nav-link">Home</div>
                    <div className="nav-link">About</div>
                    <div className="nav-link">Skills</div>
                    <div className="nav-link">Projects</div>
                    <div className="nav-link">Certificates</div>
                    <div className="nav-link">Contact</div>
                </nav>
            </header>

            <main style={heroWrap}>
                <div style={badge}>
                    <img src="./src/assets/myphotov2.jpg" alt="Profile photo" style={badgeImage} />
                </div>
                <h1 style={nameStyle}>Hello there, I'm Kiruthick.</h1>
                <div style={subtitle}>
                    I'm an <span style={{ color: colors.textDark, fontWeight: 700 }}>{text}</span>
                    <span className="cursor">|</span>
                </div>

                <p style={paragraph}>
                    Crafting digital experiences with clean code and thoughtful design. Passionate about
                    smart systems & automations that make a difference.
                </p>

                <div style={{ marginTop: "10px", marginBottom: "10px", display: "flex", justifyContent: "center" }}>
                    <a href="#contact" className="btn btn-primary">Contact Me</a>
                    <a href="#" className="btn btn-secondary">Download CV</a>
                </div>

                <div style={socials}>
                    <a style={socialBtn} className="social-btn" href="https://github.com/Kiruthick-07" aria-label="GitHub">
                        <svg viewBox="0 0 24 24" style={socialIcon} xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.29 3.43 9.77 8.2 11.36.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.74.08-.74 1.21.09 1.85 1.25 1.85 1.25 1.08 1.86 2.82 1.33 3.51 1.02.11-.8.42-1.33.76-1.64-2.66-.3-5.46-1.33-5.46-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013.01-.41c1.02.01 2.05.14 3.01.41 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.61-5.47 5.9.43.37.81 1.11.81 2.24 0 1.62-.015 2.92-.015 3.32 0 .32.21.69.82.57C20.57 22.27 24 17.79 24 12.5 24 5.87 18.63.5 12 .5z" />
                        </svg>
                    </a>

                    <a style={socialBtn} className="social-btn" href="#" aria-label="LinkedIn">
                        <svg viewBox="0 0 24 24" style={socialIcon} xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.5c0 1.11.88 2 1.98 2h.02C6.08 7.5 7 6.62 7 5.5 7 4.38 6.12 3.5 4.98 3.5zM3.5 8.98h3v11.52h-3V8.98zM9.5 8.98h2.86v1.57h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2.01 3.6 4.63v6.88h-3V15.7c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85v5.9h-3V8.98z" />
                        </svg>
                    </a>

                    <a style={socialBtn} className="social-btn" href="#" aria-label="Email">
                        <svg viewBox="0 0 24 24" style={socialIcon} xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                    </a>
                </div>
            </main>

            {/* Mobile bottom nav */}
            {isMobile && (
                <div
                    style={{
                        width: "100%",
                        position: "fixed",
                        bottom: 14,
                        left: 0,
                        display: "flex",
                        justifyContent: "center",
                        pointerEvents: "none",
                    }}
                >
                    <div
                        style={{
                            background: "rgba(255,255,255,0.6)",
                            padding: "8px 18px",
                            borderRadius: 40,
                            boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                            pointerEvents: "auto",
                        }}
                    >
                        <div style={{ display: "flex", gap: 14, color: colors.muted }}>
                            <div className="nav-link">Home</div>
                            <div className="nav-link">About</div>
                            <div className="nav-link">Skills</div>
                            <div className="nav-link">Projects</div>
                            <div className="nav-link">Contact</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
