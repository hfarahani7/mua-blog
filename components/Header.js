import Link from "next/link";

export default function Header() {
    const navLinks = [
        {
            label: "Inquiries",
            href: "/inquiries",
        },
        {
            label: "About",
            href: "/about",
            subLinks: [
                { label: "FAQ", href: "/inquiries#faq" },
                { label: "About Me", href: "/inquiries#me" }
            ]
        },
        {
            label: "Reviews",
            href: "/reviews"
        },
        { //move to under about?
            label: "Process",
            href: "/process",
            subLinks: [
                { label: "travel", href: "/process#travel" },
                { label: "rates", href: "/process#rates" },
                { label: "cancellation", href: "/process#cancellation" },
                { label: "deposits", href: "/process#deposits" },
            ]
        }
    ];

    const navStyle = {
        display: "flex",
        justifyContent: "space-evenly", 
        alignItems: "center",
    };

    const dropdownContainerStyle = {
        position: "absolute",
        top: "100%",
        left: 0,
        display: "none",
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        padding: "0.5rem",
        zIndex: 999,
    };

    const dropdownItemStyle = {
    display: "block",
    textDecoration: "none",
    color: "#333",
    margin: "0.25rem 0",
    };

    const linkStyle = {
        textDecoration: 'none',
        color: '#333',
        transition: 'color 0.2s ease',
        position: "relative"
    };
    
    const handleMouseEnter = (e) => {
        e.currentTarget.style.color = '#0070f3';
        const dropdown = e.currentTarget.querySelector(".dropdown");
        if (dropdown) dropdown.style.display = "block";
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.color = '#333';
        const dropdown = e.currentTarget.querySelector(".dropdown");
        if (dropdown) dropdown.style.display = "none";
    };

    return(
        <header
            style={{
                display: 'flex',
                alignItems: 'center',
                height: '60px',
                padding: '0 20px',
                backgroundColor: '#f0f0f0'
            }}>

            <div style={{ width: "30%" }}>
                <img src="/assets/logo.png" alt="Logo" style={{ height: "40px" }} href="/index" />
            </div>

            <nav style={{ width: "70%" }}>
                <ul style={navStyle}>
                    {navLinks.map((link) => (
                        <li
                            key={link.label}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            style={{ 
                                position: "relative", 
                            }}
                        >
                            <Link href={link.href} style={linkStyle}>
                                {link.label}
                            </Link>
                        
                            {link.subLinks && (
                                <div className="dropdown" style={dropdownContainerStyle}>
                                    {link.subLinks.map((subLink) => (
                                        <Link
                                        key={subLink.label}
                                        href={subLink.href}
                                        style={dropdownItemStyle}
                                        >
                                        {subLink.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}