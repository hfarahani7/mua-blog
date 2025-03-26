import Link from "next/link";
import AppBar from '@mui/material/AppBar';

export default function Header() {
    const navLinks = [
        {
            label: "About",
            href: "/about",
            // subLinks: [
            //     { label: "FAQ", href: "/inquiries#faq" },
            //     { label: "About Me", href: "/inquiries#me" }
            // ]
        },
        {
            label: "Portfolio",
            href: "/portfolio",
            subLinks: [
                { label: "Bridal", href: "/inquiries#faq" },
                { label: "Editorial", href: "/inquiries#editorial" }
            ]
        },
        {
            label: "Services",
            href: "/services",
            subLinks: [
                { label: "Travel", href: "/process#travel" },
                { label: "Rates", href: "/process#rates" },
                { label: "Cancellation", href: "/process#cancellation" },
                { label: "Deposits", href: "/process#deposits" },
            ]
        },
        {
            label: "Inquiries",
            href: "/inquiries",
        }, 
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
        <AppBar
            style={{
                display: 'flex',
                alignItems: 'center',
                height: '60px',
                padding: '0 20px',
                backgroundColor: '#F7E7CE'
            }}>

            <div style={{ width: "30%" }}>
                <Link href="/">
                    <img src="/assets/logo.png" alt="Logo" style={{ height: "40px" }} />
                </Link>
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
        </AppBar>
    )
}