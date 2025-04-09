import Link from 'next/link';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

export default function Socials() {
    const sidebarStyle = {
        //this should be on the bottom right of the page         

    };

    const iconStyle = {
        //I want it to be visible but somewhat transparent and change  
    };

    const handleMouseEnter = (e) => {
        e.currentTarget.style.color = '#0070f3';
    };
    
    const handleMouseLeave = (e) => {
        e.currentTarget.style.color = '#333';
    };

    return(
         <div style={socialLinksStyle}>
            <Link
                href="https://www.instagram.com/mua__jeanice/"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                target="_blank"
                rel="noopener noreferrer"
            >
                <InstagramIcon />
            </Link>
            
            <Link
                href="mailto:mua.jeanice@gmail.com"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <EmailIcon />
            </Link>
        </div>
    );
}