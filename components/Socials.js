import Link from 'next/link';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

export default function Socials() {
    const sidebarStyle = {
        //this should be on the bottom right of the page         

    };

    const iconStyle = {
        //I want it to be visible but somewhat transparent and change  
        color: 'rgba(0, 0, 0, 0.4)', // semi-transparent
        fontSize: '32px',
        transition: 'color 0.3s ease',
        cursor: 'pointer',
    };

    const socialLinksStyle = {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        zIndex: 1000, // stays on top
    };

    const handleMouseEnter = (e) => {
        e.currentTarget.style.color = '#0070f3';
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.color = 'rgba(0, 0, 0, 0.4)';
    };

    return (
        <div style={socialLinksStyle}>
            <Link
                href="https://www.instagram.com/mua__jeanice/"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                target="_blank"
                rel="noopener noreferrer"
            >
                <InstagramIcon
                    style={iconStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
            </Link>

            <Link
                href="mailto:mua.jeanice@gmail.com"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <EmailIcon
                    style={iconStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
            </Link>
        </div>
    );
}